
import React from "react";

interface AdminHeaderProps {
  title: string;
  description: string;
}

const AdminHeader: React.FC<AdminHeaderProps> = ({ title, description }) => {
  return (
    <div className="mb-8">
      <h1 className="text-3xl font-bold mb-2">{title}</h1>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default AdminHeader;
