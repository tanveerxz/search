// import React from 'react'
// import { NavLink } from 'react-router-dom'

// const links = [
//     {url: '/search', text: '🔎 All'},
//     {url: '/images', text: '📷 Images'},
//     {url: '/news', text: '📰 News'},
//     {url: '/videos', text: '🎥 Videos'},
// ];

// export const Links = () => {
//   return (
//     <div className="flex sm:justify-around justify-between items-center mt-4">
//         {links.map(({url, text}) => (
//             <NavLink to={url} className="m-2 mb-0" activeClassName="text-blue-700 border-b-2 dark:text-blue-300 border-blue-700 pb-2"> 
//             {text}
//             </NavLink>
//         ))}
//     </div>
//   )
// }
import React from 'react';
import { NavLink } from 'react-router-dom';

const links = [
  { url: '/search', text: '🔎 All' },
  { url: '/image', text: '📷 Images' },
  { url: '/news', text: '📰 News' },
  // { url: '/video', text: '🎥 Videos' },
];

export const Links = () => (
  <div className="flex sm:justify-around justify-between items-center mt-4 px-3">
    {links.map(({ url, text }) => (
      <NavLink to={url} className="m-3 mb-0" activeClassName="text-blue-700 border-b-2 dark:text-blue-300 border-blue-700 pb-2">{text}</NavLink>
    ))}
  </div>
);
