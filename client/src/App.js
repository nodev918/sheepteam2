import './App.css';
import Navbar from './components/Navbar'
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import Home from './components/views/Home'
import Signin from './components/views/Signin'
import TodoList from './components/views/TodoList'
import Others from './components/views/Others'
import Post from './components/views/Post'
import Test from './components/views/Test'

function Routing() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/post">
          <Post />
        </Route>
        <Route path="/signin">
          <Signin />
        </Route>
        <Route path="/todolist">
          <TodoList />
        </Route>
        <Route path="/others">
          <Others />
        </Route>
        <Route path="/test">
          <Test />
        </Route>
      </Switch>
    </>
  )
}


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routing />
      </BrowserRouter>
    </>
  );
}
export default App;
