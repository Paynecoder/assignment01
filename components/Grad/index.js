import Image from "next/Image";
import graddy from "@/public/icons/graduation-hat.png";

export default function Grad() {
  return (
    <Image
      src={graddy}
      style={{ width: "70px", height: "55px" }}
      alt="bcit logo"
    />
  );
}
