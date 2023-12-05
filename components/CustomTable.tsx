import { getSingleData, getData, postData } from "@/libs/getData";
import CustomOptions from "./CustomOptions";
import { api } from "@/libs/endpoints";
import CustomDrawer from "./Drawer";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { Alert, Col, Form, Input, Row, Select } from "antd";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { alertUserHandler } from "@/helpers/alertUserHandler";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

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

  const [formData, setFormData] = useState({
    ticketName: "",
    reason: "",
    ticketItem: "",
    ticketDate: new Date(),
  });

  const { ticketName, reason, ticketItem } = formData;
  const authData = useSession();
  const accessToken = authData?.data?.user?.accessToken!;
  const router = useRouter()

  const formDataHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      onPageChange(newPage);
    }
  };

  const deleteTicketHandler = async(id: string) => {
   await postData({
      method: "DELETE",
      url: `${api.deleteTicket}/${id}`,
      payload: {
        ticketId: id,
      },
      authToken: accessToken
      // message: "Ticket deleted successfully",
    });
    // router.refresh()
    
    alertUserHandler("Ticket has been deleted successfully");
  };

  // const alertUserHandler = () => toast("Ticket Deleted Successfully");

  const editTicketHandler = async(id: string) => {
    await postData({
      method: "PATCH",
      url: `${api.editTicket}/${id}`,
      payload: formData,
      authToken: accessToken,
      message: "Ticket edited successfully",
    });
    
    // router.refresh()
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
          <th className="px-9 bg-slate-100 text-right">Actions</th>
        </tr>
      </thead>

      <tbody>
        {data?.map((row, rowIndex) => (
          <tr key={rowIndex} className="bg-white h-11 even:bg-slate-50">
            {columns.map((column) => (
              <td
                className={`px-2 ${
                  column.dataIndex === "ticketStatus"
                    ? row[column.dataIndex] === "Pending"
                      ? "bg-yellow-50 inline-block mt-2 rounded-full text-yellow-600"
                      : row[column.dataIndex] === "Approved"
                      ? "bg-green-50 inline-block mt-2 rounded-full text-green-600"
                      : "text-gray-900"
                    : ""
                }`}
                key={column.key}
              >
                {column.dataIndex === "ticketDate"
                  ? new Date(row[column.dataIndex]).toDateString()
                  : row[column.dataIndex]}
              </td>
            ))}
            <td>
              <CustomOptions className="justify-end mx-3">
                {/* <button className="mr-5" onClick={()=>editTicketHandler(row.ticketId)}>Edit</button> */}
                <CustomDrawer
                  buttonContent=""
                  buttonType="text"
                  title="Edit Ticket Request"
                  myFunc={() => editTicketHandler(row.ticketId)}
                  type="text"
                  icon={<EditOutlined size={12} />}
                  size="small"
                >
                  <Form layout="vertical">
                    <Row gutter={16}>
                      <Col span={12}>
                        <Form.Item name="ticketName" label="Title">
                          <Input
                            placeholder="Enter request title"
                            name="ticketName"
                            value={ticketName}
                            onChange={formDataHandler}
                          />
                        </Form.Item>
                      </Col>
                      <Col span={12}>
                        <Form.Item name="ticketItem" label="Ticket Item">
                          <Input
                            placeholder="Enter item name"
                            name="ticketItem"
                            value={ticketItem}
                            onChange={formDataHandler}
                          />
                        </Form.Item>
                      </Col>
                    </Row>
                    <Row gutter={16}>
                      <Col span={12}>
                        <Form.Item name="reason" label="Reason">
                          <Input
                            placeholder="Enter reason"
                            name="reason"
                            value={reason}
                            onChange={formDataHandler}
                          />
                        </Form.Item>
                      </Col>
                    </Row>
                  </Form>
                </CustomDrawer>
                <button
                  onClick={() => deleteTicketHandler(row.ticketId)}
                  className=" mx-3 px-3 rounded-lg"
                >
                  <DeleteOutlined color="red" />
                </button>
                <button
                  onClick={() => alertUserHandler("Notification working well")}
                >
                  Notify
                </button>
                <ToastContainer />
                {/* <CustomDrawer buttonContent="" icon={<DeleteOutlined />} myFunc={()=>deleteTicketHandler(row.ticketId)}></CustomDrawer> */}
              </CustomOptions>
            </td>
          </tr>
        ))}
      </tbody>
      <tfoot className="text-right w-[100%] bg-white">
        <tr>
          <td
            colSpan={columns.length + 1}
            className="p-4 border-t-2 border-slate-50"
          >
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
