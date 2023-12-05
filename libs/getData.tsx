export async function getData(url: string, authToken?: string) {
  const headers = {
    'Authorization': `Bearer ${authToken}`,
    'Content-Type': 'application/json', 
    'cache': 'no-store'
  };
  const res = await fetch(url, {headers });

  return res.json();
}

interface IPostData {
  method?: string;
  url: string;
  payload: any;
  message?: string;
  authToken: string
}

interface IGetSingleData {
  url: string,
  dataId: string
}

export async function postData({
  method = "POST",
  url, authToken,
  payload,
  message,
}: IPostData) {
  try {
    const response = await fetch((url), {
      method,
      headers: {
        "Content-Type": "application/json",
        'Authorization': `Bearer ${authToken}`,
      },
      body: JSON.stringify(payload),
    });

    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}



export async function getSingleData(
  {url, dataId}: IGetSingleData
){
  const res = await fetch(`${url}${dataId}`);

  return res.json();
}
export async function getQuotes(url: string): Promise<allQuotes> {
  const res = await fetch(url);

  return res.json();
}
