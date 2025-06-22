import React from "react";

export default function page() {
  return (
    <main className="p-10 space-y-6">
      <h1 className="text-4xl font-bold">🏢 Enterprise</h1>
      <p className="text-lg text-gray-600">
        Oplossingen op maat voor grote organisaties en teams.
      </p>
      <section className="bg-white rounded-2xl p-6 shadow space-y-4">
        <h2 className="text-2xl font-semibold">
          Waarom kiezen voor Enterprise?
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>Schaalbare infrastructuur</li>
          <li>Prioritaire ondersteuning</li>
          <li>Beveiliging op hoog niveau</li>
          <li>Aangepaste integraties</li>
        </ul>
        <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded-xl hover:bg-red-600">
          Vraag een demo aan
        </button>
      </section>
    </main>
  );
}
