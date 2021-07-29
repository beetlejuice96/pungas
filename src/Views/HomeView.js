import React from "react";
import Beneficios from '../components/beneficios/Beneficios';
import ComerciosAdheridos from '../components/comercios-adheridos/ComerciosAdheridos';
import ComoFunciona from "../components/como-funciona/ComoFunciona";
import Faq from '../components/faq/Faq';
import Hero from '../components/hero/Hero';
import Recomendaciones from '../components/recomendaciones/Recomendaciones';


const HomeView = () => {
  return (
    <div>
      <Hero></Hero>
      <ComoFunciona></ComoFunciona>
      <Beneficios></Beneficios>
      <Recomendaciones />
      <ComerciosAdheridos></ComerciosAdheridos>
      <Faq></Faq>
    </div>
  );
};

export default HomeView;
