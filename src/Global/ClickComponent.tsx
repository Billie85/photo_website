import styles from './ClickComponent.module.css';

function ClickComponent() {
    const handleClick = () => {
      // ここに次のページに飛ぶ
        console.log("HEllo");
    };
    return (
        <div className={styles.morePart}>
          <div className={styles.morePartChild} onClick={handleClick}>
            <button className={styles.MoreButton} id="MoreButton" onClick={handleClick}>More</button>
            <div className={styles.morePartItem} />
          </div>
        </div>
    )
}

export default ClickComponent