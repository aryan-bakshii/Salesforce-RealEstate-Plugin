// List.js
import React from 'react'

export default ({ color = '#4E5C6C', width = 20, height = 19 }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 20 19"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill={color}
      d="M19.151,9.000 L6.849,9.000 C6.379,9.000 6.000,8.461 6.000,8.000 C6.000,7.540
       6.379,7.000 6.849,7.000 L19.151,7.000 C19.620,7.000 20.000,7.540 20.000,8.000 
       C20.000,8.461 19.620,9.000 19.151,9.000 ZM19.151,3.000 L6.849,3.000
        C6.379,3.000 6.000,2.461 6.000,2.000 C6.000,1.540 6.379,1.000 6.849,1.000 
        L19.151,1.000 C19.620,1.000 20.000,1.540 20.000,2.000 C20.000,2.461 
        19.620,3.000 19.151,3.000 ZM3.584,16.000 L0.416,16.000 C0.186,16.000 
        -0.000,15.813 -0.000,15.583 L-0.000,12.417 C-0.000,12.187 0.186,12.000
        0.416,12.000 L3.584,12.000 C3.814,12.000 4.000,12.187 4.000,12.417 
        L4.000,15.583 C4.000,15.813 3.814,16.000 3.584,16.000 ZM3.584,10.000
        L0.416,10.000 C0.186,10.000 -0.000,9.813 -0.000,9.583 L-0.000,6.417
        C-0.000,6.186 0.186,6.000 0.416,6.000 L3.584,6.000 C3.814,6.000 
        4.000,6.186 4.000,6.417 L4.000,9.583 C4.000,9.813 3.814,10.000 
        3.584,10.000 ZM3.584,4.000 L0.416,4.000 C0.186,4.000 -0.000,3.813 
        -0.000,3.583 L-0.000,0.417 C-0.000,0.186 0.186,0.000 0.416,0.000 
        L3.584,0.000 C3.814,0.000 4.000,0.186 4.000,0.417 L4.000,3.583 
        C4.000,3.813 3.814,4.000 3.584,4.000 ZM6.849,13.000 L19.151,13.000
        C19.620,13.000 20.000,13.540 20.000,14.000 C20.000,14.461
        19.620,15.000 19.151,15.000 L6.849,15.000 C6.379,15.000 
        6.000,14.461 6.000,14.000 C6.000,13.540 6.379,13.000 6.849,13.000 Z"
    />
  </svg>
)