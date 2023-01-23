import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function BooksCorner() {
  const [books, setBooks] = useState([]);

  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    loadData();
  }, []);

  let loadData = async () => {
    setLoading(true);
    let books = await axios.get("https://63180e51ece2736550bf999b.mockapi.io/books");
    setBooks(books.data);
    setLoading(false);
  };

  let bookDelete = async (id) => {
    try {
      let ask = window.confirm("Are You Sure! Do You Want To Delete This Data?");
      if (ask) {
        await axios.delete(`https://63180e51ece2736550bf999b.mockapi.io/books/${id}`);
      }
      loadData();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="container">
        <div className="d-sm-flex align-items-center mt-3 justify-content-between mb-4">
          <h1 className="h3 mb-0 text-gray-800">BooksCorner</h1>
        </div>
        {isLoading ? (
          <span> Loading...</span>
        ) : (
          <div className="card shadow mb-4">
            <div className="card-header text-center">
              <h4 className="p-3 font-weight-bold text-primary">BOOKS DETAILS</h4>
            </div>
            <div className="card-body">
              {books.map((book, index) => {
                return (
                  <>
                    <div className="col-lg-4 mx-auto">
                      <div className="card mb-3" style={{ width: "20rem" }}>
                        <img
                          src={book.img}
                          className="card-img-top offset-6 py-2 mt-3 mx-auto"
                          alt="Img"
                          style={{ width: "10rem", height: "8rem" }}
                        />
                        <div className="card-body">
                          <h5 className="card-title text-center">{book.name}</h5>
                        </div>
                        <ul className="list-group list-group-flush">
                          <div className="">
                            <li className="list-group-item">Book Id : {book.id}</li>
                          </div>
                          <div>
                            <li className="list-group-item">Author : {book.author}</li>
                          </div>
                          <div>
                            <li className="list-group-item">Price : {book.price}</li>
                          </div>
                          <div>
                            <li className="list-group-item">Genere : {book.quantity}</li>
                          </div>
                          <div>
                            <li className="list-group-item mb-3">Available : {book.available}</li>
                          </div>
                          <div className="d-flex justify-content-center">
                            <button className="sf-button mb-3 w-25 mx-2">
                              <Link className="edit-button" to={`/portal/library/edit/${book.id}`}>
                                Edit
                              </Link>
                            </button>

                            <button
                              onClick={() => {
                                bookDelete(book.id);
                              }}
                              className="sf-button mb-3 w-25"
                            >
                              Delete
                            </button>
                          </div>
                        </ul>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default BooksCorner;
