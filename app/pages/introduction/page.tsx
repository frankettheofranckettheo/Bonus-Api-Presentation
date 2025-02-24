import React from 'react';
import Link from 'next/link';
import Sidebar from "../../sidebar";
import Navbar from "../../components/ui/navbar";

const Introduction = () => {
  return (
      <div>
        <Navbar/>
        <div className="flex">
          <Sidebar/>
          <div className="flex flex-1 min-h-screen bg-gradient-to-b from-gray-50 to-white">

            <main className="flex-1 p-8">
              <div className="max-w-4xl mx-auto">
                {/* En-tête avec bordure décorative */}
                <div className="text-center mb-16 relative">
                  <div className="absolute left-1/2 -translate-x-1/2 top-0 w-24 h-1 bg-blue-500 rounded-full"/>
                  <h1 className="text-4xl font-bold text-gray-900 mb-4 pt-6">Documentation API</h1>
                  <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    Guide complet du Système de Bonification
                  </p>
                </div>

                {/* Introduction */}
                <div
                    className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border-l-4 border-blue-500 mb-8">
                  <p className="text-gray-600 leading-relaxed">
                    Bienvenue dans la documentation technique de l&apos;API du <strong>Système de Bonification</strong>.
                    Cette API permet aux utilisateurs de s&apos;enregistrer, de gérer leurs clients, de définir des règles de
                    bonification et d&apos;enregistrer des transactions pour attribuer des points.
                  </p>
                </div>

                {/* Objectif de l'API */}
                <div
                    className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border-l-4 border-green-500 mb-8">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">Objectif de l&apos;API</h2>
                  <p className="text-gray-600 leading-relaxed">
                    L&apos;API de bonification vise à automatiser et simplifier l&apos;attribution de points aux clients des utilisateurs.
                    Les utilisateurs peuvent configurer des règles spécifiques pour déterminer comment et quand les clients
                    reçoivent des points.
                  </p>
                </div>

                {/* Fonctionnalités principales */}
                <div
                    className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border-l-4 border-purple-500 mb-8">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">Fonctionnalités principales</h2>
                  <div className="bg-gray-50 rounded-lg p-6 border border-gray-100">
                    <ul className="space-y-3">
                      {[
                        {text: "Enregistrement des utilisateurs : Permettre aux utilisateurs de s'enregistrer avec une authentification gérée par JWT."},
                        {text: "Gestion des clients : Enregistrer et gérer les clients des utilisateurs."},
                        {text: "Définition de la valeur des points : Permettre aux utilisateurs de définir la valeur d'un point."},
                        {text: "Création de règles de bonification : Définir des règles sous forme d'intervalles pour attribuer des points."},
                        {text: "Enregistrement des transactions : Enregistrer les transactions des clients et utiliser les points attribués."}
                      ].map((item, index) => (
                          <li key={index} className="flex items-start text-gray-600">
                            <span className="text-purple-500 mr-2">•</span>
                            <span className="hover:text-gray-900 transition-colors">{item.text}</span>
                          </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Public cible et Prérequis */}
                <div
                    className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border-l-4 border-orange-500 mb-8">
                  <div className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">Public cible</h2>
                    <p className="text-gray-600 leading-relaxed">
                      Cette documentation est destinée aux développeurs et aux administrateurs techniques souhaitant
                      intégrer ou gérer le système de bonification au sein de leur plateforme.
                    </p>
                  </div>

                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">Prérequis</h2>
                  <div className="bg-gray-50 rounded-lg p-6 border border-gray-100">
                    <ul className="space-y-3">
                      {[
                        "Connaissance de base des requêtes HTTP (GET, POST, PUT, DELETE).",
                        "Familiarité avec JSON pour l'échange de données.",
                        "Environnement compatible avec l'authentification via tokens (JWT).",
                        "Environnement compatible avec Spring-Security."
                      ].map((item, index) => (
                          <li key={index} className="flex items-start text-gray-600">
                            <span className="text-orange-500 mr-2">•</span>
                            <span className="hover:text-gray-900 transition-colors">{item}</span>
                          </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Structure de la documentation */}
                <div
                    className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border-l-4 border-indigo-500 mb-8">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">Comprendre le fonctionnement de l&apos;API</h2>
                  <div className="bg-gray-50 rounded-lg p-6 border border-gray-100">
                    <ol className="space-y-3">
                      {[
                        {
                          text: "Authentification : Comment s'authentifier pour accéder à l'API.",
                          details: " L'authentification est réalisée via JWT (JSON Web Token). Lorsqu'un utilisateur s'enregistre, il reçoit un token JWT après avoir fourni ses identifiants (nom d'utilisateur et mot de passe). Ce token doit être inclus dans l'en-tête d'autorisation des requêtes HTTP pour accéder aux endpoints sécurisés de l'API. Le token est vérifié par le serveur pour garantir que l'utilisateur est authentifié."
                        },
                        {
                          text: "Gestion des clients : Comment enregistrer et gérer les clients.",
                          details: "Les utilisateurs peuvent enregistrer leurs clients en envoyant une requête POST avec les détails du client à un endpoint spécifique. Chaque client est associé à un utilisateur particulier. Les clients peuvent être mis à jour via une requête PUT et supprimés via une requête DELETE."
                        },
                        {
                          text: "Définition des règles de base : Comment définir la valeur d'un point.",
                          details: "L'utilisateur peut définir la valeur d'un point en spécifiant combien d'unités monétaires (ou autre mesure) équivalent à un point. Par exemple, 1 point peut valoir 10 unités monétaires. Cette valeur de base est utilisée pour calculer les points attribués lors des transactions."
                        },
                        {
                          text: "Définition des règles d'intervalle : Comment créer des règles basées sur des intervalles.",
                          details: " Les règles d'intervalle permettent d'attribuer des points en fonction de plages de valeurs spécifiques. Par exemple, une règle peut stipuler qu'une transaction entre 1000 et 2000 unités monétaires attribue 10 points. L'utilisateur configure ces intervalles via des requêtes API dédiées."
                        },
                        {
                          text: "Gestion des transactions : Comment enregistrer et utiliser les transactions.",
                          details: "Les transactions des clients sont enregistrées via un endpoint dédié. Lors de l'enregistrement d'une transaction, les points attribués sont calculés selon les règles définies. Les points peuvent également être utilisés lors des transactions, réduisant ainsi le solde de points du client."
                        },
                        {
                          text: "Modèles de données : Schéma des objets utilisés dans l'API.",
                          details: "Les modèles de données décrivent la structure des objets manipulés par l'API, tels que les utilisateurs, clients, transactions, et règles. Chaque modèle spécifie les champs disponibles et leurs types de données, facilitant ainsi la compréhension des données échangées."
                        },
                      ].map((item, index) => (
                          <li key={index} className="flex items-start text-gray-600">
                            <span className="text-indigo-500 mr-2">{index + 1}.</span>
                            <div>
                              <span className="hover:text-gray-900 transition-colors font-semibold">{item.text}</span>
                              <p className="text-gray-500">{item.details}</p>
                            </div>
                          </li>
                      ))}
                    </ol>
                  </div>
                </div>
                {/* Liens et conclusion */}
                <div
                    className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border-l-4 border-pink-500">
                  <p className="text-gray-600 mb-4">
                    Pour plus de détails, consultez notre{' '}
                    <Link href="/reference/libraries"
                          className="text-blue-600 hover:text-blue-800 hover:underline transition-colors">
                      page de référence des bibliothèques
                    </Link>
                    .
                  </p>
                  <p className="text-gray-600">
                    Commencez à explorer l&apos;API et intégrez facilement un programme de fidélité personnalisé dans votre
                    application.
                  </p>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>

  );
};

export default Introduction;
