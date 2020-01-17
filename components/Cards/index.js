// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

const cardCreator = data => {
  const topOfCard = document.createElement("div");
  const headLine = document.createElement("div");
  const author = document.createElement("div");
  const imgContainer = document.createElement("div");
  const image = document.createElement("img");
  const span = document.createElement("span");

  const cardContainer = document.querySelector(".cards-container");

  topOfCard.classList.add("card");
  headLine.classList.add("headline");
  author.classList.add("author");
  imgContainer.classList.add("img-container");

  headLine.textContent = data.headline;
  span.textContent = data.authorName;

  cardContainer.appendChild(topOfCard);
  topOfCard.appendChild(headLine);
  topOfCard.appendChild(author);
  author.appendChild(imgContainer);
  imgContainer.appendChild(image);
  author.appendChild(span);
};

axios
  .get(`https://lambda-times-backend.herokuapp.com/articles`)
  .then(res => {
    console.log("article response", res);
    const allKeys = Object.keys(res.data.articles);
    console.log("keysArr", allKeys);
    for (let i = 0; i < allKeys.length; i++) {
      const key = allKeys[i];
      console.log("key", key);
      res.data.articles[`${key}`].forEach(content => {
        console.log("forEach ele", content);
        cardCreator(content);
      });
    }
  })
  .catch(err => {
    console.log("the custom error message goes here!", err);
  });
