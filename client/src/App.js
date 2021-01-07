import React from "react"
import {Navbar} from "./Navbar"
import {Home} from "./Home"
import {Footer} from "./Footer"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import {About} from "./About"
import {Error} from "./Error"
import {Contact} from "./Contact"
import {Projects} from "./Projects"
import {CartContainer} from "./projects/Cart/CartContainer"
import {Quiz} from "./projects/Quiz/Quiz"
import {passwordGen} from "./projects/passwordGen"
import { RandomPerson } from "./projects/randomPerson"
import {Pages} from "./projects/Pages/Pages"

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/projects" component={Projects}/>
          <Route path="/projects/cart" component={CartContainer}/>
          <Route path="/projects/quiz" component={Quiz}/>
          <Route path="/projects/passwordGen" component={passwordGen}/>
          <Route path="/projects/random-person" component={RandomPerson} />
          <Route path="/projects/pages" component={Pages} />
          <Route path="/about" component={About}/>
          <Route path="/contact" component={Contact}/>
          <Route path="*" component={Error}/>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
