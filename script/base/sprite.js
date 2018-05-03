// 封装一个基础精灵类
export default class Sprite{
    constructor(imgSrc = '', width = 0, height = 0, x = 0, y = 0){
        this.img = new Image()
        this.img.src = imgSrc
        this.width = width
        this.height = height
        this.x = x
        this.y = y

        this.visible = true
    }

    // 绘制精灵到图层上
    drawToCanvas(ctx){
        if (!this.visible) {
            return
        }
        ctx.drawImage(
            this.img,
            this.x,
            this.y,
            this.width,
            this.height
        )
    }
}