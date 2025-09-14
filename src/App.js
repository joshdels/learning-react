import Navbar from './Navbar';
import Home from './Home';

function App() {
  const title = 'Welcome Newbie';
  const likes = 50;
  const person = { name: 'josh', age: 30};
  const link = "https://homify.topmapsolutions.com"

  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App;
