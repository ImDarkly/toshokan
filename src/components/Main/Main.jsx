import React from "react";
import {Tabs, Tab} from "@nextui-org/tabs";
import { StyledTabbar } from "./Main.style";
import Accordion from "../Accordion/Accordion";

const Tabbar = () => {
  const tabs = [
    { id: 1, label: "Queued" },
    { id: 2, label: "Printing" },
    { id: 3, label: "Ready" },
    { id: 4, label: "Paused" },
    { id: 5, label: "Canceled" }
  ];

  return (
      <StyledTabbar className="flex w-full flex-col">
        <Tabs 
          className="h-16 flex justify-around p-0" 
          variant="underlined"
          border="lg"
          classNames={{
            tabList: "h-full p-0 gap-16 bg-slate-100 h-16 sticky top-0 px-6",
            cursor: "rounded-t h-1 bg-primary-400",
            panel: "p-0 overflow-y-auto"
          }}>
          {tabs.map((tab) => (
            <Tab
              className="text-base h-full"
              key={tab.id}
              title={
                <span className="group-data-[selected=true]:text-primary-400 text-slate-400">{tab.label}</span>
              }
            >
              <Accordion status={tab.label}/>
            </Tab>
          ))}
        </Tabs>
      </StyledTabbar>
  );
};

export default Tabbar;
