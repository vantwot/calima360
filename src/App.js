import './DesktopGeneral.css';
import './MobileGeneral.css';
import Home from './components/pages/Home';

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
        </Routes>
      </Router>
    </>
  );

}

export default App;
