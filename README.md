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

## Episode-04 & 05 - Started Building Food Application - Plan and Design

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

**_Building the Namaste-Food app_**

- Created App.js file which will have complete App Layout with all top level components
- Created a Header component and added all necessary elements to it (Title, Nav items)
- Added applied CSS
- Created Body component and loaded the data into it.
  - First used some hard coded data to show it on the page
  - Used one restaurant live data from Swiggy
  - Used all restaurants live data from the same Swiggy API
- Structured the complete app like industry standards
  - src
    - components/will have all the componets
    - utils/this folder will have some utilites like constants/mock data
    - Moved all respective codes into different components
    - Used default and named export and import methods to link the components
- Built Filtered Feature in the app
  **_Introduction to React Hooks_**
  - React hooks are just normal JavaScript functions which are provided by Facebook.
  - Used useState() hook to create local state variables in React
  - useState() function will retun an array of two elements (1. varibale name and 2. function to update the vairables)
  - Whenever the state variable updated, re-concilliation process (React Fiber - Diffing Algorithm) will be triggered.
    - This will try to find-out the difference b/w previous and new virtual DOM and Finally the new Virtual DOM will be created and updates the DOM.
    - This is why React is fast, React will not update DOM directly. It will only creates Virtual DOM by comparing the previous ones provide it to ReactDOM which will use render() method and updates the DOM very fast.
    - Virtual DOM is just the representation of actual DOM, it is JavaScript Object.

## Episode-06 - Fetch Live Data from Swiggy - Exploring the world

- useEffect() Hook usages
  - fetch() web API method used to fetch the data from Swiggy API.
