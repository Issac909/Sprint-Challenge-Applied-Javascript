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

axios.get('https://lambda-times-backend.herokuapp.com/articles').then(response => {
    console.log(response.data.articles);

    const articles = Object.keys(response.data.articles)
    for (let i = 0; i < articles.length; i++) {
        const each = articles[i];
        response.data.articles[`${each}`].forEach(data => {
            console.log(data);
            createCard(data);
        })
    }

    // for(let i = 0; i>response.data.articles.length; i++){
    //     const hope = response.data.articles[i];
    //     return console.log(hope);
    //     const newCard = response.data.articles[i];

    // }     

    // Object.entries(response.data.articles).forEach((key, value) => {
    //     console.log(key);
        
    //     const newCard = createCard(key);
    //     cardsContainer.append(newCard);
    // })
})

.catch(function (error) {
    console.log(error);
})

function createCard(data){

    const card = document.createElement("div")
    card.classList.add('card')

    const headline = document.createElement("div")
    headline.classList.add('headline')
    headline.textContent = data.headline
    card.appendChild(headline)

    const author = document.createElement("div")
    author.classList.add('author')
    card.appendChild(author)

    const imgContainer = document.createElement("div")
    imgContainer.classList.add('img-container')
    author.appendChild(imgContainer)

    const img = document.createElement("img")
    img.src = data.authorPhoto
    imgContainer.appendChild(img)

    const authorName = document.createElement("span")
    authorName.textContent = data.authorName
    author.appendChild(authorName)
    
    
const cardContainer = document.querySelector(".cards-container")

cardContainer.appendChild(card)






} 
