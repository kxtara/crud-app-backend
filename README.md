# CRUD App Backend

This repository contains the backend code for a simple CRUD (Create, Read, Update, Delete) application built with Node.js, Express.js, and MongoDB.

## Installation

1. Clone the repository:

    ```bash
    git clone <repository_url>
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Create a `.env` file in the root directory and add the following environment variables:

    ```plaintext
    MONGODB_URI=<your_mongodb_connection_string>
    ```

## Usage

To start the server, run the following command:

```bash
npm start
```

The server will start listening on port 3000 by default.

## Endpoints

- **GET /api/products**: Get all products.
- **GET /api/products/:id**: Get a specific product by ID.
- **POST /api/products**: Create a new product.
- **PUT /api/products/:id**: Update an existing product.
- **DELETE /api/products/:id**: Delete a product.

## Folder Structure

```
.
├── controllers      # Contains controller functions for handling HTTP requests
├── models           # Contains Mongoose models for defining MongoDB schemas
├── routes           # Contains route handlers for different endpoints
└── index.js         # Entry point of the application
```

## Dependencies

- [Express.js](https://expressjs.com/): Web application framework for Node.js.
- [Mongoose](https://mongoosejs.com/): MongoDB object modeling for Node.js.
- [dotenv](https://www.npmjs.com/package/dotenv): Loads environment variables from a .env file into process.env.
- [nodemon](https://www.npmjs.com/package/nodemon): Automatically restarts the server when changes are detected during development.

## License

This project is licensed under the [ISC License](LICENSE).
