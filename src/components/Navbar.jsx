import React from 'react';

const Navbar = () => {
  return (
    <nav className='bg-lime-950 p-4'>
        <div className='flex container mx-auto justify-between'>
            <li className='list-none text-white'>
                <a href="/">Family Recipe Book</a>
            </li>
            <li className='list-none text-white'>
                <a href="/">All Recipes</a>
            </li>
            <li className='list-none text-white'>
                <a href="/">Add Recipe</a>
            </li>
            <li className='list-none text-white'>
                <a href="/">About</a>
            </li>
        </div>
    </nav>
  );
};

export default Navbar;
