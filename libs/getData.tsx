
import { Alert } from "antd";

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



// export async function getUsers(url: string): Promise<allStudents > {
export async function getUsers(url: string) {
  const res = await fetch(url, { cache: "no-cache" });

  return res.json();
}

interface IPostData {
  method?: string,
  url: string,
  payload: any,
  message: string
}

export async function postData({method = 'POST', url, payload, message}: IPostData) {
  try {
    const response = await fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if(response.ok){
      <Alert message={message} className="mb-4" type="success" showIcon />
    }

    const result = await response.json();
    // getUsers(api.allStudents);
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
