import { useState, createContext, useContext } from 'react';

export const ReviewContext = createContext();

export const useReview = () => useContext(ReviewContext);

export default function ReviewProvider ({ children }) {
  const [userReview, setUserReview] = useState('');
  const [userRating, setUserRating] = useState(0);
  const [canReview, setCanReview] = useState(true);
  const [renderForm, setRenderForm] = useState(false);

  return (
    <ReviewContext.Provider value={{
      userReview,
      setUserReview,
      userRating,
      setUserRating,
      renderForm,
      setRenderForm,
      canReview,
      setCanReview
    }}>
      { children }
    </ReviewContext.Provider>
  )
}
