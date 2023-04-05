import React from "react"
import './Booking.css'


const Booking = () => {
    return(
        <>
                <div className="book">
                    Book your place!
                </div>
                <div className="blue">
                    <input type="text" placeholder="Enter Destination"></input>
                    <input type="number" placeholder="No.of People"></input>
                    <input type="month" ></input>
                    <input type="month" ></input>
                    <button>Book now!</button>
                </div>
        
        </>
    )
}

export default Booking;