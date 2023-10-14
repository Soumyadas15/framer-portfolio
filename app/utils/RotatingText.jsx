"use client"

import React, { useState, useEffect } from "react";


const RotatingText = ({ text }) => {
  

  return (
    
    <div className="circle-container">
      <div className="rotating-sentence">{text}</div>
    </div>
    
    );

};

export default RotatingText;