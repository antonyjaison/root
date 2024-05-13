import TopBottomLayout from "@/components/TopBottomLayout";
import React from "react";

const CommunityLayout = ({ children }: { children: React.ReactNode }) => {
  return <TopBottomLayout>{children}</TopBottomLayout>;
};

export default CommunityLayout;
