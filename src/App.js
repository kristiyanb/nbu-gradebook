import './App.css';
import { Redirect, Route, Router } from 'react-router-dom';
import { Home } from './components/Home';
import { Login } from './components/Login';
import { Register } from './components/Register';
import history from './shared/history';
import { AppContext, AppProvider } from './context/AppContext';
import { Menu } from './components/Menu';
import { Users } from './components/Users';
import { roles } from './shared/roles';
import { Classes } from './components/Classes';
import { Grades } from './components/Grades';
import { Absence } from './components/Absence';
import { Programme } from './components/Programme';

function App() {
  return (
    <div className="App">
      <AppProvider>

        <Menu />

        <Router history={history}>

          <Route exact path='/'>
            <Home />
          </Route>

          <Route exact path='/teachers'>
            <Users title='Преподаватели' role={roles.teacher} roleDisplayName={'преподавател'} />
          </Route>

          <Route exact path='/students'>
            <Users title='Ученици' role={roles.student} roleDisplayName={'ученик'} />
          </Route>

          <Route exact path='/parents'>
            <Users title='Родители' role={roles.parent} roleDisplayName={'родител'} />
          </Route>

          <Route exact path='/classes'>
            <Classes />
          </Route>

          <Route exact path='/grades'>
            <Grades />
          </Route>

          <Route exact path='/absence'>
            <Absence />
          </Route>

          <Route exact path='/programme'>
            <Programme />
          </Route>

          <Route exact path='/login'>
            <Login />
          </Route>

          <Route exact path='/register'>
            <Register />
          </Route>

        </Router>

      </AppProvider>
    </div>
  );
}

export default App;
