import styles from "./SearchVideoList.module.css"
import VideosList from "../../components/VideosList"
import { useEffect, useState } from "react";
import Loader from "../Loader";

// filtrando videos por categoria ou título
function filterVideos(videos, searchText) {
    return videos.filter((video) => video.category.includes(searchText) || video.title.includes(searchText))
}

function SearchVideoList({ videos }) {

    const [ searchText, setSearchText ] = useState('')
    const foundVideos = filterVideos(videos, searchText)

    const [loading, setLoading] = useState(true)
    useEffect(() => {
      setTimeout(() => setLoading(false), 500)
    }, []);


    return (
        <section className={styles.container}>
            <input
                type="search"
                placeholder="Pesquisar..."
                value={searchText}
                onChange={event => setSearchText(event.target.value)}
            />
            { loading ? <Loader /> :
                <VideosList
                    videos={foundVideos}
                    emptyHeading={`Sem vídeos sobre "${searchText}"`}
                />
            }
        </section>
    );

}

export default SearchVideoList;