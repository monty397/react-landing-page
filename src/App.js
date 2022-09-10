import Home from './/home';
import About from './/about';

function App() {
  return (
    <div className="App">
      <button onClick={myFunction} className="dark-button">
        Dark Mode<br /><i class="far fa-lightbulb"></i>
      </button>
      <Home />
      <About />
    </div>
  );
}
function myFunction() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}

export default App;