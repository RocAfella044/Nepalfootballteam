import { useState } from 'react';
import { Menu, X, Search, User } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar({ onSearch, onLoginClick }) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const location = useLocation();

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value);
  };

const navLinks = [
  { path: '/news', label: 'News' },
  { path: '/fixtures', label: 'Fixtures' },
  { path: '/players', label: 'Players' },
  { path: '/trophies', label: 'Trophies' },
  { path: '/history', label: 'History' },
];
  return (
    <nav className="sticky top-0 z-50 shadow-lg">
      {/* Mixed Red + Blue Gradient Background */}
      <div className="bg-linear-to-r from-red-700  to-blue-500 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/news" className="flex items-center gap-3">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhsju22NIo6pKt4p_sLH72LEta3ir800-Org&ss"
                alt="ANFA Logo"
                className="w-12 h-12 object-contain"
              />
              <div>
                <h1 className="text-2x font-bold tracking-tight">
                  ANFA{' '}
                </h1>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`hover:text-blue-300 font-medium transition relative group ${
                    location.pathname === link.path ? 'text-blue-300' : ''
                  }`}
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-300 group-hover:w-full transition-all"></span>
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-4">
              {/* Search Bar */}
              {/* <div className="relative hidden md:block w-80">
                <input
                  type="text"
                  placeholder="Search to know more"
                  value={searchTerm}
                  onChange={handleSearch}
                  className="w-full bg-white/20 text-white placeholder:text-white/70 px-4 py-2.5 pl-11 rounded-full focus:outline-none focus:bg-white/30 focus:ring-2 focus:ring-blue-100 transition"
                />
                <Search className="absolute left-4 top-3 w-5 h-5 text-white/70" />
              </div> */}


              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden p-2 hover:bg-white/20 rounded-lg transition"
              >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-linear-to-r from-red-700 to-blue-700 border-t border-white/30 py-6">
          <div className="flex flex-col items-center gap-6 text-lg">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`hover:text-blue-300 transition ${
                  location.pathname === link.path
                    ? 'text-blue-300 font-bold'
                    : ''
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
