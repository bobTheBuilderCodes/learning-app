import CustomOptions from "./CustomOptions";

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
  data?: CustomTableRow[];
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
  onPageChange: (newPage: number) => void;
}


const CustomTable: React.FC<CustomTableProps> = ({
  columns,
  data,
  totalItems,
  itemsPerPage,
  currentPage,
  onPageChange,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      onPageChange(newPage);
    }
  };

  return (
    <table className="w-[100%] text-left">
      <thead className="thead">
        <tr className="h-12">
          {columns.map((column) => (
            <th className="px-3 bg-slate-100" key={column.key}>
              {column.title}
            </th>
          ))}
          <th className="px-3 bg-slate-100">Actions</th>
        </tr>
      </thead>
     
      <tbody>
        {data?.map((row, rowIndex) => (
          <tr key={rowIndex} className="bg-white h-11 even:bg-slate-50">
            {columns.map((column) => (
              <td
                className={`px-2 ${
                  column.dataIndex === "ticketStatus"
                    ? row[column.dataIndex] === "pending"
                      ? "bg-yellow-50 inline-block mt-2 rounded-full text-yellow-600"
                      : row[column.dataIndex] === "approved"
                      ? "bg-green-50 inline-block mt-2 rounded-full text-green-600"
                      : "text-gray-900"
                    : ""
                }`}
                key={column.key}
              >
                {column.dataIndex === 'ticketDate' ? 
                  new Date(row[column.dataIndex]).toDateString() : 
                  row[column.dataIndex]}
              </td>
            ))}
            <td>
              <CustomOptions>
                <p className="mr-5">Edit</p>
                <p>Delete</p>
              </CustomOptions>
            </td>
          </tr>
        ))}
      </tbody>
      <tfoot className="text-right w-[100%] bg-white">
        <tr>
          <td colSpan={columns.length + 1} className="p-4 border-t-2 border-slate-50">
            <div className="pagination">
              <button
                className="bg-gray-100 p-3 rounded-md mx-3 font-bold text-gray-700"
                onClick={() => handlePageChange(currentPage - 1)}
              >
                Previous
              </button>
              <span>{`${currentPage} of ${totalPages}`}</span>
              <button
                className="bg-gray-100 p-3 rounded-md mx-3 font-bold text-gray-700"
                onClick={() => handlePageChange(currentPage + 1)}
              >
                Next
              </button>
            </div>
          </td>
        </tr>
      </tfoot>
    </table>
  );
};

export default CustomTable;
