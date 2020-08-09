//Dados
const proffys = [
    {
        name: "Diego Fernandes", avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4", 
        whatsapp: "75988108403", 
        bio: " Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.", subject: "Química", 
        cost:"20", 
        weekday:[0], 
        time_from:[720], 
        time_to:[1220]
    },
    {
        name: "Daniele Evangelista", avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4", 
        whatsapp: "75988108403", 
        bio: " Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.", subject: "Química", 
        cost:"20", 
        weekday:[0], 
        time_from:[720], 
        time_to:[1220]
    },
    {
        name: "João Victor", avatar: "https://avatars2.githubusercontent.com/u/68932174?s=460&v=4", 
        whatsapp: "75988108403", 
        bio: " Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.", subject: "Química", 
        cost:"20", 
        weekday:[1], 
        time_from:[720], 
        time_to:[1220]
    }
]

const subjects = [
    "Artes",
    "Biologia",
    "Ciências",
    "Educação física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Química",
]

const weekdays = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
]

//Funcionalidades

function getSubject(subjectNumber){
    const position = +subjectNumber - 1
    return subjects[position]
}

function pageLanding(req, res){
    return res.render("index.html")
}

function pageStudy(req,res){
    const filters = req.query
    return res.render("study.html", {proffys, filters, subjects, weekdays})
}

function pageGiveClasses(req,res){
    const data = req.query

    // pegando as chaves e transformando em um array
    const isNotEmpty = Object.keys(data).length > 0

    //se tiver dados (data)
    if (isNotEmpty) {

        data.subject = getSubject(data.subject)

         //adicionar data a lista de proffys
        proffys.push(data)

        return res.redirect("/study")
    }

    //se não, não adicionar
    return res.render("give-classes.html", {subjects, weekdays})
}

//Servidor
const express =  require('express')
const server = express()

const nunjucks = require('nunjucks')//importando o nunjucks
//configurar nunjucks (template engine)
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})

//Início e configuração do servidor
server
//configurar arquivos estáticos (css, scripts, images)
.use(express.static("public"))
//rotas da aplicação
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
//start do servidor
.listen(5500)