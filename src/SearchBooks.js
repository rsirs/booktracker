import React from "react";
import { Link } from "react-router-dom";

import * as BooksAPI from "./APIs/BooksAPI";
import BookItem from "./BookItem";
import AsyncUtils from "./utils/async-utils"

class SearchBooks extends React.Component {

    state = {
        searchResultBooks: [],
        loading: true,
        error: false,
        query: ""
    }

    componentDidMount = ()=> {
        this.updateStateBySearchResults();
        //Debounce the update of searchresults for  1sec 
        this.updateStateBySearchResults  = AsyncUtils.debounce(this.updateStateBySearchResults, 1000);
    }

    /**
     * @description Update the search results based on user input
     * @param { string } query search made by the user 
     */
     updateStateBySearchResults = (query)=> {
        this.setState({loading: true, error: false});
        BooksAPI.getBooksBySearch(query)
                .then(books => this.setState({searchResultBooks: books.length? books : [], loading: false}))
                .catch(error => this.setState(previousState=> ({searchResultBooks: previousState.searchResultBooks,
                                                                  error: true, 
                                                                  loading: false
                                                                })
                ));
    }

    /**
     * @description Input change handler for search input
     * @param { event } event Change event for the input
     */
    onQueryChange = (event)=> {
        this.updateStateBySearchResults(event.target.value);
    }
    
    /**
     * @description Move the book to user selected shelf
     * @param { Stirng } shelf shelf to which book has to be moved
     * @param { Object } book book that need to be moved
     */
    onShelfChange = (shelf, book) => {
      let books = this.state.searchResultBooks;
      //search for the book and update the shelf
      books = books.map(b => {
          if (b.id === book.id) {
              b.shelf = shelf;
          }
          return b;   
      });
      this.setState({ searchResultBooks: books });
      BooksAPI.updateBookShelf(book.id, shelf);
    }

    render = ()=> {
        let searchResultBooks = this.state.searchResultBooks;
        return (
            <div className="app">
                <div className="search-box">
                    <Link to="/" className="search-navigate-back"></Link>
                    <input onChange={this.onQueryChange} type="text" placeholder="Search by title or author" className="search-input" />
                </div>
                {(this.state.error && <div className="msg error-msg"> No search results found</div>)
                                   || <div className="msg success-msg"> 
                                        Displaying {this.state.searchResultBooks.length} search results 
                                    </div>
                }
                <div className="search-result-content">
                    {
                        this.state.loading ? <div className="loading"></div> 
                                           : searchResultBooks.length && searchResultBooks.map((book, index)=> (
                                                    <BookItem key={index} book={book} onSelectChange={this.onShelfChange.bind(this)}/>
                                               ))
                    }
                </div>
            </div>
        );
    }
}

export default SearchBooks;