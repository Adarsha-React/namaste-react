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

### Testing

**_Unit Testing_**

- Testing single component separately , for example Header component (one/small unit of any application)

  **_Integration Testing_**

- Testing two or more components which are connected, where one component will affect other components if something changes in parent component

  **_E2E (end to end) Testing_**

- from start to end - user landing onto the page, entering user id and password then entering into the main page then doing some actions finally logging off.

**_React Testing Library_** - **jest**

- React Testing Library uses jest to perform testing in React application
- jest internally uses Babel

**_Steps_**

- Installed React Testing Library (npm install --save-dev jest)
- Installed jest (npm install --save-dev jest)
- Installed babel dependencies (npm install --save-dev babel-jest @babel/core @babel/preset-env)
- Added babel.config.js configuration (from "jest" website)
  - After adding this configuration, it will conflicts with parcel-babel configuration which was already present with bundler parcel.
- So, add .parcelrc file with proper configuration to disable default babel configuration inside parcel.

  - path: goto parceljs.org -> get started -> languages (JavaScript) -> Babel

- Jest configuration
  - npx jest --init
    - jsdom (browser-like) - this is where we test the application, it provides all super powers of browser.
- (Check this in React Testing Library)If you're using Jest 28 or later, jest-environment-jsdom package now must be installed separately.
  - npm install --save-dev jest-environment-jsdom

**_ready to test now_**

- npm run test (check this in package.json (scripts))
  - You might get the message that, no tests found.
- pattern testing files -

  - componentName.test.js/.ts
  - componentName.spec.js/.ts
  - Create a folder "**test**" then add normal files inside this folder with ComponentName.js/ts
  - These files are tracked by jest and execute these test cases
    **_Information from jest when you run the tests: dunder method test: npm run test_**
  - testMatch: **/**tests**/**/_.[jt]s?(x), \*\*/?(_.)+(spec|test).[tj]s?(x) - 0 matches
  - testPathIgnorePatterns: \\node_modules\\ - 24 matches

- written one JavaScript test case to test sum of two numbers.
  - sum.test.js
  - test() function will be used to execute the test cases - we can write "it" instead of "test" - this is also valid
  - It accepts two parameters, 1. Description of the test case 2. function to write logic for testing
- Unit testing
  - Testing sinlge component in the whole application, for example Contact component
  - **_Steps:_**
    - 1st render the compnent into jsdom using render method
    - "screen" object can be used to get the details of what all things rendered.
    - we might encouter with "jsx" not understood by jest, so we need to install below library
      - npm install --save-dev @babel/preset-react
      - update the babel.config.js file with new preset-react
      - again, we will encounter with screen object methods, toBeInTheDocument
        - Install - npm install -D @testing-library/jest-dom
- ## Testing while passing the props
  - Try to create mockdata and import that into where we test then pass it
  - Render step
    - copy the data exactly what RestaurantCard received from Body component and keep that in mockData
    - pass the mock data while rendering the component in step 1
  - Querying
    - use screen function and get the reference of some data
  - Expect
    - use expect method to check the expected data loaded onto DOM
