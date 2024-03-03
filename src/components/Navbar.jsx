import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <div className='nav-title'>Budget App</div>
      <Link to={"/new"}>
        <button >Create New Transaction</button>
      </Link>
    </nav>
  );
}

export default Navbar;
