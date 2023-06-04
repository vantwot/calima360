import './DesktopGeneral.css';
import './MobileGeneral.css';
import Home from './components/pages/Home';
import SignIn from './components/pages/SingIn';
import Profile from './components/pages/Profile';
import History from './components/pages/History';
import ReligionComponent3D from './components/pages/ReligionComponent3D';
import VidaComponent3D from './components/pages/VidaComponent3D';
import Leccion from './components/pages/Leccion';
import Mitologia from './components/pages/Mitologia';
import Mitologia_ from './components/pages/Mitologia_';
import Quiz from './components/pages/Quiz';

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
          <Route path="/model-religion" element={<ReligionComponent3D />} />
          <Route path="/model-vida" element={<VidaComponent3D />} />
          <Route path="/profile/leccion/mitologia" element={<Mitologia_ />} />
          <Route path="/model-mitologia" element={<Mitologia />} />
          <Route path="/profile/quiz" element={<Quiz />} />
        </Routes>
      </Router>
    </>
  );

}

export default App;
