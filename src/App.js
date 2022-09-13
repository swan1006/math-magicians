import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Calculator from './components/pages/Calculator';
import HomePage from './components/pages/Home';
import QuotePage from './components/pages/Quote';

const App = () => (
  <>
    <Navbar />
    <Routes>
      <Route exact path="/" element={<HomePage />} />
      <Route path="/calculator" element={<Calculator />} />
      <Route path="/quote" element={<QuotePage />} />
    </Routes>
  </>
);

export default App;
