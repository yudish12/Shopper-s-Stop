# E-commerce Cart Web Application

## Tech Stack

-React for creating Single Page Application
-React Router DOM for Routing
-UseContext and UseReducer Hooks for Global State Management

### Installing Dependencies

-Download zip file and extract in desired folder
-open the project folder and open terminal

- use command cd .\shoppers-stop\ to go to the project's directory
  -npm install to install all dependencies

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

#### `Project Flow`

-This website has 2 pages homepage and cartpage
-we will use context api and usereducer hook to create global state in context.js folder
-create 2 states 1 for cart and other for products
-in cart state we have two properties ie current products and current cart

-in product state we set up filter,sort,search functionality

-we have cartreducer for handling all cart functionality like add to cart,remove from cart,increase quantity of product
-we have product reducer for handling rating,sort,search etc basically how and what products we want to show on our home page

we have cart,filter,header,rating components to handle all these and manage state using context api in it

### Deployed Link

[https://shopper-s-stop.vercel.app/]
