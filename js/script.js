var TxtRotate = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 250 - Math.random() * 100;

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

window.onload = function() {
  var elements = document.getElementsByClassName('txt-rotate');
  for (var i=0; i<elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-rotate');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
    };
    // Scroll to top button function
    
    const scrollToTop = document.getElementById('scroll-to-top');
		let dataShow = false;
		window.addEventListener('scroll', () => {
			if (window.scrollY > 50 && !dataShow) {
				scrollToTop.setAttribute('data-show', 'true');
				dataShow = true;
			}
			if (window.scrollY <= 50 && dataShow) {
				scrollToTop.setAttribute('data-show', 'false');
				dataShow = false;
			}
		});

		scrollToTop.addEventListener('click', () => {
			window.scrollTo({
				top: 0,
				behavior: 'smooth'
			});
		});
	// Scroll to top function end

  }

  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".txt-rotate > .wrap { border-right: 0.1em solid #666 }";
  document.body.appendChild(css);
};

// Navbar theme change on scroll
window.addEventListener('scroll', function (e) {
        var nav = document.getElementById('myNav');
        var navLink1 = document.getElementById('navLink1');
        var navLink2 = document.getElementById('navLink2');
        var navLink3 = document.getElementById('navLink3');
        var navLink4 = document.getElementById('navLink4');
        if (document.documentElement.scrollTop > 575) {
                nav.classList.add('bg-light');
                nav.classList.remove('bg-transperant');
                navLink1.style.color = "#333";
                navLink2.style.color = "#333";
                navLink3.style.color = "#333";
                navLink4.style.color = "#333";
            } else {
                nav.classList.add('bg-transperant');
                nav.classList.remove('bg-light');
                navLink1.style.color = '#fff';
                navLink2.style.color = '#fff';
                navLink3.style.color = '#fff';
                navLink4.style.color = '#fff';
            }
    });
