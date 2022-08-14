import Feed from "./Components/Feed";
import Rightbar from "./Components/Rightbar";
import Sidebar from "./Components/Sidebar";
import Home from "./Pages/Home";
import "./Styles/Common.scss"

function App() {
  return (
    <div className="App">
      <Home/>
      <div className="homeContainer">
        <Sidebar/>
        <Feed/>
        <Rightbar/>
      </div>
    </div>
  );
}

export default App;
