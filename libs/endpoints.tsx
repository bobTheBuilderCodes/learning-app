const baseUrl = "https://schoolsphere-backend.onrender.com/v1"
let status

export const api = {

  // Students Details
  allStudents: `${baseUrl}/students/allStudents`,
  singleStudent: `${baseUrl}/students`,
  deleteStudent: `${baseUrl}/students`,
  queryStudent: `${baseUrl}/students/querystudent`,

  //Teachers
  createTeacher: `${baseUrl}/auth/createTeacher`,

  //Create User
  createUser: `${baseUrl}/auth/createUser`,

  // Tickets
  allTickets: `${baseUrl}/ticket/allTickets`,
  studentTickets: `${baseUrl}/ticket/tickets`, 
  getTickets: `${baseUrl}/ticket/tickets`,
  getPendingTickets: `${baseUrl}/ticket/pending/pendingTickets`,
  getApprovedTickets: `${baseUrl}/ticket/approved/approvedTickets`,
  getRejectedTickets: `${baseUrl}/ticket/rejected/rejectedTickets`,
  getTicketsByStatus: `${baseUrl}/ticket/${status}/${status}Tickets`,
  searchTicketByName: `${baseUrl}/ticket`,
  editTicket: `${baseUrl}/ticket`,
  postTicket: `${baseUrl}/ticket` , //Append the student ID
  deleteTicket: `${baseUrl}/ticket` ,
  pendingTicketsByAdmin: `${baseUrl}/ticket/pending/pendingTickets`,
  approvedTicketsByAdmin: `${baseUrl}/ticket/approved/approvedTickets`,
  rejectedTicketsByAdmin: `${baseUrl}/ticket/rejected/rejectedTickets`,

  // Auth
  loginStudent: `${baseUrl}/auth/login`,
  createStudent: `${baseUrl}/auth/createStudent`,

  // Quotes
  motivation: "https://zenquotes.io/api/quotes/",

  //Notifications
  notifications: `${baseUrl}/notifications/allnotifications`
  
};

