import React from 'react';
import {Link} from "react-router-dom";

import './App.css';
import BookShelf from "./BookShelf";
import * as BooksAPI from "./APIs/BooksAPI";
import StringUtils from "./utils/string-utils"; 

class App extends React.Component {

	state= {
		books:[],
		shelves:["currently reading", "want to read", "read"]
	}
 
	componentDidMount= ()=> {
		BooksAPI.getAllBooks()
				.then(books => this.setState({books: books}))
	}
	
	/**
	 * @description When user want to move book to different shelf
	 * @param { stirng } shelf Shelf to which book need to be moved
	 * @param { string } book Book that need to be moved 
	 */
	onShelfChange = (shelf, book) => {
		let books = this.state.books;
		//search for the book in the current state using its id and update its shelf
		books.forEach(b => {
			if (b.id === book.id) {
				b.shelf = shelf;
			}            
		});
		//update the current state 
		this.setState({ books: books });
		//update the same in server
		BooksAPI.updateBookShelf(book.id, shelf);
	}

	/** 
	 *@description Categorize Books based on the shelf
	 *@param { string } shelf filter to catogorize
	 *@return { array } returns filter books based on shelf
	 */
	filterBooksByShelf = (shelf) => {
		return this.state.books.filter(book => book.shelf === shelf)
	}
  
	render= ()=> {
		return (
			<div id="app">
				<div id="app-header">
					<Link to="/" id="app-logo">My Reads</Link>
					<div className="consume-space"></div>
					<Link to="/search" className="search-button">+</Link>
				</div>
				<div id="app-content">
					{
						!this.state.books.length ? <div className="loading"></div> :  this.state.shelves.map(shelf=> {
							shelf = StringUtils.camelCase(shelf) ;
							return (<BookShelf key={shelf} 
												shelf={shelf} 
												onShelfChange = {this.onShelfChange.bind(this)} 
												books={this.filterBooksByShelf(shelf)}
												/>
								);
						})
					}
				</div>
		</div>
	)
	}  
}

export default App;
