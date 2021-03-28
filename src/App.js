import { BrowserRouter as Router, Route } from 'react-router-dom'
import Login from './components/Login'
import Booking from './components/Booking'
import Account from './components/Account'


function App() {
  return (
    <Router>
      <Route
        path='/'
        exact
        render={() => (
          <Login />
        )}
      />
      <Route path='/booking' component={Booking} />
      <Route path='/account' component={Account} />
    </Router>
  );
}

export default App;
