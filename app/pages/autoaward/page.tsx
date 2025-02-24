import React from "react";
import Sidebar from "../../sidebar";
import Navbar from "@/app/components/ui/navbar"; // Assurez-vous que le chemin d'importation est correct

const AutoRewards = () => {
    return (
        <div>
            <Navbar/>

            <div className="flex min-h-screen bg-gradient-to-b from-gray-50 to-white">
                {/* Sidebar */}
                <Sidebar/>

                {/* Contenu principal */}
                <main className="flex-1 p-8 overflow-y-auto">
                    <div className="max-w-4xl mx-auto">
                        {/* En-tête avec bordure décorative */}
                        <div className="text-center mb-16 relative">
                            <div
                                className="absolute left-1/2 -translate-x-1/2 top-0 w-24 h-1 bg-blue-500 rounded-full"/>
                            <h1 className="text-4xl font-bold text-gray-900 mb-4 pt-6">Attribution automatique de
                                récompenses</h1>
                            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                                Guide complet pour comprendre et gérer l&apos;attribution automatique des récompenses.
                            </p>
                        </div>

                        {/* Section 1 : Principe de l'attribution automatique */}
                        <div
                            className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border-l-4 border-blue-500 mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Principe de l&apos;attribution
                                automatique</h2>
                            <p className="text-gray-600">
                                L&apos;application analyse les transactions des utilisateurs et applique les règles de
                                bonification définies par l&apos;administrateur. Lorsque les critères sont remplis, une
                                récompense est automatiquement attribuée.
                            </p>
                        </div>

                        {/* Section 2 : Déclenchement des récompenses */}
                        <div
                            className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border-l-4 border-green-500 mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Déclenchement des
                                récompenses</h2>
                            <p className="text-gray-600 mb-4">
                                Une récompense est attribuée lorsque :
                            </p>
                            <ul className="list-disc pl-6 text-gray-600 space-y-2">
                                <li>Un utilisateur atteint un seuil de transactions défini.</li>
                                <li>Le montant total dépensé dépasse une certaine valeur.</li>
                                <li>Une action spécifique est réalisée (exemple : parrainage, abonnement premium).</li>
                            </ul>
                        </div>

                        {/* Section 3 : Types de récompenses */}
                        <div
                            className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border-l-4 border-purple-500 mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Types de récompenses</h2>
                            <p className="text-gray-600 mb-4">
                                Les récompenses attribuées automatiquement peuvent être :
                            </p>
                            <ul className="list-disc pl-6 text-gray-600 space-y-2">
                                <li><strong>Points de fidélité</strong> : cumulables et échangeables contre des
                                    avantages.
                                </li>
                                <li><strong>Réductions</strong> : remises appliquées sur les prochains achats.</li>
                                <li><strong>Cashback</strong> : remboursement partiel des dépenses sous forme de crédit.
                                </li>
                                <li><strong>Produits gratuits</strong> : articles offerts après un certain nombre
                                    d’achats.
                                </li>
                            </ul>
                        </div>

                        {/* Section 4 : Gestion et suivi */}
                        <div
                            className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border-l-4 border-orange-500 mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Gestion et suivi</h2>
                            <p className="text-gray-600">
                                Les administrateurs peuvent consulter les récompenses attribuées via le tableau de bord
                                et modifier les règles si nécessaire.
                            </p>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default AutoRewards;