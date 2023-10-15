import React from 'react';

type DataObject = {
  [key: string]: any;
};

type Column = {
  title: string;
  dataIndex: string;
  key: string;
};


interface TableProps {
  data: DataObject[];
  columns: Column[];
}

const Table: React.FC<TableProps> = ({ data, columns }) => {
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
        {data.map((item, index) => (
          <tr key={index}>
            {columns.map((column) => (
              <td key={`${column.key}-${index}`}>{item[column.dataIndex]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
