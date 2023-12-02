const baseUrl = "https://schoolsphere-backend.onrender.com/v1"
export const api = {
  allStudents: `${baseUrl}/students/allStudents`,
  allTickets: `${baseUrl}/ticket/allTickets`,
  studentTickets: `${baseUrl}/ticket/tickets`,   //Append the student ID to this endpoint to get specific student tickets
  singleStudent: `${baseUrl}/students/`,
  loginStudent: `${baseUrl}/auth/loginStudent`,
  createStudent: `${baseUrl}/auth/createStudent`,
  motivation: "https://zenquotes.io/api/quotes/",
  
};

