import { FaFacebook } from 'react-icons/fa';
import { BsInstagram } from 'react-icons/bs';
import { BsTwitterX } from 'react-icons/bs';
import { useState } from 'react';

export default function Footer() {
  const [feedback, setFeedback] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleFeedback = (e) => {
    e.preventDefault();
    if (feedback.trim()) {
      alert('Thank you for your feedback!');
      setFeedback('');
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 2500);
    }
  };

  return (
    <footer className="bg-gray-900 text-gray-400 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-10">
          {/* LEFT - Logo & About */}
          <div>
            <div className="flex items-center gap-3 text-white mb-4">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhsju22NIo6pKt4p_sLH72LEta3ir800-Org&ss"
                alt="ANFA Logo"
                className="w-10 h-10 object-contain"
              />
              <h3 className="text-2xl font-bold">Nepal Football</h3>
            </div>
            <p className="text-sm leading-relaxed">
              All Nepal Football Association (ANFA)
              <br />
              Official Website of Nepal National Football Team
            </p>
          </div>

          {/* MIDDLE - Contact + Social Media */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact Us</h4>
            <p className="text-sm">Dasharath Stadium</p>
            <p className="text-sm">Kathmandu, Nepal</p>
            <p className="text-sm mt-3">Email: info@anfa.org.np</p>

            {/* Social Media - Between Contact and Feedback */}
            <div className="mt-8">
              <h4 className="text-white font-semibold mb-4">Follow Us</h4>
              <div className="flex gap-6 text-3xl">
                <a
                  href="https://www.facebook.com/theanfaofficial/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-500 transition"
                >
                  <FaFacebook />
                </a>
                <a
                  href="https://www.instagram.com/theanfaofficial/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-pink-500 transition"
                >
                  <BsInstagram />
                </a>
                <a
                  href="https://x.com/theanfaofficial"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-700 transition"
                >
                  <BsTwitterX />
                </a>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Feedback</h4>
            <form onSubmit={handleFeedback} className="space-y-3">
              <textarea
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                placeholder="Share your thoughts.."
                rows="5"
                className="w-full bg-gray-800 border border-gray-700 rounded-2xl p-4 text-sm focus:outline-none focus:border-blue-300 resize-y"
              />
              <button
                type="submit"
                className="bg-black hover:bg-blue-700 text-white px-6 py-3 rounded-2xl text-sm font-medium transition w-full"
              >
                Send Feedback
              </button>
            </form>
            {submitted && (
              <p className="text-green-400 text-sm mt-3">
                 Thank you for your feedback!
              </p>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
