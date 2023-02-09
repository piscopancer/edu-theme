const montserrat = 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap'
const rubik = 'https://fonts.googleapis.com/css2?family=Rubik:wght@400;700&display=swap'
const selectedFontLink = rubik

const script = document.createElement('link')
script.href = selectedFontLink
script.rel = 'stylesheet'
document.body.appendChild(script)