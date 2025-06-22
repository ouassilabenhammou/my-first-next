"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Showcase() {
  const [users, setUsers] = useState([]);

  const emojis = ["👤"];

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.error("Fout bij ophalen:", err));
  }, []);

  return (
    <main className="grid mt-4 gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
      <h2 className="text-center text-3xl font-bold text-gray-800 col-span-full mb-10">
        🎨 Gebruikers Showcase
      </h2>

      {users.map((user, index) => (
        <div
          key={user.id}
          className="card flex flex-col justify-between p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 bg-white"
        >
          <div>
            <div className="text-5xl mb-4">{emojis[index % emojis.length]}</div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              {user.name}
            </h3>
            <p className="text-gray-700 text-sm mb-1">
              <strong>Email:</strong> {user.email}
            </p>
            <p className="text-gray-700 text-sm mb-1">
              <strong>Bedrijf:</strong> {user.company?.name}
            </p>
            <p className="text-gray-700 text-sm mb-4">
              <strong>Adres:</strong> {user.address?.city},{" "}
              {user.address?.street}
            </p>
          </div>

          <Link
            href={`http://${user.website}`}
            target="_blank"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-5 py-2 rounded-full shadow-sm transition self-start"
          >
            Bezoek website
          </Link>
        </div>
      ))}
    </main>
  );
}
