import React, { useState } from 'react';
import AlbumList from './components/AlbumList';
import "./styles.scss"

AlbumFeature.propTypes = {

};

function AlbumFeature(props) {
  const initAlbumList = [
    {
      id: 1,
      title: "Love yourself",
      thumbnail: "https://zmp3-static.zadn.vn/skins/zmp3-v6.1/images/theme/iu.jpg",
      status: "new"
    },
    {
      id: 2,
      title: "What do you mean",
      thumbnail: "https://zmp3-static.zadn.vn/skins/zmp3-v6.1/images/theme/jack.jpg",
      status: "new"
    },
    {
      id: 3,
      title: "Waiting for love",
      thumbnail: "https://zmp3-static.zadn.vn/skins/zmp3-v6.1/images/theme/jack.jpg",
      status: "bookmark"
    },
    {
      id: 4,
      title: "Someone you loved",
      thumbnail: "https://zmp3-static.zadn.vn/skins/zmp3-v6.1/images/theme/iu.jpg",
      status: "bookmark"
    },
    {
      id: 5,
      title: "Go home",
      thumbnail: "https://zmp3-static.zadn.vn/skins/zmp3-v6.1/images/theme/jack.jpg",
      status: "new"
    },
    {
      id: 6,
      title: "I love you more than I say",
      thumbnail: "https://zmp3-static.zadn.vn/skins/zmp3-v6.1/images/theme/iu.jpg",
      status: "bookmark"
    },
    {
      id: 7,
      title: "Let her go",
      thumbnail: "https://zmp3-static.zadn.vn/skins/zmp3-v6.1/images/theme/jack.jpg",
      status: "new"
    },
    {
      id: 8,
      title: "Reality",
      thumbnail: "https://zmp3-static.zadn.vn/skins/zmp3-v6.1/images/theme/iu.jpg",
      status: "bookmark"
    },
  ]

  const [albumList, setAlbumList] = useState(initAlbumList);
  const [filteredStatus, setFilteredStatus] = useState('all');

  const handleAlbumClick = (album, idx) => {
    //clone current array to the new one
    const newAlbumList = [...albumList];

    //toggle state
    newAlbumList[idx] = {
      ...newAlbumList[idx],
      status: newAlbumList[idx].status === 'new' ? 'bookmark' : 'new'
    };

    //update status
    setAlbumList(newAlbumList)
  }

  const handleShowAllClick = () => {
    setFilteredStatus('all')
  }

  const handleShowNewClick = () => {
    setFilteredStatus('new')
  }

  const handleShowBookmarkClick = () => {
    setFilteredStatus('bookmark')
  }

  const renderedAlbumList = albumList.filter(album => filteredStatus === 'all' || filteredStatus === album.status);

  return (
    <div>
      <h2>Music album June </h2>
      <div className="button-group">
        <button onClick={handleShowAllClick}>Show all</button>
        <button onClick={handleShowNewClick}>Show new</button>
        <button onClick={handleShowBookmarkClick}>Show bookmarked</button>
      </div>

      <div>
        <AlbumList albumList={renderedAlbumList} onAlbumClick={handleAlbumClick} />  {/** Push albumList array to AlbumList function*/}
      </div>
    </div>
  );
}

export default AlbumFeature;