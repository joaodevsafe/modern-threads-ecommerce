
import React from "react";
import { Button } from "@/components/ui/button";
import { Plus, Edit, Trash2 } from "lucide-react";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import { Card, CardContent } from '@/components/ui/card';
import { products } from '@/data/products';
import { useToast } from "@/hooks/use-toast";

const ProductsTab: React.FC = () => {
  const { toast } = useToast();
  
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

  return (
    <>
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
                      onClick={() => handleEditProduct(product.id.toString())}
                    >
                      <Edit size={16} />
                    </Button>
                    <Button 
                      variant="outline" 
                      size="icon"
                      onClick={() => handleDeleteProduct(product.id.toString())}
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
    </>
  );
};

export default ProductsTab;
