export async function getUsers(url: string): Promise<allStudents> {
  const res = await fetch(url);

  return res.json();
}

const headers = new Headers({
  "Content-Type": "application/json",
});

interface IProps {
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  gender: string;
  dateOfBirth: string;
  admissionDate: string;
  guardianName: string;
}

export async function createUsers(
  url: string,
  payload: IProps
): Promise<createStudent> {
  const res = await fetch(url, {
    method: "POST",
    headers: headers,
    body: JSON.stringify(payload),
  });

  return res.json();
}

export async function getUser(
  url: string,
  userId: string
): Promise<singleStudent> {
  const res = await fetch(`${url}${userId}`);

  return res.json();
}

export async function getQuotes(url: string): Promise<allQuotes> {
  const res = await fetch(url);

  return res.json();
}
