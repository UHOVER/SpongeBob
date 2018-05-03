import Sprite from "../base/sprite";

const BG_IMG_SRC = 'images/bg.jpg';
const BG_WIDTH = 512;
const BG_HEIGHT = 512;

export default class BackGround extends Sprite{
    constructor(ctx){
        super(BG_IMG_SRC, BG_WIDTH, BG_HEIGHT);
        ctx.drawImage(
            this.img,
            0,
            0,
            this.width,
            this.height,
            0,
            0,
            0,
            0
        );
    }
}