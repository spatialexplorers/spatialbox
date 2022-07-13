import * as React from "react";

import { Tabs, TabList, Tab, TabPanels, TabPanel } from "../src";
export default {
  title: "Tabs",
  decorators: [
    (Story: any) => (
      <div>
        <Story />
      </div>
    )
  ]
};

export const basic = () => (
  <>
    <div style={{ display: "flex" }}>
      <div style={{ flex: "1 1 auto", padding: "32px", marginRight: "16px", backgroundColor: "#eee" }}>
        <Tabs>
          <TabList>
            <Tab name="tab1">Tab number 1</Tab>
            <Tab name="tab2">Tab number 2</Tab>
            <Tab name="tab3">Tab number 3</Tab>
          </TabList>
          <TabPanels>
            <TabPanel name="tab1">Tab content 1</TabPanel>
            <TabPanel name="tab2">Tab content 2</TabPanel>
            <TabPanel name="tab3">Tab content 3</TabPanel>
          </TabPanels>
        </Tabs>
      </div>
      <div style={{ flex: "0 0 180px", maxWidth: "180px", padding: "32px", backgroundColor: "#eee" }}>
        <Tabs>
          <TabList>
            <Tab name="tab1">Tab number 1</Tab>
            <Tab name="tab2">Tab number 2</Tab>
            <Tab name="tab3">Tab number 3</Tab>
          </TabList>
          <TabPanels>
            <TabPanel name="tab1">Tab content 1</TabPanel>
            <TabPanel name="tab2">Tab content 2</TabPanel>
            <TabPanel name="tab3">Tab content 3</TabPanel>
          </TabPanels>
        </Tabs>
      </div>
    </div>
  </>
);
