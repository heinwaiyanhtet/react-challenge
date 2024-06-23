import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
import App from "./app.js";


const root = createRoot(document.getElementById("root"));

let h1 = React.createElement('h1', null, 'Hello world!')

class HelloWorld extends React.Component
{
  render() {
    return React.createElement('div', null, h1, h1)
  }
}



root.render(


React.createElement(HelloWorld, null),


document.getElementById('content')

  // <StrictMode>
  //   <App />
  // </StrictMode>


);