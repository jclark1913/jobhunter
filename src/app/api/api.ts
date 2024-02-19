import axios from 'axios';

const BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:3000';

interface ApiResponse {
  [key: string]: any;
}

interface RequestData {
  [key: string]: any;
}

/**API Class
 *
 * A static class that bundles all API calls.
 *
 * @class JobHunterAPI
 */
export class JobHunterAPI {
  static token: string = "";

  static async request(endpoint: string, data: RequestData = {}, method: string = "get") {
    console.debug("API Call:", endpoint, data, method);

    const url: string = `${BASE_URL}/${endpoint}`;
    const headers: HeadersInit = { Authorization: `Bearer ${JobHunterAPI.token}` };
    const params = method === "get" ? data : {};

    try {
      return (await axios({ url, method, data, params, headers })).data;
    } catch (err: unknown) {
      if (err instanceof Error) {
        console.error("API Error:", err);
        const message = err.message;
        throw Array.isArray(message) ? message : [message];
      }
    }
  }


  // Individual API routes

  // Auth

  /** POST register new user function */


}