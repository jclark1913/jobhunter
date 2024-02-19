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
  static async registerUser(inputData: RequestData) {
    const { username, password, firstName, lastName, email } = inputData;

    let res = await this.request(
      "auth/register",
      { username, password, firstName, lastName, email },
      "post"
    );

    this.token = res.token;
    return this.token;
  }

  /** POST Log in user */

  static async loginUser(inputData: RequestData) {
    const { username, password } = inputData;
    let res = await this.request("auth/token", { username, password }, "post");
    this.token = res.token;
    return this.token;
  }

  // Users

  /** GET user by username */

  static async getUser(username: string) {
    let res = await this.request(`users/${username}`);
    return res.user;
  }

  /** PATCH edit user */
  static async editUser(username: string, updateData: RequestData) {
    let res = await this.request(`users/${username}`, updateData, "patch");
    return res.user;
  }

  // Companies

  /** GET company details by handle */
  static async getCompany(handle: string) {
    let res = await this.request(`companies/${handle}`);
    return res.company;
  }

  /** GET details from all companies */
  static async getCompanies() {
    let res = await this.request("companies");
    return res.companies;
  }

  /** Search for companies by handle */
  static async searchCompaniesByHandle(term: string) {
    let res = await this.request(`companies?nameLike=${term}`);
    return res.companies;
  }

  // JOBS


}