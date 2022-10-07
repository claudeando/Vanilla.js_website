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
    right: 0,
    left: 0,
    width: '100%',
    minHeight: '7.5rem'
})

const nav = document.createElement('nav')
const ul = document.createElement('ul')

const li = document.createElement('li')
css(li, {
    listStyle: 'none'
})
const navItems = ['Home', 'About', 'Repo']
for (let i = 0; i < navItems.length; i++) {
    const result = navItems[i]
    li.textContent = result
}

ul.append(li)
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

const w = canvas.width
const h = canvas.height

for (let i = 0; i < 5; i++) {
    context.beginPath
    context.strokeStyle = 'white'
    context.rect(w / 2 - 10 * i, h / 2 - 10 * i, 50, 50)
    context.stroke()
}

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