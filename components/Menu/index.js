import styles from "@/components/Menu/Menu.module.css";
import Image from "next/Image";
import hammy from "@/public/icons/menu-icon.png";
import { useState } from "react";
import menubg from "@/public/background-images/menuBackground.png";

export default function Menu() {
  const [isActive, setIsActive] = useState(true);
  console.log(isActive);

  if (!isActive == true) {
    return (
      <Image src={menubg} 
      width={175} 
      onClick={() => setIsActive(!isActive)}/>
    );
  } else {
    return (
      <Image
        src={hammy}
        style={{ width: "70px", height: "55px", cursor: "pointer" }}
        onClick={() => setIsActive(!isActive)}
      />
    );
  }
}
