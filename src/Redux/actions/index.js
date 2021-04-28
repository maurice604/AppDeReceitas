import {
  REQ_SEARCH,
  SET_SEARCH,
  NOT_FOUND,
  RESET_NOT_FOUND,
  RECIPES_LIST,
} from './actionTypes';
import fetchSearchBar from '../../services';

export const getRecipesAction = (recipes) => ({
  type: RECIPES_LIST,
  recipes,
});

export const reqSearch = () => ({ type: REQ_SEARCH });

export const setSearch = (items) => ({ type: SET_SEARCH, items });

export const resetNotFound = () => ({ type: RESET_NOT_FOUND });

export const notFound = () => ({ type: NOT_FOUND });

export const fetchSearch = (url) => async (dispatch) => {
  dispatch(reqSearch());
  const items = await fetchSearchBar(url);
  if (!items) return dispatch(notFound());
  dispatch(setSearch(items));
  return dispatch(resetNotFound());
};
