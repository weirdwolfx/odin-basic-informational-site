const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.sendFile('./pages/index.html', { root: __dirname }, (err) => {
        console.log(err)
    })
})

app.get('/about', (req, res) => {
    res.sendFile('./pages/about.html', { root: __dirname }, (err) => {
        console.log(err)
    })
})

app.get('/contact-me', (req, res) => {
    res.sendFile('./pages/contact-me.html', { root: __dirname }, (err) => {
        console.log(err)
    })
})

app.use((req, res) => {
    res.status(404).sendFile('./pages/404.html', { root: __dirname }, (err) => {
        console.log(err)
    })
})

app.listen(3000, 'localhost', (err) => {
    if (err) {
        console.log(err)
    }
    else {
        console.log('listening to requests')
    }
})