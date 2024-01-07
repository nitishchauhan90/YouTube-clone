import Header from './component/Header';
import './App.css';
import Sidebar from './component/Sidebar';
import RecommendedVideos from './component/RecommendedVideos';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import SearchPage from './component/SearchPage';

function App() {
  return (
    <div className="main">
      <Router>
      <Header/>
        <Switch>
          <Route path="/search/:searchTerm">
          <div className='app_page'>
            <Sidebar />
            <SearchPage/>
            </div>
          </Route>
          <Route path='/'>
            <div className='app_page'>
            <Sidebar />
            <RecommendedVideos/>
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
