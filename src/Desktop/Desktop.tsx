import { FunctionComponent } from 'react';
import { AboutMeInfo } from '../Global/GlobalDesign.tsx'
import { ImageInfo } from '../Global/GlobalDesign.tsx'
import styles from './Desktop.module.css';
import image from '../image/image.png';
import ClickComponent from '../Global/ClickComponent.tsx'

const Desktop: FunctionComponent = () => {
  return (
    <div className={styles.MainContent}>
      <div className={styles.ContentWrapper}>
        <div className={styles.BackGround} />
        <img className={styles.MainImage} src={image} />
        <div className={styles.MyName}>Ayumi Kimura</div>
        <ClickComponent/>
        <ImageInfo/>
        <AboutMeInfo/>
      </div>
    </div>
  );
};

export default Desktop;