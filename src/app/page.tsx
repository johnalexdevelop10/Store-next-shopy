import { Description } from "app/components/Home/Descriptions/Description";
import { Hero } from "app/components/Home/Hero/Hero";
import { MainProducts } from "app/components/Home/MainProducts/MainProducts";


export default function Home() {
  return (
    <main >
      <Hero/>

      <Description/>
      <MainProducts/>
    </main>
  );
}
