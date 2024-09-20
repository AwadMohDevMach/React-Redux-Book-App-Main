import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBooks, deleteBook } from "../store/booksSlice";
import BookInfo from "./BookInfo";
import BooksList from "./BooksList";

import "./book.css";

const PostContainer = () => {
  const { isLoading, book } = useSelector((state) => {
    return state.books;
  });
  console.log(book);

  const { isLoggedIn } = useSelector((state) => state.authSlice);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  return (
    <Fragment>
      <hr className="my-5" />
      <div className="row">
        <div className="col">
          <BooksList
            isLoading={isLoading}
            data={book}
            isLoggedIn={isLoggedIn}
            deleteBook={deleteBook}
            dispatch={dispatch}
          />
        </div>
        <div className="col side-line">
          <BookInfo />
        </div>
      </div>
    </Fragment>
  );
};

export default PostContainer;
