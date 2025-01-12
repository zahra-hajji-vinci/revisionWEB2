import "./App.css";
import Header from "../Header";
import Main from "../Main";
import Footer from "../Footer";

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