import './App.css';
import Landing from './components/Landing/Landing';
import CreatePlaylist from './components/CreatePlaylist/CreatePlaylist';
import Playlist from './components/PlaylistView/Playlist';
import Playlists from './components/PlaylistView/Playlists';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import ShowAll from './components/PlaylistView/ShowAll';

function App() {
  return (
    <div>
            <Router>
                <Switch>
                    <Route path="/createPlaylist" exact component={CreatePlaylist} />
                    <Route path="/playlists/playlist/:playlistId" exact component={Playlist} />
                    <Route path="/playlists/:categoryName" exact component={Playlists} />
                    <Route path="/showAll"  component={ShowAll} />
                    <Route path="/"  component={Landing} />
                </Switch>
            </Router>
    </div>
  );
}

export default App;
