import { User } from "../types";
import Footer from "./Footer";
import PageTitle from "./PageTitle";
import UserCard from "./UserCard";

const App = () => {
  const title = "Welcome to My App";

  const users: User[] = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 },
  ];

  const footerText = "© 2023 My App";

  return (
    <div>
      <PageTitle title={title} />
      {users.map((user) => (
        <UserCard user={user} />
      ))}
      <Footer text={footerText} />
    </div>
  );
};

export default App;


/*
import "../App.css";
import PageTitle from "./PageTitle";
import UserCard from "./UserCard";
import Footer from "./Footer";


const App = () => {
  const title = "Welcome to My App";

  const name1 = "Alice";
  const age1 = 25;

  const name2 = "Bob";
  const age2 = 30;

  const name3 = "Charlie";
  const age3 = 35;

  const footerText = "© 2023 My App";


  return (
    <div>
      <PageTitle title={title} />
      
      <UserCard name={name1} age={age1} />
      <UserCard name={name2} age={age2} />
      <UserCard name={name3} age={age3} />
      
      <Footer footerText={footerText} />
    </div>
  );
}


export default App;*/
