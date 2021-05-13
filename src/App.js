import './App.css';
import Landing from './components/Landing/Landing';
import CreatePlaylist from './components/CreatePlaylist/CreatePlaylist';
import Playlist from './components/Playlist/Playlist';
import Playlists from './components/Playlist/Playlists';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';

function App() {
  return (
    <div>
            <Router>
                <Switch>
                    <Route path="/createPlaylist" exact component={CreatePlaylist} />
                    <Route path="/playlist/:playlistId" exact component={Playlist} />
                    <Route path="/playlists/:categoryName" exact component={Playlists} />
                    <Route path="/"  component={Landing} />
                </Switch>
            </Router>
    </div>
  );
}

export default App;
