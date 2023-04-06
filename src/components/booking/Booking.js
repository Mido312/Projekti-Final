import React, { useState } from "react";
import "./Booking.css";

const Booking = () => {
const [destination, setDestination] = useState("");
const [numPeople, setNumPeople] = useState("");
const [startDate, setStartDate] = useState("");
const [endDate, setEndDate] = useState("");
const [message, setMessage] = useState("");

const handleBookNow = () => {
    if (destination === "" || numPeople === "" || startDate === "" || endDate === "") {
        setMessage("Please fill in all the fields!");
    } else {
        setMessage(
        `You have booked a trip to ${destination} for ${numPeople} people, from ${startDate} to ${endDate}!`
        );
    }
};

    return (
    <>
    <div className="booking">
    <h1>Book your place!</h1>
    <div className="form-booking">
        <input
            type="text"
            placeholder="Enter Destination"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
        />
        <input
            type="number"
            placeholder="No.of People"
            value={numPeople}
            onChange={(e) => setNumPeople(e.target.value)}
        />
        <input
            type="month"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
        />
        <input
            type="month"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
        />
        <button onClick={handleBookNow}>Book now!</button>
        </div>

        {message && (
        <div className="message">
            <p>{message}</p>
        </div>
        )}
    </div>
    </>
    );
};

export default Booking;