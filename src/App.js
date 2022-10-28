import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'

import TemplateDefault from './templates/Default'

import Home from './pages/Home'
import Customers from './pages/Customers'

function App() {
  return (
    <TemplateDefault>
      <Router>
        <Switch>
          <Router path='/customers'>
            <Customers/>
          </Router>
          <Route path='/'>
            <Home/>
          </Route>
        </Switch>
      </Router>
    </TemplateDefault> 
  )
}

export default App
