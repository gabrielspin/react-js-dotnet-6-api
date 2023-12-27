import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Login from './pages/login';
import Books from './pages/books';
import NewBook from './pages/newbook';

export default function RoutesFunction() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<Login/>}></Route>
                <Route path="/books" element={<Books/>}></Route>
                <Route path="/books/new/:bookId" element={<NewBook/>}></Route>
           </Routes>
        </BrowserRouter>
    );
}