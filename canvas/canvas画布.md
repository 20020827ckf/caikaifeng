##### 1.初始化canvas

1.创建canvas

```js
<canvas id="cvs"></canvas>
```

2.获取DOM

```js
 const cvsDom = document.querySelector('#cvs')
```

3.实例化，生成canvas对象

```js
  const context = cvsDom.getContext("2d")
```

4.初始化宽高

```js
 function init() {
        cvsDom.width = window.innerWidth;
        cvsDom.height = window.innerHeight;
    }
    init()
```

##### 2.线行

```js
// 线条
        context.beginPath();
        // 线的起始点
        context.moveTo(100, 50)
        // 下一点
        context.lineTo(100, 400);
        // 表示线形的颜色
        context.strokeStyle = '#000';
        //线宽
        context.lineWidth = 6;
        //填充颜色
        context.fillStyle = '#00f';
        // 描边
        context.stroke();
```

##### 3.矩形

```js
 //绘制填充矩形
//x,y,宽，高
context.fillRect(20, 10, 200, 100);
//绘制描边矩形
context.strokeRect(20, 10, 200, 100)
//开始填充
 context.fill()
```

##### 4.圆形

```js
arc(x, y, 圆半径, 起始角度, 结束角度, 是否顺逆); 
```

##### 5.文字

```js
 //填充字
  context.fillStyle = '#000';
 // context.strokeStyle = '#00f';

//字体，大小
context.font = '30px sans-serif';

context.fillText('全栈2205A', 330, 110);

//描边字
// context.strokeText('全栈2205A', 330, 110);
```

##### 6.图像

```js
 //获取dom
    const cvsDom = document.querySelector('#cvs')
        //将canvas dom生成为canvas对象  相当于echarts.init('cvsDom')
    const context = cvsDom.getContext('2d')  
 //实例化一个图像
    const img = new Image()
    img.src = './imgs/baidu.png'
        //图像加载完成，再合成图像
    img.onload = function() {
        context.drawImage(img, 46, 180, 218, 79);
    }



```

6.1图像合并

```js
//canvas实现图像合成  PhotoShop 图像模式，多个图形重叠的部分是透明的，不重叠的部分不透明
context.globalCompositeOperation = 'destination-out';
```



##### 7.清除

```
//0,0开始，清除多高多宽
context.clearRect(0, 0, cvsDom.width, cvsDom.height)
```



