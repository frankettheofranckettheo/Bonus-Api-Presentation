import React from 'react';
import Sidebar from '../../sidebar'; // Assurez-vous que le chemin est correct
import Navbar from '../../components/ui/navbar'; // Assurez-vous que le chemin est correct

const Changelog = () => {
    return (
        <div className="">
            <Navbar />

            {/* Contenu principal */}
            <div className="flex">
                <Sidebar />

                {/* Contenu du Changelog */}
                <main className="flex-1 min-h-screen bg-gradient-to-b from-gray-50 to-white py-12">
                    <div className="max-w-4xl mx-auto px-4">
                        {/* En-tête avec bordure décorative */}
                        <div className="text-center mb-16 relative">
                            <div className="absolute left-1/2 -translate-x-1/2 top-0 w-24 h-1 bg-blue-500 rounded-full"/>
                            <h1 className="text-4xl font-bold text-gray-900 mb-4 pt-6">Journal des Modifications</h1>
                            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                                Suivez l&apos;évolution de notre application et découvrez les nouvelles fonctionnalités
                            </p>
                        </div>

                        {/* Version 1.2.0 */}
                        <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border-l-4 border-blue-500 mb-8">
                            <div className="flex items-center justify-between mb-4">
                                <h2 className="text-2xl font-semibold text-gray-900">Version 1.2.0</h2>
                                <span className="text-gray-500 font-medium">20 Février 2025</span>
                            </div>
                            <div className="bg-gray-50 rounded-lg p-6 border border-gray-100">
                                <ul className="space-y-3 text-gray-600">
                                    <li className="flex items-start">
                                        <span className="text-blue-500 mr-2">•</span>
                                        <span className="hover:text-gray-900 transition-colors">
                  Modification de la gestion des règles personnalisées pour les bonifications
                </span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-blue-500 mr-2">•</span>
                                        <span className="hover:text-gray-900 transition-colors">
                  Personnalisation des seuils de récompenses
                </span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-blue-500 mr-2">•</span>
                                        <span className="hover:text-gray-900 transition-colors">
                  Intégration avec des plateformes tierces pour plus de flexibilité
                </span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Version 1.1.0 */}
                        <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border-l-4 border-green-500 mb-8">
                            <div className="flex items-center justify-between mb-4">
                                <h2 className="text-2xl font-semibold text-gray-900">Version 1.1.0</h2>
                                <span className="text-gray-500 font-medium">10 Février 2025</span>
                            </div>
                            <div className="bg-gray-50 rounded-lg p-6 border border-gray-100">
                                <ul className="space-y-3 text-gray-600">
                                    <li className="flex items-start">
                                        <span className="text-green-500 mr-2">•</span>
                                        <span className="hover:text-gray-900 transition-colors">
                  Modification de la structure du tableau de bord des transactions et recompenses
                </span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-green-500 mr-2">•</span>
                                        <span className="hover:text-gray-900 transition-colors">
                  Amélioration de la sécurité des sessions utilisateurs
                </span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-green-500 mr-2">•</span>
                                        <span className="hover:text-gray-900 transition-colors">
                  Correction de bugs mineurs sur la validation des transactions
                </span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Version 1.0.0 */}
                        <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border-l-4 border-purple-500">
                            <div className="flex items-center justify-between mb-4">
                                <h2 className="text-2xl font-semibold text-gray-900">Version 1.0.0</h2>
                                <span className="text-gray-500 font-medium">15 Septembre 2024</span>
                            </div>
                            <div className="bg-gray-50 rounded-lg p-6 border border-gray-100">
                                <ul className="space-y-3 text-gray-600">
                                    <li className="flex items-start">
                                        <span className="text-purple-500 mr-2">•</span>
                                        <span className="hover:text-gray-900 transition-colors">
                  Première version de l&apos;application de bonification
                </span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-purple-500 mr-2">•</span>
                                        <span className="hover:text-gray-900 transition-colors">
                  Suivi des transactions et attribution automatique des points
                </span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-purple-500 mr-2">•</span>
                                        <span className="hover:text-gray-900 transition-colors">
                  Interface utilisateur pour visualiser les récompenses disponibles
                </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Changelog;
