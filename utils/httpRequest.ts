import { toast } from "react-toastify";

export async function fetchUrl(
  url: string,
  method: string,
  headers?: any,
  requestBody?: any,
  toastMessages?: {
    pending?: string;
    success?: string;
    error?: string;
  }
) {
  // create fetch promise
  const fetchPromise = fetch(url, {
    method: method,
    headers: headers,
    body: JSON.stringify(requestBody),
  }).then((res) => res.json());

  // use toast to inform user
  return toast
    .promise(fetchPromise, {
      pending: toastMessages?.pending ?? "Loading...",
      success: toastMessages?.success ?? "Success",
      error: toastMessages?.error ?? "Error",
    })
    .then((res) => {
      return {
        success: true,
        response: res,
      };
    })
    .catch((err) => {
      return {
        success: false,
        response: err,
      };
    });
}
