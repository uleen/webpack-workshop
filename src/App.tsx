import * as React from "react";
import { hot } from "react-hot-loader/root";

interface IProps {
  name: string;
}

const App: React.SFC<IProps> = ({ name }) => {
  return <h1>{name} beginning!!!</h1>;
};

export default hot(App);
