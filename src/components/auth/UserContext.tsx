import { createContext } from "react";

interface User {
    [key: string]: any;
}

const UserContext = createContext({} as User); // Might want to refactor and just use a default value?

export default UserContext;
