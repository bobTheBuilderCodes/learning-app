const baseUrl = "https://schoolsphere-backend.onrender.com/v1"
export const api = {

  // Students Details
  allStudents: `${baseUrl}/students/allStudents`,
  singleStudent: `${baseUrl}/students/`,

  // Tickets
  allTickets: `${baseUrl}/ticket/allTickets`,
  studentTickets: `${baseUrl}/ticket/tickets`, 
  getStudentTickets: `${baseUrl}/ticket/tickets`,
  postTicket: `${baseUrl}/ticket` , //Append the student ID to this endpoint to get specific student tickets
  deleteTicket: `${baseUrl}/ticket` ,

  // Auth
  loginStudent: `${baseUrl}/auth/loginStudent`,
  createStudent: `${baseUrl}/auth/createStudent`,

  // Quotes
  motivation: "https://zenquotes.io/api/quotes/",
  
};

