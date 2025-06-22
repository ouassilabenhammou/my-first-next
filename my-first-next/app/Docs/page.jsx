"use client";

import React, { useState } from "react";

export default function page() {
  const docsItems = [
    {
      title: "📦 Installatie-instructies",
      content:
        "Leer hoe je het project installeert via npm of yarn en welke dependencies vereist zijn.",
    },
    {
      title: "🧱 Componenten gids",
      content: "Uitleg over herbruikbare componenten en hun props.",
    },
    {
      title: "🔌 API referentie",
      content: "Details over beschikbare endpoints en hoe je ermee werkt.",
    },
    {
      title: "❓ Veelgestelde vragen",
      content: "Antwoorden op de meest voorkomende vragen van gebruikers.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main className="p-10 space-y-6 min-h-screen">
      <h1 className="text-4xl font-bold">📚 Documentatie</h1>
      <p className="text-lg text-gray-600">
        Lees hoe je onze tools en features gebruikt.
      </p>

      <div className="space-y-4">
        {docsItems.map((item, index) => (
          <div
            key={index}
            className="rounded-xl bg-white p-4 transition-all duration-300"
            style={{ boxShadow: "0 4px 24px 0 rgba(0,0,0,0.10)" }}
          >
            <button
              className="flex items-center justify-between w-full text-left text-lg font-medium text-gray-800 hover:text-blue-600"
              onClick={() => toggleIndex(index)}
            >
              <span>{item.title}</span>
              <span
                className={`ml-2 transform transition-transform duration-300 ${
                  openIndex === index ? "rotate-180 text-blue-600" : ""
                }`}
              >
                ▼
              </span>
            </button>
            {openIndex === index && (
              <p className="mt-2 text-gray-600">{item.content}</p>
            )}
          </div>
        ))}
      </div>
    </main>
  );
}
