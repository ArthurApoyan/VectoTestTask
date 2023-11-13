import {FC} from 'react';

import HomeIcon from '../../assets/icons/Group 46.png';
import TVShowsIcon from '../../assets/icons/Group 47.png';
import MoviesIcon from '../../assets/icons/Group 53.png';
import GenresIcon from '../../assets/icons/Group 54.png';
import WatchLaterIcon from '../../assets/icons/Group 56.png';
import SearchIcon from '../../assets/icons/ICON - Search.png';
import ProfileImage from '../../assets/profileImage.png';

import styles from './mainMenu.module.css';

const MainMenu: FC = () => {

    return (
        <>
            <div
                className={styles.menuContainer}
            >
                <div className={styles.profileSection}>
                    <img src={ProfileImage} alt="Profile"/>
                    <div>Daniel</div>
                </div>
                <div className={styles.iconsSection}>
                    <div className={styles.icon}>
                        <img src={SearchIcon} alt="Search"/>
                        <div>Search</div>
                    </div>
                    <div className={`${styles.icon} ${styles.active}`}>
                        <img src={HomeIcon} alt="Home"/>
                        <div>Home</div>
                    </div>
                    <div className={styles.icon}>
                        <img src={TVShowsIcon} alt="Movie"/>
                        <div>TV Shows</div>
                    </div>
                    <div className={styles.icon}>
                        <img src={MoviesIcon} alt="List"/>
                        <div>Movies</div>
                    </div>
                    <div className={styles.icon}>
                        <img src={GenresIcon} alt="Mask"/>
                        <div>Genres</div>
                    </div>
                    <div className={styles.icon}>
                        <img src={WatchLaterIcon} alt="Clock"/>
                        <div>Watch Later</div>
                    </div>
                </div>
                <div className={styles.bottomSide}>
                    <div>LANGUAGE</div>
                    <div>GET HELP</div>
                    <div>EXIT</div>
                </div>
            </div>
        </>
    );
};

export default MainMenu;