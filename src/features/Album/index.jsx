import React from 'react';
import PropTypes from 'prop-types';
import AlbumList from './components/AlbumList';

AlbumFeature.propTypes = {

};

function AlbumFeature(props) {
  const albumList = [
    {
      id: 1,
      title: "Justin Bieber Album June 2021",
      image: "https://photo-playlist-zmp3.zadn.vn/mixartist?src=HavwqN7EvKCI1og5AfZbHm1SBzWxcE97K5mebMg5j1052oANRz2u7mCE9ifhqRbAKmrnp3-4waq2NMgNAz7c2r1EBSDzbA591ZZCIZpp39A4eWD1_sMFXSFsLGUu9zdzbBy39ADqx_sV_IG_8dq&size=thumb/240_240",
    },
    {
      id: 2,
      title: "Justin Bieber Album May 2021",
      image: "https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/0/4/1/1/04119672c980addfdd9e65f76012d7b6.jpg",
    },
    {
      id: 3,
      title: "Justin Bieber Album April 2021",
      image: "https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/1/d/e/8/1de8d49cac03014af6c9b8b285685095.jpg",
    },
    {
      id: 4,
      title: "Justin Bieber Album March 2021",
      image: "https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/2/f/0/c/2f0c42b5295358c4336f68f0ab5b0706.jpg",
    },
    {
      id: 5,
      title: "Justin Bieber Album February 2021",
      image: "https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/covers/8/6/867c88d5c092286e0d5c96bdc49d6a13_1477967427.jpg",
    },
  ]

  return (
    <frameElement>
      <h3 className="album-title">Top Justin Bieber's album's</h3>
      <AlbumList albumList={albumList} />  {/* props albumList nhận vào mảng albumList */}
    </frameElement>
  );
}

export default AlbumFeature;