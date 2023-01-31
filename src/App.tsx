import './App.css';
import Footer from './component/Footer';
import Nav from './component/Nav';
import Movies from './component/Movies';
import TVShows from './component/TVShows';

function App() {
  return (
    <div>
      <Nav />
      <div className="card-grid">
        <Movies/>
        <TVShows/>
      </div>
      <Footer />
    </div>
  );
}

export default App;
