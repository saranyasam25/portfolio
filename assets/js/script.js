// var menu_btn = document.querySelector("#menu-btn");
// var sidebar = document.querySelector("#sidebar");
// var container = document.querySelector(".my-container");
// menu_btn.addEventListener("click", () => {
//   sidebar.classList.toggle("active-nav");
//   container.classList.toggle("active-cont");
// });

var typeWriterElement = document.getElementById('typewriter');

var textArray = ["Frontend Developer","Backend Developer","Campaign Developer"];

function delWriter(text, i, cb) {
	if (i >= 0 ) {
		typeWriterElement.innerHTML = text.substring(0, i--);
 		var rndBack = 10 + Math.random() * 100;
		setTimeout(function() {
			delWriter(text, i, cb);
		},rndBack); 
	} else if (typeof cb == 'function') {
		setTimeout(cb,1000);
	}
};

function typeWriter(text, i, cb) {
	if ( i < text.length+1 ) {
		typeWriterElement.innerHTML = text.substring(0, i++);
		var rndTyping = 250 - Math.random() * 100;
		setTimeout( function () { 
			typeWriter(text, i++, cb)
		},rndTyping);
	} else if (i === text.length+1) {
		setTimeout( function () {
			delWriter(text, i, cb)
		},1000);
	}
};

// the main writer function
function StartWriter(i) {
	if (typeof textArray[i] == "undefined") {
		setTimeout( function () {
			StartWriter(0)
		},1000);
	} else if(i < textArray[i].length+1) {
		typeWriter(textArray[i], 0, function () {
			StartWriter(i+1);
		});
	}  
};

setTimeout( function () {
	StartWriter(0);
},1000);

const navLinks = document.querySelectorAll('.nav-menu.navbar ul li a');

// Set the 'active' class for the initial active tab (Home)
navLinks[0].classList.add('active');

// Function to handle adding 'active' class based on scroll
function handleScroll() {
    const scrollPosition = window.scrollY;

    navLinks.forEach(link => {
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            const sectionTop = targetSection.offsetTop;
            const sectionHeight = targetSection.offsetHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        }
    });
}

// Add scroll event listener to handle scroll-based 'active' class
window.addEventListener('scroll', handleScroll);

// Add click event listeners to each link
navLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();

        // Remove the 'active' class from all links
        navLinks.forEach(l => l.classList.remove('active'));

        // Add the 'active' class to the clicked link
        link.classList.add('active');

        // Scroll to the clicked section
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth',
            });
        }
    });
});
$('body').on('click','.mobile-nav-toggle',function(e){
	e.preventDefault();
	$('.side-bar').toggleClass('is-active');
})


