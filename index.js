import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "h1" }, "H1 Tag From React"),
    React.createElement("h2", { id: "h2" }, "H2 tag from React"),
  ])
);

const headingFromReact = React.createElement(
  "h1",
  { id: "h1_react" },
  "H1 Tag From React"
);

const TittleComponent = () => <h1>This is Component Composition</h1>;

// JSX code transpilled before it reaches the browser - Babel
// React Element or JSX code
const headingFromJSX = <h1>H1 Tag From JSX</h1>;

const reactFunCompWithNoReturn = (
  <h1>Functional Component with No Return Type</h1>
);
const ReactFunctionalComponentHeading = () => {
  return (
    <div className="container">
      <TittleComponent />
      <h1>Welcome to The React Functional Component</h1>
    </div>
  );
};

// console.log(headingFromReact);
// console.log(headingFromJSX);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<ReactFunctionalComponentHeading />);
