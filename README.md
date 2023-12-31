# Namaste React 🙏

## React Components

- **_Functional Components_**
- **_Class Based Components_**

## Class Based Components

- OLD way to do it and still some legacy code will be there with class based components
- Life cycle methods and stateful components

## Functional Components

- New way of writing the components in React.
- It is just a normal JavaScript function and it returns some piece of JSX.

## JSX

- Use JSX (HTML like sytax but this is not HTML inside JavaScript)
- JSX ==> will be transpiled into React.createElement using **_Babel_**
- JSX ==> React.createElement ==> HTMLElement
- JSX will sanitize the data before using it, it escapes xss attaching

## Episode-04 - Started Building Food Application - Plan and Design

- Always design your page and keep all things in paper, once you have proper plan what you need to build then it will be easy to code.
- Figure-out what all components you will have in your application:
  **_Header, Body and Footer_**
  - Header Component
    - Title component
    - Nav Items
  - Body Component
    - Search Bar component
    - RestaurantContainer component
      - RestaurantCard component
  - Footer Component
    - Copyright
    - Links
    - Address
    - Contact
