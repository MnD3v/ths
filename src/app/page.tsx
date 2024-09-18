import Services from "./components/services";
import APropos from "./components/apropos";
import Satisfaction from "./components/satisfaction";
import Amelioration from "./components/amelioration";
import Presentation from "./components/presentation";
import Contact from "./components/contact";
import Equipe from "./components/equipe";
import FixedAppBar from "./components/fixed_app_bar";

export default function Home() {
  return (
    <div className="">
      <FixedAppBar></FixedAppBar>
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
