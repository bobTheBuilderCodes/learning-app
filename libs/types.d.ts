type allStudents = {
  students: [
    {
      rollId: string;
      username: string;
      firstName: string;
      lastName: string;
      middleName: string;
      email: string;
      password: string;
      dateOfBirth: string;
      contact: string;
      gender: string;
      admissionDate: string;
      religion: string;
      nationality: string;
      guardianName: string;
      relationsToGuardian: string;
      medicalConditions: string;
      allergies: string;
      photo: string;
      previousSchool: string;
      status: "ACTIVE";
      role: "STUDENT";
      emergencyContact: string;
      emergencyContactName: string;
      createdAt: string;
      updatedAt: string;
    }
  ];
};

type singleStudent = {
  findStudent: {
    rollId: string;
    username: string;
    firstName: string;
    lastName: string;
    middleName: string;
    email: string;
    contact: string;
    gender: string;
    address: {
      GPS: string;
      location: string;
      studentId: string;
      createdAt: string;
      updatedAt: string;
    };
    dateOfBirth: string;
    guardianName: string;
    teacher: [];
    schoolClass: [];
    academicRecords: [];
    admissionDate: string;
    nationality: string;
    allergies: string;
    emergencyContact: string;
    emergencyContactName: string;
    medicalConditions: string;
    password: string;
    photo: string;
    previousSchool: string;
    relationsToGuardian: string;
    religion: string;
    status: string;
    createdAt: string;
    updatedAt: string;
  };
};

type allQuotes = [
  {
    q: string;
    a: string;
    c: string;
    h: string;
  }
];

type createStudent = {
  username: string;
  firstName: string;
  lastName: string;
  middleName: string;
  email: string;
  password: string;
  dateOfBirth: string;
  contact: string;
  address: {
    GPS: string;
    location: string;
  };
  gender: {};
  schoolClass: [
    {
      classType: {};
      schoolClass: {};
      studentId: string;
      teacherId: string;
    }
  ];
  teacher: [
    {
      studentId: string;
      teacherId: string;
    }
  ];
  admissionDate: string;
  religion: string;
  nationality: string;
  guardianName: string;
  relationsToGuardian: string;
  medicalConditions: string;
  allergies: string;
  photo: string;
  previousSchool: string;
  academicRecords: [
    {
      academicYear: string;
      term: {};
      courseCode: string;
      courseName: string;
      teacherId: string;
      studentId: string;
      grades: string;
      studentPosition: string;
      teacherComments: [string];
      recommendations: string;
    }
  ];
  status: {};
  emergencyContact: string;
  emergencyContactName: string;
};


type allTickets = 	

{
  "allTickets": [
    {
      "ticketId": number,
      "ticketName": string,
      "reason": string,
      "ticketItem": string,
      "ticketDate": string,
      "ticketStatus": string,
      "studentId": string,
      "createdAt": string,
      "updatedAt": string
    }
  ],
  "message": "All Tickets Fetched Successfully"
}
