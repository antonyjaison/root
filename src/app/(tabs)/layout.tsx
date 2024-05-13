import BottomTabs from '@/components/BottomTabs'
import Navbar from "@/components/Navbar";
import TopBottomLayout from "@/components/TopBottomLayout";
import React from 'react'

const TabsLayout = ({ children } : {
    children: React.ReactElement
}) => {
  return <TopBottomLayout>{children}</TopBottomLayout>;
}

export default TabsLayout