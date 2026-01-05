export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center py-12">
      <h1 className="text-4xl font-bold text-primary-900 mb-6 font-serif">Welcome to the Club</h1>
      <p className="text-lg text-neutral-600 max-w-2xl text-center mb-8">
        The official digital ecosystem for Amafor Gladiators Football Club.
        Follow matches, check player stats, and stay updated with the latest news.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
        <div className="bg-white p-6 rounded-lg shadow-card border border-neutral-200">
          <h2 className="text-2xl font-bold mb-4 text-secondary-700">Latest News</h2>
          <p className="text-neutral-500">No news available yet.</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-card border border-neutral-200">
          <h2 className="text-2xl font-bold mb-4 text-secondary-700">Upcoming Fixtures</h2>
          <p className="text-neutral-500">No fixtures scheduled.</p>
        </div>
      </div>
    </div>
  );
}
