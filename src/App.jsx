import Login from './pages/auth/Login';
import Signup from './pages/auth/Signup';
import Home from './pages/Home';

const App = () => {
  return (
    <div className="app">
      <Home />
      <Signup/>
      <Login/>
    </div>
  )
}

export default App
