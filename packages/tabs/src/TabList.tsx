import * as React from "react";
import { styled, cssComponent } from "@spatialbox/theme";
import { TabProps } from "./Tab";
import { useTabs } from ".";

export interface TabListProps {
  children: React.ReactElement<TabProps>[];
}

export function TabList(props: TabListProps) {
  const {
    collapse,
    refs: { tablistRef }
  } = useTabs();

  const onClick = React.useCallback(() => {
    if (!collapse) return undefined;
    console.log("Test");
  }, [collapse]);

  return (
    <TabListContainer ref={tablistRef} onClick={onClick} className={collapse ? "collapse" : "default"}>
      {props.children}

      <TabLine />
    </TabListContainer>
  );
}

export function TabLine() {
  return (
    <TabLineContainer>
      <TabLineInner />
    </TabLineContainer>
  );
}

const TabListContainer = styled.div`
  position: relative;
  display: flex;

  overflow: hidden;
  height: 44px;
  border-bottom: 2px solid gray;

  &.collapse {
    background-color: red;

    flex-wrap: wrap;
  }
`;

const TabLineContainer = styled.div`
  position: absolute;
  width: 100%;
  bottom: 0;
`;

const TabLineInner = styled.div`
  position: absolute;
  width: 100px;
  bottom: -2px;
  left: 0;
  height: 2px;
  background-color: red;
`;
