
import React, { useState } from 'react';
import Header from '@/components/Header';
import AdminHeader from '@/components/admin/AdminHeader';
import AdminTabs from '@/components/admin/AdminTabs';

const Admin = () => {
  const [selectedTab, setSelectedTab] = useState("products");
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-1 pt-24 pb-12 container mx-auto px-4">
        <AdminHeader 
          title="Painel de Administração - LOJAODAFE"
          description="Gerencie produtos, banners e configurações da loja."
        />
        
        <AdminTabs 
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        />
      </div>
    </div>
  );
};

export default Admin;
