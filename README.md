# B41_WEB_047_Cloud-Crafters

# Comprehensive Multi-Vendor E-commerce Platform

## Introduction

The Comprehensive Multi-Vendor E-commerce Platform aims to provide an extensive solution for sellers and buyers to interact seamlessly. Vendors can manage their products and track sales performance, while users can browse and purchase products with real-time updates, personalized recommendations, and gamified elements. This platform enhances user engagement and vendor efficiency through innovative features and an intuitive interface.

## Project Type

Fullstack

## Deployed App

- **Frontend**: https://e-market-b41-web047.netlify.app/
- **Backend**: https://e-market-b41-web047.netlify.app/
- **Database**: https://cloud.mongodb.com/v2/6762f0c7124ee8008b9c895b#/metrics/replicaSet/6762f1bebf54e139248d2eb2/explorer/test

## Directory Structure

```plaintext
B41_WEB_047_Cloud-Crafters/
├─ Client/
│  ├─ clientProject/
│  │  ├─ project/
│  │  ├─ public/
│  │  ├─ src/
│  │  │  ├─ components/
│  │  │  ├─ pages/
│  │  │  ├─ redux/
│  │  │  │  ├─ action/
│  │  │  │  ├─ reducer/
│  │  ├─ .gitignore
│  │  ├─ package-lock.json
│  │  ├─ package.json
│  ├─ README.md
├─ Server/
│  ├─ config/
│  ├─ controllers/
│  │  ├─ admin/
│  │  ├─ auth/
│  │  ├─ shop/
│  ├─ middlewares/
│  ├─ models/
│  ├─ routes/
│  │  ├─ admin/
│  │  ├─ auth/
│  │  ├─ shop/
│  ├─ .env
│  ├─ .gitignore
│  ├─ package-lock.json
│  ├─ package.json
│  ├─ server.js
```

## Features

### Key Features for Users:

- **Product Catalog**:
  - Responsive grid layout for browsing products.
  - Real-time, dynamic filtering options (price range, vendor, ratings).
  - Quick View modal with essential product details and related suggestions.
- **Shopping Cart and Checkout**:
  - Sticky cart icon with dynamic updates.
  - Multi-step checkout process with real-time validation.
  - Cart preview and order confirmation.

## Design Decisions or Assumptions

1. **Responsive Design**: Prioritized for mobile, tablet, and desktop users.
2. **Secure Checkout**: Implemented multi-step forms with real-time validation.
3. **Scalable Backend**: Designed backend to handle a growing number of vendors and products.

## Installation & Getting Started

### Prerequisites

Ensure the following are installed:

- Node.js
- Express.js
- React
- MongoDB

### Installation

```bash
# Clone the repository
git clone https://github.com/armansdev/B41_WEB_047_Cloud-Crafters/tree/main
cd B41_WEB_047_Cloud-Crafters

# Install backend dependencies
cd Server
npm install

# Install frontend dependencies
cd Client/clientProject
npm install

# Start the backend server
cd Server
npm start

# Start the frontend server
cd Client/clientProject
npm start
```

### Database Setup

1. Configure your MongoDB connection string in the `Server/config/db.config.js` file.
2. Configure your Cloudinary connection string in the `Server/config/cloudinary.config.js` file

## Usage

### Running the Application

1. Start the backend server to serve API endpoints.
2. Start the frontend server to serve the user interface.
3. Access the application at `https://famous-gingersnap-630c1f.netlify.app/`

### Example Usage

1. Browse products using filters and quick view.
2. Add items to the cart and complete the checkout process.

## API Endpoints

### User Endpoints

```plaintext
POST    /api/auth/register                 - User registration
POST   /api/auth/login          - User login
POST   /api/auth/logout           - User logout
GET    /api/auth/check-auth      - User authentication
```

### Cart Endpoints

```plaintext
POST   /api/shop/cart/add               - Add to cart
PUT   /api/shop/cart/update-cart            - Update cart
GET   /api/shop/cart/get/:userId                - Get user cart
DELETE   /api/shop/cart/:userId/:productId               - Delete an item from a cart
```

## Technology Stack

- **Frontend**: React.js, TailwindCSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Libraries & Tools**: Bcrypt, Json Web Token, Stripe/PayPal API, Webpack
