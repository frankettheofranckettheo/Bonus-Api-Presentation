import Link from "next/link";
import { ModelCard1 } from "./modelcard";
import { Shield, Star, Zap } from "lucide-react";

const MainContent = () => {
    return (
      <main className="bg-white flex-1 p-8">
        <section className="mb-12">
         <div className="border rounded-2xl shadow-lg p-6 bg-white">
            <h2 className="text-3xl text-black font-bold mb-4">Authentifier vous de manière sécurisé avec jwt</h2>
            <p className="text-gray-600 mb-6">
            Créez ou rejoignez une organisation pour accéder aux nos fonctionnalité et à une suite d&apos;outils de développement.
            Aller sur <Link href="https://app-bonus.vercel.app/" className="text-blue-600"> https://app-bonus.vercel.app/</Link>
            </p>
            {/*<div className="space-x-4">
                <Button variant="default" className="bg-emerald-600">Sign up</Button>
                <Button variant="outline">Log in</Button>
            </div>*/}
          </div>
        </section>
  
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl text-black font-bold">Boostez l&apos;engagement avec Notre API de Bonification</h2>
            {/*<Button variant="link" className="text-gray-600">
              Pricing →
            </Button>*/}
          </div>
          {/*<div className="grid grid-cols-2 gap-6">
            <ModelCard 
              title="GPT models"
              description="GPT models are fast, versatile, cost-efficient, and customizable."
              links={["Use GPT-4o", "Use GPT-4o mini"]}
            />
            <ModelCard 
              title="Reasoning models"
              description="Reasoning models use chain-of-thought reasoning to excel at complex tasks."
              links={["Use o1", "Use o3-mini"]}
            />
          </div>*/}
        </section>

        <section>
              <ModelCard1 />
        </section>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 py-12 bg-gray-50 mb-12">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-xl transition-shadow">
          <Shield className="w-8 h-8 text-blue-600 mb-4" />
          <h3 className="text-xl text-black font-semibold mb-3">Sécurité Renforcée</h3>
          <p className="text-gray-600">Protection avancée des données et conformité aux normes de sécurité les plus strictes pour vos transactions.</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-xl transition-shadow">
          <Zap className="w-8 h-8 text-blue-600 mb-4" />
          <h3 className="text-xl text-black font-semibold mb-3">Performance Optimale</h3>
          <p className="text-gray-600">API hautement disponible avec des temps de réponse rapides pour une expérience utilisateur fluide.</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-xl transition-shadow">
          <Star className="w-8 h-8 text-blue-600 mb-4" />
          <h3 className="text-xl text-black font-semibold mb-3">Support Premium</h3>
          <p className="text-gray-600">Assistance technique dédiée et documentation complète pour vous accompagner.</p>
        </div>


        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl text-black font-bold">Pour plus de details ...</h2>
          </div>

        </section>

        <section className="mb-8">
          <div>
          <ul className="list-disc ml-6 text-gray-600 mb-6">
              <li><Link href="https://github.com/Momo-azangue/bonusapi" className="text-blue-600">https://github.com/Momo-azangue/bonusapi.</Link></li>
              <li><Link href="https://github.com/Momo-azangue/App-Bonus.git" className="text-blue-600">https://github.com/Momo-azangue/App-Bonus.</Link></li>
              <li><Link href="https://docs.google.com/document/d/1_oS9E47h423h19NlEhz5wtIv60LK5C2pZk-VhvWvhak/edit?usp=sharing_eip&ts=67b42c6d&urp=gmail_link" className="text-blue-600">
                Cahier de charge Google docs.
                </Link>
              </li>
          </ul>
          </div>
        </section>

        <section className="mb-8">
          <div className="p-6">
            <ul className="list-disc ml-6">
              <li>Par l&apos;équipe Bonification 4GI.</li>
            </ul>
        </div>
        </section>

      </div>
      </main>
    );
};

export default MainContent;

