"use client";

import React from "react";

export default function Page() {
  const templates = [
    {
      title: "📁 Portfolio Template",
      desc: "Een strakke, minimalistische template om je werk en projecten professioneel te presenteren.",
    },
    {
      title: "🚀 Landing Page Template",
      desc: "Perfect voor het promoten van een nieuw product, app of dienst met conversiegerichte opmaak.",
    },
    {
      title: "📝 Blog Template",
      desc: "Start direct met bloggen met een overzichtelijke en moderne blog-layout.",
    },
    {
      title: "🛒 E-commerce Template",
      desc: "Ideaal voor het snel opzetten van een kleine webshop of productpagina.",
    },
  ];

  return (
    <main className="p-10 space-y-6 bg-white min-h-screen">
      <h1 className="text-4xl font-bold">📦 Templates</h1>
      <p className="text-lg text-gray-600">
        Kies een kant-en-klare template om snel te starten.
      </p>

      {/* 🔧 Responsive grid met min 360px per card */}
      <div
        className="grid gap-8 max-w-screen-xl mx-auto"
        style={{ gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))" }}
      >
        {templates.map((item, index) => (
          <div
            key={index}
            className="p-8 rounded-2xl bg-gray-50 shadow-md hover:shadow-xl transition duration-300 flex flex-col justify-between h-full"
            style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.08)" }}
          >
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-500 flex-1">{item.desc}</p>
            <button className="mt-4 bg-purple-500 text-white px-4 py-2 rounded-xl hover:bg-purple-600 transition">
              Gebruik template
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}
