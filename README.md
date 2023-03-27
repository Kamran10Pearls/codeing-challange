# Next.js Burger Ordering App

This project is a coding challenge for a burger ordering app built with Next.js. The app has two discount codes that can be applied on checkout: `10OFF` and `20OFF`. Additionally, there are two static promo codes, `50HamOFF` and `50ChilliOFF`, that can be entered on checkout.

The project is built on an atomic project structure using the Persist Context API to maintain state and pass data to child components. TypeScript is also used in this project.

For Different calculations custom hooks are created that can be found in `hooks` folder.<br />
`utils` contains reuseable functions.<br />
`context` contain implementation of contextAPI.<br />
`constants` contains all the constants used in this project such as burgers, types, sizes etc.<br />

## Running the Project

To run the project on a development server, use the following command:

```
npm run dev
```

To build the project, use the following command:

```
npm run build
```

To run the build file, use the following command:

```
npm start
```

For both commands project will run on localhost:3000

## Burger Ordering

The burger place offers three different burgers with the following prices:

- Hamburger: $5.0
- Cheeseburger: $6.0
- Chilli Cheeseburger: $8.0

Each burger comes in three different sizes that modify the price by a factor:

- Small (S): \* 0.7
- Medium (M): \* 1.0
- Large (L): \* 1.3

Customers can add multiple burgers to their order and select a different size for each burger. The app provides a display for customers to see all burgers they ordered with the actual price of each burger.

## Promotions and Discounts

To stay competitive with other burger restaurants, there are different promotion codes that will offer two specific burgers to the price of one burger to the customer. Additionally, customers can enter discount codes which deduct a percentage amount of the whole order price. Our manager requires that the customer add exactly one promotion code and one discount code to their order. The checkout display will show the price reduction from the promotion and discount code.

## Confirmation and Success Page

After confirming the order, the customer sees a success dialog that shows that their order was successful and then redirect to homepage.
