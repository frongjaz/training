import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { FcFolder } from 'react-icons/fc'; 

import './LabTabs.css'; 

export default function LabTabs() {
  const [activeTabValue, setActiveTabValue] = useState('1');

  const handleTabChange = (event, newValue) => {
    setActiveTabValue(newValue);
  };
 // call api
  const tabLabels = [
    { label: "ธุรการกฎหมาย", value: "1", roots: "LAR,LAG" },
    { label: "นิติกรรมสัญญา", value: "2", roots: "LAC" },
    { label: "คดี", value: "3", roots: "LAW,LAU,LAP" },
    { label: "บังคับคดี", value: "4", roots: "LAE" },
    { label: "ประสานงานราชการ / คปภ", value: "5", roots: "LAO,LAN,LAL" },
  ];

  return (
    <Box className="lab-tabs-container">
      <TabContext value={activeTabValue}>
        <Box className="tab-header">
          <TabList onChange={handleTabChange} centered variant="scrollable" scrollButtons allowScrollButtonsMobile>
            {tabLabels.map((tab) => (
              <Tab key={tab.value} label={tab.label} value={tab.value} />
            ))}
          </TabList>
        </Box>
        {tabLabels.map((tab) => (
          <TabPanel key={tab.value} value={tab.value}>
            {tab.roots.split(',').map((root, index) => (
              <div key={index} className="tab-content">
                <FcFolder size={50} /> {root}
              </div>
            ))}
          </TabPanel>
        ))}
      </TabContext>
    </Box>
  );
}
