import About from "../src/layout/About";
import Campaign from "../src/layout/Campaign";
import Contact from "../src/layout/Contact";
import FunFacts from "../src/layout/FunFacts";
import HeroSlider from "../src/layout/HeroSlider";
import SectionDivider from "../src/layout/SectionDivider";
import Layout from "../src/layout/Layout";
const Index = () => {
  return (
    <Layout pageTitle={"Home"}>

      <HeroSlider />
   
      <FunFacts />
  
      <About />

      <SectionDivider />
  
      <Campaign />
  
      <SectionDivider />
    
      <Contact />
    </Layout>
  );
};
export default Index;
