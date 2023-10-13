# Welcome To Week 16


## 👋 Keep In Touch With Me 
**fadliaryadinata011@gmail.com**

## Authors

👤 **Fadli Aryadinata**

- GitHub: [@fadli131](https://github.com/fadli131)

### Language used 
- Javascript (NodeJS & ExpressJS)

### Tools
- VS Code
- Git and Github    
- Postman
- MongoDB (NoSQL Database)

## FLOWCHART
<img width="550" alt="Screenshot 2023-07-28 205741" src="https://github.com/RevoU-FSSE-2/week-11-fadli131/assets/109584701/8b106a20-8c61-4c1a-b082-12e0bc135f27">

## Getting Started 

### Regist Account

**POST**/auth/register
```
{
  "username": "maker1",
  "role": "maker",
  "password": "Password123"
}
```
### Login Account

**POST**/auth/login
```
{
  "username": "fadli12345678",
  "password": "Fadli12345678"
}
```
### Create a new order

**POST**/order
```
{
  "menuItemId": "kopi susu",
  "quantity": 1
}
```

### Order Status

**GET**/order
```
{
    input Bearer Token
}
```

### Order Status

**GET**/order
```
{
    input Bearer Token
}
```

### Update Order Status by ID

**PATCH**/order/{id}
```
{
  "status": "approved"
}
```

### Delete Order by ID

**DEL**/order/{id}
```
{
    input order ID
}
```

### Create Transfer

**POST**/transfer
```
{
  "menuItemId": "kopi coklat",
  "currency": "Rp",
  "amount": 1000,
  "username": "fadli123"
}
```

### Transfer Status

**GET**/transfer
```
{
    Get a list of transfer status
}
```

### Update Status Transfer by ID

**PATCH**/transfer/{id}
```
{
  "status": "rejected"
}
```

### Delete Transfer Request

**DEL**/transfer/{id}
```
{
  input transfer ID
}
```

### Update Status Transfer history

**GET**/transfer/histroy