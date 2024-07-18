import { useStyletron } from "baseui";
import Naviagtion from "../components/Navigation";
import Home from "../components/Home";
import Experience from "../components/Experience";

export default function DefaultLayout() {
  const [css, $theme] = useStyletron();
  return (
    <div className={css({})}>
      <Naviagtion />
      <Home />
      <Experience />
    </div>
  );
}
