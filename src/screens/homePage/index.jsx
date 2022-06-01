import Banner from "./banner";
import Partners from "./partners";
import Automation from "./automation";
import CattleManegement from "./cattleManegement";
import DVE from "./dve";
import DTE from "./dte";
import Bolus from "./bolus";
import Transforming from "./transforming";

export const HomePage = () => {
  return (
    <>
      <Banner />
      <Transforming />
      <Bolus />
      <DTE />
      <DVE />
      <CattleManegement />
      <Automation />
      <Partners />
    </>
  );
};
