# 🛒 Nearby Bazaar

Nearby Bazaar is a full-stack web application that connects local sellers with nearby users. It enables users to explore neighborhood sellers, place orders easily, and allows sellers to manage their offerings, orders, and visibility. The goal is to promote local commerce using simple and efficient web technology.

## 🌟 Key Features

🔐 Authentication:
- Separate registration and login for Users and Sellers
- Secure phone number + password-based login

👤 User Functionalities:
- Register and login with phone number
- View all available sellers
- Place an order with selected seller and items
- View personal order history
- Add or remove favorite sellers
- Logout functionality

🛍 Seller Functionalities:
- Register with shop name, category, and item list
- Login using phone number
- Update shop location
- View received orders from users
- Logout functionality

📦 Order Management:
- Users can place orders to any seller from a dropdown list
- Auto-fills seller ID based on dropdown selection
- Orders are stored with status, user, and seller references
- Order success confirmation after placing

📱 Responsive UI:
- Clean and mobile-friendly UI using CSS
- Fully responsive layout for all devices

## 🔧 Tech Stack

Frontend:
- React.js (with React Router)
- Axios
- Vite
- CSS (custom and modular)

Backend:
- Node.js
- Express.js
- MongoDB with Mongoose
- bcrypt.js for password hashing
- dotenv, CORS, and Express middleware

Database:
- MongoDB Atlas (cloud database)
  
  ## 🧪 How it Works (Flow Overview)
The user or seller chooses their role during registration.

They are redirected to their respective registration form.

After login, users can view sellers and place orders.

Sellers can access a dashboard to view and manage received orders.

The app uses localStorage to persist login sessions.

Logout clears the session and resets the UI.

## 🛡 Security Features
Passwords are hashed using bcrypt before being stored in the database.

Minimal data is exposed in API responses.

Local storage is used to manage session identity.

## 📌 Future Enhancements
Geo-location integration to filter sellers based on proximity

In-app notifications for order updates

Admin dashboard for managing users/sellers

Improved filtering of sellers by category
