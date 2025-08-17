import { createContext } from "react";
const CurrentUserContext = createContext(null); // null when logged out
export default CurrentUserContext;
