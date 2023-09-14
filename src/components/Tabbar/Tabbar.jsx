import React, { useRef, useState, useEffect } from "react";
import Tab from "../Tab/Tab"; // Ensure that the import path is correct
import { StyledTabbar } from "./Tabbar.style";

const Tabbar = () => {
  const [activeTab, setActiveTab] = useState(1);
  const indicatorRef = useRef(null);
  const tabRefs = useRef({});

  const tabs = [
    { id: 1, label: "Queued" },
    { id: 2, label: "Printing" },
    { id: 3, label: "Ready" },
    { id: 4, label: "Paused" },
    { id: 5, label: "Canceled" },
  ];

  useEffect(() => {
    const activeTabRef = tabRefs.current[activeTab];
    if (activeTabRef) {
      const { left, width } = activeTabRef.getBoundingClientRect();
      console.log(activeTabRef.getBoundingClientRect());
      indicatorRef.current.style.left = `${left}px`;
      indicatorRef.current.style.width = `${width}px`;
    }
  }, [activeTab]);

  const handleTab = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <StyledTabbar>
      <span ref={indicatorRef} className="tab-indicator"></span>
      {tabs.map((tab) => (
        <Tab
          key={tab.id}
          label={tab.label}
          onClick={() => handleTab(tab.id)}
          isActive={tab.id === activeTab}
          ref={(el) => (tabRefs.current[tab.id] = el)}
        />
      ))}
    </StyledTabbar>
  );
};

export default Tabbar;
