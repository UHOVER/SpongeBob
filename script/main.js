let ctx = canvas.getContext('2d');

export default class Main{
  constructor(){
    this.appid = 0;
    ctx.fillStyle = 'red';
    ctx.fillRect(0, 0, 100, 100);

    console.log(canvas.width + '--' + canvas.height);

    // canvas.width = 200;
    // canvas.height = 200;

    // 加载图片
    let image = wx.createImage();
    image.onload = function(){
      console.log(image.width, image.height);
      ctx.drawImage(image, 0, 0)
    };
    // image.src = 'images/bg.jpg';

    // 离屏canvas
    let offScreenCanvas = wx.createCanvas();
    let offctx = offScreenCanvas.getContext('2d');
    offctx.fillStyle = 'green';
    offctx.fillRect(0, 0, 50, 50);
    ctx.drawImage(offScreenCanvas, 0, 0);

    //touch回调
    wx.onTouchStart(function(e){
      console.log(e.touches);
    });

    wx.onTouchMove(function(e){
      console.log(e.touches);
    });

    wx.onTouchEnd(function(e){
      console.log('touch end');
    });

    wx.onTouchCancel(function(e){
      console.log('cancel')
    });


    //全局对象管理
    // GameGlobal等同于浏览器的window
    console.log(GameGlobal.setTimeout === setTimeout)


  }
}