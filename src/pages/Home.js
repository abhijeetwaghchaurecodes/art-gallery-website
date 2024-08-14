import React from 'react';


const Home = () => {
  return (
    <div
      className="relative h-screen bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: 'url("https://images.pexels.com/photos/4340919/pexels-photo-4340919.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
        backgroundSize: 'cover', // Ensures the image covers the entire container
        backgroundPosition: 'center', // Centers the image
        backgroundRepeat: 'no-repeat', // Ensures the image doesn't repeat
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 text-center text-white flex flex-col items-center justify-center h-full">
        <h1 className="text-5xl font-bold">Gallery</h1>
        <p className="text-xl mt-4 font-semibold">Discover Beauty</p>
        <div className="mt-8 space-y-4">
          <a href="/" className="block px-8 py-3 border border-white hover:bg-white hover:text-black text-lg font-medium">Home</a>
          <a href="/libraries" className="block px-8 py-3 border border-white hover:bg-white hover:text-black text-lg font-medium">Artworks</a>
          <a href="/artist" className="block px-8 py-3 border border-white hover:bg-white hover:text-black text-lg font-medium">Artist</a>
        </div>
      </div>
    </div>
  );
};

export default Home;
