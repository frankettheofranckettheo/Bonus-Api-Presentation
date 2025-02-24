import React from "react";
import Sidebar from "../../sidebar"; // Assurez-vous que le chemin d'importation est correct
import Navbar from "../../components/ui/navbar"; // Assurez-vous que le chemin d'importation est correct

const GestionBeneficiaires = () => {
    return (
        <div className=" min-h-screen bg-gradient-to-b from-gray-50 to-white">
            {/* Sidebar */}
            <Navbar />

            {/* Contenu principal */}
            <div className="flex flex-1">
                {/* Navbar */}
                <Sidebar />

                <main className="flex-1 p-8 overflow-y-auto">
                    <div className="max-w-4xl mx-auto">
                        {/* En-tête avec bordure décorative */}
                        <div className="text-center mb-16 relative">
                            <div className="absolute left-1/2 -translate-x-1/2 top-0 w-24 h-1 bg-blue-500 rounded-full" />
                            <h1 className="text-4xl font-bold text-gray-900 mb-4 pt-6">Gestion des Bénéficiaires</h1>
                            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                                Guide complet pour gérer les bénéficiaires dans l’application de bonification.
                            </p>
                        </div>

                        {/* Section 1 : Ajout des bénéficiaires */}
                        <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border-l-4 border-blue-500 mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Ajout des bénéficiaires</h2>
                            <p className="text-gray-600 mb-4">
                                Les administrateurs peuvent ajouter des bénéficiaires manuellement via l&apos;interface d&apos;administration. Lorsqu&apos;un bénéficiaire est ajouté,
                                il commence à accumuler des transactions qui pourront lui permettre de recevoir des récompenses.
                            </p>
                            <ul className="list-disc pl-6 text-gray-600 space-y-2">
                                <li><strong>Ajout manuel :</strong> Ajouter des bénéficiaires en renseignant leurs informations de manière individuelle.</li>
                                <li><strong>Importation de masse :</strong> Ajouter plusieurs bénéficiaires en important un fichier CSV ou Excel.</li>
                            </ul>
                        </div>

                        {/* Section 2 : Modification des bénéficiaires */}
                        <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border-l-4 border-green-500 mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Modification des bénéficiaires</h2>
                            <p className="text-gray-600 mb-4">
                                Les administrateurs peuvent modifier les informations des bénéficiaires, comme leur statut d&apos;éligibilité et leurs données personnelles.
                            </p>
                            <ul className="list-disc pl-6 text-gray-600 space-y-2">
                                <li><strong>Modification des informations :</strong> Mise à jour des informations personnelles comme le nom et l&apos;email.</li>
                                <li><strong>Modification du statut :</strong> Activation ou désactivation du droit à recevoir des récompenses.</li>
                            </ul>
                        </div>

                        {/* Section 3 : Suppression des bénéficiaires */}
                        <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border-l-4 border-purple-500 mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Suppression des bénéficiaires</h2>
                            <p className="text-gray-600 mb-4">
                                Les administrateurs peuvent supprimer des bénéficiaires qui ne sont plus éligibles ou qui ne doivent plus recevoir de récompenses.
                            </p>
                            <ul className="list-disc pl-6 text-gray-600 space-y-2">
                                <li><strong>Suppression complète :</strong> Suppression définitive de toutes les informations du bénéficiaire.</li>
                                <li><strong>Suppression temporaire :</strong> Désactivation temporaire permettant une réactivation ultérieure.</li>
                            </ul>
                        </div>

                        {/* Section 4 : Gestion des transactions des bénéficiaires */}
                        <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border-l-4 border-orange-500 mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Gestion des transactions des bénéficiaires</h2>
                            <p className="text-gray-600 mb-4">
                                Les administrateurs peuvent consulter les transactions effectuées par chaque bénéficiaire et vérifier s&apos;ils remplissent les critères d&apos;éligibilité.
                            </p>
                            <ul className="list-disc pl-6 text-gray-600 space-y-2">
                                <li><strong>Consultation des transactions :</strong> Visualisation de l&apos;historique des transactions pour chaque bénéficiaire.</li>
                                <li><strong>Vérification des critères d&apos;éligibilité :</strong> S&apos;assurer que le bénéficiaire a atteint les critères pour recevoir des récompenses.</li>
                            </ul>
                        </div>

                        {/* Section 5 : Exemples de gestion des bénéficiaires */}
                        <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border-l-4 border-pink-500 mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Exemples de gestion des bénéficiaires</h2>
                            <p className="text-gray-600 mb-4">
                                Voici des exemples d&apos;actions possibles pour la gestion des bénéficiaires :
                            </p>
                            <ul className="list-disc pl-6 text-gray-600 space-y-2">
                                <li><strong>Activation de l&apos;éligibilité :</strong> Permettre à un bénéficiaire d&apos;être éligible après avoir rempli les conditions requises.</li>
                                <li><strong>Modification de statut :</strong> Changer le statut d&apos;un bénéficiaire pour l&apos;empêcher de recevoir des récompenses.</li>
                                <li><strong>Suppression :</strong> Retirer un bénéficiaire du système lorsqu&apos;il ne respecte plus les conditions.</li>
                            </ul>
                        </div>

                        {/* Section 6 : API pour la gestion des bénéficiaires */}
                        <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border-l-4 border-indigo-500 mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. API pour la gestion des bénéficiaires</h2>
                            <p className="text-gray-600">
                                L&apos;API permet aux administrateurs de gérer les bénéficiaires de manière programmatique, en effectuant des actions comme l&apos;ajout, la modification, la suppression
                                et la consultation des bénéficiaires via des endpoints dédiés.
                            </p>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default GestionBeneficiaires;
