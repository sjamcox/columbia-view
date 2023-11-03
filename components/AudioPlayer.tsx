'use client'

import ReactAudioPlayer from 'react-audio-player'

export default function AudioPlayer({ src }: { src: string }) {
  return <ReactAudioPlayer src={src} controls />
}
