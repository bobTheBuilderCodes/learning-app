type allStudents = {
  "students": [
    {
      "rollId": string,
      "username": string,
      "firstName": string,
      "lastName": string,
      "middleName": string,
      "email": string,
      "password": string,
      "dateOfBirth": string,
      "contact": string,
      "gender": string,
      "admissionDate": string,
      "religion": string,
      "nationality": string,
      "guardianName": string,
      "relationsToGuardian": string,
      "medicalConditions": string,
      "allergies": string,
      "photo": string,
      "previousSchool": string,
      "status": "ACTIVE",
      "role": "STUDENT",
      "emergencyContact": string,
      "emergencyContactName": string,
      "createdAt": string,
      "updatedAt": string
    }
    
  ]
}

type singleStudent = {findStudent: {
    "rollId": string,
    "username": string,
    "firstName": string,
    "lastName": string,
    "middleName": string,
    "email": string,
    "contact": string,
    "gender": string,
    "address": {
      "GPS": string,
      "location": string,
      "studentId": string,
      "createdAt": string,
      "updatedAt": string
    },
    "dateOfBirth": string,
    "guardianName": string,
    "teacher": [],
    "schoolClass": [],
    "academicRecords": [],
    "admissionDate": string,
    "nationality": string,
    "allergies": string,
    "emergencyContact": string,
    "emergencyContactName": string,
    "medicalConditions": string,
    "password": string,
    "photo": string,
    "previousSchool": string,
    "relationsToGuardian": string,
    "religion": string,
    "status": string,
    "createdAt": string,
    "updatedAt": string
  }
}

type allQuotes = [{

  q: string,
  a: string,
  c: string,
  h: string
}] 