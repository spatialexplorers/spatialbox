import * as React from "react";
import { styled, cssComponent } from "@spatialbox/theme";
import { TabPanelProps } from "./TabPanel";
import { useTabs } from ".";

export type TabPanelType = React.ReactElement<TabPanelProps>;

export interface TabPanelsProps {
  children: TabPanelType[];
}

export function TabPanels(props: TabPanelsProps) {
  const { activeTab, setActiveTab } = useTabs();

  const _children = React.useMemo(() => React.Children.toArray(props.children), [props.children]);

  React.useEffect(() => {
    if (!activeTab) {
      let c = _children[0] as TabPanelType;
      setActiveTab(c.props.name);
    }
  }, [activeTab]);

  let child = _children.find((child) => {
    if ((child as React.ReactElement<TabPanelProps>).props.name === activeTab) {
      return child;
    }
  });

  return <TabPanelsContainer>{child}</TabPanelsContainer>;
}

const TabPanelsContainer = styled.div``;
