import Link from "next/link";

export default function Showcase() {
  const components = [
    {
      title: "Navbar Component",
      description: "Een eenvoudige, responsive navigatiebalk met links.",
      emoji: "🧭",
      color: "bg-blue-100",
    },
    {
      title: "Dark Mode Toggle",
      description: "Schakel tussen licht en donker thema met één klik.",
      emoji: "🌙",
      color: "bg-purple-100",
    },
    {
      title: "Hero Section",
      description: "Een opvallende header voor je landingpagina.",
      emoji: "🚀",
      color: "bg-green-100",
    },
    {
      title: "Call to Action",
      description: "Een knopblok om de gebruiker tot actie aan te zetten.",
      emoji: "📢",
      color: "bg-yellow-100",
    },
    {
      title: "Card Grid",
      description: "Een flexibel overzicht met herbruikbare kaarten.",
      emoji: "🃏",
      color: "bg-pink-100",
    },
    {
      title: "Footer Component",
      description: "Een nette footer met links en copyright.",
      emoji: "📄",
      color: "bg-gray-100",
    },
  ];

  return (
    <main className="grid mt-4">
      <h2 className="text-center text-3xl font-bold text-gray-800 col-span-12 mb-10">
        🎨 Showcase
      </h2>

      {components.map((comp, index) => (
        <div
          key={index}
          className={`card ${comp.color} flex flex-col justify-between p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300`}
        >
          <div>
            <div className="text-5xl mb-4">{comp.emoji}</div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              {comp.title}
            </h3>
            <p className="text-gray-700 text-sm mb-6 leading-relaxed">
              {comp.description}
            </p>
          </div>

          <Link
            href="#"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-5 py-2 rounded-full shadow-sm transition self-start"
          >
            Bekijk component
          </Link>
        </div>
      ))}
    </main>
  );
}
