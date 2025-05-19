
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LayoutDashboard, Image, Settings } from "lucide-react";
import ProductsTab from "./ProductsTab";
import AppearanceTab from "./AppearanceTab";
import SettingsTab from "./SettingsTab";

interface AdminTabsProps {
  selectedTab: string;
  setSelectedTab: (value: string) => void;
}

const AdminTabs: React.FC<AdminTabsProps> = ({ selectedTab, setSelectedTab }) => {
  return (
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
        <ProductsTab />
      </TabsContent>
      
      <TabsContent value="appearance">
        <AppearanceTab />
      </TabsContent>
      
      <TabsContent value="settings">
        <SettingsTab />
      </TabsContent>
    </Tabs>
  );
};

export default AdminTabs;
