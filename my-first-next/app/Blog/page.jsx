// Blog Page - pages/blog.tsx
export default function Blog() {
  return (
    <main className="p-10 space-y-6">
      <h1 className="text-4xl font-bold">📝 Blog</h1>
      <p className="text-lg text-gray-600">
        Lees onze laatste inzichten, nieuws en updates.
      </p>
      <div className="space-y-4">
        <div className="bg-white p-5 rounded-2xl shadow hover:shadow-md transition">
          <h2 className="text-2xl font-semibold">
            Waarom design thinking je product beter maakt
          </h2>
          <p className="text-gray-500">
            Ontdek hoe design thinking leidt tot gebruiksvriendelijkere digitale
            producten en betrokken gebruikers.
          </p>
          <button className="mt-3 px-4 py-2 text-white bg-green-500 rounded-xl hover:bg-green-600">
            Lees meer
          </button>
        </div>
        <div className="bg-white p-5 rounded-2xl shadow hover:shadow-md transition">
          <h2 className="text-2xl font-semibold">
            Top 5 trends in front-end ontwikkeling 2025
          </h2>
          <p className="text-gray-500">
            Van AI-gedreven interfaces tot nieuwe CSS features — blijf
            up-to-date met deze trends.
          </p>
          <button className="mt-3 px-4 py-2 text-white bg-green-500 rounded-xl hover:bg-green-600">
            Lees meer
          </button>
        </div>
        <div className="bg-white p-5 rounded-2xl shadow hover:shadow-md transition">
          <h2 className="text-2xl font-semibold">
            Accessibility: meer dan alleen contrast
          </h2>
          <p className="text-gray-500">
            Toegankelijkheid is essentieel voor iedereen. Leer hoe je jouw
            website voor iedereen bruikbaar maakt.
          </p>
          <button className="mt-3 px-4 py-2 text-white bg-green-500 rounded-xl hover:bg-green-600">
            Lees meer
          </button>
        </div>
      </div>
    </main>
  );
}
