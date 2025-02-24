import React from "react";
import Sidebar from "../../sidebar"; // Assurez-vous que le chemin d'importation est correct
import Navbar from "@/app/components/ui/navbar"; // Assurez-vous que le chemin d'importation est correct

const BonusRules = () => {
    return (
        <div>
            {/* Navbar */}
            <Navbar />

            {/* Contenu principal avec Sidebar */}
            <div className="flex min-h-screen bg-gradient-to-b from-gray-50 to-white">
                {/* Sidebar */}
                <Sidebar />

                {/* Contenu principal */}
                <main className="flex-1 p-8 overflow-y-auto">
                    <div className="max-w-4xl mx-auto">
                        {/* En-tête avec bordure décorative */}
                        <div className="text-center mb-16 relative">
                            <div className="absolute left-1/2 -translate-x-1/2 top-0 w-24 h-1 bg-blue-500 rounded-full" />
                            <h1 className="text-4xl font-bold text-gray-900 mb-4 pt-6">Création de règles de bonification</h1>
                            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                                Guide complet pour configurer des règles de bonification et récompenser vos utilisateurs.
                            </p>
                        </div>

                        {/* Section 1 : Accéder à la configuration des règles */}
                        <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border-l-4 border-blue-500 mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Accéder à la configuration des règles</h2>
                            <p className="text-gray-600 mb-4">
                                Pour ajouter une règle de bonification :
                            </p>
                            <ul className="list-disc pl-6 text-gray-600 space-y-2">
                                <li>Connectez-vous en tant qu&apos;administrateur.</li>
                                <li>Accédez à l&apos;onglet <strong>&ldquo;Règles de Bonification&ldquo;</strong> dans le tableau de bord.</li>
                                <li>Cliquez sur le bouton <strong>&ldquo;Ajouter une règle&ldquo;</strong>.</li>
                            </ul>
                        </div>

                        {/* Section 2 : Définir les critères de la règle */}
                        <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border-l-4 border-green-500 mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Définir les critères de la règle</h2>
                            <p className="text-gray-600 mb-4">
                                Remplissez les champs nécessaires pour définir la règle :
                            </p>
                            <ul className="list-disc pl-6 text-gray-600 space-y-2">
                                <li><strong>Nom de la règle :</strong> Donnez un titre descriptif.</li>
                                <li><strong>Type de récompense :</strong> Points, réductions, cashback, etc.</li>
                                <li><strong>Conditions :</strong> Nombre de transactions, montant total, fréquence d&apos;achat...</li>
                                <li><strong>Durée de validité :</strong> Période pendant laquelle la règle est active.</li>
                            </ul>
                        </div>

                        {/* Section 3 : Enregistrer et activer la règle */}
                        <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border-l-4 border-purple-500 mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Enregistrer et activer la règle</h2>
                            <p className="text-gray-600 mb-4">
                                Une fois tous les champs renseignés :
                            </p>
                            <ul className="list-disc pl-6 text-gray-600 space-y-2">
                                <li>Cliquez sur <strong>&ldquo;Enregistrer&ldquo;</strong> pour sauvegarder la règle.</li>
                                <li>Activez-la si vous souhaitez qu’elle soit immédiatement appliquée.</li>
                            </ul>
                        </div>

                        {/* Section 4 : Suivi et modification */}
                        <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border-l-4 border-orange-500 mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Suivi et modification</h2>
                            <p className="text-gray-600">
                                Vous pouvez consulter les règles existantes, les modifier ou les désactiver à tout moment depuis le tableau de bord.
                            </p>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default BonusRules;