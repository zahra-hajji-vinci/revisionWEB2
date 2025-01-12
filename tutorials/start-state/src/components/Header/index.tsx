// Code: Header component

import './Header.css';
import { useState } from 'react';

interface HeaderProps {
    title: string;
    version:number;
  }
  
  const Header = ({ title, version }: HeaderProps) => {
    const [menuPrinted, setMenuPrinted] = useState(false);
    return (
      <header onClick={() => setMenuPrinted(!menuPrinted)}>
        <h1 className="animate__animated animate__bounce">{title}</h1>
        {menuPrinted ? `${title}... and rarely do we hate it!` : title}
        <h4>Version: {version}</h4>
      </header>
    );
  };

  //destructuring assignment

  export default Header;