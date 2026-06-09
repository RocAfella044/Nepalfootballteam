import { trophiesData } from '../data/trophies';

export default function Trophies() {
  return (
    <section id="trophies" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-black">
          Trophies & Achievements
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trophiesData.map((trophy) => (
            <div
              key={trophy.id}
              className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition"
            >
              <img
                src={trophy.image}
                alt={trophy.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold">{trophy.title}</h3>
                <p className="text-black text-xl mt-2">🏆 {trophy.year}</p>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
