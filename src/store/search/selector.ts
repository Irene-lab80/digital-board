import { RootReducerType } from '../rootType';

const GetSearchTerm = (state: RootReducerType) => state.search.searchTerm;

export default GetSearchTerm;
