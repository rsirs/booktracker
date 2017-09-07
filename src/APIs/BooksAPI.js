const url = "https://reactnd-books-api.udacity.com";
var token = localStorage.token;
if(!token){
    token = localStorage.token = Math.random().toString(36).substr(2);    
}
var headers = {
    "accept": "application/json",
    "authorization": token
}

/**
 * @description Get all your books from the api
 * @return { array } Return books array
 */
export const getAllBooks = () => {
    return fetch(`${url}/books`, {headers}).then(res => res.json())
                                  .then(body => body.books);
}

/**
 * @description Get books based on search
 * @param { String } search Retrive books using this search string
 * @return { array } Return books array 
 */
export const getBooksBySearch = (search) => {
    let options = {
            "method": "POST",
            "body": JSON.stringify({ query: search || 'a' }),
            "headers": {...headers,
                        "content-type": "application/json"
         }
    };
    return fetch(`${url}/search`, options).then(res => res.json())
                                          .then(body => {
                                            if(!body.books.error)
                                                return body.books;
                                            throw Error("No results found")
                                          });
}

/**
 * @description Move book to given shelf
 * @param { String } id Id of the book to move
 * @param { String } s Shelf to be update with
 */
export const updateBookShelf = (id, s) => {
    let options = {
        "method": "PUT",
        "body": JSON.stringify({ shelf: s }),
        "headers": {...headers,
                   "content-type": "application/json"
        }
    };
    console.log(toptions);
    return fetch(`${url}/books/${id}`, options).then(res => console.log(res));
}