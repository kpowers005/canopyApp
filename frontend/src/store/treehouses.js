import { csrfFetch } from './csrf';

const LOAD = 'treehouses/LOAD';
const FIND = 'reviews/FIND'

const load = trees => ({
  type: LOAD,
  trees
});

const reviewFind = reviews => ({
  type: FIND,
  reviews
})

export const getTrees = () => async dispatch => {
  const res = await csrfFetch('/api/treehouses');

  if (res.ok) {
    const trees = await res.json();
    dispatch(load(trees));
  }
}
export const getReviews = (treehouseid) => async dispatch => {
  console.log(treehouseid, 'storeeeeeeee')
  const res = await csrfFetch(`/api/reviews/${treehouseid}`);

  if (res.ok) {
    const reviews = await res.json();
    dispatch(reviewFind(reviews));
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
    case FIND:
      {
        const allReviews = {};
        action.reviews.forEach(review => {
          allReviews[review.id] = review;
        });

        return {
          ...allReviews,
          ...state,
        }
      }
    default:
      return state;
  };

}

export default treehouseReducer;