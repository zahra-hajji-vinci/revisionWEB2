// Code: Header component

import './Header.css';

interface HeaderProps {
    title: string;
    version:number;
  }
  
  const Header = ({ title, version }: HeaderProps) => {
    return (
      <header>
        <h1 className="animate__animated animate__bounce">{title}</h1>
        <h4>Version: {version}</h4>
      </header>
    );
  };

  //destructuring assignment
  export default Header;