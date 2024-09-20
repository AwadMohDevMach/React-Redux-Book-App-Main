import React from "react";

const BooksList = ({ isLoading, data , isLoggedIn , dispatch , deleteBook}) => {
  const bookList = 
    data.length > 0 ? data.map((book)=>{
      return   <li
      key={book.id}
      className="list-group-item d-flex  justify-content-between align-items-center"
    >
      <div>{book.tittle}</div>
      <div className="btn-group" role="group">
        <button type="button" className="btn btn-primary">
          Read
        </button>
        <button type="button" className="btn btn-danger" 
        disabled={!isLoggedIn}
        onClick={() => dispatch(deleteBook(book.id))}
        >
          Delete
        </button>
      </div>
    </li>;
    }) : "there is no books avilaable"

  return (
    <div>
      <h2>Books List</h2>
      {isLoading ? "loading..." : <ul className="list-group">
        {bookList}
        </ul>}
    </div>
  );
};

export default BooksList;
