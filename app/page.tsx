import About from "@/components/ui/About";
import { Header } from "@/components/ui/Header";
import Name from "@/components/ui/Name";
import Text from "@/components/ui/Text";
import Image from "next/image";

export default function Home() {
  return (
   <div>
    <Header/>
    <Name/>
    <Text/>
    <About/>
   </div>
  );
}
