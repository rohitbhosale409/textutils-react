// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm1';

function App() {
  return (
    <>
      <div className="container">
        <Navbar title="TextUtils" />
      </div>
      <div className="container my-3">
        <TextForm heading="Enter the text to analyze below" />
      </div>
    </>
  );
}

export default App;
