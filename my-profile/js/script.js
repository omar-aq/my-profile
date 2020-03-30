const spans = document.querySelectorAll('h1 span')
spans.forEach(span=> span.addEventListener('mouseover',function(e){
    span.classList.add('animated','rubberBand')
}))
spans.forEach(span=> span.addEventListener('mouseout',function(e){
    span.classList.remove('animated','rubberBand')
}))
//  the code udder this line is not working......................................................................................
const htmlBar = document.querySelector('.bar-html')
const jsBar = document.querySelector('.bar-javascript')
const cssBar = document.querySelector('.bar-css')
const reactBar = document.querySelector('.bar-react')

var t1=new TimeLineLite()

t1.fromTo(htmlBar, .75, {width: 'calc(0% - 6px)'},{width:'calc(90% - 6px)',ease: power4.easeOut})
    .fromTo(cssBar, .75, {width: 'calc(0% - 6px)'},{width:'calc(95% - 6px)',ease: power4.easeOut})
    .fromTo(jsBar, .75, {width: 'calc(0% - 6px)'},{width:'calc(75% - 6px)',ease: power4.easeOut})
    .fromTo(reactBar, .75, {width: 'calc(0% - 6px)'},{width:'calc(70% - 6px)',ease: power4.easeOut})



const controller = new scrollMagic.Controller()
const Scene = new scrollMagic.Scene({
    triggerElement:'.skill',
    triggerHook: 0
})
.setTween(t1)
.addTo(controller)

const showRequiredCategory = event => {
    const getId = event.id
    const links = document.querySelectorAll('.work-category button')
    for(i=0;i<links.length;i++){
        if(links[i].hasAttribute('class')){
            links[i].classList.remove('active')
        }
    }
    event.classList.add('active')
    const getCategory = document.querySelector('.category-${getId}')
    const categories = document.querySelectorAll('div[class^="category-"]')
    for(i=0;i<categories.length; i++){
        if(categories[i].hasAttribute('class')){
            categories[i].classList.remove('showcategory')
            categories[i].classList.add('hidecategory')
        }
    }
    getCategory.classList.remove('hidecategory')
    getCategory.classList.add('showcategory')
}