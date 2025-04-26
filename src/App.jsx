// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GlobalStyles from './styles/GlobalStyles';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Outras rotas serão adicionadas posteriormente */}
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
