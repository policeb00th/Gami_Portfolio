import React from 'react';
import ReactDOM from 'react-dom';
import Gallery from 'react-grid-gallery';
import Footer from './Footer';
import LazyLoad from 'react-lazyload'
import Loading from './Loading';

const ImageStyle = () => {
    return (
        {
            pointer: "default",
            width: "31.66698vw"
        }
    )
}

const IMAGES = [
    {
        src: '/images/36Days/v1.jpg',
        thumbnail: '/images/36Days/v1.jpg',
        thumbnailWidth: 1,
        thumbnailHeight: 1,

    },
    {
        src: '/images/36Days/T.jpg',
        thumbnail: '/images/36Days/T.jpg',
        thumbnailWidth: 1,
        thumbnailHeight: 1,
    },
    {
        src: '/images/36Days/Q.jpg',
        thumbnail: '/images/36Days/Q.jpg',
        thumbnailWidth: 1,
        thumbnailHeight: 1,
    },
    {
        src: '/images/36Days/h5.jpg',
        thumbnail: '/images/36Days/h5.jpg',
        thumbnailWidth: 1,
        thumbnailHeight: 1,
    },
    {
        src: '/images/36Days/i1.jpg',
        thumbnail: '/images/36Days/i1.jpg',
        thumbnailWidth: 1,
        thumbnailHeight: 1,
    },
    {
        src: '/images/36Days/J.jpg',
        thumbnail: '/images/36Days/J.jpg',
        thumbnailWidth: 1,
        thumbnailHeight: 1,
    },
    {
        src: '/images/36Days/o5.jpg',
        thumbnail: '/images/36Days/o5.jpg',
        thumbnailWidth: 1,
        thumbnailHeight: 1,
    },
    {
        src: '/images/36Days/L.jpg',
        thumbnail: '/images/36Days/L.jpg',
        thumbnailWidth: 1,
        thumbnailHeight: 1,
    },
    {
        src: '/images/36Days/M.jpg',
        thumbnail: '/images/36Days/M.jpg',
        thumbnailWidth: 1,
        thumbnailHeight: 1,
    },
    {
        src: '/images/36Days/n_eeve.jpg',
        thumbnail: '/images/36Days/n_eeve.jpg',
        thumbnailWidth: 1,
        thumbnailHeight: 1,
    },
    {
        src: '/images/36Days/k.jpg',
        thumbnail: '/images/36Days/k.jpg',
        thumbnailWidth: 1,
        thumbnailHeight: 1,
    },
    {
        src: '/images/36Days/f.jpg',
        thumbnail: '/images/36Days/f.jpg',
        thumbnailWidth: 1,
        thumbnailHeight: 1,
    },
    {
        src: '/images/36Days/e.jpg',
        thumbnail: '/images/36Days/e.jpg',
        thumbnailWidth: 1,
        thumbnailHeight: 1,
    },
    {
        src: '/images/36Days/R1.jpg',
        thumbnail: '/images/36Days/R1.jpg',
        thumbnailWidth: 1,
        thumbnailHeight: 1,
    },
    {
        src: '/images/36Days/g.jpg',
        thumbnail: '/images/36Days/g.jpg',
        thumbnailWidth: 1,
        thumbnailHeight: 1,
    }
]

const DaysOfTypeGrid = () => {
    return (

        <div className="grid_container">
            <LazyLoad
                placeholder={Loading}>
                <Gallery
                    enableImageSelection={false}
                    enableLightbox={false}
                    thumbnailStyle={ImageStyle}
                    margin={0} rowHeight="31.667vw" images={IMAGES} />
            </LazyLoad>
        </div>
    )
}

export default DaysOfTypeGrid