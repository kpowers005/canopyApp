import { csrfFetch } from './csrf';

const LOAD = 'treehouses/LOAD';
const FIND_ONE = 'treehouses/FIND_ONE';


const load = trees => ({
  type: LOAD,
  trees
});

const getOne = tree => ({
  type: FIND_ONE,
  tree
});


export const getTrees = () => async dispatch => {
  const res = await csrfFetch('/api/treehouses');

  if (res.ok) {
    const trees = await res.json();
    dispatch(load(trees));
  }
}


export const findTreehouse = (id) => async dispatch => {
  const res = await csrfFetch(`/api/treehouses/${id}`);

  if (res.ok) {
    const tree = await res.json();
    dispatch(getOne(tree));
  }
};




const treehouseReducer = (state = {}, action) => {
  switch(action.type) {
    case LOAD:
      {
      const allTrees = {};
      action.trees.forEach(tree => {
        allTrees[tree.id] = tree;
      });

      return {
        ...allTrees,
      }
    }
    case FIND_ONE:
     return {...action.tree}

    default:
      return state;
  };

}

export default treehouseReducer;
