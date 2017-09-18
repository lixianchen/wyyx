import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import './App.css';





import Home from './components/Home'
import Special from './components/Special'
import Classification from './components/Classification'
import Shopping from './components/Shopping'
import My from './components/My'




const App = () => (
  <Router>
    <div>
      <div>
        <Route exact path="/" component={Home}/>
        <Route path="/special" component={Special}/>
        <Route path="/classification" component={Classification}/>
        <Route path="/shopping" component={Shopping}/>
        <Route path="/my" component={My}/>
      </div>
      <ul className="router-ul">
        <li>
          <img src="icon/2.png"/>
          <Link to="/">Home</Link>
        </li>
        <li><Link to="/special">专题</Link></li>
        <li><Link to="/classification">分类</Link></li>
        <li><Link to="/shopping">购物车</Link></li>
        <li><Link to="/my">购物车</Link></li>
      </ul>

    </div>
  </Router>
)


export default App;
