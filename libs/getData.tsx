import { api } from "./endpoints";

export async function getUsers(url: string): Promise<allStudents> {
  const res = await fetch(url, { cache: "no-cache" });

  if (!res.ok) {
    throw new Error(`Failed to fetch ${url}: ${res.status} ${res.statusText}`);
  }

  return res.json();
}

const headers = new Headers({
  "Content-Type": "application/json",
});

interface IProps {
  username?: string;
  firstName: string;
  lastName: string;
  email: string;
  password?: string;
  gender: string;
  dateOfBirth: string;
  admissionDate: string;
  guardianName: string;
}

export async function createUsers(url: string, payload: IProps) {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const result = await response.json();
    getUsers(api.allStudents);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
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
