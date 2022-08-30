import { useReducer } from "react";
import { AppContext } from "./AppContext";
import { searchReducer } from "./searchReducer";
import { ISearchState, IUserState } from "../interfaces/redusers";
import { User } from "../models/User";
import { userReducer } from "./userReducer";
import { getProductoByTitle, getUserByEmail } from "../services/db-service";
import { type } from "os";
import { createModuleResolutionCache } from "typescript";

interface AppProviderProps {
  children: JSX.Element | JSX.Element[];
}

const INITIAL_STATE_SEARCH: ISearchState = {
  loading: false,
  resultSearch: [],
};

export interface ILoginUser {
  loading: boolean;
  user: User | undefined;
}

const INITIAL_USER: IUserState = {
  loading: false,
  userLogged: undefined, //new User(0, "", "", "", "", [], Role.standard),
  errors: {
    email: "",
    password: "",
  },
};
export const AppProvider = ({ children }: AppProviderProps) => {
  const [searching, dispatch] = useReducer(searchReducer, INITIAL_STATE_SEARCH);
  const setSearching = (toSearch: string) => {
    dispatch({ type: "search", payload: { loading: true, resultSearch: [] } });

    setTimeout(() => {
      //simulo la asincronia
      dispatch({
        type: "search",
        payload: { loading: false, resultSearch: getProductoByTitle(toSearch) },
      });
    }, 1000 * 2); //2seg
  };

  const [userLogged, UserDispatch] = useReducer(userReducer, INITIAL_USER);

  const setUserLogged = (email: string, password: string) => {
    console.log(email, password);
    // UserDispatch({
    //     type: 'user', payload: {
    //         loading: true, user: undefined, errors: {
    //             email: "",
    //             password: ""
    //         }
    //     }
    // })
    let user = getUserByEmail(email);
    console.log(user, "user en provider");
    if (!user) {
      UserDispatch({
        type: "user",
        payload: {
          loading: false,
          userLogged: undefined,
          errors: {
            email: "error credenciales invalidas",
            password: "error credenciales invalidas",
          },
        },
      });
    } else {
      console.log(user.password);
      console.log(password);
      console.log(user.getDecryptPassword("123456789", "$2a$10$iySFY9jVYQn2ewFpWqdRa.qCPMQBDkFbARxhZEEljaU7q1gbaEfGy"));
      if (!user.getDecryptPassword(password, user.password)) {
        UserDispatch({
          type: "user",
          payload: {
            loading: false,
            userLogged: undefined,
            errors: {
              email: "el email o contraseña no son validas",
              password: "el email o contraseña no son validas",
            },
          },
        });
      } else {
        UserDispatch({
          type: "user",
          payload: {
            loading: false,
            userLogged: user,
            errors: {
              email: "",
              password: "",
            },
          },
        });
      }
    }
  };

  const logout = () => {
    UserDispatch({ type: "user", payload: { ...INITIAL_USER } });
  };
  const updatedUserLogged = (updatedUser: User) => {
    UserDispatch({
      type: "user",
      payload: { ...INITIAL_USER, userLogged: updatedUser },
    });
  };

  return (
    <AppContext.Provider
      value={{
        searching,
        setSearching,
        userLogged,
        setUserLogged,
        logout,
        updatedUserLogged,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
