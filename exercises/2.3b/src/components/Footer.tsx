interface FooterProps {
    text: string;
  }
  

const Footer = (props: FooterProps) => {
    return <h1>{props.text}</h1>;
  };

export default Footer;
  


/*interface FooterProps {
    footerText: string;
  }
  

const Footer = (props: FooterProps) => {
    return <h1>{props.footerText}</h1>;
  };

export default Footer; */
  