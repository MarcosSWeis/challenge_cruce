import { ISearchState } from "./search";

export interface IAppContextProps {
    searching: ISearchState;
    setSearching: (toSearch: string) => void;
}