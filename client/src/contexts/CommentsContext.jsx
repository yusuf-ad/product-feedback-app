import { useParams } from "react-router-dom";

import { createContext, useContext, useState, useCallback } from "react";

const BASE_URL = "http://localhost:3100/api/v1/comments";

const CommentsContext = createContext({
  comments: [],
  commentsLoading: false,
});

function CommentsProvider({ children }) {
  const [comments, setComments] = useState([]);
  const [commentsLoading, setCommentsLoading] = useState(true);

  const getComments = useCallback(async function (id) {
    setCommentsLoading(true);
    try {
      const res = await fetch(`${BASE_URL}/${id}`);
      const { data } = await res.json();

      setComments(data.comments);
    } catch (err) {
      console.error(err);
    } finally {
      setCommentsLoading(false);
    }
  }, []);

  return (
    <CommentsContext.Provider
      value={{
        getComments,
        comments,
        commentsLoading,
        setCommentsLoading,
      }}
    >
      {children}
    </CommentsContext.Provider>
  );
}

function useComments() {
  const value = useContext(CommentsContext);

  if (value === undefined)
    throw new Error(
      "CommentsContext was used outside of the CommentsContextProvider"
    );

  return value;
}

export { CommentsProvider, useComments };
