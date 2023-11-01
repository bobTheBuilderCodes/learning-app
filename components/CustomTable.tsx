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
    <table className='w-[100%] text-left'>
      <thead className='thead'>
        <tr className=' h-12'>
          {columns.map((column) => (
            <th className='px-3 bg-slate-100' key={column.key}>{column.title}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data?.map((row, rowIndex) => (
          <tr key={rowIndex} className='bg-white h-11 even:bg-slate-50'>
            {columns.map((column) => (
              
              <td className='p-3' key={column.key}>{row[column.dataIndex]}</td> 
            ))}
          </tr>
        ))}
      </tbody>
      <tfoot>
        Pagination goes here
      </tfoot>
    </table>
  );
};

export default CustomTable;
