import React from 'react';
import Gallery from 'react-grid-gallery';

const ImageStyle= () =>{
    return(
        {
            pointer:"default",
            margin: "0rem",
            width:"31.667vw"
        }
    )
}

const ImageStyleDull= () =>{
    return(
        {
            pointer:"default",
            margin: "0rem",
            width:"95vw"
        }
    )
}


const IMAGES = [
     {
    src: '/images/Vintage/white.png',
    thumbnail:'/images/Vintage/white.png',
    thumbnailWidth: 640,
    thumbnailHeight: 640
},
  
    {
        src: '/images/Vintage/meet_final.png',
        thumbnail:'/images/Vintage/meet_final.png',
        thumbnailWidth: 640,
        thumbnailHeight: 640,
    },
    {
        src: '/images/Vintage/corona2.png',
        thumbnail: '/images/Vintage/corona2.png',
        thumbnailWidth: 640,
        thumbnailHeight: 640,

    },
]

const IMAGES_2 = [
    {
        src: '/images/Vintage/dull_jack.png',
        thumbnail: '/images/Vintage/dull_jack.png',
        thumbnailWidth: 1,
        thumbnailHeight: 1,
    }
]

const VintageGrid = () =>{
    return(
        <div className="grid_container">
            <Gallery 
            enableImageSelection={false} 
            enableLightbox={false} 
            thumbnailStyle={ImageStyle}
            rowHeight="31.667vw"
            margin={0} images={IMAGES}/>
            <Gallery 
            enableImageSelection={false} 
            enableLightbox={false} 
            thumbnailStyle={ImageStyleDull}
            margin={0} rowHeight="95vw" images={IMAGES_2}/>
        </div>
    )
}

export default VintageGrid