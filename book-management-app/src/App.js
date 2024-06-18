// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BookList from './components/BookList';
import BookForm from './components/BookForm';
import Navigation from './components/Navigation';

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route exact path="/" element={<BookList />} />
        <Route path="/add" element={<BookForm />} />
      </Routes>
    </Router>
  );
}

export default App;
