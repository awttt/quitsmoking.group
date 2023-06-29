import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import StarSvg from '@site/static/svg/star.svg';
import styles from "./index.module.css";


const FloatingSVG = () => {

  return (
    <div className={styles.floatingsvg}>
        <StarSvg/>
    </div>
  );
};

export default FloatingSVG;