import './App.css';
import AdminPage from "./Admin/AdminRouteController";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/Admin/*' element={<AdminPage/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
