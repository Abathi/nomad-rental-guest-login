import Header from './components/Header'
import Button from './components/Button'

function App() {
  return (
    <div className="container">
      <Header />
      <Button
        classes={'btn btn-primary w-100'}
        text={'Sign in'}
      />
    </div>
  );
}

export default App;
