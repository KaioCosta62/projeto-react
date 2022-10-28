import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'

import TemplateDefault from './templates/Default'
import Home from './pages/Home'


function App() {
  return (
    <TemplateDefault>
      <Router>
        <Switch>
          <Route path='/'>
            <Home/>
          </Route>
        </Switch>
      </Router>
    </TemplateDefault> 
  )
}

export default App
