import About from "../src/components/About";
import Campaign from "../src/components/Campaign";
import Contact from "../src/components/Contact";
import FunFacts from "../src/components/FunFacts";
import HeroSlider from "../src/components/HeroSlider";
import SectionDivider from "../src/components/SectionDivider";
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
