/*typewrite effect */
var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('hacking machines!')
    .pauseFor(2500)
    .deleteAll()
    .typeString('writing code that works!')
    .pauseFor(2500)
    .deleteChars(16)
    .typeString('<strong>code...</strong>')
    .pauseFor(2500)
    .start();

/*Hidden menu*/
const navMenu = document.getElementById('nav-menu'),
        navToggle = document.getElementById('nav-toggle'),
        navClose = document.getElementById('nav-close')


/*Show menu*/
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*Hide menu*/
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/* remove mobile menu*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


/* drop down skills*/
const skillsContent = document.getElementsByClassName('skills__content'),
    skillsHeader = document.querySelectorAll('.skills__header')

function toggleSkills(){
    let itemClass = this.parentNode.className
    if(itemClass === 'skills__content skills__close'){
        this.parentNode.className = itemClass.replace('close', 'open')
        return 
    } 
    this.parentNode.className = itemClass.replace('open', 'close')
}

skillsHeader.forEach((el) =>{
    el.addEventListener('click', toggleSkills)
})