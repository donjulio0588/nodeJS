const express = require('express')
const app = express()

const port = process.env.PORT || 3000

//motor de plantillas
app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')

app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {
    res.render('index', {title: 'Titulo dinamico'})
})

app.get('/servicios', (req, res) => {
    res.render('services', {serviceTitle: 'Titulo de servicio'})
})

app.use((req, res, next) => {
    res.status(404).render('404', {
        title: 'Error, documento no encontrado',
        desc: 'No se ha podido encontrar su pagina'
    })
})



app.listen(port, () => {
    console.log('Servidor escuchando por el puerto 3000 !!')
})

