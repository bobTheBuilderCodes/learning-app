"use client"

import React from 'react';
import type { CollapseProps } from 'antd';
import { Button, Collapse, Switch } from 'antd';
import SubHeading from '@/constants/SubHeading';
import Paragraph from '@/constants/Paragraph';

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const items: CollapseProps['items'] = [
  {
    key: '1',
    label: 'Primary 1',
    children: <p>{text}</p>,
  },
  {
    key: '2',
    label: 'Primary 2',
    children: <p>{text}</p>,
  },
  {
    key: '3',
    label: 'Primary 3',
    children: <p>{text}</p>,
  },
  {
    key: '4',
    label: 'Primary 4',
    children: <p>{text}</p>,
  },
  {
    key: '5',
    label: 'Primary 5',
    children: <p>{text}</p>,
  },
  {
    key: '6',
    label: 'Primary 6',
    children: <p>{text}</p>,
  },
  {
    key: '7',
    label: 'JHS 1',
    children: <p>{text}</p>,
  },
  {
    key: '8',
    label: 'JHS 2',
    children: <p>{text}</p>,
  },
  {
    key: '9',
    label: 'JHS 3',
    children: <p>{text}</p>,
  },
];

const StudentGrade: React.FC = () => {
  const onChange = (key: string | string[]) => {
    console.log(key);
  };

  return  <div className="flex">
 <Collapse items={items} defaultActiveKey={['1']} onChange={onChange} className='w-3/4' />

  <div className="w-1/4 bg-white p-4 rounded-md ml-12 h-full">
    <div className="bg-gray-100 p-3 rounded-md mt-2 mb-6">
      <SubHeading className="font-semibold mb-6">Quick Details</SubHeading>
      <Paragraph className="my-4">
        Status :{" "}
        <span className="bg-green-50 text-green-500 px-2 p-1 rounded-md m-4">
          Active
        </span>
      </Paragraph>
      <Paragraph className="my-4">
        Role :{" "}
        <span className="bg-green-50 text-green-500 p-1 px-2 rounded-md m-4">
          Student
        </span>
      </Paragraph>
    </div>
    <hr />
    <div className="bg-gray-100 p-3 rounded-md mt-6 mb-6">
      <SubHeading className="font-semibold mb-3">Chronic Disease</SubHeading>

      <div className="flex mb-6">
        <label htmlFor="status" className="mr-auto text-[16px]">
          Heart Disease
        </label>
        {/* <Switch defaultChecked onChange={onChangeToggle} /> */}
      </div>
      <div className="flex mb-6">
        <label htmlFor="status" className="mr-auto text-[16px]">
        Stroke
        </label>
        {/* <Switch defaultChecked onChange={onChangeToggle} /> */}
      </div>
      <div className="flex mb-6">
        <label htmlFor="status" className="mr-auto text-[16px]">
       Diabetes
        </label>
        {/* <Switch defaultChecked onChange={onChangeToggle} /> */}
      </div>
      <Button type="default">Cancel</Button>
      <Button type="primary">Save</Button>
    </div>
  
    
  </div>
</div>
  
};

export default StudentGrade;