import StudentGrade from "@/components/StudentGrade";
import StudentHealth from "@/components/StudentHealth";
import StudentProfile from "@/components/StudentProfile";
import StudentTickets from "@/components/StudentTickets";

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


