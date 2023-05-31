import logo from './logo.svg';
import './App.css';
import Main from './components/pages/Main';
import Successes from './components/pages/Successes';
import CandG from './components/pages/CandG';
import Insights from './components/pages/Insights';
import Goals from './components/pages/Goals';

import { BrowserRouter as Router, Routes, Route }
  from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route path="/successes" element={<Successes />} />
          <Route path="/challengesAndGrowth" element={<CandG />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/goals" element={<Goals />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
