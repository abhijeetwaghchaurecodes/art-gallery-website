import React from 'react';
import { useParams } from 'react-router-dom';

const Checkout = () => {
  const { id } = useParams();

  const paintings = [
    { id: 1, title: 'Vintage Motorcycle', imageUrl:"https://images.pexels.com/photos/27766941/pexels-photo-27766941.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", price: 'Rs 2,00,000', info: 'Canvas' },
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
    { id: 24, title: 'Motorcycle', imageUrl: "https://images.pexels.com/photos/27766956/pexels-photo-27766956.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", price: 'Rs 10,000', info: 'Canvas-Light' },
  ];

  const painting = paintings.find((painting) => painting.id === parseInt(id));

  const handleBuyRequest = () => {
    const whatsappUrl = `https://wa.me/+91-7066079099?text=I%20want%20to%20buy%20${painting.title}%20ID-%20${painting.id}%20for%20${painting.price}`;
    window.open(whatsappUrl, '_blank');
  };

  if (!painting) {
    return <div>Painting not found</div>;
  }

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          'url("https://images.pexels.com/photos/4340919/pexels-photo-4340919.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="bg-white bg-opacity-90 p-4 md:p-8 shadow-lg max-w-md text-center">
        <h1 className="text-2xl md:text-3xl font-bold mb-4">{painting.title}</h1>
        <img
          src={painting.imageUrl}
          alt={painting.title}
          className="w-full h-auto object-cover rounded-lg mb-4"
        />
        <p className="text-lg md:text-2xl font-semibold mb-6">Price: {painting.price}</p>
        <p className="text-base md:text-lg mb-1">{painting.info}</p>
        <button
          onClick={handleBuyRequest}
          className="w-full bg-cyan-100 text-black py-3 rounded-lg font-medium hover:bg-cyan-300 transform transition duration-300"
        >
          Request to Buy
        </button>
      </div>
    </div>
  );
};

export default Checkout;
