import React from 'react';

const CampaignDiv = ({ src, videoLink }) => {
  const hasVideo = videoLink !== undefined;

  const itemClass = hasVideo ? 'item has_video' : 'item';

  return (
    <div className={itemClass}>
      <img src={src} alt="" />
      {hasVideo && (
        <a className="popup-youtube metaportal_fn_videobutton" href={videoLink}>
          <img src="/svg/play.svg" alt="" className="fn__svg" />
        </a>
      )}
      <div className="item_in">
        <div className="img" data-bg-img={src} />
      </div>
    </div>
  );
};

export default CampaignDiv;
