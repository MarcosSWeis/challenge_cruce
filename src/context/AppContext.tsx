import { createContext } from 'react'
import { IAppContextProps } from '../interfaces/appContextProps'




export const AppContext = createContext<IAppContextProps>({} as IAppContextProps)