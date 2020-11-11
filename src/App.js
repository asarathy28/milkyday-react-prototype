import logo from './logo.svg';
import './App.css';
import Header from "./components/header/Header"
import Page from "./components/page/Page"

function App() {
  return (
    <div className="App" style={{display: "flex", flexDirection: "column"}}>
      <Header/>
      <Page/>
    </div>
  );
}

export default App;
