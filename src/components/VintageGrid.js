import React from 'react';
import Gallery from 'react-grid-gallery';
import LazyLoad from 'react-lazyload';
import Loading from './Loading';

const ImageStyle = () => {
    return (
        {
            pointer: "default",
            margin: "0rem",
            width: "31.666vw"
        }
    )
}

const ImageStyleDull = () => {
    return (
        {
            pointer: "default",
            margin: "0rem",
            width: "95vw"
        }
    )
}


const IMAGES = [
    {
        src: '/images/Vintage/white.jpg',
        thumbnail: '/images/Vintage/white.jpg',
        thumbnailWidth: 640,
        thumbnailHeight: 640
    },

    {
        src: '/images/Vintage/meet_final.jpg',
        thumbnail: '/images/Vintage/meet_final.jpg',
        thumbnailWidth: 640,
        thumbnailHeight: 640,
    },
    {
        src: '/images/Vintage/corona2.jpg',
        thumbnail: '/images/Vintage/corona2.jpg',
        thumbnailWidth: 640,
        thumbnailHeight: 640,

    },
]

const IMAGES_2 = [
    {
        src: '/images/Vintage/dull.jpg',
        thumbnail: '/images/Vintage/dull.jpg',
        thumbnailWidth: 1,
        thumbnailHeight: 1,
    }
]

const VintageGrid = () => {
    return (
        <div className="grid_container">
            <LazyLoad
                placeholder={Loading}>
                <Gallery
                    enableImageSelection={false}
                    enableLightbox={false}
                    thumbnailStyle={ImageStyle}
                    rowHeight="31.667vw"
                    margin={0} images={IMAGES} />
            </LazyLoad>
            <LazyLoad
                placeholder={Loading}>
                <Gallery
                    enableImageSelection={false}
                    enableLightbox={false}
                    thumbnailStyle={ImageStyleDull}
                    margin={0} rowHeight="95vw" images={IMAGES_2} />
            </LazyLoad>
        </div>
    )
}

export default VintageGrid