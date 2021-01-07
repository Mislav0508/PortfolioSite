import randomPerson from "./images/randomPerson.gif"
import passwordGenGif from "./images/passwordGenerator.gif"
import quizGif from "./images/quizGif.gif"
import cart from "./images/cart.gif"
import pages from "./images/pages.gif"

export const links = [
  {
    id: 1,
    url: "/",
    text: "home"
  },
  {
    id: 2,
    url: "/projects",
    text: "projects"
  },
  {
    id: 3,
    url: "/contact",
    text: "contact"
  },
  {
    id: 4,
    url: "/about",
    text: "about"
  }
]
export const projects = [
  {
    id: 1,
    url: "/projects/cart",
    img: cart,
    title: "Cart",
    description: "This is a shopping cart. Durign the construction of this project I was heavily relying on the useReducer hook. Also, by implementing higher order array methods such as: .map and .reduce , I was able to achieve the functionality of the Cart. Notice that the values change dynamically as we interact with them."
  },
  {
    id: 2,
    url: "/projects/quiz",
    img: quizGif,
    title: "Quiz",
    description: "A quiz app containing multiple answers, prize money and level of knowledge."
  },
  {
    id: 3,
    url: "/projects/passwordGen",
    img: passwordGenGif,
    title: "Password Generator",
    description: "This is primarily a showcase of using Nodejs with Express to build a user log in system. The logged in user then has access to the password generator. The generator itself was a code-along project."
  },
  {
    id: 4,
    url: "/projects/random-person",
    img: randomPerson,
    title: "Random person generator",
    description: "This application fetches random users from an external API. Every time the api is called, a new user is presented. Each user has values which can be shown when hovering over the icons."
  },
  {
    id: 5,
    url: "/projects/pages",
    img: pages,
    title: "Pages",
    description: "A sequence of pages conditioned by the number of images on each page which are retrieved from an external API. "
  }
  
]

