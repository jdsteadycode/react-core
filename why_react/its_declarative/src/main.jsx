import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// declarative way (what to do...)
/*
  Just tell "what to do"
  computer would handle rest of task!
*/

// declarative-way example
// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// );


// imperative way (how to do!)
/*
  Each and every instruction 
  is to be given to the computer
  for getting the thing done!
*/


/*  [imperative way demonstration]
Challenge - recreate the above line of code in vanilla JS by creating and
appending an h1 to our div#root (without using `innerHTML`).

- Create a new h1 element, b element,  p element(s).
- Give them some textContent, innerText
- Give them a class name of "header", "text" resp.
- append both as a child (using `appendChild`) of the div#root
    
*/

// A new h1, p element(s)
// via method createElement() of Document Class/Object
const h1Element = document.createElement("h1");
const bElement = document.createElement("b");
const pElement = document.createElement("p");

// giving some text
// via attribute innerText of Document Class/Object
h1Element.innerText = "This is Vanilla JavaScript";
bElement.innerText = "(An imperative way of rendering the content)";
pElement.innerText = "One must 'Describe each and every to me!' \n On how to do something!";

// giving class `header`, `text` attributes  to the h1, p Elements resp.
h1Element.setAttribute("class", "header");
bElement.setAttribute("class", "text");
pElement.setAttribute("class", "text");

// add it as child of the `root` container
// via querySelector() method to grab the elements via it's css selector
// and, appendChild() method to add the elements as child to parent!
document.querySelector("#root").appendChild(h1Element);
document.querySelector("#root").appendChild(bElement);
document.querySelector("#root").appendChild(pElement);