# Express MongoDB Demo

This is a demo project that showcases how to use [Express.js](https://expressjs.com/) with [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) to build a simple CRUD application. The application allows you to manage a list of restaurants, including their names, locations, and cuisines.

## Installation

To install and run the application, follow these steps:

1. Clone the repository:

```
git clone https://github.com/eladjmc/express-mongo-demo.git
```


2. Navigate to the project directory:

```
cd express-mongo-demo
```


3. Install the dependencies:


```
npm install
```


4. Set the environment variables:

```
echo MONGODB_URI=your-mongodb-atlas-uri > config/config.env
```

5. Start the server:

```
nodemon server.js
```

## Database Structure

The application uses MongoDB Atlas to store the restaurant information. The database is structured as follows:

### restaurants Collection

The `restaurants` collection contains documents that represent individual restaurants. Each document has the following fields:

- `_id`: A unique identifier for the restaurant.
- `name`: The name of the restaurant.
- `location`: The location of the restaurant.
- `cuisine`: The type of cuisine served at the restaurant.

## Credits

This application was created by [Elad Harel](https://github.com/eladjmc).


