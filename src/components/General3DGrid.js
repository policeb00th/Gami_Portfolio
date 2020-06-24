import React from 'react';
import ReactDOM from 'react-dom';
import Gallery from 'react-grid-gallery';
import Footer from './Footer';

const ImageStyle= () =>{
    return(
        {
            pointer:"default",
            margin: "0rem",
            width:"31.666vw"
        }
    )
}
const ImageStyle2= () =>{
    return(
        {
            pointer:"default",
            margin: "0rem",
            width:"47.5vw"
        }
    )
}

const IMAGES = [
    {
        src: '/images/3D/22stsucks.jpg',
        thumbnail: '/images/3D/22stsucks.jpg',
        thumbnailWidth: 640,
        thumbnailHeight: 640,

    },
    {
        src: '/images/3D/pokeball.jpg',
        thumbnail: '/images/3D/pokeball.jpg',
        thumbnailWidth: 640,
        thumbnailHeight: 640,
    },
    {
        src: '/images/3D/skull_flame.jpg',
        thumbnail: '/images/3D/skull_flame.jpg',
        thumbnailWidth: 640,
        thumbnailHeight: 640,
    },
]

const IMAGES_2 = [
    {
        src: '/images/3D/Isolation.jpg',
        thumbnail: '/images/3D/Isolation.jpg',
        thumbnailWidth: 960,
        thumbnailHeight: 540,
    },
    {
        src: '/images/3D/Isolation.jpg',
        thumbnail: '/images/3D/laptop.jpg',
        thumbnailWidth: 960,
        thumbnailHeight: 540,
    },
    {
        src: '/images/3D/36days_f_2.jpg',
        thumbnail: '/images/3D/36days_f_2.jpg',
        thumbnailWidth: 960,
        thumbnailHeight: 540,
    },
    {
        src: '/images/3D/g.jpg',
        thumbnail: '/images/3D/g.jpg',
        thumbnailWidth: 960,
        thumbnailHeight: 540,
    },
    {
        src: '/images/3D/stay_3.jpg',
        thumbnail: '/images/3D/stay_3.jpg',
        thumbnailWidth: 960,
        thumbnailHeight: 540,
    },
    {
        src: '/images/3D/icons3.jpg',
        thumbnail: '/images/3D/icons3.jpg',
        thumbnailWidth: 960,
        thumbnailHeight: 540,
    },
]

const General3DGrid = () =>{
    return(
        <div className="grid_container">
            <Gallery 
            enableImageSelection={false} 
            enableLightbox={false} 
            thumbnailStyle={ImageStyle}
            margin={0} rowHeight="31.667vw" images={IMAGES}/>
            <Gallery 
            enableImageSelection={false} 
            enableLightbox={false} 
            thumbnailStyle={ImageStyle2}
            margin={0} rowHeight="26.71903125vw" images={IMAGES_2}/>
        </div>
    )
}

export default General3DGrid