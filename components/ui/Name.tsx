import Image from "next/image";

export default function Name() {
  return (
   <div>
    <h1 className="relative  text-[#282828] text-[280px] font-semibold flex justify-center  left-1/2 -translate-x-1/2">HI! I'M</h1>
    <div className="absolute  flex justify-center z-10 top-70  left-1/2 -translate-x-1/2" >
    <Image
    src='/heart.png'
    alt=""
    width={350}
    height={400}
    className="object-contain rounded-full"
    /></div>
    <h1 className="absolute  text-white text-[300px] top-100 font-semibold flex justify-center z-20  left-1/2 -translate-x-1/2">SAKSHI</h1>
    
   </div>
  );
}
