import React from "react";
import { YoutubeSrcUrl } from "../../constants";

const VideoBackground = ({ videoTrailer }) => {
  // console.log(videoTrailer)

  const filterData = videoTrailer.filter(
    (element) => element.type === "Trailer"
  );
  const trailer = filterData.length ? filterData[0] : videoTrailer[0];
  console.log(trailer);
  console.log(YoutubeSrcUrl + "/" + trailer.key);

  return (
    <div className="w-[100%] overflow-x-hidden">
 <iframe
  className="w-full aspect-video"
  src={`${YoutubeSrcUrl}/${trailer.key}?&autoplay=1&mute=1&disablekb=0&controls=0&rel=0`}
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
></iframe>

</div>
  );
};

export default VideoBackground;
