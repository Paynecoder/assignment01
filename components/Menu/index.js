import styles from "@/components/Menu/Menu.module.css"
import Image from "next/image"
import hammy from "@/public/icons/menu-icon.png"

export default function Menu() {
    return (
        <Image
        src={hammy}
        style={{width: '70px', height: '55px', cursor: 'pointer'}}/>
    )
}