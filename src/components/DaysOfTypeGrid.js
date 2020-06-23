import React from 'react';
import ReactDOM from 'react-dom';
import Gallery from 'react-grid-gallery';
import Footer from './Footer';

const ImageStyle= () =>{
    return(
        {
            pointer:"default",
            width:"31.667vw"
        }
    )
}

const IMAGES = [
    {
        src: '/images/36Days/v1.png',
        thumbnail: '/images/36Days/v1.png',
        thumbnailWidth: 1,
        thumbnailHeight: 1,

    },
    {
        src: '/images/36Days/T.png',
        thumbnail: '/images/36Days/T.png',
        thumbnailWidth: 1,
        thumbnailHeight: 1,
    },
    {
        src: '/images/36Days/Q.png',
        thumbnail: '/images/36Days/Q.png',
        thumbnailWidth: 1,
        thumbnailHeight: 1,
    },
    {
        src: '/images/36Days/h5.png',
        thumbnail: '/images/36Days/h5.png',
        thumbnailWidth: 1,
        thumbnailHeight: 1,
    },
    {
        src: '/images/36Days/i1.png',
        thumbnail: '/images/36Days/i1.png',
        thumbnailWidth: 1,
        thumbnailHeight: 1,
    },
    {
        src: '/images/36Days/J.png',
        thumbnail: '/images/36Days/J.png',
        thumbnailWidth: 1,
        thumbnailHeight: 1,
    },
    {
        src: '/images/36Days/o5.png',
        thumbnail: '/images/36Days/o5.png',
        thumbnailWidth: 1,
        thumbnailHeight: 1,
    },
    {
        src: '/images/36Days/L.png',
        thumbnail: '/images/36Days/L.png',
        thumbnailWidth: 1,
        thumbnailHeight: 1,
    },
    {
        src: '/images/36Days/M.png',
        thumbnail: '/images/36Days/M.png',
        thumbnailWidth: 1,
        thumbnailHeight: 1,
    },
    {
        src: '/images/36Days/n_eeve.png',
        thumbnail: '/images/36Days/n_eeve.png',
        thumbnailWidth: 1,
        thumbnailHeight: 1,
    },
    {
        src: '/images/36Days/k.png',
        thumbnail: '/images/36Days/k.png',
        thumbnailWidth: 1,
        thumbnailHeight: 1,
    },
    {
        src: '/images/36Days/f.png',
        thumbnail: '/images/36Days/f.png',
        thumbnailWidth: 1,
        thumbnailHeight: 1,
    },
    {
        src: '/images/36Days/e.png',
        thumbnail: '/images/36Days/e.png',
        thumbnailWidth: 1,
        thumbnailHeight: 1,
    },
    {
        src: '/images/36Days/R1.png',
        thumbnail: '/images/36Days/R1.png',
        thumbnailWidth: 1,
        thumbnailHeight: 1,
    },
    {
        src: '/images/36Days/g.png',
        thumbnail: '/images/36Days/g.png',
        thumbnailWidth: 1,
        thumbnailHeight: 1,
    }
]

const DaysOfTypeGrid = () =>{
    return(
        <div className="grid_container">
            <Gallery 
            enableImageSelection={false} 
            enableLightbox={false} 
            thumbnailStyle={ImageStyle}
            margin={0} rowHeight="31.667vw" images={IMAGES}/>
        </div>
    )
}

export default DaysOfTypeGrid