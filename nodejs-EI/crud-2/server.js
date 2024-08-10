import express from 'express';

const PORT = 8080;

const app = express();

const books = [
    { id: 107, isbn: '774123658', name: 'Kafka en la orilla', author: 'Haruki Murakami', stock: 25, language: 'español', pages: 350 },
    { id: 108, isbn: '889765432', name: 'Cien años de soledad', author: 'Gabriel García Márquez', stock: 15, language: 'español', pages: 420 },
    { id: 109, isbn: '555111333', name: 'To Kill a Mockingbird', author: 'Harper Lee', stock: 30, language: 'english', pages: 320 },
    { id: 110, isbn: '123456789', name: 'The Great Gatsby', author: 'F. Scott Fitzgerald', stock: 20, language: 'english', pages: 250 },
    { id: 111, isbn: '987654321', name: 'El señor de los anillos', author: 'J.R.R. Tolkien', stock: 18, language: 'español', pages: 500 },
    { id: 112, isbn: '111222333', name: 'One Hundred Years of Solitude', author: 'Gabriel García Márquez', stock: 12, language: 'english', pages: 380 },
    { id: 113, isbn: '444555666', name: '1984', author: 'George Orwell', stock: 22, language: 'english', pages: 300 },
    { id: 114, isbn: '999888777', name: 'Don Quijote de la Mancha', author: 'Miguel de Cervantes', stock: 28, language: 'español', pages: 480 },
    { id: 115, isbn: '777888999', name: 'Pride and Prejudice', author: 'Jane Austen', stock: 25, language: 'english', pages: 340 },
    { id: 116, isbn: '123987456', name: 'Crónica de una muerte anunciada', author: 'Gabriel García Márquez', stock: 15, language: 'español', pages: 200 }
]

let lastProductId = 116;
const getNextProductId = () => ++lastProductId;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

///////////////////////////////////////////////////////////////////////////////
//                                 Rutas GET                                 //
///////////////////////////////////////////////////////////////////////////////`

app.get('/api/books/:id?', (req, res) => {
    const {id} = req.params;

    if (!id) {
        res.json(books);
        return;
    }
    
    let book = books.find(prod => prod.id === Number(id));
    if (!book) {
        book = {};
        res.status(404);
    }
    res.json(book);
});


////////////////////////////////////////////////////////////////////////////////
//                                 Rutas POST                                 //
////////////////////////////////////////////////////////////////////////////////

app.post('/api/books', (req, res) => {
    // console.log(req.body);
    const {isbn, name, author, stock, languaje, pages} = req.body;
    
    const book = {
        id: getNextProductId(),
        isbn,
        name,
        author,
        stock,
        languaje,
        pages,
    };

    books.push(book);

    res.json(book);
});


////////////////////////////////////////////////////////////////////////////////
//                                 Rutas PUT                                  //
////////////////////////////////////////////////////////////////////////////////

app.put('/api/books/:id', (req, res) => {
    const id = Number(req.params.id);

    const {isbn, name, author, stock, languaje, pages} = req.body;
    
    const book = {
        id,
        isbn,
        name,
        author,
        stock,
        languaje,
        pages
    };

    let index = books.findIndex(prod => prod.id === id);

    // Si no se encontró:
    if (index === -1) {
        res.status(404).json({});
        return;
    }
    
    books[index] = product;

    res.json(book);

});


////////////////////////////////////////////////////////////////////////////////
//                                Rutas DELETE                                //
////////////////////////////////////////////////////////////////////////////////

app.delete('/api/products/:id', (req, res) => {
    const id = Number(req.params.id);

    let index = products.findIndex(prod => prod.id === id);

    // Si no se encontró
    if (index === -1) {
        res.status(404).json({});
        return;
    }

    const removedProduct = products.splice(index, 1)[0];
    res.json(removedProduct);
});



const server = app.listen(PORT, () => console.log(`Servidor Express escuchando en el puerto ${PORT}`));
server.on('error', error => console.log(`Se produjo un error al intentar iniciar el servidor Express: ${error.message}`));