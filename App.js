import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => {
  return (
    <div>
      <h1>Namaste React🚀</h1>
    </div>
  );
};

//Use JSX (HTML like sytax but this is not HTML inside JavaScript)
//JSX --> will be transpiled into React.createElement using Babel

//JSX ==> React.createElement ==> HTMLElement

//const jsxHeading = <h1 id="heading">Hello World from JSX🚀</h1>;

//JSX will sanitize the data before using it, it escapes xss attaching

const Header = () => {
  return (
    <div>
      {Title()}
      <Title />
      <Title></Title>
      <h1 id="heading">Hello world from Functional component</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Header />);
