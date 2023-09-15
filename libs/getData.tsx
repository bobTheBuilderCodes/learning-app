export async function getUsers(url: string): Promise<allStudents> {
  const res = await fetch(url);

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
