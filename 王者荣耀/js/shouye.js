/**
 * Created by 张耀 on 2018/11/5.
 */
   function nav(x, y, ev) {
    x[ev] = function () {
        if (y.style.display == 'block') {
            y.style.display = 'none';
            x.style.color = '#000';
        } else {
            y.style.display = 'block';
            x.style.color = '#ff6600';
        }
    }
}

function a(x, y, ev) {
    for (let i = 0; i < x.length; i++) {
        x[i][ev] = function () {
            for (var j = 0; j < y.length; j++) {
                y[j].classList.remove('now');
                x[j].classList.remove('now');
            }
            y[i].classList.add('now');
            x[i].classList.add('now');
        }
    }
}
var game1 = document.querySelectorAll('.game12 li .yxz'),
    game2 = document.querySelectorAll('.game12 li div:last-of-type.yxt');
a(game1, game2, 'onmousemove');
    $(".ul1").mouseenter(function(){
        $(".ost_nb").css({"display":"block"})
    })
    $(".ul1").mouseleave(function(){
        $(".ost_nb").css({"display":"none"})
    });

var title1 = document.querySelector('.big-you .h31'),
    title2 = document.querySelector('.game');
nav(title1, title2, 'onclick');
