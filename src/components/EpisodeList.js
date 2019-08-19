import React, { useEffect, useState } from "react";
import axios from "axios";

import EpisodeCard from "./EpisodeCard";

export default function EpisodeList() {
    const [episodes, setEpisodes] = useState([]);

    useEffect(() => {
        axios
        .get(`https://rickandmortyapi.com/api/episode/`)
        .then(res=>{
            console.log(res.data.results)
            setEpisodes(res.data.results)
        })
        .catch()

    },[])
    return(
        <section className="Episode-list grid-view">
         {episodes.map( episode =>{
               return <EpisodeCard episode={episode} key={episode.id}/>
            })}
        </section>
    )
}
