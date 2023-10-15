import React from 'react';
import CustomPopover from './Popover';

interface TableColumn {
  title: string;
  dataIndex: string;
  key: any;
}


interface CustomTableRow {
  ticketName: string;
  ticketStatus: string;
  reason: string;
  ticketDate: string;
  ticketId: string;
  ticketItem: string;
  studentId: string;
  [key: string]: string; 
}


interface CustomTableProps {
  columns: TableColumn[];
  data?:  CustomTableRow[]; 
}

const CustomTable: React.FC<CustomTableProps> = ({ columns, data }) => {
  return (
    <table>
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={column.key}>{column.title}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data?.map((row, rowIndex) => (
          <tr key={rowIndex} className='ant-table-cell'>
            {columns.map((column) => (
              <td key={column.key}>{row[column.dataIndex]}</td> 
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CustomTable;
