import React from 'react'

const BookingInput = ({placeholder, type}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="outline-none border-2 border-[#f3f3f3] focus:ring-0 focus:border-[#ec3323] "
    />
  );
}

export default BookingInput