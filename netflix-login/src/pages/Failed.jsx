import React from 'react';
import netflix from "../assets/images/netflix.jpg";

const Failed = () => {
  return (
    <div
      className="h-screen bg-center bg-cover flex items-center justify-center relative"
      style={{ backgroundImage: `url(${netflix})` }}
    >
      <div className="absolute inset-0 bg-black/60"></div> {/* Dim overlay for better text contrast */}
      <div className='bg-white/65 p-5 rounded-lg border shadow-lg '>
        <h1 className="relative z-10 text-4xl font-bold text-white text-center">
        🎬 Login Failed
      </h1>
      </div>
    </div>
) }

export default Failed