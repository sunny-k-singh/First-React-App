// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';


// let name="Sunny"
function App() {
  return (
    <>
    {/* Text Utils */}
    <Navbar title="Sunny's App" AboutText="About Sunny's App!"/>
    {/* <Navbar title="Sunny's Second App"/> */}
    <div className="container my-3">
    <Textform heading="Enter the text to analyze:"/>
    </div>

    </>
  );
}

export default App;
