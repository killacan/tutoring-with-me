"use client";

import React, { useState } from 'react';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here (e.g., send data to backend, display success message, etc.)
    // Reset form fields after submission
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <form onSubmit={handleSubmit} className='flex flex-col justify-center items-center border border-black rounded-lg w-1/3 m-10'>
        <p className="text-2xl py-5"> Contact Me!</p>
        <div className="mb-4">
            <label htmlFor="name" className="block mb-2 font-bold text-gray-800">Name</label>
            <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
            required
            />
        </div>
        <div className="mb-4">
            <label htmlFor="email" className="block mb-2 font-bold text-gray-800">Email</label>
            <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
            required
            />
        </div>
        <div className="mb-4">
            <label htmlFor="message" className="block mb-2 font-bold text-gray-800">Message</label>
            <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
            rows="4"
            required
            ></textarea>
        </div>
        <div className="text-center">
            <button
            type="submit"
            className="px-6 py-3 font-bold text-white bg-blue-500 rounded hover:bg-blue-600"
            >
            Submit
            </button>
        </div>
    </form>
  );
}
