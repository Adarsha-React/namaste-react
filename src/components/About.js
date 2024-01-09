import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div>
      <h1>About page</h1>
      <h2>This is food ordering application</h2>

      {/* <User name={"Adarsha (function)"} /> */}
      <UserClass name={"Adarsha (class)"} />
    </div>
  );
};

export default About;
