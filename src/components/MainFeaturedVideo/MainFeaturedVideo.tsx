import {FC, useEffect, useState} from 'react';
import styles from './mainFeaturedVideo.module.css';
import {Featured, TendingNow} from '../../data.json';
import {Movie} from "../../types/types.ts";

interface propsTypes {
    movieId:string | null,
    showVideo:boolean
}

const MainFeaturedVideo:FC <propsTypes> = ({movieId, showVideo}) => {

    const [topFeatured, setTopFeatured] = useState<Movie | undefined>(Featured);

    useEffect(() => {
        const foundMovie = TendingNow?.find((movie:Movie) => movie.Id === movieId);
        if (foundMovie) {
            setTopFeatured({ ...foundMovie });
        }
    }, [movieId])

    return (
        <div className={styles.container}>
            {showVideo ? <video src={topFeatured?.VideoUrl} loop autoPlay muted/> : <img src={topFeatured?.CoverImage}/>}
            <div className={styles.movieInfoSection}>
                <p className={styles.category}>{topFeatured?.Category.toUpperCase()}</p>
                <img src={topFeatured?.TitleImage}/>
                <div className={styles.releaseDateSection}>
                    <div>{topFeatured?.ReleaseYear}</div>
                    <div>{topFeatured?.MpaRating}</div>
                    <div>{topFeatured?.Duration}</div>
                </div>
                <p className={styles.description}>{topFeatured?.Description}</p>
                <div className={styles.buttonsSection}>
                    <button className={styles.playBtn}>▶ Play</button>
                    <button className={styles.moreInfoBtn}>More Info</button>
                </div>
            </div>
        </div>
    );
};

export default MainFeaturedVideo;