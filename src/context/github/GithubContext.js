import { createContext, useReducer } from "react";
import githubReducer from "./GithubReducer";
import { useParams } from "react-router-dom";

const GithubContext = createContext(); // Creating the Github Context, we will also create another alert context later on

export const GithubProvider = ({ children }) => {
  // GithubProvider

  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(githubReducer, initialState);


  return (
    <GithubContext.Provider
      value={{
        ...state, 
        dispatch
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};
export default GithubContext;
