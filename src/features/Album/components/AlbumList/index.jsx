import React from 'react';
import PropTypes from 'prop-types';
import Album from '../Album';
import "./styles.scss"
import classnames from 'classnames';

AlbumList.propTypes = {
  albumList: PropTypes.array,
  onAlbumClick: PropTypes.func
};

AlbumList.defaultProps = {
  albumList: [],
  onAlbumClick: null
}

function AlbumList({ albumList, onAlbumClick }) {
  const handleAlbumClick = (album, idx) => {
    if (!onAlbumClick) return;

    onAlbumClick(album, idx);
  }

  return (
    <ul className="album-list">
      {albumList.map((album, idx) => (
        <li
          key={album.id}
          className={classnames({
            'item-album': true,
            'bookmark-item': album.status === 'bookmark'
          })}
          onClick={() => handleAlbumClick(album, idx)}
        >
          <Album album={album} />
        </li>
      ))
      }
    </ul >
  );
}

export default AlbumList;