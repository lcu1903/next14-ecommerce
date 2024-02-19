import React from "react";
import { Metadata } from "next";
import Card from "@/app/ui/admin/dashboard/card";
import Transactions from "@/app/ui/admin/dashboard/latest-transactions";

export const metadata: Metadata = {
  title: "Admin Dashboard",
  description: "Admin Dashboard",
};

const DashboardPage = () => {
  return (
    <div>
      <div>
        <Card />
      </div>
      <div>
        <Transactions/>
      </div>
      <div>
        
      </div>
    </div>
  );
};

export default DashboardPage;
