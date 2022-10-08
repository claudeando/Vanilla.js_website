const css = (e, styles) => {
    for (const property in styles)
        e.style[property] = styles[property];
}

const body = document.body
css(body, {
    padding: 0,
    margin: 0,
    width: window.innerWidth,
    height: window.innerHeight,
    background: 'whitesmoke',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
})



const header = document.createElement('header')
css(header, {
    position: 'absolute',
    top: 0,
    left: 0,
    margin: '.1rem -1rem'
})

const nav = document.createElement('nav')
const ul = document.createElement('ul')
css(ul, {
    display: 'flex',
    flexDirection: 'row',
    gap: '2.5rem'
})
const navItems = ['Home', 'About', 'Repo']
navItems.forEach((item) => {
    const li = document.createElement('li')
    css(li, {
        listStyle: 'none',
        cursor: 'pointer'
    })
    li.textContent = item
    ul.append(li)
})

nav.append(ul)
header.append(nav)




const main = document.createElement('main')
css(main, {
    width: '100%',
    height: '100vh',
    background: 'whitesmoke',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
})



const section = document.createElement('section')
css(section, {
    marginLeft: '17.5rem',
    width: window.innerWidth / 2,
    height: window.innerHeight,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'start',
    flex: 1
})

section.addEventListener('mouseover', () => {
    css(section, {
        background: 'blue'
    })
})

section.removeEventListener('mouseout', () => {
    css(section, {
        background: 'white'
    })
})

const h1 = document.createElement('h1')
h1.innerHTML = '***** <mark>Website</mark>'

const p = document.createElement('p')
p.textContent = 'Hey, you think this website is like another HTML site right? Wrong! go to my github repo to find out the answer :)'
css(p, {
    width: '20rem',
    lineHeight: '1.75rem'
})

const button = document.createElement('button')
button.innerHTML = '<a href="https://github.com/claudeando/Vanilla.js_website">Go to Repo</a>'
css(button, {
    padding: '.75rem 1.5rem',
    marginTop: '1rem',
    cursor: 'pointer'
})

section.append(h1, p, button)



const canvas = document.createElement('canvas')
canvas.width = window.innerWidth / 2

canvas.height = window.innerHeight
css(canvas, {
    background: '#252525',
    flex: 1,
})
const context = canvas.getContext('2d')

// const w = canvas.width
// const h = canvas.height

// for (let i = 0; i < 5; i++) {
//     context.beginPath
//     context.strokeStyle = 'white'
//     context.rect(w / 2 - 10 * i, h / 2 - 10 * i, 50, 50)
//     context.stroke()
// }

const w = 20
const h = 20
const gap = 20
let x, y

for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {

        x = canvas.width / 2.4 + (w + gap) * i
        y = canvas.height / 2.4 + (h + gap) * j

        context.strokeStyle = 'white'
        context.lineWidth = 5
        context.beginPath()
        context.rect(x, y, w, h)
        context.stroke()

        if (Math.random() < 0.5) {
            context.beginPath()
            context.rect(x + 8, y + 8, w - 16, h - 16)
            context.stroke()
        }
    }
}



const animate = () => {
    requestAnimationFrame(animate)
}
animate()

main.append(section, canvas)



const footer = document.createElement('footer')
footer.innerHTML = 'Created by <a href="https://claudeando.com/">Claude Ando</a>'
css(footer, {
    color: 'whitesmoke',
    position: 'absolute',
    right: 0,
    bottom: 0,
    margin: '1rem'
})

document.body.append(header, main, footer)