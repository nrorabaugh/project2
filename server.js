const express = require('express')
const app = express()
const methodOverride = require('method-override')

const { clothingRouter } = require('./controllers/clothing.js')
const { brandRouter } = require('./controllers/brands.js')
const { userRouter } = require('./controllers/users.js')

app.use(express.urlencoded({extended: true}))

app.use(express.json())

app.use(methodOverride('_method'))

app.use(express.static(__dirname+"/public"))

app.set('view engine', 'hbs')

// app.all('*', (req, res, next) => {
//     const userId = req.query.userId;
//     userApi.getSingleUser(userId)
//     .then((user) => {
//         req.user = user;
//         next()
//     })
// })
app.use('/', clothingRouter)
app.use('/', brandRouter)
app.use('/', userRouter)

const PORT = process.env.PORT || 3000 

app.listen(PORT, () => {
    console.log(`App is listening on PORT ${PORT}`)
})
