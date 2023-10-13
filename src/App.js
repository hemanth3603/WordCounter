import Header from "./components/Header.js";
import WordCounter from "./components/Wordcounter.js";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
function App() {
  return (
    <div >
      <Header />
      <div className="container-fluid mt-4">
        <WordCounter />
      </div>
    </div>

  );
} 
export default App;