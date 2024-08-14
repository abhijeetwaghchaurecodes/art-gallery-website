import React from 'react';

const Artist = () => {
  return (
    <div className="relative h-screen bg-cover bg-center bg-fixed text-white" style={{ backgroundImage: 'url("https://images.pexels.com/photos/2951525/pexels-photo-2951525.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")' }}>
      <div className="container mx-auto h-full flex items-center px-4 sm:px-6 md:px-8">
        <div className="w-full max-w-4xl">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">Hanmant Ganpati Lohar</h1>
          <div>
            <p className="text-xs sm:text-sm md:text-base font-medium">A.T.D., G.D. Art Ptg., Dip. A.Ed. Kalavishwa, Sangli & Abhinav, Pune.</p>
            <p className="text-xs sm:text-sm md:text-base font-medium mt-1">At/Post Patan-415 206., Tal.-Patan, Dist.- Satara (M.S.) India.</p>
            <p className="text-xs sm:text-sm md:text-base font-medium mt-1">Cell- +91 7066079099, Tel.- +91 2372-283035</p>
            <p className="text-xs sm:text-sm md:text-base font-medium mt-1">E-mail- saketlohar9099@gmail.com</p>

            <div className="mt-4 sm:mt-6">
              <h2 className="text-lg sm:text-xl font-semibold">Born</h2>
              <p className="mt-1 font-medium">7th Dec. 1979</p>
            </div>

            <div className="mt-4 sm:mt-6">
              <h2 className="text-lg sm:text-xl font-semibold">Awards</h2>
              <ul className="list-disc list-inside mt-1 font-medium text-xs sm:text-sm">
                <li>2011- Pant Jambhlikar Memorial Award- Kalapushpa, Sangli</li>
                <li>2009- 1st Prize, Painting Award- Shlok, Kolhapur.</li>
                <li>2004, 2001, 1999 - Landscape Competition, 'Kalautsav' Kalapushpa, Sangli</li>
                <li>2003- 1st Prize, Graphic Award - Bombay Art Society, Mumbai.</li>
                <li>1998 - Maharashtra State Art Exhibition</li>
                <li>1997 - Portrait Award - Nasik Kalaniketan, Nasik</li>
              </ul>
            </div>

            <div className="mt-4 sm:mt-6">
              <h2 className="text-lg sm:text-xl font-semibold">Solo Exhibition</h2>
              <ul className="list-disc list-inside mt-1 font-medium text-xs sm:text-sm">
                <li>2011- Kalautsav 2011, Sponsor Show, Kalapushpa, Sangli.</li>
                <li>2006 Jehangir Art Gallery, Mumbai</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Artist;
