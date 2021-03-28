import { BrowserRouter as Router, Route } from 'react-router-dom'
import Login from './components/Login'
import Booking from './components/Booking'


function App() {
  return (
    <Router>
      <div className="container">
        <Login />
        <Route path='/booking' component={Booking} />
      </div>
    </Router>
  );
}

export default App;
