import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AlbumList from './components/AlbumList';
import "./styles.scss";

AlbumFeature.propTypes = {

};

function AlbumFeature(props) {
  const initAlbumList = [
    {
      id: 1,
      status: "completed",
      title: "Justin Bieber Album June of 2021",
      image: "https://photo-playlist-zmp3.zadn.vn/mixartist?src=HavwqN7EvKCI1og5AfZbHm1SBzWxcE97K5mebMg5j1052oANRz2u7mCE9ifhqRbAKmrnp3-4waq2NMgNAz7c2r1EBSDzbA591ZZCIZpp39A4eWD1_sMFXSFsLGUu9zdzbBy39ADqx_sV_IG_8dq&size=thumb/240_240",
    },
    {
      id: 2,
      status: "new",
      title: "Justin Bieber Album May of 2021",
      image: "https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/0/4/1/1/04119672c980addfdd9e65f76012d7b6.jpg",
    },
    {
      id: 3,
      status: "completed",
      title: "Justin Bieber Album April of 2021",
      image: "https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/1/d/e/8/1de8d49cac03014af6c9b8b285685095.jpg",
    },
    {
      id: 4,
      status: "new",
      title: "Justin Bieber Album March of 2021",
      image: "https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/2/f/0/c/2f0c42b5295358c4336f68f0ab5b0706.jpg",
    },
    {
      id: 5,
      status: "new",
      title: "Justin Bieber Album February of 2021",
      image: "https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/covers/8/6/867c88d5c092286e0d5c96bdc49d6a13_1477967427.jpg",
    },
  ]

  const [albumList, setAlbumList] = useState(initAlbumList)
  const [filteredStatus, setFilteredStatus] = useState("all")

  const handleAlbumClick = (album, idx) => {
    //clone current array to the new one
    const newAlbumList = [...albumList]

    //toggle state 
    newAlbumList[idx] = {
      ...newAlbumList[idx],
      status: newAlbumList[idx].status === "new" ? "completed" : "new",
    }
    //update album list
    setAlbumList(newAlbumList)
  }

  const handleShowAllClick = () => {
    setFilteredStatus("all")
  }
  const handleShowNewClick = () => {
    setFilteredStatus("new")
  }
  const handleShowCompletedClick = () => {
    setFilteredStatus("completed")
  }

  const renderedAlbumList = albumList.filter(album => filteredStatus === "all" || filteredStatus === album.status)

  return (
    <React.Fragment>
      <h3 className="album-title">Top Justin Bieber's album</h3>
      <div className="album-button__group">
        <button onClick={handleShowAllClick} className="button">Show All</button>
        <button onClick={handleShowNewClick} className="button">Show New Album</button>
        <button onClick={handleShowCompletedClick} className="button">Show Completed Album</button>
      </div>

      {/* 
      - prop albumList nhận vào mảng albumList 
      - prop onAlbumClick được truyền xuống thằng con xử lí, khi click <li> ở thằng con gọi lại thằng onAlbumClick này để update
      */}
      <AlbumList albumList={renderedAlbumList} onAlbumClick={handleAlbumClick} />
    </React.Fragment>
  );
}

export default AlbumFeature;