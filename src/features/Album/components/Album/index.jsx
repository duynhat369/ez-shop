import React from 'react';
import PropTypes from 'prop-types';
import "./styles.scss"

Album.propTypes = {
  album: PropTypes.object.isRequired,
};

function Album({ album }) {
  return (
    <frameElement>
      <div className="album__thumb">
        <img src={album.image} alt={album.title} />
      </div>
      <p className="album__title">{album.title}</p>
    </frameElement>
  );
}

export default Album;