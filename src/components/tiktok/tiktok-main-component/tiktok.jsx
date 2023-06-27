// import React from 'react';
import { useState } from 'react';
import './tiktok.css'
const Tiktok = () => {
    const [urls, setUrl] = useState('')
    const [videoImg, setVideoImg] = useState('')
    const [videoUrl, setVideoUrl] = useState('')
    const [videomusic, setVideoMusic] = useState('')

    const fetchingVideoWithoutWaterMark = async (urls) => {
        const url = `https://tiktok-downloader-download-tiktok-videos-without-watermark.p.rapidapi.com/index?url=${urls}`;
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '946fc15441mshd6da0fb90c64b8ep1c1018jsn2cb8e45c427f',
                'X-RapidAPI-Host': 'tiktok-downloader-download-tiktok-videos-without-watermark.p.rapidapi.com'
            }
        };

        try {
            const response = await fetch(url, options);
            const result = await response.json();
            setVideoUrl(result.video);
            setVideoImg(result.cover);
            setVideoMusic(result.music);

        } catch (error) {
            console.error(error);
        }
    }
    return (
        <div className="tiktok-container">
            <div className="tiktok-heading">
                <h3 className="tiktok-heading-content">Welcome to tiktok downloader feel free to download unlimited videos</h3>
            </div>

            <div className="tiktok-inserting-container">
                <input type='text' value={urls} onChange={e => (setUrl(e.target.value))} />
                <button className='submit-button' type="submit" onClick={() => fetchingVideoWithoutWaterMark(urls)}> Search </button>
            </div>

            {/* Video Url Link */}
            {videoUrl && <div className='video-downloader-links'>
                <div className='tiktok-video-downloader'>
                    <img className='imageUrl' src={videoImg} alt='Video Post Image' />
                    <a className='href-element' href={videoUrl}>Preview and Download Video</a>
                    <a className='href-element' href={videomusic}>Preview and Download Music</a>
                </div>

            </div>}
        </div>
    );
}

export default Tiktok;
