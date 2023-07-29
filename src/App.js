
import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Homepage from './Components/Homepage/Homepage';
import { Explore } from './Components/Explore/Explore';
import CreatePlayList from './Components/CreatePlayList/CreatePlayList';
import WatchLater from './Components/WatchLater/WatchLater';
import Sidenav from './Components/Sidenav/Sidenav';
import VideosPage from './Components/VideosPage/VideosPage';
import {videos} from '../src/Backend/AllVideos'
import VideoDetailsPage from './Components/VideoDetailsPage/VideoDetailsPage';



function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <div className="App">
        <Sidenav />

        <div className="content">
          <Routes>
          <Route path="/videos/:category" element={<VideosPage videos={videos} />} />
          <Route path="/video/:videoId" element={<VideoDetailsPage  videos={videos} />} />

            <Route path="/" element={<Homepage />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/create play list" element={<CreatePlayList />} />
            <Route path="/watch later" element={<WatchLater />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
    </div>
  );
}

export default App;


