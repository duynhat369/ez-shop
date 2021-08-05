import { useEffect, useRef, useState } from "react";

const randomColor = (currentColor) => {
    const COLOR_LIST = ['deeppink', 'skyBlue', 'orange']
    const currentIndex = COLOR_LIST.indexOf(currentColor)
    let newIndex = currentIndex

    while (newIndex === currentIndex) {
        //random 0->2
        newIndex = Math.trunc(Math.random(COLOR_LIST) * 3)
    }

    return COLOR_LIST[newIndex]
}

function useMagicColor() {
    const [color, setColor] = useState('transparent')
    const colorRef = useRef('transparent')

    //change color every 1 second
    useEffect(() => {
        const colorInterval = setInterval(() => {
            const newColor = randomColor(colorRef.current)
            setColor(newColor)

            colorRef.current = newColor
        }, 1000)

        return () => clearInterval(colorInterval)
    }, [])

    return color
}

export default useMagicColor;