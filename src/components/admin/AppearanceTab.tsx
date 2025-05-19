
import React from "react";
import { Button } from "@/components/ui/button";
import { Image } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from "@/hooks/use-toast";

const AppearanceTab: React.FC = () => {
  const { toast } = useToast();
  
  const handleAddBanner = () => {
    toast({
      title: "Funcionalidade em desenvolvimento",
      description: "Adicionar banners será implementado em breve."
    });
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card>
        <CardHeader>
          <CardTitle>Logo da Loja</CardTitle>
          <CardDescription>
            Atualize o logo principal da LOJAODAFE
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="border border-dashed border-gray-300 rounded-md h-40 flex items-center justify-center bg-gray-50 mb-4">
            <div className="text-center">
              <Image size={40} className="mx-auto mb-2 text-gray-400" />
              <p className="text-gray-500 text-sm">Clique para fazer upload do logo</p>
            </div>
          </div>
          <div className="flex gap-4">
            <Button variant="outline" className="w-full">Cancelar</Button>
            <Button className="w-full">Upload</Button>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Banner Principal</CardTitle>
          <CardDescription>
            Gerenciar o banner da página inicial
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="border border-dashed border-gray-300 rounded-md h-40 flex items-center justify-center bg-gray-50 mb-4">
            <div className="text-center">
              <Image size={40} className="mx-auto mb-2 text-gray-400" />
              <p className="text-gray-500 text-sm">Clique para fazer upload do banner</p>
            </div>
          </div>
          <div className="flex gap-4">
            <Button variant="outline" className="w-full">Cancelar</Button>
            <Button onClick={handleAddBanner} className="w-full">Upload</Button>
          </div>
        </CardContent>
      </Card>
      
      <Card className="md:col-span-2">
        <CardHeader>
          <CardTitle>Cores e Tema</CardTitle>
          <CardDescription>
            Personalize as cores do seu site
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="primary-color">Cor Primária</Label>
              <div className="flex gap-2 mt-1">
                <Input type="color" id="primary-color" value="#000000" className="w-12 h-10" />
                <Input type="text" value="#000000" className="flex-1" />
              </div>
            </div>
            <div>
              <Label htmlFor="secondary-color">Cor Secundária</Label>
              <div className="flex gap-2 mt-1">
                <Input type="color" id="secondary-color" value="#ffffff" className="w-12 h-10" />
                <Input type="text" value="#ffffff" className="flex-1" />
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button className="ml-auto">Salvar Alterações</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default AppearanceTab;
