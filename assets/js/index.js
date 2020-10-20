(function() {
    
    document.addEventListener('swup:enabled', event => {
        //import Swup from 'swup';
        const swup = new Swup(); // only this line when included with script tag

    });

    document.addEventListener('swup:contentReplaced', event => {

        window.scrollTo(0,0);
        
        // 1. remove active class from all links
        const navLi = document.querySelectorAll('nav li');
        const navLinks = document.querySelectorAll('nav li a');

        //navLi.classList.remove('active');
        navLi.forEach(li => {
            if (li.classList.contains('active')) {
                li.classList.remove('active');
            }
        });

        // 2. go through all links and add active class if href == current URL
        navLinks.forEach(link => {
            if (link.getAttribute('href') === window.location.pathname) {
                link.closest('li').classList.add('active');
            }
        });
    });
})();
