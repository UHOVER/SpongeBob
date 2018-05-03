module.exports = function (ctx, x, y) {
    var image = new Image()
    image.onload = function () {
        ctx.drawImage(image, x, y)
    }
    image.src = 'images/bg.jpg'
}