import React from "react";
import ReactDOM from "react-dom"

const parent = React.createElement(
    "div",
     {id: "parent"},
     React.createElement(
        "div",
        {id: "child"},
        [
            React.createElement(
                "h1",
                {},
                "H1 Tag From React"
            ),
            React.createElement(
                "h2",
                {},
                "H2 tag from React"
            )

        ]
     )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);