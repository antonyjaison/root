"use client";

import useDrawer from "@/hooks/useDrawer";
import WelcomeDrawer from "./WelcomeDrawer";
import { Drawer, DrawerContent } from "@/components/ui/drawer";
import NewCommunityPostDrawer from "./NewCommunityPostDrawer";

export const DrawerProvider = () => {
  const { currentDrawer, setDrawer } = useDrawer();

  return (
    <>
      <Drawer
        onClose={() => setDrawer(null)}
        open={currentDrawer ? true : false}
      >
        <DrawerContent>
          {currentDrawer === "welcome" && <WelcomeDrawer />}
          {currentDrawer === "newcommunitypost" && <NewCommunityPostDrawer />}
        </DrawerContent>
      </Drawer>
    </>
  );
};
