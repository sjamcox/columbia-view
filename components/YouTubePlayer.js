'use client'

import LiteYouTubePlayer from 'react-lite-youtube-embed'
import { Global, css } from '@emotion/react'

export default function YouTubePlayer({ id }) {
  return (
    <>
      <Global
        styles={css`
          .yt-lite {
            background-color: #000;
            position: relative;
            display: block;
            contain: content;
            background-position: center center;
            background-size: cover;
            cursor: pointer;
          }

          /* gradient */
          .yt-lite::before {
            content: '';
            display: block;
            position: absolute;
            top: 0;
            background: linear-gradient(
              180deg,
              rgba(0, 0, 0, 0.6839110644257703) 0%,
              rgba(255, 255, 255, 0) 20%,
              rgba(255, 255, 255, 0) 80%,
              rgba(0, 0, 0, 0.6951155462184874) 100%
            );
            background-position: top;
            background-repeat: repeat-x;
            height: 100%;
            padding-bottom: 50px;
            width: 100%;
            transition: all 0.2s cubic-bezier(0, 0, 0.2, 1);
          }

          /* responsive iframe with a 16:9 aspect ratio
        thanks https://css-tricks.com/responsive-iframes/
      */
          .yt-lite::after {
            content: '';
            display: block;
            padding-bottom: calc(100% / (16 / 9));
          }
          .yt-lite > iframe {
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
          }

          /* play button */
          .yt-lite > .lty-playbtn {
            width: 70px;
            height: 46px;
            background-color: #212121;
            z-index: 1;
            opacity: 0.8;
            border-radius: 14%; /* TODO: Consider replacing this with YT's actual svg. Eh. */
            transition: all 0.2s cubic-bezier(0, 0, 0.2, 1);
          }
          .yt-lite:hover > .lty-playbtn {
            background-color: #f00;
            opacity: 1;
          }
          /* play button triangle */
          .yt-lite > .lty-playbtn:before {
            content: '';
            border-style: solid;
            border-width: 11px 0 11px 19px;
            border-color: transparent transparent transparent #fff;
          }

          .yt-lite > .lty-playbtn,
          .yt-lite > .lty-playbtn:before {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate3d(-50%, -50%, 0);
          }

          /* Post-click styles */
          .yt-lite.lyt-activated {
            cursor: unset;
          }
          .yt-lite.lyt-activated::before,
          .yt-lite.lyt-activated > .lty-playbtn {
            opacity: 0;
            pointer-events: none;
          }
        `}
      />
      <LiteYouTubePlayer
        id={id} // Default none, id of the video or playlist
        playlist={false} // Use  true when your ID be from a playlist
        playlistCoverId={id} // The ids for playlists did not bring the cover in a pattern to render so you'll need pick up a video from the playlist (or in fact, whatever id) and use to render the cover. There's a programmatic way to get the cover from YouTube API v3 but the aim of this component is do not make any another call and reduce requests and bandwidth usage as much as possibe
        poster="hqdefault" // Defines the image size to call on first render as poster image. Possible values are "default","mqdefault",  "hqdefault", "sddefault" and "maxresdefault". Default value for this prop is "hqdefault". Please be aware that "sddefault" and "maxresdefault", high resolution images are not always avaialble for every video. See: https://stackoverflow.com/questions/2068344/how-do-i-get-a-youtube-video-thumbnail-from-the-youtube-api
        title="YouTube Embed" // a11y, always provide a title for iFrames: https://dequeuniversity.com/tips/provide-iframe-titles Help the web be accessible ;)
        noCookie={true} //Default false, connect to YouTube via the Privacy-Enhanced Mode using https://www.youtube-nocookie.com
        // style={{
        //   position: 'absolute',
        //   top: 0,
        //   left: 0,
        //   width: '100%',
        //   height: '200px',
        // }}
      />
    </>
  )
}
