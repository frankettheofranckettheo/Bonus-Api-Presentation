import { Button } from "@/app/components/ui/button";
import Link from "next/link";

const Sidebar = () => {
    return (
      <aside className="w-64 text-black h-screen border-r p-4 overflow-y-scroll">
        <div className="space-y-6">
          <div>
            {/*<div className="flex items-center space-x-2 mb-4">
                <Search className="w-4 h-4 text-gray-500 " />
                <input
                    type="text"
                    placeholder="Search..."
                    className="w-full p-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <span className="text-xs text-gray-500 ml-2">CTRL K</span>
            </div>*/}
            <h2 className="text-sm font-semibold mb-2 text-gray-500">API REFERENCE</h2>
            <div className="space-y-1">
              <Link href="/pages/introduction" >
                <Button variant="ghost" className="w-full justify-start">Introduction</Button>
              </Link>
              <Button variant="ghost" className="w-full justify-start">Authentification</Button>
              <Button variant="ghost" className="w-full justify-start">Modèles de données </Button>
              <Button variant="ghost" className="w-full justify-start">Exemples d&apos;utilisation</Button>
              <Button variant="ghost" className="w-full justify-start">Gestion des erreurs</Button>
            </div>
          </div>
          
          <div>
            <h2 className="text-sm font-semibold mb-2 text-gray-500">END POINTS</h2>
            <div className="space-y-1">
              <Link href="/pages/endpoints">
                <Button variant="ghost" className="w-full justify-start text-left">Nos End points</Button>
              </Link>
              {/*<Button variant="ghost" className="w-full justify-start text-left">Création de règles de bonification</Button>
              <Button variant="ghost" className="w-full justify-start text-left">Attribution automatique de récompenses</Button>
              <Button variant="ghost" className="w-full justify-start text-left">Suivi et gestion des récompenses</Button>
              <Button variant="ghost" className="w-full justify-start text-left">Gestion des bénéficiaires</Button>*/}
            </div>
          </div>
        </div>
      </aside>
    );
};
export default Sidebar;


