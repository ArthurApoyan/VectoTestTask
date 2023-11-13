import {FC} from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {TendingNow} from '../../data.json';

import styles from './carousel.module.css';
import {Movie} from "../../types/types.ts";

interface propsTypes {
    handleImageClick: (id:string) => void}
const Carousel:FC <propsTypes> = ({handleImageClick}) => {
    let dragging = false
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 8,
        slidesToScroll: 1,
        arrows: false,
        beforeChange: () => dragging = true,
        afterChange: () => dragging = false,
    };

    const storageMovieIds:string[] = JSON.parse(sessionStorage.getItem('movieIds')!) || []
    const sortMovies = (storageMovieIds:string[]) => {
        const temp:Movie[] = []
        storageMovieIds.map(id => {
             temp.push(TendingNow.find(movie => movie.Id == id)!)
        })
        return [...temp, ...TendingNow.filter(m=>!storageMovieIds.includes(m.Id)).sort((a, b) => new Date(a.Date).getTime() - new Date(b.Date).getTime())]
    }

    return (
        <Slider className={styles.carousel} {...settings}>
            {
                sortMovies(storageMovieIds)?.map((movie) => {
                    return (
                        <div className={styles.movieCard} key={movie.Id}>
                            <img onDragStart={(event)=>{event.stopPropagation()}} onClick={() => {
                                if (dragging) return
                                handleImageClick(movie.Id)
                            }} src={movie.CoverImage} alt="movie" />
                        </div>
                    )
                })
            }
        </Slider>
    );
};

export default Carousel;