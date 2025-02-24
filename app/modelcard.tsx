import * as React from "react"
import { Button } from "./components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card";
import { features } from "./data/features";


// Définition de l'interface pour les props de ModelCard
interface ModelCardProps {
    title: string;
    description: string;
    links: string[];
}

const ModelCard: React.FC<ModelCardProps> =  ({ title, description, links }) => {
    return (
      <Card className="w-full">
        <CardHeader>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600 mb-4">{description}</p>
          <div className="space-x-2">
            {links.map((link, index) => (
              <Button key={index} variant="link" className="text-emerald-600 p-0">
                {link}
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>
    );
};

const ModelCard1 = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
      {features.map((feature, index) => (
        <Card key={index} className="hover:shadow-xl transition-shadow">
          <CardHeader>
            <div className="flex items-center gap-4">
              {feature.icon}
              <CardTitle>{feature.title}</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">{feature.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
export {ModelCard, ModelCard1};
