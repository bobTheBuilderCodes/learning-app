export async function getData(url: string, authToken?: string) {
  const headers = {
    'Authorization': `Bearer ${authToken}`,
    'Content-Type': 'application/json', 
    'cache': 'no-cache'
  };
  const res = await fetch(url, {headers });

  return res.json();
}

interface IPostData {
  method?: string;
  url: string;
  payload: any;
  message?: string;
}

interface IGetSingleData {
  url: string,
  dataId: string
}

export async function postData({
  method = "POST",
  url,
  payload,
  message,
}: IPostData) {
  try {
    const response = await fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
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
