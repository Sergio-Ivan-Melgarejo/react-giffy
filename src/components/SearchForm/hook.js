import React, { useCallback } from "react";

const ACTION = {
  UPDATE_KEYWORD: "update_keyword",
  UPDATE_RATING: "update_rating",
};

const filterReducer = (state, action) => {
  switch (action.type) {
    case ACTION.UPDATE_KEYWORD:
      return {
        ...state,
        keyword: action.payload,
        times: state.times + 1,
      };
    case ACTION.UPDATE_RATING:
      return {
        ...state,
        rating: action.payload,
      };
    default: {
      console.log(new Error(`Action ${action.type} not supported`));
      return state;
    }
  }
};

export const useForm = ({ initialKeyword = "", initialRating = "g" }) => {
  const [state, dispatch] = React.useReducer(filterReducer, {
    keyword: decodeURIComponent(initialKeyword),
    ratign: initialRating,
    times: 0,
  });

  const { keyword, times, rating } = state;

  const updateKeyword = useCallback(
    (keyword) => dispatch({ type: ACTION.UPDATE_KEYWORD, payload: keyword }),
    []
  );
  const updateRating = useCallback(
    (rating) => dispatch({ type: ACTION.UPDATE_RATING, payload: rating }),
    []
  );

  return { keyword, times, rating, updateKeyword, updateRating };
};
