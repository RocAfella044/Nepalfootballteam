import { useState } from 'react';

export default function Feedback() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your feedback!!');
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section id="feedback" className="py-16 bg-white">
      <div className="max-w-2xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">
          Give Your Feedback
        </h2>

        <form
          onSubmit={handleSubmit}
          className="space-y-6 bg-gray-50 p-8 rounded-3xl"
        >
          <input
            type="text"
            placeholder="Your Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full px-5 py-4 rounded-2xl border focus:outline-none focus:border-red-500"
            required
          />

          <input
            type="email"
            placeholder="Your Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full px-5 py-4 rounded-2xl border focus:outline-none focus:border-red-500"
            required
          />

          <textarea
            placeholder="Your Message / Suggestion"
            rows="6"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="w-full px-5 py-4 rounded-2xl border focus:outline-none focus:border-red-500"
            required
          ></textarea>

          <button
            type="submit"
            className="w-full bg-red-700 hover:bg-red-800 text-white py-4 rounded-2xl font-semibold text-lg transition"
          >
            Submit Feedback
          </button>
        </form>
      </div>
    </section>
  );
}
