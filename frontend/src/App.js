import './DesktopGeneral.css';
import './MobileGeneral.css';
import Home from './components/pages/Home';
import SignIn from './components/pages/SingIn';
import Profile from './components/pages/Profile';
import History from './components/pages/History';
import Model3d from './components/pages/Model3d';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/singIn" element={<SignIn />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/history" element={<History />} />
          <Route path="/model-religion" element={<Model3d />} />
        </Routes>
      </Router>
    </>
  );

}

export default App;
