import {FC, useState} from 'react';
import MainFeaturedVideo from "../components/MainFeaturedVideo/MainFeaturedVideo.tsx";
import TrendingNowSection from "../components/TrendingNowSection/TrendingNowSection.tsx";

const HomePage:FC = () => {

    const [movieId, setMovieId] = useState<string | null>(sessionStorage.getItem('movieId'));
    const [showVideo, setShowVideo] = useState<boolean>(false);

    const handleImageClick = (id:string) => {
        setShowVideo(false)
        let movies = JSON.parse(sessionStorage.getItem('movieIds')!) || []
        if(movies.includes(id)){
            movies = movies.filter((movieId:string) => movieId != id)
        }
        sessionStorage.setItem('movieIds', JSON.stringify([id, ...movies]))
        setMovieId(id)
        setTimeout(() => {
            setShowVideo(true)
        }, 2000)
    }

    console.log(showVideo)

    return (
        <div>
            <MainFeaturedVideo movieId={movieId} showVideo={showVideo}/>
            <TrendingNowSection handleImageClick={handleImageClick}/>
        </div>
    );
};

export default HomePage;