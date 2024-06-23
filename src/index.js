import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
import App from "./app.js";


// const root = createRoot(document.getElementById("root"));

// root.render(

//   <StrictMode>
//     <App />
//   </StrictMode>

// );






// const root = createRoot(document.getElementById("root"));

// let h1 = React.createElement('h1', null, 'Hello world!')

// class HelloWorld extends React.Component
// {
//   render() {
//     return React.createElement('div', null, h1, h1)
//   }
// }


// root.render(

//   React.createElement
//   (
//      'div',
//      null,
//      React.createElement(HelloWorld),
//      React.createElement(HelloWorld),
//      React.createElement(HelloWorld)
//   ),

//   document.getElementById('content')

// );





const root = createRoot(document.getElementById("root"));

class HelloWorld extends React.Component{

    render()
    {
        return React.createElement(
            'h1',
            this.props,
            'Hello ' + this.props.frameworkName + ' World!!!' 
        )
    }

}

root.render(

    React.createElement(

        'div',
         null,
        React.createElement(HelloWorld,{
           id : "ember",
           frameworkName : "Ember.js",
           title : 'A framework for creating ambitious web applications.'
        }),


        document.getElementById('content')

    )



)
