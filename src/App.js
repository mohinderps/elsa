import React from "react";
import Tabs from "./components/Tabs";

function App() {
  return (
    <Tabs>
      <Tabs.Tab id="a">Coco</Tabs.Tab>
      <Tabs.Tab id="b">Up</Tabs.Tab>
      <Tabs.TabPanels>
        <Tabs.TabPanel id="a">Miguel</Tabs.TabPanel>
        <Tabs.TabPanel id="b">Russell</Tabs.TabPanel>
      </Tabs.TabPanels>
    </Tabs>
  );
}

export default App;
