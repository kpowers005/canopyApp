import { csrfFetch } from './csrf';

const LOAD = 'treehouses/LOAD';
const FIND = 'reviews/FIND'

const load = trees => ({
  type: LOAD,
  trees
});



export const getTrees = () => async dispatch => {
  const res = await csrfFetch('/api/treehouses');

  if (res.ok) {
    const trees = await res.json();
    dispatch(load(trees));
  }
}







const treehouseReducer = (state = {}, action) => {
  const newState = { ...state }
  switch(action.type) {
    case LOAD:
      {
      const allTrees = {};
      action.trees.forEach(tree => {
        allTrees[tree.id] = tree;
      });

      return {
        ...allTrees,
        ...state,

      }
    }
    default:
      return state;
  };

}

export default treehouseReducer;
