import { playersData } from '../data/players';
import { useState } from 'react';

export default function Players({ searchTerm }) {
  const filtered = playersData.filter((p) =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <section id="players" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-black text-center mb-12">Our Recent Squad</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filtered.map((player) => (
            <div key={player.id} className="text-center group">
              <div className="mx-auto w-64 h-64 rounded-2xl overflow-hidden shadow-xl">
                <img
                  src={player.image}
                  alt={player.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition"
                />
              </div>
              <div className="mt-6">
                <div className="text-4xl font-bold text-black">
                  #{player.number}
                </div>
                <h3 className="text-2xl font-semibold mt-2">{player.name}</h3>
                <p className="text-gray-500">{player.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
