"use client"

import React, { ReactElement, useState } from 'react';
import type { RadioChangeEvent } from 'antd';
import { Radio, Space, Tabs } from 'antd';

type TabPosition = 'left' | 'right' | 'top' | 'bottom';

interface IProps {
    labels?: string[];
    children?: ReactElement[];
    tabLength: number;
    // eventHandler: () => void;
  }

const CustomVerticalTabs = ({labels, children, tabLength} : IProps) => {
  const [tabPosition, setTabPosition] = useState<TabPosition>('left');

  const changeTabPosition = (e: RadioChangeEvent) => {
    setTabPosition(e.target.value);
  };

  return (
    <>
      
      <Tabs
        tabPosition={tabPosition}
        items={new Array(tabLength).fill(null).map((_, i) => {
          const id = String(i + 1);
          return {
            label: `${labels?.at(i)}`,
            key: id,
            children: children?.at(i),
          };
        })}
      />
    </>
  );
};

export default CustomVerticalTabs;