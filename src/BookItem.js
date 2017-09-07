import React from "react";

import rating from "./images/rating.svg";

function BookItem(props){
    let book = props.book;

    var onSelectChange = (event) => {
        props.onSelectChange(event.target.value, book);
    }

    return (      
        <div className="book">
            <img className="book-cover" src={book.imageLinks.smallThumbnail} alt="book"/>
            <div className="book-meta">         
                {
                    (() =>{
                        var starList = [];
                        for (let i = 0; i < Math.ceil(book.averageRating); i++) {
                            starList.push(<img src={rating} key={i} alt="rating" className="book-rating-star"/>)
                        }
                        return starList;
                    })()
                    
                }   
                <span>&nbsp;{book.ratingsCount && `( ${book.ratingsCount} )`}&nbsp;</span>
                <div className="consume-space"></div>
                <select className="book-details-button" defaultValue={book.shelf} onChange={onSelectChange}>
                    <option value="moveTo" disabled={props.moveToDisabled}>move to..</option>
                    <option value="currentlyReading">currently reading</option>  
                    <option value="wantToRead">want to read</option>
                    <option value="read">read</option>
                    <option value="none">none</option>
                </select>
                
            </div>
        </div>   
    );
}

export default BookItem;