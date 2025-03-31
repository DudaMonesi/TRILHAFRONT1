import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Rooms from './Rooms';
import RoomDetails from './RoomDetails';
import BookingSuccess from './BookingSuccess';

const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/rooms" element={<Rooms />} />
                <Route path="/rooms/:id" element={<RoomDetails />} />
                <Route path="/booking-success" element={<BookingSuccess />} />
            </Routes>
        </Router>
    );
};

export default App;

import { Link } from 'react-router-dom';

const Navigation: React.FC = () => {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/rooms">Quartos</Link>
        </nav>
    );
};