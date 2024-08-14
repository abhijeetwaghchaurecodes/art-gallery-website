import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  const [showContactForm, setShowContactForm] = useState(false);
  const [formStatus, setFormStatus] = useState('');

  const handleContactClick = () => {
    setShowContactForm(!showContactForm);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    fetch('https://formspree.io/f/mblrywbk', {
      method: 'POST',
      body: formData,
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
      event.target.reset();
      setFormStatus('Sent');
      setTimeout(() => setFormStatus(''), 3000);
      setShowContactForm(false);
    })
    .catch(error => {
      console.error('Error:', error);
      setFormStatus('Error');
    });
  };

  return (
    <footer className={`bg-white shadow-md ${showContactForm ? 'py-6' : 'py-4'} border-t border-gray-200 transition-all duration-300 ease-in-out`}>
      <div className="container mx-auto flex flex-col md:flex-row justify-center md:justify-between items-center text-center md:text-left">
        <div className="mb-4 md:mb-0">
          <h2 className="text-2xl font-bold">Hanmant Lohar</h2>
          <p className="text-gray-600 mt-1">Bringing Art to Life</p>
        </div>
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
          <Link to="/" className="text-lg font-semibold text-gray-600 hover:text-cyan-400">Home</Link>
          <Link to="/libraries" className="text-lg font-semibold text-gray-600 hover:text-cyan-400">Artworks</Link>
          <button onClick={handleContactClick} className="text-lg font-semibold text-gray-600 hover:text-cyan-400">Contact</button>
        </div>
      </div>

      {showContactForm && (
        <div className="container mx-auto mt-4 px-4 sm:px-6 md:px-8">
          <form onSubmit={handleSubmit} className="space-y-4">
            <input 
              type="email" 
              name="email" 
              placeholder="Your email" 
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400 transition duration-300 ease-in-out" 
              required 
            />
            <textarea 
              name="message" 
              placeholder="Your message" 
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400 transition duration-300 ease-in-out" 
              required 
            />
            <div className="flex items-center justify-center">
              <button 
                type="submit" 
                className="bg-cyan-400 text-white py-2 px-4 rounded-md hover:bg-cyan-500 transition duration-300 ease-in-out"
              >
                Send
              </button>
              {formStatus && (
                <p className={`ml-4 ${formStatus === 'Sent' ? 'text-green-600' : 'text-red-600'}`}>
                  {formStatus}
                </p>
              )}
            </div>
          </form>
        </div>
      )}

      {!showContactForm && (
        <div className="container mx-auto mt-4 text-center">
          <p className="text-gray-600">&copy; {new Date().getFullYear()} Hanmant Lohar. All rights reserved.</p>
        </div>
      )}
    </footer>
  );
}

export default Footer;
