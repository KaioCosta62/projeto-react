import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import TemplateDefault from './templates/Default';
import TemplatePage from './templates/Page';
import TemplateClean from './templates/Clean'

import Home from './pages/Home'
import CustomersList from './pages/customers/List'
import CustomersRegister from './pages/customers/Register'
import CustomerEdit from './pages/customers/Edit'
import Login from './pages/Login'


function App() {
  return (
      <Router>
        <TemplateDefault>

        <Switch>
        
          <Route path="/login">
            <TemplateClean Component={Login} />
          </Route>
       
          <Route path="/customers/edit/:id">
            <TemplatePage title="Editar cliente" Component={CustomerEdit} />
          </Route>
          <Route path="/customers/add">
            <TemplatePage title="Cadastro de Clientes" Component={CustomersRegister} />
          </Route>
          <Route path="/customers">
            <TemplatePage title="Listagem de Clientes" Component={CustomersList} />
          </Route>
          <Route path="/">
            <TemplatePage title="Página Inicial" Component={Home} /> 
          </Route>
        </Switch>
        </TemplateDefault>
    </Router>
  )
}

export default App
