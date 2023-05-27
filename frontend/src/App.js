import './DesktopGeneral.css';
import './MobileGeneral.css';
import Home from './components/pages/Home';
import SignIn from './components/pages/SingIn';
import Profile from './components/pages/Profile';
import History from './components/pages/History';
import Model3d from './components/pages/Model3d';
import ModelVida3d from './components/pages/ModelVida3d';
import Leccion from './components/pages/Leccion';

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
          <Route path="/profile/leccion/historia" element={<History />} />
          <Route path="/profile/leccion" element={<Leccion />} />
          <Route path="/model-religion" element={<Model3d />} />
          <Route path="/model-vida" element={<ModelVida3d />} />
        </Routes>
      </Router>
    </>
  );

}

export default App;
