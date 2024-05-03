import React from "react";
import style from './global/GlobalDesign.module.css'

function AboutMeInfo () {
    return (
    <div className={styles.myInfo}>
        <div className={styles.smallCircle} />
        <div className={styles.leftCircle} />
        <div className={styles.aboutMe}>
            <span>
                <p className={styles.helloImAyumi}>Hello, I'm Ayumi Kimura. As a frontend engineer, I'm passionate about web development.</p>
                <p className={styles.helloImAyumi}> I particularly enjoy crafting user experiences while staying abreast of the latest technologies and design trends.</p>
            </span>
        </div>
    </div>
    )
}

export default AboutMeInfo