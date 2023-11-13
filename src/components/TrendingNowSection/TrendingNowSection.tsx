import {FC} from 'react';
import styles from './trendingNowSection.module.css';
import Carousel from "../Carousel/Carousel.tsx";

interface propsTypes {
    handleImageClick: (id:string) => void
}

const TrendingNowSection:FC <propsTypes> = ({handleImageClick}) => {
    return (
        <div className={styles.container}>
            <h2>Trending Now</h2>
            <div className={styles.carouselSection}>
                <Carousel handleImageClick={handleImageClick}/>
            </div>
        </div>
    );
};

export default TrendingNowSection;