// Method return a random number from 0 to 255
const rgbValue = () => {
    return Math.floor(Math.random() * 256)
    }
    
    // Method generates an array of rgb colors
    const generateColors = (num) => {
    let colors = []
        
    for(let i=0; i<num; i++){
        const white = rgbValue()
        const black = rgbValue()
        colors.push(`rgb(${white},${black})`)
    }
    return colors
    }
    
    export { rgbValue, generateColors }
    