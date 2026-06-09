import { newsData } from '../data/news';

export default function News() {
  return (
    <section id="news" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-black text-center mb-12">Latest News</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {newsData.map((news) => (
            <div
              key={news.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg"
            >
              <img className
                src={news.image}
                alt={news.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <p className="text-black text-sm">{news.date}</p>
                <h3 className="text-2xl font-semibold mt-2 mb-3">
                  {news.title}
                </h3>
                <p className="text-gray-600">{news.summary}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
