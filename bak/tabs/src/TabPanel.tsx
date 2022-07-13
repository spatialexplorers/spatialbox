import * as React from "react";
import { styled, cssComponent } from "@spatialbox/theme";

export interface TabPanelProps {
  name: string;
  children: React.ReactNode;
}

export function TabPanel(props: TabPanelProps) {
  return <TabPanelContainer>{props.children}</TabPanelContainer>;
}

const TabPanelContainer = styled.div``;
