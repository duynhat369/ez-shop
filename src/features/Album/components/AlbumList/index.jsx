import React from 'react';
import PropTypes from 'prop-types';
import Album from '../Album';
import "./styles.scss"
import classnames from 'classnames';

AlbumList.propTypes = {
  albumList: PropTypes.array.isRequired
};

function AlbumList({ albumList }) {
  return (
    <ul className="album-list">
      {albumList.map((album, idx) => (
        <li
          key={album.id}
          className={classnames({
            'item-album': true,
            'bookmark-item': album.status === 'bookmark'
          })}
          onClick="{ }"
        >
          <Album album={album} />
        </li>
      ))
      }
    </ul >
  );
}

export default AlbumList;