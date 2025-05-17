/**
 * Element selectors = Methods used to target and manipulate HTML elements they allow you to selest one or more multiple HTML elements from the DOM (Document object model)
 */

//1. document.getElementById()              element or NULL
//2. document.getElementsByClassName()      HTML collection like an array of all element having same class in html
//3. document.getElementsByTagName()        Html collection
//4. document.querySelector()               first Element or NULL
//5. document.querySelectorAll              NODELIST

function runSelectors() {
  // By ID
  const heading = document.getElementById('main-heading');
  heading.style.color = 'blue';

  // By Class
  const messages = document.getElementsByClassName('message');
  for (let msg of messages) {
    msg.style.fontWeight = 'bold';
  }

  // By Tag Name
  const divs = document.getElementsByTagName('div');
  for (let div of divs) {
    div.style.border = '1px solid black';
  }

  // Query Selector (single)
  const firstBox = document.querySelector('.box');
  firstBox.classList.add('highlight');

  // Query Selector All
  const allBoxes = document.querySelectorAll('.box');
  allBoxes[1].style.padding = '10px';
}
