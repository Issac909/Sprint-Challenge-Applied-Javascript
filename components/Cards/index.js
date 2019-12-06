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
    const bootstrap = response.data.articles.bootstrap;
    const javascript = response.data.articles.javascript;
    const jquery = response.data.articles.jquery;
    const node = response.data.articles.node;
    const technology = response.data.articles.technology;
    console.log(technology);

    const newCard = (bootstrap + javascript + jquery + node + technology);
    console.log(newCard)
    const cardMake = newCard;
    cardsContainer.append(cardMake);
    
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

const cardsContainer = document.querySelector('.cards-container');

function createCard(data) {
    //PARENT
    const card = document.createElement('div');
    card.classList.add('card');

    //HEADLINE
    const headline = document.createElement('div')
    headline.textContent = data.headline;
    headline.classList.add('headline');
    card.append(headline);

    //AUTHOR CONTAINER
    const author = document.createElement('div');
    author.classList.add('author');
    card.append(author);

    //IMAGE CONTAINER
    const images = document.createElement('div');
    images.classList.add(images);
    author.append(images);

    //IMAGE
    const image = document.createElement('img');
    image.src = data.authorPhoto;
    images.append(image);

    //NAME
    const name = document.createElement('span');
    name.textContent = data.authorName;
    author.append(name);

    return card;
}