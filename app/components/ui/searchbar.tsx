'use client'

import React, { useState } from "react";
import { Search } from "lucide-react"; // Icône de recherche
import { useRouter } from "next/navigation";

interface Item {
  id: number;
  name: string;
  path: string; // Ajout du chemin de la page associée
}


const items: Item[] = [
  { id: 1, name: "Apercu", path: "/" },
  { id: 2, name: "Démarrage rapide", path: "/pages/quickstart" },
  { id: 3, name: "Journal des modifications", path: "/pages/changelog" },
  { id: 4, name: "Conditions & Politiques", path: "/pages/politic" },
  { id: 5, name: "Introduction", path: "/pages/introduction" },
  { id: 5, name: "NOS ENDPOINTS", path: "/pages/endpoint" },
  { id: 6, name: "Structure des dossiers", path: "/pages/bonusrules" },
  { id: 7, name: "Attribution automatique des récompenses", path: "/pages/autoaward" },
  { id: 8, name: "Suivi et gestion ds récompenses", path: "/pages/suivirecompenses" },
  { id: 9, name: "Gestion des bénéficiaires", path: "/pages/gestionbeneficiaire" },

];

const SearchBar: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const router = useRouter();

  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSelect = (path: string) => {
    setSearchTerm(""); // Réinitialiser la barre de recherche
    setIsFocused(false); // Masquer les suggestions
    router.push(path); // Redirection vers la page sélectionnée
  };

  return (
    <div className="relative">
      {/* Champ de recherche */}
      <div className="flex items-center border border-blue-600 rounded-md px-3 py-1 bg-white">
        <Search className="w-4 h-4 text-gray-500 mr-2" />
        <input
          type="search"
          placeholder="Search"
          className="border-0 focus:ring-0 placeholder-gray-500 w-full outline-none"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setTimeout(() => setIsFocused(false), 200)}
        />
        <span className="text-sm text-gray-500 ml-2">CTRL K</span>
      </div>

      {/* Résultats de recherche */}
      {isFocused && searchTerm.length > 0 && (
        <ul className="absolute top-full left-0 mt-2 w-full bg-white border rounded-md shadow-lg overflow-hidden z-10">
          {filteredItems.length > 0 ? (
            filteredItems.map((item) => (
              <li
                key={item.id}
                onMouseDown={() => handleSelect(item.path)}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-gray-700"
              >
                {item.name}
              </li>
            ))
          ) : (
            <li className="px-4 py-2 text-gray-500 text-center">Aucun résultat</li>
          )}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
