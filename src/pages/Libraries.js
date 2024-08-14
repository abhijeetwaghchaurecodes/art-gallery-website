import React from 'react';

const Libraries = () => {
  const paintings = [
    { id: 1, title: 'Vintage Motorcycle', imageUrl: "https://images.pexels.com/photos/27766941/pexels-photo-27766941.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", price: 'Rs 2,00,000', info: 'Canvas' },
    { id: 2, title: 'Vintage Motorcycle', imageUrl: "https://images.pexels.com/photos/27766942/pexels-photo-27766942.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", price: 'Rs 1,00,000', info: 'Canvas-Resting' },
    { id: 3, title: 'Vintage Motorcycle', imageUrl: "https://images.pexels.com/photos/27766946/pexels-photo-27766946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", price: 'Rs 1,00,000', info: 'Canvas' },
    { id: 4, title: 'Bicycle', imageUrl: "https://images.pexels.com/photos/27766952/pexels-photo-27766952.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", price: 'Rs 1,00,000', info: 'Canvas-Light' },
    { id: 5, title: 'Bicycle', imageUrl: "https://images.pexels.com/photos/27766943/pexels-photo-27766943.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", price: 'Rs 1,00,000', info: 'Canvas' },
    { id: 6, title: 'Vintage Motorcycle', imageUrl: "https://images.pexels.com/photos/27766957/pexels-photo-27766957.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", price: 'Rs 80,000', info: 'Canvas-HalcyonGreen-Top' },
    { id: 7, title: 'Motorcycle', imageUrl: "https://images.pexels.com/photos/27766993/pexels-photo-27766993.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", price: 'Rs 8,000', info: 'Canvas-Black' },
    { id: 8, title: 'Fields', imageUrl: "https://images.pexels.com/photos/27767481/pexels-photo-27767481.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", price: 'Rs 50,000', info: 'Acrylic on Canvas - 30""X 30""' },
    { id: 9, title: 'Abstract', imageUrl: "https://images.pexels.com/photos/27766944/pexels-photo-27766944.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", price: 'Rs 55,000', info: 'Acrylic on Canvas - 18""X 36""' },
    { id: 10, title: 'Fields', imageUrl: "https://images.pexels.com/photos/27766948/pexels-photo-27766948.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", price: 'Rs 50,000', info: 'Acrylic on Canvas - 30""X 30""' },
    { id: 11, title: 'Abstract', imageUrl: "https://images.pexels.com/photos/27766949/pexels-photo-27766949.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", price: 'Rs 70,000', info: 'Acrylic on Canvas - 40""X 36""' },
    { id: 12, title: 'Abstract', imageUrl: "https://images.pexels.com/photos/27766953/pexels-photo-27766953.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", price: 'Rs 35,000', info: 'Canvas-Light-Abstract' },
    { id: 13, title: 'Abstract', imageUrl: "https://images.pexels.com/photos/27766947/pexels-photo-27766947.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", price: 'Rs 70,000', info: 'Acrylic on Canvas - 40""X 36""' },
    { id: 14, title: 'Abstract', imageUrl: "https://images.pexels.com/photos/27766950/pexels-photo-27766950.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", price: 'Rs 55,000', info: 'Acrylic on Canvas - 24""X 36""' },
    { id: 15, title: 'Fields', imageUrl: "https://images.pexels.com/photos/27766945/pexels-photo-27766945.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", price: 'Rs 55,000', info: 'Acrylic on Canvas - 18""X 36""' },
    { id: 16, title: 'Fields', imageUrl: "https://images.pexels.com/photos/27768247/pexels-photo-27768247.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", price: 'Rs 70,000', info: 'Arylic on Canvas - 40""X 36""' },
    { id: 17, title: 'Vintage Moped', imageUrl: "https://images.pexels.com/photos/27768558/pexels-photo-27768558.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", price: 'Rs 8,000', info: 'Canvas-Red' },
    { id: 18, title: 'Vintage Car', imageUrl: "https://images.pexels.com/photos/27768556/pexels-photo-27768556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", price: 'Rs 8,000', info: 'Canvas-SideView' },
    { id: 19, title: 'Motorcycle', imageUrl: "https://images.pexels.com/photos/27766951/pexels-photo-27766951.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", price: 'Rs 5,000', info: 'Canvas' },
    { id: 20, title: 'Vintage Car', imageUrl: "https://images.pexels.com/photos/27768557/pexels-photo-27768557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", price: 'Rs 8,000', info: 'Canvas' },
    { id: 21, title: 'Vintage', imageUrl: "https://images.pexels.com/photos/27768559/pexels-photo-27768559.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", price: 'Rs 8,000', info: 'Canvas' },
    { id: 22, title: 'Motorcycle', imageUrl: "https://images.pexels.com/photos/27766954/pexels-photo-27766954.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", price: 'Rs 10,000', info: 'Canvas-Car-SideView' },
    { id: 23, title: 'Moped', imageUrl: "https://images.pexels.com/photos/27766955/pexels-photo-27766955.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", price: 'Rs 10,000', info: 'Canvas-Light' },
    { id: 24, title: 'Motorcycle', imageUrl: "https://images.pexels.com/photos/27766956/pexels-photo-27766956.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", price: 'Rs 10,000', info: 'Canvas-SideView' },
  ];

  return (
    <div className="relative min-h-screen bg-cover bg-center bg-fixed bg-stone-50" style={{ backgroundImage: 'url("https://cdn.pixabay.com/photo/2017/01/24/03/53/plant-2004483_1280.jpg")' }}>
      <div className="absolute inset-0 bg-cyan-50 opacity-0"></div>
      <div className="relative z-10 text-center text-black flex flex-col items-center pt-8 pb-4">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-8 text-gray-900">Artworks</h1>
        <p className="text-base md:text-xl mb-4 md:mb-8">Scroll to explore</p>
        
        {/* Poster Section */}
        <div className="bg-green-700 text-white text-center py-12 px-8 mb-8 w-full opacity-75">
          <h2 className="text-2xl md:text-4xl font-bold mb-4 px-8">Discover the Magic of Art</h2>
          <p className="text-lg md:text-xl font-medium">Experience a world of creativity and elegance. Find the perfect piece for your space.</p>
        </div>
        
        {/* Libraries Section */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 px-4 sm:px-8 lg:px-16">
          {paintings.map(painting => (
            <div key={painting.id} className="bg-white text-black overflow-hidden shadow-lg transform transition duration-300 hover:scale-105">
              <img src={painting.imageUrl} alt={painting.title} className="w-full h-48 object-cover sm:h-56 md:h-64 lg:h-72" />
              <div className="p-2 sm:p-4">
                <h2 className="text-base sm:text-lg md:text-xl font-bold mb-2">{painting.title}</h2>
                <p className="text-sm sm:text-base md:text-lg font-semibold mb-2">Price: {painting.price}</p>
                <p className="text-sm sm:text-base md:text-lg font mb-1">{painting.info}</p>
                <a href={`/checkout/${painting.id}`} className="block text-center bg-cyan-100 text-black py-1 sm:py-2 rounded font-medium hover:bg-cyan-300">View & Buy</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Libraries;
