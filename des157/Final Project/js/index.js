const slider = document.querySelector('#slider')
const line = document.querySelector(".line")
const yearlist = ['2015', '2019', 'now']
const countryh = ['china', 'miami', 'sf']
const yearpos = []
const country = {
    'sf': {
        img: ['./img/sf/0.jpg', './img/sf/1.jpg', './img/sf/2.jpg'],
        pos: [160, 150],
        dom: null,
        link: '../Prototype1/index.html'
    },
    'miami': {
        img: ['./img/miami/0.jpg', './img/miami/1.jpg', './img/miami/2.jpg'],
        pos: [280, 120],
        dom: null,
        link: '../Prototype/index.html'
    },
    'china': {
        img: ['./img/china/0.jpg', './img/china/1.jpg', './img/china/2.jpg'],
        pos: [680, 150],
        dom: null,
        link: '../Prototype2/index.html'
    }
}
const initline = (arr) => {
    const n = arr.length
    const duan = n - 1
    const width = parseInt(slider.style.width)
    line.style.width = width + 'px'

    const step = width / duan
    for (let i = 0, left = 0; i < n; i++, left += step) {
        const text = arr[i]
        const div = document.createElement("span")
        div.innerText = text
        div.style.left = left - 10 + 'px'
        yearpos.push(left / width)
        line.appendChild(div)
    }
}
initline(yearlist)

let range = []
const initRange = function () {
    const n = yearpos.length
    for (let i = 0; i < n - 1; i++) {
        let cur = yearpos[i], next = yearpos[i + 1]
        const step = (next - cur) / 2
        range.push([cur, cur+step])
        range.push([cur+step, next])
    }
    let ans = [range[0]]
    for(let i=1;i<range.length-1;i+=2) {
        let left = range[i][0], right = range[i+1][1]
        ans.push([left, right])
    }
    ans.push(range[range.length-1])
    range = ans
}
initRange()

const getIndex = function(v) {
    let index = -1
    const n = range.length
    for (let i = 0; i < n; i++) {
        let l = range[i][0],
            r = range[i][1]
        if (l <= v && v <= r) {
            index = i
            break
        }
    }
    
    return index
}

function change(e) {
    let v = slider.value / 100
    let index = getIndex(v)
    const dom = country[countryh[index]].dom
    for(let i in country) {
        country[i].dom.style.display = 'none'
    }
    dom.style.display = 'block'
    console.log(index)
}
slider.onchange = change


const initMap = function () {
    let index = 0
    let curIndex = getIndex(slider.value/100)
    const year = yearlist[curIndex]
    for (let i in country) {
        let id = (index++)
        const point = document.querySelector("#pos" + id)
        const x = country[i].pos[0], y = country[i].pos[1]
        point.style.left = x + 'px'
        point.style.top = y + 'px'
        
        country[i].dom = point
        // img
        const imgs = point.querySelectorAll('img')
        const info = country[i].img
        const link = country[i].link
        for(let i=0;i<imgs.length;i++) {
            imgs[i].src = info[i]
            imgs[i].onclick = function() {
                open(link)
            }
        }
    }
}
initMap()
change()