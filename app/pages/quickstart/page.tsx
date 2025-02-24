import React from 'react';
import Sidebar from '../../sidebar'; // Assurez-vous que le chemin d'importation est correct
import Navbar from '../../components/ui/navbar'; // Assurez-vous que le chemin d'importation est correct

const QuickStartGuide = () => {
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
                            <h1 className="text-4xl font-bold text-gray-900 mb-4 pt-6">Guide de Démarrage Rapide</h1>
                            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                                Découvrez comment configurer et utiliser notre système de récompenses
                            </p>
                        </div>

                        {/* Sections du guide */}
                        <div className="space-y-8">
                            {/* Introduction */}
                            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border-l-4 border-blue-500">
                                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Introduction</h2>
                                <p className="text-gray-600 leading-relaxed">
                                    Bienvenue dans notre application de bonification. Ce guide vous aidera à configurer rapidement
                                    et à commencer à utiliser le système de récompenses basé sur vos transactions.
                                </p>
                            </div>

                            {/* Création de compte */}
                            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border-l-4 border-green-500">
                                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Création d&apos;un Compte</h2>
                                <div className="bg-gray-50 rounded-lg p-6 border border-gray-100">
                                    <ol className="list-decimal ml-4 space-y-3 text-gray-600">
                                        <li className="pl-2 hover:text-gray-900 transition-colors">Accédez à la page d&apos;inscription</li>
                                        <li className="pl-2 hover:text-gray-900 transition-colors">Remplissez vos informations personnelles (nom, e-mail, mot de passe)</li>
                                        <li className="pl-2 hover:text-gray-900 transition-colors">Validez votre adresse e-mail via le lien reçu</li>
                                    </ol>
                                </div>
                            </div>

                            {/* Connexion */}
                            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border-l-4 border-purple-500">
                                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Connexion</h2>
                                <div className="bg-gray-50 rounded-lg p-6 border border-gray-100">
                                    <ol className="list-decimal ml-4 space-y-3 text-gray-600">
                                        <li className="pl-2 hover:text-gray-900 transition-colors">Rendez-vous sur la page de connexion</li>
                                        <li className="pl-2 hover:text-gray-900 transition-colors">Saisissez votre adresse e-mail et votre mot de passe</li>
                                        <li className="pl-2 hover:text-gray-900 transition-colors">Accédez à votre tableau de bord</li>
                                    </ol>
                                </div>
                            </div>

                            {/* Transactions */}
                            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border-l-4 border-orange-500">
                                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Gestion des Transactions</h2>
                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    Chaque transaction que vos utilisateurs effectueront est enregistrée et des points de bonification sont calculés
                                    en fonction des règles définies.
                                </p>
                                <div className="bg-gray-50 rounded-lg p-6 border border-gray-100">
                                    <p className="text-gray-700 font-medium mb-4">Fonctionnalités disponibles :</p>
                                    <ul className="list-disc ml-8 space-y-3 text-gray-600">
                                        <li className="pl-2 hover:text-gray-900 transition-colors">
                                            Tableau de bord avec historique des transactions
                                        </li>
                                        <li className="pl-2 hover:text-gray-900 transition-colors">
                                            Visualisation des points accumulés pour chaque achat
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            {/* Support */}
                            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border-l-4 border-red-500">
                                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Support</h2>
                                <div className="bg-gray-50 rounded-lg p-6 border border-gray-100">
                                    <p className="text-gray-600">
                                        Si vous avez des questions ou besoin d&apos;aide, contactez-nous à :
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
                    </div>
                </main>
            </div>
        </div>
    );
};

export default QuickStartGuide;
