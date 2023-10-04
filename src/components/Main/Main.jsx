import React from "react";
import {Tabs, Tab} from "@nextui-org/tabs";
import Accordion from "../Accordion/Accordion";
import { Tooltip } from "@nextui-org/react";

const Main = () => {
  const tabs = [
    { id: 1, label: "Queued" },
    { id: 2, label: "Printing" },
    { id: 3, label: "Ready" },
    { id: 4, label: "Paused" },
    { id: 5, label: "Canceled" }
  ];

  return (
    <Tabs 
      className="h-16 bg-slate-100 flex justify-around p-0" 
      variant="underlined"
      border="lg"
      classNames={{
        tabList: "h-full p-0 gap-16 h-16 sticky top-0 px-4",
        cursor: "rounded-t h-1 bg-primary-400",
        panel: "p-0 overflow-y-auto",
        tab: "group hover:bg-blue-50 rounded-t-lg"
      }}>
      {tabs.map((tab) => (
          <Tab
            className="text-base h-full"
            key={tab.id}
            title={
              <span className="group-data-[selected=true]:text-primary-400 group-hover:text-primary-400 text-slate-400">
                {tab.label}
              </span>
            }
          >
            <Accordion status={tab.label}/>
          </Tab>
      ))}
    </Tabs>
  );
};

export default Main;
