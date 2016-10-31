/**
 * Created by cuijn on 2016/4/26.
 */


function Fireworm() {
    this.el = document.createElement('img');
    this.el.src = 'imgs/fireworm.jpg';
    this.el.className = 'fireworm';
    var pos = this.randomPod();
    this.el.style.top = pos.y + 'px';
    this.el.style.left = pos.x + 'px';
    document.body.appendChild(this.el);

    this.fly();
}

Fireworm.prototype.randomPod = function () {
    var randomX = Math.floor(Math.random() * (document.documentElement.clientWidth-50));
    var randomY = Math.floor(Math.random() * (document.documentElement.clientHeight-50));

    return {
        x: randomX,
        y: randomY
    }
}

Fireworm.prototype.fly = function () {
    var self = this;
    var pos = this.randomPod();
    utilities.movement.move(this.el, {
        top: pos.y,
        left: pos.x
    }, function () {
        self.fly();
    })
}

window.onload = function () {
    for (var i=0; i<100; i++) {
        new Fireworm();
    }
}