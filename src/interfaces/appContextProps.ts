import { ISearchState } from "./search";

export interface IAppContextProps {
    search: ISearchState;
    setSearch: (toSearch: string) => void;
}