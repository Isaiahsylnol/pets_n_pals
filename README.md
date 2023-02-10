# pets_n_pals
This is a self educational project utilizing popular dependencies such as: 

• Redux-ToolKit
• Express
• Formik
• React-Router-Dom
• axios

and more 
 
## Getting Started

```bash
cd client 
npm install
cd server 
npm install
```

First, run the development server:

```bash
npm run dev
# or
yarn dev
```
## Web API

| Methods        | Urls           | Actions  |
| -------------- |----------------| -------------
| User
| GET       | /api/user/          | Find All Users |
| GET       | /api/user/:id       | Find Single User By ID |
| POST      | /api/users/signup   | Register User |
| POST      | /api/users/signin   | Sign in User |
| PUT       | /api/user/:id       | Edit User By ID |
| DELETE    | /api/user/:id       | Delete User By ID |
| Pet
| POST      | /api/pets/add-pet   | Create Pet |
| POST      | /api/pets/:id       | Find single Pet |
| PUT       | /api/pets/:id       | Edit Pet |
| DELETE    | /api/pets/:id       | Delete Pet |
| Cart        
| GET       | /api/cart/          | Find All Carts |
| GET       | /api/cart/:id          | Find A Single User Cart By ID |
| POST      | /api/cart/create-cart | Create shopping cart |

## Application Screenshots

### Landing Page
- Display latest news articles
- Feature latest and trending products 

[![pets n pals](https://github.com/Isaiahsylnol/pets_n_pals/blob/main/screenshots/landing-page.png)](#features)

-----------

### Shop Page
- Display all products 

[![pets n pals](https://github.com/Isaiahsylnol/pets_n_pals/blob/main/screenshots/shop-page.png)](#features)

-----------

### Cart Page
- Display cart's products
- Product quantities 
- clear item button
- Stripe integrated checkout
- Add more items button
- Detailed cost breakdown 

[![pets n pals](https://github.com/Isaiahsylnol/pets_n_pals/blob/main/screenshots/cart-page.png)](#features)

-----------

### Subscription Page
- Display subscription offers 
- Display link to subscription terms & conditions 

[![pets n pals](https://github.com/Isaiahsylnol/pets_n_pals/blob/main/screenshots/subscription-page.png)](#features)

-----------

### Create Pet
- Pet profile form modal  

[![pets n pals](https://github.com/Isaiahsylnol/pets_n_pals/blob/main/screenshots/create-pet.png)](#features)

-----------

### Edit Pet
- Pet profile form modal  

[![pets n pals](https://github.com/Isaiahsylnol/pets_n_pals/blob/main/screenshots/edit-pet.png)](#features)

-----------

### Login/Register Page
- Display two buttons for login/register modal 

[![pets n pals](https://github.com/Isaiahsylnol/pets_n_pals/blob/main/screenshots/login-register-page.png)](#features)

-----------

### Profile Page
- Display user's pets
- Display user's information
- Create pet Button
- Various user action buttons

[![pets n pals](https://github.com/Isaiahsylnol/pets_n_pals/blob/main/screenshots/profile-page.png)](#features)
