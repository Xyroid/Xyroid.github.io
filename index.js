let search = async () => {
    const BASE_URL = "https://www.googleapis.com/books/v1/volumes/?maxResults=40&q=";
    const response = await fetch(`${BASE_URL}${document.getElementById('txtSearch').value}`, { method: 'GET'});
    const json = await response.json();
    let { items } = json;
    let divBookList = document.getElementById("divBookList");
    divBookList.innerHTML = "";
    items.map(i => {
        let { title, imageLinks, infoLink } = i.volumeInfo; 
        let thumbnail = imageLinks ? imageLinks.thumbnail : "https://islandpress.org/sites/default/files/default_book_cover_2015.jpg";
        let html = `<a class='book' href='${infoLink}' target='_blank'>
            <img src='${thumbnail}' alt='Book cover' class='book-img'/>
            <div class='book-text'>${title}</div>
        </a>`;
        divBookList.innerHTML += html
    });
}

let searchByEnter = (event) => {
    if (event.keyCode === 13) {
        search()
    }
}