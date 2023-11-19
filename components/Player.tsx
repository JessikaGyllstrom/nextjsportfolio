'use client';
import React from 'react'
import ReactPlayer from 'react-player';

export default function Player(props) {
  return (
    <ReactPlayer
        {...props}
        controls
        muted={true}
        playing={false}
        width="100%"
        height="100%"
      />
  )
};