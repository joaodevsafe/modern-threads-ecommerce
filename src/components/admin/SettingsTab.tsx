
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const SettingsTab: React.FC = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Configurações da Loja</CardTitle>
        <CardDescription>
          Gerenciar informações básicas da loja
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="store-name">Nome da Loja</Label>
              <Input id="store-name" value="LOJAODAFE" className="mt-1" />
            </div>
            <div>
              <Label htmlFor="store-email">Email de Contato</Label>
              <Input id="store-email" type="email" placeholder="contato@lojaodafe.com" className="mt-1" />
            </div>
            <div>
              <Label htmlFor="store-phone">Telefone</Label>
              <Input id="store-phone" placeholder="(00) 00000-0000" className="mt-1" />
            </div>
            <div>
              <Label htmlFor="store-address">Endereço</Label>
              <Input id="store-address" placeholder="Rua Exemplo, 123" className="mt-1" />
            </div>
          </div>
          <div>
            <Label htmlFor="store-description">Descrição da Loja</Label>
            <textarea 
              id="store-description" 
              rows={4}
              placeholder="Uma descrição breve sobre a LOJAODAFE..."
              className="w-full mt-1 p-2 border rounded-md"
            ></textarea>
          </div>
        </form>
      </CardContent>
      <CardFooter>
        <Button className="ml-auto">Salvar Configurações</Button>
      </CardFooter>
    </Card>
  );
};

export default SettingsTab;
