import React from 'react';

const Navbar = () => {
  return (
    <nav className='bg-lime-950 p-4'>
        <div className='flex container mx-auto justify-between'>
            <li className='list-none text-white font-bold'>
                <a className="py-2 px-3 rounded-3xl border-white-100 hover:bg-white hover:text-black" href="/">Family Recipe Book</a>
            </li>
            <li className='list-none text-white font-bold'>
                <a className="py-2 px-3 rounded-3xl border-white-100 hover:bg-white hover:text-black" href="/">All Recipes</a>
            </li>
            <li className='list-none text-white font-bold'>
                <a className="py-2 px-3 rounded-3xl border-white-100 hover:bg-white hover:text-black" href="/">Add Recipe</a>
            </li>
            <li className='list-none text-white font-bold'>
                <a className="py-2 px-3 rounded-3xl border-white-100 hover:bg-white hover:text-black" href="/">About</a>
            </li>
        </div>
    </nav>
  );
};

export default Navbar;
