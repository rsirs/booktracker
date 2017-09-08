import React from "react";
import PropTypes from "prop-types";

import BookItem from "./BookItem"

class BookShelf extends React.Component {
    state = {
        books:[],
        shelf: ''
    }

    componentDidMount = ()=> {
        this.setState({ 
            shelf: this.props.shelf,
            books: this.props.books
        });
    }

    componentWillReceiveProps = (nextProps)=> {
        //To propogate updates made in the parent
        this.setState({books: nextProps.books})
    }

    render = ()=> {
        return (
            <div className="book-shelf">
                <div className="book-shelf-title">
                    <h2>{ this.state.shelf }</h2>
                </div>
                <div className="book-shelf-content">
                    {this.state.books.length && this.state.books.map(book => (
                        <BookItem key={book.title} onSelectChange={this.props.onShelfChange} book={book} moveToDisabled={true} />
                    ))}
                </div>
            </div>
        )
    }
}

BookShelf.propTypes = {
    shelf: PropTypes.string.isRequired,
    books: PropTypes.array.isRequired,
    onShelfChange: PropTypes.func.isRequired
}

export default BookShelf;