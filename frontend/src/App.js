import './DesktopGeneral.css';
import './MobileGeneral.css';
import Home from './components/pages/Home';
import SignIn from './components/pages/SingIn';

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
        </Routes>
      </Router>
    </>
  );

}

export default App;
