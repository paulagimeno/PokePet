import './App.css';
import '../src/Styles/Styles.css';
import { Route, Routes, HashRouter as Router } from 'react-router-dom';
import PetSelection from './pages/PetSelection/PetSelection';

function App() {
  return (
    <Router>
    <div>
      <Routes>
        <Route path="/PetSelection" element={<PetSelection/>}/>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
