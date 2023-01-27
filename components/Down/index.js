import Image from "next/Image"
import arrow from "@/public/icons/down.png"
import styles from "@/components/Down/Down.module.css"

export default function Down() {
    return (
        <Image
        src={arrow}
        style={{width: '40px', height: '60px'}}
        className={styles.img}/>
    )
}