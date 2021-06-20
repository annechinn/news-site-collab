
function getHTMLForBook(book){
    console.log(book);
    return `
<div class="card">
<a href="${book.amazon_product_url}" > <img src= "${book.book_image}" class="card-img-top"></a>
    <div class="card-body">
        <h5 class="card title"><a href="${book.amazon_product_url}" > ${book.rank} ${book.title}</a></h5>
        <p class="card-text"> ${book.description}</p>
     </div>
</div>
    `


}
async function showBooks() {
    const books = await getBooks();
        let booksHTML ='';
        books.forEach(x=>{
            booksHTML+=getHTMLForBook(x);
        });
 console.log(booksHTML);
 let div = document.getElementById('main-content');
div.innerHTML=booksHTML;
        

    
    
    // use forEach to loop through books and call getHTMLForBook lik on likes 16-20 from zoo project
   // add a div in the HTML document to be able to update with new content
   // in showBooks, get the div from the HTML document via document.getELementById
//then update the value of the HTML for that element by setting innerHTML property to your HTML string you built

//the job of showBooks is to build the HTML for the books to display on the screen
// task
// have an element in the HTML document where you are going to insert the new HTML
// you need to retrieve that element using document.getElementById
// you need to build the new HTML
// you need to update the element with the new HTML
}


showBooks();