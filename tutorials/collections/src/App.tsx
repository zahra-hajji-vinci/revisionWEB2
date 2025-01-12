import "./App.css";
import sound from "./assets/sounds/Infecticide-11-Pizza-Spinoza.mp3";
import logo from "./assets/images/js-logo.png";



interface HeaderProps {
  title: string;
  version:number;
}

const Header = (props: HeaderProps) => {
  return (
    <header>
      <h1 className="animate__animated animate__bounce">{props.title}</h1>
      <h4>Version: {props.version}</h4>
    </header>
  );
};

const Main = () => {
  return (
    <main>
      <p>My HomePage</p>
      <p>
        Because we love JS, you can also click on the header to stop / start the
        music ; )
      </p>

      <audio id="audioPlayer" controls autoPlay>
        <source src={sound} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </main>
  );
};

const Footer = () => {
  return (
    <footer>
      <h1 className="animate__animated animate__bounce animate__delay-2s">
        But we also love JS
      </h1>
      <img src={logo} alt="" />
    </footer>
  );
};

function App() {
  return (
    <div className="page">
      <Header title="We love Pizza" version={0+1}/>
      <Main />
      <Footer />
    </div>
  );
}

export default App;








{/*3 composantes React
  Pour rappel, pour définir un type en TS, 
  il y a deux principales façons de le faire. 
  Soit à l'aide de type, soit à l'aide de interface.
  Dans ce cours, nous avons choisi d'utiliser interface pour définir la structure d'objets.*/}


/* sans type
const Header = () => {
  return (
    <header>
      <h1 className="animate__animated animate__bounce">{}</h1>
    </header>
  );
}; */

/*  le type de retour en JSX.Element
const Header = (props: HeaderProps): JSX.Element => {
  return (
    <header>
      <h1 className="animate__animated animate__bounce">{props.title}</h1>
    </header>
  );
};
 */

/* inline prop type annotation pour typer props
const Header = (props: {title:string}) => {
  return (
    <header>
      <h1 className="animate__animated animate__bounce">{props.title}</h1>
    </header>
  );
};
*/