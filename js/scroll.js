

window.addEventListener('load', () => {
    let i = 0;
    let txt = 'adetola oyebode';
    // var txt2 = 'FRONTEND DEVELOPER | FULLSTACK DESIGNER😉';
    let speed = 150;
    let name = document.getElementById("typewrite");
    function typeWriter() {
      if (i < txt.length) {
        name.classList.add('show-name');
        name.innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
      }
    }
    setTimeout(typeWriter, 1000);
});


    var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
        }

        setTimeout(function() {
        that.tick();
        }, delta);
    };

    window.onload = (setTimeout(function(){
        var elements = document.getElementsByClassName('typewriter');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
              new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
        // INJECT CSS
        var css = document.createElement("style");
        // css.type = "text/css";
        // css.innerHTML = ".typewriter > .wrap { border-right: 0.08em solid #000}";
        document.body.appendChild(css);
    }
        , 5000));
    

const date = document.getElementById('date');
date.innerHTML = new Date().getFullYear();

const navToggle = document.querySelector('.menu-icons');
const linksContainer = document.querySelector('.links-container');
const links = document.querySelector('.links');

navToggle.addEventListener('click', () => {
    // linksContainer.classList.toggle('showlinks');
    navToggle.classList.toggle('clicked');
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const linksHeight = links.getBoundingClientRect().height;
    if(containerHeight === 0){
        linksContainer.style.height = `${linksHeight}px`;
    }else{
        linksContainer.style.height = 0;
    }
});

const navbar = document.querySelector('nav');
const toplink = document.querySelector('.top-link');

window.addEventListener('scroll', () => {
    const scrollHeight = window.pageYOffset;
    const navHeight = navbar.getBoundingClientRect().height;
    if(scrollHeight > navHeight){
        navbar.classList.add('fixed-nav');
    }else{
        navbar.classList.remove('fixed-nav');
    }
    if(scrollHeight > 700){
        toplink.classList.add('show-link');
    }else{
        toplink.classList.remove('show-link');
    }
});

const scrollLinks = document.querySelectorAll('.scroll-link');
scrollLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const id = e.currentTarget.getAttribute('href').slice(1);
        const element = document.querySelector(`#${id}`);
        const navHeight = navbar.getBoundingClientRect().height;
        const containerHeight = linksContainer.getBoundingClientRect().height;
        const fixedNav = navbar.classList.contains('fixed-nav');
        let position = element.offsetTop - navHeight;

        if(!fixedNav){
            position - navHeight;
        }
        if(navHeight > 56){
            position = position + containerHeight;
        }
        window.scrollTo({
            left: 0,
            top: position,
        });
        navToggle.classList.remove('clicked');
        linksContainer.style.height = 0;
    })
})

const register = document.querySelector('.register');
const sub = document.querySelector('.subscribe');
const xx = document.querySelector('.clox');
const profile = document.querySelector('#profile');
sub.addEventListener('click', () => {
    register.classList.toggle('show-register');
    sub.classList.toggle('hide-sub');
    xx.classList.toggle('clox');
});

xx.addEventListener('click', () => {
    register.classList.toggle('show-register');
    sub.classList.toggle('hide-sub');
    xx.classList.toggle('clox');
});

profile.addEventListener('click', () => {
    register.classList.toggle('show-register');
    sub.classList.toggle('hide-sub');
    xx.classList.toggle('clox');
    linksContainer.style.height = 0;
    navToggle.classList.toggle('clicked');
});
