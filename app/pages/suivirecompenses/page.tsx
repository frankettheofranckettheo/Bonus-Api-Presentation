import React from 'react';
import Head from 'next/head';
import Navbar from "../../components/ui/navbar";
import Sidebar from "../../sidebar";

const SuiviRecompenses = () => {
  return (
      <>
        <Navbar/>
        <div className="flex">
          <Sidebar/>
          <div className="flex-1">
            <Head>
              <title>Documentation - Suivi et Gestion des Récompenses</title>
              <meta name="description"
                    content="Documentation sur le suivi et la gestion des récompenses dans notre application de bonification."/>
            </Head>
            <div className="flex min-h-screen bg-gradient-to-b from-gray-50 to-white">
              <main className="flex-1 p-8">
                <div className="max-w-4xl mx-auto">
                  {/* En-tête avec bordure décorative */}
                  <div className="text-center mb-16 relative">
                    <div className="absolute left-1/2 -translate-x-1/2 top-0 w-24 h-1 bg-blue-500 rounded-full"/>
                    <h1 className="text-4xl font-bold text-gray-900 mb-4 pt-6">Suivi et Gestion des Récompenses</h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                      Guide complet pour suivre et gérer les récompenses attribuées aux utilisateurs.
                    </p>
                  </div>

                  {/* Section Introduction */}
                  <div
                      className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border-l-4 border-blue-500 mb-8">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">Introduction</h2>
                    <p className="text-gray-600">
                      Le suivi et la gestion des récompenses sont essentiels pour garantir que les utilisateurs
                      bénéficient des récompenses
                      auxquelles ils ont droit et que les administrateurs peuvent contrôler l&apos;attribution des
                      récompenses en fonction des règles.
                      Cette fonctionnalité permet d&apos;avoir une vue d&apos;ensemble des utilisateurs récompensés et
                      des récompenses attribuées.
                    </p>
                  </div>

                  {/* Section Suivi des Récompenses */}
                  <div
                      className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border-l-4 border-green-500 mb-8">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">Suivi des Récompenses</h2>
                    <p className="text-gray-600 mb-4">
                      Le système de suivi permet aux administrateurs de visualiser l&apos;historique des récompenses
                      attribuées aux utilisateurs.
                      Il est possible de consulter des informations telles que le nom de l&apos;utilisateur, la
                      récompense attribuée, la date et le nombre de transactions
                      qui ont conduit à l&apos;attribution de la récompense.
                    </p>
                    <ul className="list-disc pl-6 text-gray-600 space-y-2">
                      <li><strong>Historique des récompenses :</strong> Un historique complet des récompenses attribuées
                        est disponible.
                      </li>
                      <li><strong>Filtrage :</strong> Les administrateurs peuvent filtrer les récompenses par
                        utilisateur, par date ou par type de récompense.
                      </li>
                      <li><strong>Statistiques :</strong> Des statistiques sur les utilisateurs récompensés sont
                        disponibles pour un suivi global.
                      </li>
                    </ul>
                  </div>

                  {/* Section Gestion des Récompenses */}
                  <div
                      className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border-l-4 border-purple-500 mb-8">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">Gestion des Récompenses</h2>
                    <p className="text-gray-600 mb-4">
                      Les administrateurs peuvent gérer les récompenses de manière proactive. Cette section inclut la
                      possibilité de modifier
                      les récompenses, de les réattribuer à un autre utilisateur, ou de supprimer des récompenses
                      existantes.
                    </p>
                    <ul className="list-disc pl-6 text-gray-600 space-y-2">
                      <li><strong>Modification :</strong> Les récompenses peuvent être modifiées si les règles
                        d&apos;attribution changent ou si une erreur est constatée.
                      </li>
                      <li><strong>Réattribution :</strong> Si un utilisateur reçoit une récompense incorrecte, il est
                        possible de réattribuer la récompense à un autre utilisateur.
                      </li>
                      <li><strong>Suppression :</strong> Les récompenses peuvent être supprimées en cas de fraude ou
                        d&apos;erreur de système.
                      </li>
                    </ul>
                  </div>

                  {/* Section Règles de Gestion des Récompenses */}
                  <div
                      className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border-l-4 border-orange-500 mb-8">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">Règles de Gestion des Récompenses</h2>
                    <p className="text-gray-600">
                      La gestion des récompenses suit un ensemble de règles qui définissent comment et quand les
                      récompenses peuvent être attribuées,
                      réattribuées ou supprimées. Les administrateurs ont la possibilité de consulter et d&apos;ajuster
                      ces règles via l&apos;interface d&apos;administration.
                    </p>
                  </div>

                  {/* Section Exemples de Scénarios de Gestion */}
                  <div
                      className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border-l-4 border-pink-500 mb-8">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">Exemples de Scénarios de Gestion</h2>
                    <p className="text-gray-600 mb-4">Voici quelques exemples de gestion des récompenses :</p>
                    <ul className="list-disc pl-6 text-gray-600 space-y-2">
                      <li><strong>Suppression d&apos;une récompense :</strong> Un utilisateur qui a bénéficié d&apos;une
                        récompense par erreur peut avoir cette récompense supprimée.
                      </li>
                      <li><strong>Réattribution à un autre utilisateur :</strong> Si un utilisateur a été mal attribué,
                        la récompense peut être transférée à un autre utilisateur après validation.
                      </li>
                      <li><strong>Modification de la récompense :</strong> Si la règle d&apos;attribution évolue, les
                        récompenses existantes peuvent être ajustées pour correspondre aux nouvelles conditions.
                      </li>
                    </ul>
                  </div>

                  {/* Section API pour la gestion des récompenses */}
                  <div
                      className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border-l-4 border-indigo-500 mb-8">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">API pour la gestion des récompenses</h2>
                    <p className="text-gray-600">
                      L&apos;API permet aux administrateurs de gérer de manière dynamique les récompenses, y compris
                      l&apos;ajout, la modification et la suppression.
                      Elle permet également de récupérer l&apos;historique des récompenses attribuées, ainsi que
                      d&apos;autres statistiques utiles pour le suivi des utilisateurs.
                    </p>
                  </div>
                </div>
              </main>
            </div>
          </div>
        </div>


      </>
  );
};

export default SuiviRecompenses;