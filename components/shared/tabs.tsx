import StudentGrade from "@/components/students/StudentGrade";
import StudentHealth from "@/components/students/StudentHealth";
import StudentProfile from "@/components/students/StudentProfile";
import StudentTickets from "@/components/students/StudentTickets";

export const studentTabs = [
  "Profile",
  "Grades and Reports",

  "Health Information",
  "Tickets",
];

export const studentProfileVerticalTabs = ["Basic Information" , "Address", "Contact Information", "Guardian Info", "Other Information"]

export const studentTabsContent = [
  <StudentProfile key={Math.random()} />,
  <StudentGrade key={Math.random()} />,
  <StudentHealth key={Math.random()} />,
  <StudentTickets key={Math.random()} />,
];
export const studentProfileInfo = [
  <StudentProfile key={Math.random()} />,
  <StudentGrade key={Math.random()} />,
  <StudentHealth key={Math.random()} />,
  <StudentTickets key={Math.random()} />,
];


