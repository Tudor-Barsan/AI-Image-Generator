import React, { useState } from 'react'

import { download } from '../assets'
import { downloadImage } from '../utils'

const Card = ({ _id, name, prompt, photo}) => {
  const [liked, setLiked] = useState('false');

  const handleLikedChange = () => {
    liked === 'false' ? setLiked('true') : setLiked('false');
    console.log(liked);
  }

  return (
    <div className="rounded-xl group relative shadow-card hover:shadow-cardhover card">
      <img
        className="w-full h-auto object-cover rounded-xl"
        src={photo}
        alt={prompt}
      />
      <div className="group-hover:flex flex-col max-h-[94.5%] hidden absolute left-0 top-0 h-16 w-16 
        bg-[#10131f] m-2 p-4 rounded-md">
          <p className="text-white overflow-y-auto">
            <svg 
              className={`w-8 h-8 hover:fill-gray-700 ${liked === 'true' ? 'fill-red-500 text-red-500' : ''}`}
              onClick={handleLikedChange}
              xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
            </svg>
          </p>
      </div>
      <div className="group-hover:flex flex-col max-h-[94.5%] hidden absolute bottom-0 left-0 right-0 
        bg-[#10131f] m-2 p-4 rounded-md">
          <p className="text-white text-md overflow-y-auto prompt">
            {prompt}
          </p>
          <div className="mt-5 flex justify-between items-center gap-2">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full object-cover bg-green-700 flex justify-center 
                items-center text-white text-xs font-bold">
                {name[0]}
              </div>
              <p className="text-white text-sm">
                {name}
              </p>
            </div>
            <button type="button" 
              onClick={() => downloadImage(_id, photo)}
              className="outline-none bg-transparent border-none"
            >
              <img 
              src={download} 
              alt="download"
              className="w-6 h-6 object-contain invert"
              />
            </button>
          </div>
      </div>
    </div>
  )
}

export default Card