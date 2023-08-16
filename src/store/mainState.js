import { proxy } from "valtio"

const mainState = proxy({
    presetColors: [],
    color:"",
    position:"",
    provider:"",
    product:"tshirt",
    stageWidth:"",
    stageHeight:"",
    xPosition:0,
    yPosition:0,
})

export default mainState