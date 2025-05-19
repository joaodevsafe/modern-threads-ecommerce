
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Plus, Edit, Image, LayoutDashboard, Settings, Trash2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Header from '@/components/Header';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import { products } from '@/data/products';

const Admin = () => {
  const { toast } = useToast();
  const [selectedTab, setSelectedTab] = useState("products");
  
  // Placeholders para as operações CRUD
  const handleAddProduct = () => {
    toast({
      title: "Funcionalidade em desenvolvimento",
      description: "Adicionar produtos será implementado em breve."
    });
  };
  
  const handleEditProduct = (id: string) => {
    toast({
      title: "Funcionalidade em desenvolvimento",
      description: `Editar produto ${id} será implementado em breve.`
    });
  };
  
  const handleDeleteProduct = (id: string) => {
    toast({
      title: "Funcionalidade em desenvolvimento",
      description: `Deletar produto ${id} será implementado em breve.`
    });
  };
  
  const handleAddBanner = () => {
    toast({
      title: "Funcionalidade em desenvolvimento",
      description: "Adicionar banners será implementado em breve."
    });
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-1 pt-24 pb-12 container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Painel de Administração - LOJAODAFE</h1>
          <p className="text-gray-600">
            Gerencie produtos, banners e configurações da loja.
          </p>
        </div>
        
        <Tabs value={selectedTab} onValueChange={setSelectedTab} className="w-full">
          <TabsList className="grid grid-cols-3 mb-8">
            <TabsTrigger value="products" className="flex items-center gap-2">
              <LayoutDashboard size={16} />
              <span>Produtos</span>
            </TabsTrigger>
            <TabsTrigger value="appearance" className="flex items-center gap-2">
              <Image size={16} />
              <span>Aparência</span>
            </TabsTrigger>
            <TabsTrigger value="settings" className="flex items-center gap-2">
              <Settings size={16} />
              <span>Configurações</span>
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="products">
            <div className="mb-6 flex justify-between items-center">
              <h2 className="text-2xl font-semibold">Gerenciar Produtos</h2>
              <Button onClick={handleAddProduct} className="flex items-center gap-2">
                <Plus size={16} />
                <span>Adicionar Produto</span>
              </Button>
            </div>
            
            <Card>
              <CardContent className="pt-6">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>ID</TableHead>
                      <TableHead>Nome</TableHead>
                      <TableHead>Categoria</TableHead>
                      <TableHead>Preço</TableHead>
                      <TableHead>Estoque</TableHead>
                      <TableHead className="text-right">Ações</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {products.map((product) => (
                      <TableRow key={product.id}>
                        <TableCell>{product.id}</TableCell>
                        <TableCell>{product.name}</TableCell>
                        <TableCell>{product.category}</TableCell>
                        <TableCell>R$ {product.price.toFixed(2)}</TableCell>
                        <TableCell>Em estoque</TableCell>
                        <TableCell className="flex justify-end gap-2">
                          <Button 
                            variant="outline" 
                            size="icon"
                            onClick={() => handleEditProduct(product.id)}
                          >
                            <Edit size={16} />
                          </Button>
                          <Button 
                            variant="outline" 
                            size="icon"
                            onClick={() => handleDeleteProduct(product.id)}
                          >
                            <Trash2 size={16} />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="appearance">
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
          </TabsContent>
          
          <TabsContent value="settings">
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
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Admin;
