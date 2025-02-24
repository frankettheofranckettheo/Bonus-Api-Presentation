import React from 'react';
import Sidebar from '../../sidebar'; // Assurez-vous que le chemin d'importation est correct
import Navbar from '../../components/ui/navbar'; // Assurez-vous que le chemin d'importation est correct

const PrivacyPolicy = () => {
    return (
        <div className=" min-h-screen bg-gradient-to-b from-gray-50 to-white">
            {/* Sidebar */}
            <Navbar />

            {/* Contenu principal */}
            <div className="flex flex-1">
                {/* Navbar */}
                <Sidebar />

                <main className="flex-1 p-8 overflow-y-auto">
                    <div className="max-w-4xl mx-auto px-4">
                        {/* En-tête avec bordure décorative */}
                        <div className="text-center mb-16 relative">
                            <div className="absolute left-1/2 -translate-x-1/2 top-0 w-24 h-1 bg-blue-500 rounded-full" />
                            <h1 className="text-4xl font-bold text-gray-900 mb-4 pt-6">Politique de Confidentialité</h1>
                            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                                Comment nous protégeons et utilisons vos données personnelles
                            </p>
                        </div>

                        {/* Introduction */}
                        <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border-l-4 border-blue-500 mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Introduction</h2>
                            <p className="text-gray-600 leading-relaxed">
                                Cette politique de confidentialité décrit comment notre application de bonification collecte,
                                utilise et protège vos informations personnelles lorsque vous utilisez notre service.
                            </p>
                        </div>

                        {/* Informations Collectées */}
                        <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border-l-4 border-green-500 mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Informations Collectées</h2>
                            <p className="text-gray-600 mb-4">
                                Nous collectons les informations suivantes pour vous fournir et améliorer notre service :
                            </p>
                            <div className="bg-gray-50 rounded-lg p-6 border border-gray-100">
                                <ul className="space-y-3 text-gray-600">
                                    {[
                                        "Informations d'identification (nom, adresse e-mail, numéro de téléphone)",
                                        "Historique des transactions pour calculer vos points de bonification",
                                        "Informations techniques (adresse IP, type de navigateur, logs d'activité)"
                                    ].map((item, index) => (
                                        <li key={index} className="flex items-start">
                                            <span className="text-green-500 mr-2">•</span>
                                            <span className="hover:text-gray-900 transition-colors">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Utilisation des Informations */}
                        <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border-l-4 border-purple-500 mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Utilisation des Informations</h2>
                            <p className="text-gray-600 mb-4">Nous utilisons vos informations personnelles pour :</p>
                            <div className="bg-gray-50 rounded-lg p-6 border border-gray-100">
                                <ul className="space-y-3 text-gray-600">
                                    {[
                                        "Attribuer des points de bonification en fonction de vos transactions",
                                        "Gérer votre compte et vos préférences utilisateur",
                                        "Améliorer la qualité et la sécurité de nos services",
                                        "Communiquer avec vous sur des mises à jour ou des offres spéciales"
                                    ].map((item, index) => (
                                        <li key={index} className="flex items-start">
                                            <span className="text-purple-500 mr-2">•</span>
                                            <span className="hover:text-gray-900 transition-colors">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Partage des Informations */}
                        <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border-l-4 border-orange-500 mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Partage des Informations</h2>
                            <p className="text-gray-600 mb-4">
                                Vos informations personnelles ne sont ni vendues, ni louées. Nous pouvons les partager avec :
                            </p>
                            <div className="bg-gray-50 rounded-lg p-6 border border-gray-100">
                                <ul className="space-y-3 text-gray-600">
                                    {[
                                        "Des prestataires de services pour le traitement des transactions",
                                        "Des autorités si la loi l'exige"
                                    ].map((item, index) => (
                                        <li key={index} className="flex items-start">
                                            <span className="text-orange-500 mr-2">•</span>
                                            <span className="hover:text-gray-900 transition-colors">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Sécurité des Données */}
                        <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border-l-4 border-red-500 mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Sécurité des Données</h2>
                            <p className="text-gray-600 leading-relaxed">
                                Nous prenons des mesures raisonnables pour protéger vos informations personnelles contre
                                l&apos;accès non autorisé, l&apos;altération ou la destruction.
                            </p>
                        </div>

                        {/* Vos Droits */}
                        <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border-l-4 border-indigo-500 mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Vos Droits</h2>
                            <p className="text-gray-600 mb-4">Vous avez le droit de :</p>
                            <div className="bg-gray-50 rounded-lg p-6 border border-gray-100">
                                <ul className="space-y-3 text-gray-600">
                                    {[
                                        "Accéder à vos informations personnelles",
                                        "Demander la correction ou la suppression de vos données",
                                        "Vous opposer à certains traitements de vos données"
                                    ].map((item, index) => (
                                        <li key={index} className="flex items-start">
                                            <span className="text-indigo-500 mr-2">•</span>
                                            <span className="hover:text-gray-900 transition-colors">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Modifications de la Politique */}
                        <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border-l-4 border-teal-500 mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Modifications de la Politique</h2>
                            <p className="text-gray-600 leading-relaxed">
                                Nous pouvons mettre à jour cette politique de confidentialité périodiquement. Les changements
                                seront notifiés sur cette page.
                            </p>
                        </div>

                        {/* Contact */}
                        <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border-l-4 border-pink-500">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Contact</h2>
                            <div className="bg-gray-50 rounded-lg p-6 border border-gray-100">
                                <p className="text-gray-600">
                                    Pour toute question concernant cette politique de confidentialité, contactez-nous à :
                                    <a
                                        href="mailto:ingenieurnoundjeu@gmail.com"
                                        className="text-blue-600 hover:text-blue-800 hover:underline ml-1 font-medium transition-colors"
                                    >
                                        ingenieurnoundjeu@gmail.com
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
