import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import News from './components/News';
import History from './components/History';
import Home from './pages/Home';
import NewsPage from './pages/NewsPage';
import PlayersPage from './pages/PlayersPage';
import TrophiesPage from './pages/TrophiesPage';
import FixturesPage from './pages/FixturesPage';
import FeedbackPage from './pages/FeedbackPage';
import HistoryPage from './pages/HistoryPage';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
<Navbar/>
        <Routes>
          <Route path="/news" element={<News />} />
          <Route path="/" element={<NewsPage />} />
          <Route
            path="/players"
            element={<PlayersPage searchTerm={searchTerm} />}
          />
          <Route path="/trophies" element={<TrophiesPage />} />
          <Route path="/fixtures" element={<FixturesPage />} />
          <Route path="/feedback" element={<FeedbackPage />} />
          <Route path="/History" element={<HistoryPage />} />
        </Routes>
<Footer/>
      </div>
    </Router>
  );
}

export default App;
