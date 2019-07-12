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

const cardsContainer = document.querySelector('.cards-container')

axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(data => {
        console.log('all data: ',data)
        const articles = data.data.articles
        const articlesArr = []
        articlesArr.push(articles.bootstrap, articles.javascript, articles.jquery, articles.node, articles.technology)
        const allArticles = []
        articlesArr.forEach(subject => subject.forEach(article =>{ allArticles.push(article)}))
        // console.log(allArticles)

        class Articles {
            constructor(article) {
                this.authorName = article.authorName
                this.authorPhoto = article.authorPhoto
                this.headline = article.headline

                const newArticle = createCard(this)
                cardsContainer.appendChild(newArticle)
            }
        }

        const updateArticles = allArticles.forEach(article => new Articles(article))
    })
    .catch(error => {
        console.log(error)
    })


// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>

function createCard(obj) {
    const card = document.createElement('div')
    const headline = document.createElement('div')
    const author = document.createElement('div')
    const imgContainer = document.createElement('div')
    const img = document.createElement('img')
    const authorsName = document.createElement('span')

    card.classList.add('card')
    headline.classList.add('headline')
    author.classList.add('author')
    imgContainer.classList.add('img-container')

    card.appendChild(headline)
    card.appendChild(author)
    author.appendChild(imgContainer)
    imgContainer.appendChild(img)
    author.appendChild(authorsName)

    headline.textContent = obj.headline
    img.src = obj.authorPhoto
    authorsName.textContent = obj.authorName

    return card
}


// axios.get('https://api.github.com/users/armandoroman1016/followers')
//     .then(data => {
//         let followersArr = data.data
//         console.log('followers arr; ', followersArr)
//         class Followers {
//             constructor(follower) {
//                 axios.get(`https://api.github.com/users/${follower.login}`)
//                     .then(data => {
//                         this.location = data.data.location
//                         this.profile = data.data.html_url
//                         this.followers = data.data.followers
//                         this.following = data.data.following
//                         this.bio = data.data.bio
//                         this.avatar = data.data.avatar_url
//                         this.handle = data.data.login
//                         this.name = data.data.name

//                         // const newFollower = createGithubCard(this)
//                         // cards.appendChild(newFollower);
//                     })
//             }
//         }

//         // const updatedFollowers = followersArr.map(follower => new Followers(follower))
//     })

