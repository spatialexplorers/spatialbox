import * as React from "react";
import { styled, cssComponent } from "@spatialbox/theme";
import { createContext } from "@spatialbox/util";
import { useValueEffect } from "@spatialbox/hooks";

export interface TabsProps {
  children: React.ReactNode;
  direction?: "ltr" | "rtl";
}

export interface ITabsContext {
  activeTab: string;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
  collapse: boolean;
  refs: {
    wrapperRef: React.MutableRefObject<HTMLDivElement | null>;
    tablistRef: React.MutableRefObject<HTMLDivElement | null>;
  };
}

const [TabsContextProvider, useTabs] = createContext<ITabsContext>({ name: "TabsProviderContext" });

export { useTabs };

export function Tabs({ children, direction = "ltr" }: TabsProps) {
  const [activeTab, setActiveTab] = React.useState("");
  const [collapse, setCollapse] = useValueEffect(false);

  let tablistRef = React.useRef<HTMLDivElement>(null);
  let wrapperRef = React.useRef<HTMLDivElement>(null);

  let checkShouldCollapse = React.useCallback(() => {
    let computeShouldCollapse = () => {
      if (wrapperRef.current && tablistRef.current) {
        let tabsComponent = wrapperRef.current;
        let tabs = tablistRef.current.querySelectorAll('[role="tab"]');
        let lastTab = tabs[tabs.length - 1];

        let end = direction === "rtl" ? "left" : "right";
        let farEdgeTabList = tabsComponent.getBoundingClientRect()[end];
        let farEdgeLastTab = lastTab?.getBoundingClientRect()[end];
        let shouldCollapse = direction === "rtl" ? farEdgeLastTab < farEdgeTabList : farEdgeTabList < farEdgeLastTab;

        return shouldCollapse;
      }
    };

    setCollapse(function* () {
      // Make Tabs render in non-collapsed state
      yield false;

      // Compute if Tabs should collapse and update
      yield computeShouldCollapse();
    });
  }, [tablistRef, wrapperRef, direction]);

  React.useEffect(() => {
    checkShouldCollapse();
  }, [children, checkShouldCollapse]);

  return (
    <TabsContextProvider value={{ activeTab, setActiveTab, collapse, refs: { tablistRef, wrapperRef } }}>
      <TabsContainer ref={wrapperRef}>{children}</TabsContainer>
    </TabsContextProvider>
  );
}

const TabsContainer = styled.div`
  overflow: hidden;
`;
