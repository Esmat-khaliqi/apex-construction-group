const open_btn = document.querySelector('.open_btn')
const close_btn = document.querySelector('.close_btn')
const navM = document.querySelector('.mobail_size')
const counters = document.querySelectorAll(".counter");

// کنترول دکمه های منو و خود منو
open_btn.addEventListener('click',()=> {
    navM.classList.add('mobail_size_open')
    open_btn.classList.add('hide_icone')
    close_btn.classList.remove('hide_icone')
    open_btn.setAttribute('aria-expanded', 'true')
    document.body.classList.add('body_hide')
})

close_btn.addEventListener('click',()=> {
    navM.classList.remove('mobail_size_open')
    open_btn.classList.remove('hide_icone')
    close_btn.classList.add('hide_icone')
    open_btn.setAttribute('aria-expanded', 'false')
    document.body.classList.remove('body_hide')
})
// #################### END



// ################### کد های شمارنده برای کارت های
const startCounter = (counter) => {
    const target = Number(counter.dataset.target);
    const suffix = counter.textContent.includes("%") ? "%" : "+";

    let current = 0;
    const duration = 1500;
    const startTime = performance.now();

    function update(time) {
        const progress = Math.min((time - startTime) / duration, 1);

        // حرکت نرم‌تر در شروع و پایان
        const ease = 1 - Math.pow(1 - progress, 3);

        current = Math.floor(ease * target);

        counter.textContent = current + suffix;

        if (progress < 1) {
            requestAnimationFrame(update);
        }
    }

    requestAnimationFrame(update);
};


const stats = document.querySelector('.cards');

const observer = new IntersectionObserver((entries) => {

    if (entries[0].isIntersecting) {

        counters.forEach(counter => {
            startCounter(counter);
        });

        observer.disconnect();
    }

}, {
    threshold: 0.4
});

observer.observe(stats);


// کد ها برای نمایش  دادن باکس اپسلوت  با شروع انیمیشن
const serviceCards = document.querySelectorAll('.services_card, .why_choose_card, .featured_projects_card');

const serviceObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }

    });

}, {
    threshold: 0.3
});

serviceCards.forEach(card => {
    serviceObserver.observe(card);
});





