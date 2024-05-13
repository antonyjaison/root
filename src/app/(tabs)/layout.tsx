import BottomTabs from '@/components/BottomTabs'
import React from 'react'

const TabsLayout = ({ children } : {
    children: React.ReactElement
}) => {
  return (
    <main>
        <div>{children}</div>
    <BottomTabs/>
    </main>
  )
}

export default TabsLayout