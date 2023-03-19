let apiUrl = 'https://www.anapioficeandfire.com/api/books';


async function processApiData() {

   try{
    let response = await fetch(apiUrl);
    let data = await response.json();
    console.log(data)

    for (let i = 0; i < 10; i++) {
        let result = data[i];   
        

      let booksContainer = document.getElementById('books-container');

      let main = document.createElement('div');
      main.classList.add('book');

      let bookName = document.createElement('h2');
      bookName.classList.add("title")
      bookName.innerText = result.name;
      main.appendChild(bookName);

      let isbn=document.createElement("p")
      isbn.innerText=`ISBN : ${result.isbn}`
      main.appendChild(isbn)

      let pages=document.createElement("p")
      pages.innerText=`pages : ${result.numberOfPages}`
      main.appendChild(pages)

      let author=document.createElement("p")
      author.innerText=`author : ${result.authors}`
      main.appendChild(author)

      let publisherName=document.createElement("p")
      publisherName.innerText=`publisherName : ${result.publisher}`
      main.appendChild(publisherName)

      let releaseDate=document.createElement("p")
      releaseDate.innerText=`releaseDate : ${result.released}`
      main.appendChild(releaseDate)

      let character=document.createElement("p")
      character.innerText=`character : ${result.characters.slice(0,5).join(", ")}`
      main.appendChild(character)


      booksContainer.appendChild(main);
        
    } 
   }
   catch(error){
    console.log(error)
   }

}
processApiData();






