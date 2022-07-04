import * as React from "react";
import { styled, cssComponent } from "@spatialbox/theme";
import { useTabs } from ".";

export interface TabProps {
  name: string;
  children: React.ReactNode;
}

export function Tab({ name, children }: TabProps) {
  const ref = React.useRef<HTMLDivElement>(null);
  const { activeTab, setActiveTab } = useTabs();
  const isActive = name === activeTab;

  return (
    <TabContainer ref={ref} onClick={() => setActiveTab(name)} role="tab" className={isActive ? "active" : "idle"}>
      {children}
    </TabContainer>
  );
}

const TabContainer = styled.div`
  white-space: nowrap;
  padding: 0 16px;
  height: 44px;

  &.active {
    font-weight: bold;
    color: blue;
  }
`;
