import React, { useState, useEffect } from 'react'
import CountTime from '../components/Counttime'

const Home = () => {
    useEffect(() => {
        document.title = "Home";
    })
    return (
        <div>
            <div>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/1mlqwxYBW_w" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
            <div>
                <CountTime />
            </div>
        </div>
    )
}

export default Home