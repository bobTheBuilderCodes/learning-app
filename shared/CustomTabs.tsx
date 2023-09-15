"use client";

import React, { ReactElement, useMemo, useState } from "react";
import { Button, Tabs } from "antd";

const operations = <Button>Extra Action</Button>;

interface IProps {
  labels?: string[];
  children?: ReactElement[];
  tabLength: number;
}

const OperationsSlot: Record<PositionType, React.ReactNode> = {
  left: <Button className="tabs-extra-demo-button">Left Extra Action</Button>,
  right: <Button>Right Extra Action</Button>,
};

type PositionType = "left" | "right";

const CustomTab = ({ labels, tabLength, children }: IProps) => {
  const [position, setPosition] = useState<PositionType[]>(["left", "right"]);

  const slot = useMemo(() => {
    if (position.length === 0) return null;

    return position.reduce(
      (acc, direction) => ({ ...acc, [direction]: OperationsSlot[direction] }),
      {}
    );
  }, [position]);

  const items = new Array(tabLength).fill(null).map((content, i) => {
    const id = String(i + 1);
    return {
      label: `${labels?.at(i)}`,
      key: id,
      children: children?.at(i),
    };
  });

  return (
    <div className="px-4">
      <Tabs tabBarExtraContent={operations} items={items} />
    </div>
  );
};

export default CustomTab;
