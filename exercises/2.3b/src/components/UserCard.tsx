import { User } from "../types";

interface UserCardProps {
  user: User;
}

const UserCard = (props: UserCardProps) => (
  <div>
    <h2>{props.user.name}</h2>
    <p>Age: {props.user.age}</p>
  </div>
);

export default UserCard;


/*interface UserCardProps {
  name: string;
  age: number;
}

const UserCard = (props: UserCardProps) => {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>Age: {props.age}</p>
    </div>
  );
};

export default UserCard;*/
