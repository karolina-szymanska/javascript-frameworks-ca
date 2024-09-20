# JavaScript Frameworks CA, eCOM

![Screenshot](./src//components/images/ecom.png)

## Deployment

![Netlify Status](https://api.netlify.com/api/v1/badges/106c67e0-795d-465a-aebf-f8c2cd6ffd64/deploy-status) https://javascript-frameworks-react-ca.netlify.app/

## Description

You are tasked with build out the following pages for an eCom store:

- Homepage
- Individual product page
- Cart page
- Checkout success page
- Contact page

The Homepage should have a list of all the products. There should be a look-ahead search bar that filters products when typing in a product name. Clicking on a product should take a user to an individual product page.

The individual product page should display data for a single product. There should be an Add to cart button which, upon clicking, adds the product to the cart. The product page should display the title of the product, the description and the image. There should also be reviews listed for the product, if there are any. You should use the discountedPrice property to display the price of the product. If there is a difference between the discountedPrice and price properties then that means there is a discount for that product. Calculate what this discount is and display it on the page.

Clicking on the Cart icon will load the Cart page, which will list all of the products as well as a total. The Cart page will have a Checkout button. Clicking this Checkout button then goes to a Checkout success page.

The Checkout success page will display a message to the user notifying them that their order was successful. There should also be a link that lets a user go back to the store. The cart must be cleared if the user gets to the Checkout success page.

There will be a contact page which will contain a contact form with the following fields. There must be form validation:
Full name (Minimum number of characters is 3, required)
Subject (Minimum number of characters is 3, required)
Email (Must be a valid email address, required)
Body (Minimum number of characters is 3, required)

## Built With

- [React](https://react.dev/)
- [React-Router-DOM](https://reactrouter.com/en/main)
- [Zustand](https://docs.pmnd.rs/zustand/)

<div>
  <img src="https://github.com/devicons/devicon/blob/master/icons/react/react-original.svg" title="React" alt="React" width="40" height="40"/>&nbsp;
  <img src="https://github.com/devicons/devicon/blob/master/icons/reactrouter/reactrouter-original.svg" title="React Router" alt="React Router" width="40" height="40"/>&nbsp;
</div>

## API

API Documentation: https://docs.noroff.dev/docs/v2/basic/online-shop
API Swagger: https://v2.api.noroff.dev/docs/static/index.html

## Getting Started

### Installing

1. Clone the repo:

```
https://github.com/karolina-szymanska/javascript-frameworks-ca
```

2. Install the dependencies:

```
npm install
```

### Running

1. Install dependencies

```
npm i
```

2. Start Application

```
npm run start
```

## Contact

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/karolina-szyma%C5%84ska-64b36089/)

[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/karolina-szymanska)

[![Gmail](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:karolinaszymanska899@gmail.com)

## Acknowledgments

[Noroff - School of technology and digital media](https://www.noroff.no/)
