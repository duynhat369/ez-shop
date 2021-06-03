import React from 'react';
import AlbumList from './components/AlbumList';

AlbumFeature.propTypes = {

};

function AlbumFeature(props) {
  const albumList = [
    {
      id: 1,
      title: "Love yourself",
      thumbnail: "https://zmp3-static.zadn.vn/skins/zmp3-v6.1/images/theme/iu.jpg"
    },
    {
      id: 2,
      title: "What do you mean",
      thumbnail: "https://zmp3-static.zadn.vn/skins/zmp3-v6.1/images/theme/jack.jpg"
    },
    {
      id: 3,
      title: "Waiting for love",
      thumbnail: "https://zmp3-static.zadn.vn/skins/zmp3-v6.1/images/theme/jack.jpg"
    },
    {
      id: 4,
      title: "Someone you loved",
      thumbnail: "https://zmp3-static.zadn.vn/skins/zmp3-v6.1/images/theme/iu.jpg"
    },
    {
      id: 5,
      title: "Go home",
      thumbnail: "https://zmp3-static.zadn.vn/skins/zmp3-v6.1/images/theme/jack.jpg"
    },
  ]
  return (
    <div>
      <h2>Music album June </h2>
      <div>
        <AlbumList albumList={albumList} />  {/** Push albumList array to AlbumList function*/}
      </div>
    </div>
  );
}

export default AlbumFeature;