import Image from "next/image";
import Header from "./components/Header";
import Hero from "./components/Hero";
import FeatureSection from "./components/Feature";
import ProductGrid from "./components/Product";


export default function Home() {
  return (
    <div> 
      <Header/>
      <Hero/>
      <FeatureSection/>
      <ProductGrid/>
    </div>
  );
}
