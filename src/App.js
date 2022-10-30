import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import TemplateDefault from './templates/Default';
import TemplatePage from './templates/Page';

import Home from './pages/Home';
import CustomersList from './pages/customers/List';
import CustomersRegister from './pages/customers/Register'

function App() {
  return (
    <Router>
      <TemplateDefault>
        <Switch>
          <Router path="/customers/add">
            <TemplatePage title="Cadastro de Clientes" Component={CustomersRegister} />
          </Router>
          <Router path="/customers">
            <TemplatePage title="Listagem de Clientes" Component={CustomersList} />
          </Router>
          <Route path="/">
            <TemplatePage title="Página Inicial" Component={Home} />
          </Route>
        </Switch>
      </TemplateDefault>
    </Router>
  );
}

export default App;
