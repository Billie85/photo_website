import { FunctionComponent } from 'react';
import styles from './Tablet.module.css';
import image from '../image/image.png';



const Tablet:FunctionComponent = () => {
	return (
	<div className={styles.tablet}>
		<div className={styles.backGround} />
		<img className={styles.mainImageIcon} alt="" src={image} />
		<div className={styles.ayumiKimura}>Ayumi Kimura</div>
		<div className={styles.imageInfo}>
			<div className={styles.imageExplainText}>
				<div className={styles.circleRight} />
				<div className={styles.textAboutImage}>Rising from the heart of the Tularosa Basin is one of the world's great natural wonders - the glistening white sands of New Mexico</div>
				<div className={styles.textPhotographer}>photo by Carly Osborn</div>
			</div>
		</div>
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
	</div>);
};

export default Tablet;	