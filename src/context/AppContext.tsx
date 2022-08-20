import { createContext } from 'react'
import { IAppContextProps } from '../interfaces/appContextProps'
import { ISearchState } from '../interfaces/redusers'
import { ILoginUser } from './AppProvider'





export const AppContext = createContext<IAppContextProps>({} as IAppContextProps)