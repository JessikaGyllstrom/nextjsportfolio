import React from 'react'
import{ Cursor, useTypewriter } from 'react-simple-typewriter'
import Image from 'next/image'

type Props = {}

const Hero = (props: Props) => {
    const  [text, count] = useTypewriter({ 
    words: [
    "Webbdeveloper", 
    "Programmer iPhone & Android", 
    "Digital Artist"
    ],
    loop: true, 
    delaySpeed: 2000,
    })
    return (
        <div>
            <div>
                <div>I'm Jessika Gyllström</div>
                <div>{text}</div>
            </div>
            <div>
                
            
            </div>
        </div>
  )
}

export default Hero