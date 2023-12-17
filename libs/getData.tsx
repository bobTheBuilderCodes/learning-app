import { alertUserHandler } from "@/helpers/alertUserHandler";

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
  dataId: string | string[]
}

export async function postData({
  method = "POST",
  url, authToken,
  payload,
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
    alertUserHandler(result?.message || "Successful");
  } catch (error) {
    console.log(error);
  }
}


interface ISearchItems {
  ticketname: string,
  ticketId?: number,
  authToken: string
}

export async function searchItems({ticketname , authToken} : ISearchItems) {
  try {
    const searchUrl = `https://schoolsphere-backend.onrender.com/v1/ticket/name/ticketbyname?ticketname=${encodeURIComponent(ticketname)}`;
  
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${authToken}`, // Replace with your actual authentication header
    };
    
    const response = await fetch(searchUrl, {headers} );
    if (!response.ok) {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }
    const data = await response.json();
    console.log("Results here", data)
    return data;
  } catch (error) {
    console.error('An error occurred:', error);
    return [];
  }
}


;




export async function getSingleData(
  {url, dataId}: IGetSingleData
){
  const res = await fetch(`${url}/${dataId}`);

  return res.json();
}
export async function getQuotes(url: string): Promise<allQuotes> {
  const res = await fetch(url);

  return res.json();
}
