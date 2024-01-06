import {BrowserRouter as Router, Route} from 'react-router-dom'
// import LoginForm from './components/LoginForm'
// import {useState} from 'react'
import Home from './components/Home'
import Products from './components/Products'
import Cart from './components/Cart'
import NotFound from './components/NotFound'

import './App.css'

const App = () => (
  <Router>
    <Route path="/" exact component={Home} />
    <Route path="/projects" component={Products} />
    <Route path="/contactUs" component={Cart} />
    <Route path="/notFound" component={NotFound} />
  </Router>
)

export default App
