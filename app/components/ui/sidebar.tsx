import { Button } from "./button";

const Sidebar = () => {
    return (
      <aside className="w-64 bg-white h-screen border-r p-4 overflow-y-scroll">
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
            <h2 className="text-sm font-semibold mb-2 text-gray-500">COMMENCER</h2>
            <div className="space-y-1">
              <Button variant="ghost" className="w-full justify-start">Aperçu</Button>
              <Button variant="ghost" className="w-full justify-start">Démarrage rapide</Button>
              <Button variant="ghost" className="w-full justify-start">Open Source</Button>
              <Button variant="ghost" className="w-full justify-start">Journal des modifications</Button>
              <Button variant="ghost" className="w-full justify-start">Conditions & Politiques</Button>
            </div>
          </div>
          
          <div>
            <h2 className="text-sm font-semibold mb-2 text-gray-500">FONCTIONNALITE PRINCIPALES</h2>
            <div className="space-y-1">
              <Button variant="ghost" className="w-full justify-start text-left">Création de règles de bonification</Button>
              <Button variant="ghost" className="w-full justify-start text-left">Attribution automatique de récompenses</Button>
              <Button variant="ghost" className="w-full justify-start text-left">Suivi et gestion des récompenses</Button>
              <Button variant="ghost" className="w-full justify-start text-left">Gestion des bénéficiaires</Button>
            </div>
          </div>
        </div>
      </aside>
    );
};
export default Sidebar;
