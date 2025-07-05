import Navbar from "./components/Navbar.jsx";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import "./i18n.jsx";

gsap.registerPlugin(useGSAP);

const App = () => {
  return <Navbar />;
};

export default App;
