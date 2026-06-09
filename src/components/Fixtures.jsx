import { fixturesData } from '../data/fixtures';

export default function Fixtures() {
  return (
    <section id="fixtures" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl text-black font-bold text-center mb-12">
          Upcoming Fixtures
        </h2>

        <div className="space-y-6 max-w-3xl mx-auto">
          {fixturesData.map((match) => (
            <div
              key={match.id}
              className="bg-white rounded-2xl shadow p-6 flex flex-col md:flex-row items-center justify-between gap-6"
            >
              <div className="flex items-center gap-6">
                <div className="text-center md:text-left">
                  <p className="font-semibold text-xl">Nepal</p>
                  <p className="text-gray-500">vs</p>
                  <p className="font-semibold text-xl">{match.opponent}</p>
                </div>
              </div>

              <div className="text-center">
                <p className="text-blue-500 font-bold">{match.Type}</p>
                <p className="text-black font-bold">{match.date}</p>
                <p className="text-2xl font-bold">{match.time}</p>
                <p className="text-gray-500 text-sm">{match.venue}</p>
              </div>

              <div className="bg-blue-200 text-black px-6 py-3 rounded-xl font-semibold">
                {match.status}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
