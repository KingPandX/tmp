let url = 'https://newsapi.org/v2/top-headlines?country=us&'

let apiKey = 'apiKey=54e4865a7d78420bb7f65caf5d8e251d'

async function getNews() {
    return fetch(url + apiKey) 
    .then(res => res.json())
    .then(data => {
        let articles = data.articles
        let NewsChosen = articles[Math.floor(Math.random() * articles.length)]
        let title = separateInLines(NewsChosen.title, 60)
        let description = separateInLines(NewsChosen.description, 60)
        let url = NewsChosen.url
        let urlToImage = NewsChosen.urlToImage

        

        let widget = `(box :class "musicbox"
        :space-evenly false
        (
            eventbox :onclick "microsoft-edge ${url}"
            (box :orientation "vertical" 
            :active false
        
        :space-evenly false
        :halign "center"
        (box :space-evenly true :width 30  :style "background-image: url('${urlToImage}'); background-size: contain; background-repeat: no-repeat; background-position: center; min-height: 200px; min-width: 200px; border-radius: 10px;")
        (label :class "title"  :width 30 :wrap false :text "${title}" )
        (label :class "description" :width 30 :wrap false :text "${description}" )
    )
        )
      )`
        return widget
    })
}

function separateInLines(text, maxLineLength) {
    if (text === null) return ''
    let words = text.split('')
    let lines = []
    let currentLine = ''
    words.forEach(word => {
        if (currentLine.length + word.length < maxLineLength) {
            currentLine += word
        } else {
            lines.push(currentLine)
            currentLine = word
        }
    })
    lines.push(currentLine)
    
    lines = lines.map((line, index) => {
        if (index === lines.length - 1) {
            return line
        } else {
            return line + '\n'
        }
    })
    lines = lines.join('').replace(/\n,/g, ' ');
    return lines;
}

getNews().then(widget => console.log(widget));