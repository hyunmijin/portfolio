//pin효과
const panel2 = document.querySelector("#section2");

ScrollTrigger.create({
    trigger: panel2,
    start: "top top",
    pin: true,
    pinSpacing: false,
    scrub: true,
    anticipatePin: 1,
    end: "+=20000",
});

//스크롤효과
document.addEventListener("DOMContentLoaded", function () {
    const tl = gsap.timeline({ defaults: { duration: 1 } });

    const box1 = document.querySelector("#section2 .sec2-cont > h3");
    const box2 = document.querySelector("#section2 .top");

    window.addEventListener("scroll", function () {
        const scrollTop =
            window.pageYOffset || document.documentElement.scrollTop;
        const windowHeight =
            window.innerHeight || document.documentElement.clientHeight;

        if (scrollTop + windowHeight > box1.offsetTop) {
            tl.to(box1, { opacity: 1, y: 0 });
        }

        if (scrollTop + windowHeight > box2.offsetTop) {
            tl.to(box2, { opacity: 1, y: 0 });
        }
    });
});





//2차원 벡터
class Vector {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    set(x, y) {
        this.x = x;
        this.y = y;
        return this;
    }
    clone() {
        return new Vector(this.x, this.y);
    }
    add(v) {
        this.x += v.x;
        this.y += v.y;
        return this;
    }
    sub(v) {
        this.x -= v.x;
        this.y -= v.y;
        return this;
    }
    setFromAngle(angle) {
        this.x = Math.cos(angle);
        this.y = Math.sin(angle);
    }
    addFromScalar(x, y) {
        this.x += x;
        this.y += y;
    }
}

window.onload = function () {
    var canvas = document.getElementById("canvas"),
        ctx = canvas.getContext("2d"),
        width = (canvas.width = window.innerWidth),
        height = (canvas.height = window.innerHeight),
        particles = [],
        particleNum = 80,
        colors = ["#eeb900", "#6DD0A5", "#f799db"];

    function randomIntFromRange(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    function randomColor(colors) {
        return colors[Math.floor(Math.random() * colors.length)];
    }
    class Particle {
        constructor(x, y, speed, direction, radius, color) {
            this.position = new Vector(x, y);
            this.velocity = new Vector(1, 1);
            this.velocity.setFromAngle(direction);
            this.speed = speed;
            this.radius = radius;
            this.color = color;
        }
        update() {
            this.position.addFromScalar(
                this.velocity.x * this.speed,
                this.velocity.y * this.speed
            );
            if (
                this.position.x + this.radius > canvas.width ||
                this.position.x - this.radius < 0
            ) {
                this.velocity.x *= -1;
            }
            if (
                this.position.y + this.radius > canvas.height ||
                this.position.y - this.radius < 0
            ) {
                this.velocity.y *= -1;
            }
        }
    }

    for (let i = 0; i < particleNum; i++) {
        particles.push(
            new Particle(
                canvas.width / 2,
                canvas.height / 2,
                Math.random() + 1,
                Math.random() * Math.PI * 2,
                randomIntFromRange(2, 24),
                randomColor(colors)
            )
        );
    }

    render();

    function render() {
        ctx.clearRect(0, 0, width, height);
        for (let i = 0; i < particleNum; i++) {
            var p = particles[i];
            p.update();
            ctx.beginPath();
            ctx.arc(
                p.position.x,
                p.position.y,
                p.radius,
                0,
                Math.PI * 2,
                false
            );
            ctx.fillStyle = p.color;
            ctx.fill();
        }
        requestAnimationFrame(render);
    }
};


