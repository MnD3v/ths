import Image from "next/image";
import Services from "./components/services";
import APropos from "./components/apropos";
import Satisfaction from "./components/satisfaction";
import Amelioration from "./components/amelioration";
import Presentation from "./components/presentation";
import Contact from "./components/contact";
import Equipe from "./components/equipe";

export default function Home() {
  return (
    <div className="">
      <Presentation></Presentation>
      <Services></Services>
      <APropos></APropos>
      <Satisfaction></Satisfaction>
      <Amelioration></Amelioration>
      <Contact></Contact>
      <Equipe></Equipe>
    </div>
  );
}
