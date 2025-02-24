import { Button } from "./components/ui/button";
import Link from "next/link";

const Sidebar = () => {
  return (
      <aside className="w-64 bg-white text-black h-screen border-r p-4 overflow-y-auto">
        <div className="space-y-6">
          {/* Section "COMMENCER" */}
          <div>
            <h2 className="text-sm font-semibold mb-2 text-blue-600">COMMENCER</h2>
            <div className="space-y-1">
              <Link href="/">
                <Button
                    variant="ghost"
                    className="w-full justify-start text-left hover:bg-blue-50 hover:text-blue-600 focus:bg-blue-50 focus:text-blue-600 transition-colors"
                >
                  Aperçu
                </Button>
              </Link>
              <Link href="/pages/quickstart">
                <Button
                    variant="ghost"
                    className="w-full justify-start text-left hover:bg-blue-50 hover:text-blue-600 focus:bg-blue-50 focus:text-blue-600 transition-colors"
                >
                  Démarrage rapide
                </Button>
              </Link>
              <Link href="/pages/changelog">
                <Button
                    variant="ghost"
                    className="w-full justify-start text-left hover:bg-blue-50 hover:text-blue-600 focus:bg-blue-50 focus:text-blue-600 transition-colors"
                >
                  Journal des modifications
                </Button>
              </Link>
              <Link href="/pages/politic">
                <Button
                    variant="ghost"
                    className="w-full justify-start text-left hover:bg-blue-50 hover:text-blue-600 focus:bg-blue-50 focus:text-blue-600 transition-colors"
                >
                  Conditions & Politiques
                </Button>
              </Link>
            </div>
          </div>

          {/* Section "FONCTIONALITES PRINCIPALES" */}
          <div>
            <h2 className="text-sm font-semibold mb-2 text-blue-600">FONCTIONALITES PRINCIPALES</h2>
            <div className="space-y-1">
              <Link href="/pages/introduction">
                <Button
                    variant="ghost"
                    className="w-full justify-start text-left hover:bg-blue-50 hover:text-blue-600 focus:bg-blue-50 focus:text-blue-600 transition-colors"
                >
                  Introduction
                </Button>
              </Link>
              <Link href="/pages/endpoint">
                <Button
                    variant="ghost"
                    className="w-full justify-start text-left hover:bg-blue-50 hover:text-blue-600 focus:bg-blue-50 focus:text-blue-600 transition-colors"
                >
                  NOS ENDPOINTS
                </Button>
              </Link>
              <Link href="/pages/structure">
                <Button
                    variant="ghost"
                    className="w-full justify-start text-left hover:bg-blue-50 hover:text-blue-600 focus:bg-blue-50 focus:text-blue-600 transition-colors"
                >
                  Structure des dossiers
                </Button>
              </Link>
              <Link href="/pages/bonusrules">
                <Button
                    variant="ghost"
                    className="w-full justify-start text-left hover:bg-blue-50 hover:text-blue-600 focus:bg-blue-50 focus:text-blue-600 transition-colors"
                >
                  Création de règles de bonification
                </Button>
              </Link>
              <Link href="/pages/autoaward">
                <Button
                    variant="ghost"
                    className="w-full justify-start text-left hover:bg-blue-50 hover:text-blue-600 focus:bg-blue-50 focus:text-blue-600 transition-colors"
                >
                  Attribution automatique de récompenses
                </Button>
              </Link>
              <Link href="/pages/suivirecompenses">
                <Button
                    variant="ghost"
                    className="w-full justify-start text-left hover:bg-blue-50 hover:text-blue-600 focus:bg-blue-50 focus:text-blue-600 transition-colors"
                >
                  Suivi et gestion des récompenses
                </Button>
              </Link>
              <Link href="/pages/gestionbeneficiaire">
                <Button
                    variant="ghost"
                    className="w-full justify-start text-left hover:bg-blue-50 hover:text-blue-600 focus:bg-blue-50 focus:text-blue-600 transition-colors"
                >
                  Gestion des bénéficiaires
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </aside>
  );
};

export default Sidebar;