export default function Hero() {
  return (
    <section className="football-bg h-screen flex items-center text-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h1 className="text-6xl md:text-7xl font-bold mb-6">
          NEPAL NATIONAL FOOTBALL TEAM
        </h1>
        <p className="text-2xl mb-10">The Red Warriors • जय नेपाल!</p>
        <a
          href="#fixtures"
          className="bg-blue-400 hover:bg-blue-300 text-black font-bold px-10 py-4 rounded-full text-xl inline-block"
        >
          Upcoming Matches
        </a>
      </div>
    </section>
  );
}
