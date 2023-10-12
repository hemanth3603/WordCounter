import Header from "./components/Header.js";
import WordCounter from "./components/Wordcounter.js";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
function App() {
  return (
    <div className="App">
      <Header />
      <div className="container mt-4">
        <WordCounter />
      </div>
    </div>

  );
} 
export default App;