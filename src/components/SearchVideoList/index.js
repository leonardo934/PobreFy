import styles from "./SearchVideoList.module.css"
import VideosList from "../../components/VideosList"
import { useState } from "react";

// filtrando videos por categoria ou título
function filterVideo(videos, searchText) {
    return videos.filter((videos) => videos.category.includes(searchText) || videos.title.includes(searchText))
}

function SearchVideoList({ videos }) {

const [ searchText, setSearchText ] = useState()
const foundVideos = filterVideo(videos, searchText)

    return (
        <>
            <section className={styles.container}>
        <input type="search" placeholder="Pequisar..." onChange={event => setSearchText(event.target.value)} value={searchText}/>
        <VideosList videos={foundVideos}/>
            </section>
        </>
    );

}

export default SearchVideoList;