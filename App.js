import React from "react";
import ReactDOM from "react-dom/client";

const parent1 = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", {}, "I'm an h1 tag")
  )
);

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement(
    "div",
    { id: "child-1", key: "child1" },
    React.createElement("h1", {}, "I'm an h1 tag"),
    React.createElement("h2", {}, "I'm an h2 tag")
  ),
  React.createElement(
    "div",
    { id: "child-1", key: "child2" },
    React.createElement("h1", {}, "I'm an h1 tag"),
    React.createElement("h2", {}, "I'm an h2 tag")
  ),
]);

//we will use JSX to write the above code in easy way

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World From React!!"
);

console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
