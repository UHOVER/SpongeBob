// import Sprite from "/base/sprite";
import BackGround from "/common/background"
var drawBg = require('/base/drawSprite')

let ctx = canvas.getContext('2d');

export default class Main{
  constructor(){
    this.appid = 0;
    ctx.fillStyle = 'red';
    ctx.fillRect(0, 0, 100, 100);

    console.log(canvas.width + '--' + canvas.height);
    /*
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
    */

    // this.bg = new BackGround(ctx);
    // drawBg(ctx, 0, 0)

    // 获取微信用户权限
    /*
    wx.login({
      success: function(res){
        wx.getUserInfo({
          success: function(res){
            console.log(res);
          },
          fail: function() {
            // fail
          },
          complete: function() {
            // complete
          }
        })
      },
      fail: function() {
        console.log('fail');
        
      },
      complete: function() {
        console.log('complete');
        
      }
    })*/

    wx.authorize({
      scope: 'scope.record',
      fail: function(res) {
        console.log(res);
        
        if (res.errMsg.indexOf('auth deny') > -1 || res.errMsg.indexOf('auth denied') > -1) {
          console.log('拒绝');
          
        }
      },
    })
  }
}