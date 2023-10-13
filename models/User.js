const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");
const { UserMongo } = require("./UserMongo");
require('dotenv').config()
class User {
    static async authenticate(username, rawPassword) {
        const user = await this.get({ username });
        if (!user) return false;
        const hashedPassword = this.make_password(rawPassword);
        return user.password === hashedPassword;
    }
    static make_password(password) {
        return CryptoJS.PBKDF2(password, process.env.SECRET, { keySize: 256 / 32, iterations: 1000 }).toString();
    }
    static async create({ username, email, password }) {
        return await UserMongo.create({ username: username, email: email, password: this.make_password(password) });
    }
    static async get_without_password(fieldValuePair, options) {
        return await UserMongo.findOne(fieldValuePair, options).populate('permissions').select("-password");
    }
    static async get(fieldValuePair, options) {
        return await UserMongo.findOne(fieldValuePair, options).populate('permissions');
    }
    static generateToken(user) {
        const expireAt = Math.floor(Date.now() / 1000) + (60 * 5); 
        const refreshExpireAt = Math.floor(new Date().setDate(new Date().getDate() + 7)); 
        const accesToken = jwt.sign({
            username: user.username,
            exp: expireAt,
            iat: Math.floor(Date.now())
        }, process.env.SECRET);
        const refreshToken = jwt.sign({
            username: user.username,
            iat: Math.floor(Date.now()),
            exp: refreshExpireAt,

        }, process.env.SECRET); 
        return { accesToken, refreshToken, expireAt };
    }
    static async parseToken(token, options) {
        const decoded = jwt.verify(token, process.env.SECRET);
        const { username } = decoded;
        return await this.get_without_password({username}, options);; 
    }
    static async parseTokenSafe(token, options) {
        try {
            return await this.parseToken(token, options);
        } catch (e) {
            console.log("TOKEN EXPIRE");
            return null;

        }
    }

}

module.exports = User;