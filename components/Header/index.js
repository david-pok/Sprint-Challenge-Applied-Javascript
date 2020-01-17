// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component
const headerContainer = document.querySelector(".header-container");

function Header() {
  //CREATE ELEMENTS
  const header = document.createElement("div");
  const dateSpan = document.createElement("span");
  const h1Ele = document.createElement("h1");
  const tempSpan = document.createElement("span");

  //CREATE CLASSNAMES
  header.classList.add("header");
  dateSpan.classList.add("date");
  tempSpan.classList.add("temp");

  //APPEND CHILDREN
  header.appendChild(dateSpan);
  header.appendChild(h1Ele);
  header.appendChild(tempSpan);

  return header;
}

headerContainer.appendChild(Header());
