const express = require('express');
const router = express.Router();

// GET /booksapi/books
router.get('/books', (req, res) => {
  res.json([{ id: 1, title: 'Libro 1' }, { id: 2, title: 'Libro 2' }]);
});

// GET /booksapi/books/:id
router.get('/books/:id', (req, res) => {
  const bookId = req.params.id;
  res.json({ id: bookId, title: `Libro ${bookId}` });
});

// POST /booksapi/books
router.post('/books', (req, res) => {
  // Lógica para añadir un libro
  res.status(201).json({ message: 'Libro añadido' });
});

// PUT /booksapi/books/:id
router.put('/books/:id', (req, res) => {
  // Lógica para actualizar un libro
  res.json({ message: 'Libro actualizado' });
});

// DELETE /booksapi/books/:id
router.delete('/books/:id', (req, res) => {
  // Lógica para eliminar un libro
  res.json({ message: 'Libro eliminado' });
});

module.exports = router;
