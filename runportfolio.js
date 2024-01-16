const http = require('http')
const fs = require ('fs/promises') 


const Vars = async () =>{
const start = await fs.readFile ('./portfoliordy.html')
const CorePage = await fs.readFile('./dist/index.bundle.js')
const error = await fs.readFile('./404.html')
const image1 = await fs.readFile('./grafiki/instag.png')
const portfoliocss = await  fs.readFile('./portfolio.css')
const image2 = await fs.readFile('./grafiki/person.png')
const image3 = await fs.readFile('./grafiki/szczegoliki.jpg')
const image4 = await fs.readFile('./grafiki/usmiech.jpg')
const image5= await fs.readFile('./grafiki/zimneognie.jpg')
const image6 = await fs.readFile('./grafiki/blackwhite.jpg')
const image7 = await fs.readFile('./grafiki/fb.png')
const image8 = await fs.readFile('./grafiki/taniec.jpg')
const image9 = await fs.readFile('./grafiki/nozki.jpg')
const image10 = await fs.readFile('./grafiki/git.png')

return [start,CorePage,error,image1,portfoliocss,image2,image3,image4,image5,image6,image7,image8,image9,image10]
}


http.createServer (async(req,res) => {
    const [start,CorePage,error,image1,
        portfoliocss,image2,image3,image4,
        image5,image6,image7,image8,image9,image10] = await Vars()
    switch(req.url) {
        case '/' :
            res.writeHead(200,{"Content-Type": "text/html"})
            res.write(start)
            res.end()
            break
        case '/PageCore.js' :
            res.writeHead(200,{"Content-Type": "text/javascript"})
            res.write(CorePage)
            res.end()
            break
        case '/grafiki/instag.png' :
            res.writeHead(200,{"Content-Type": "image/png"})
            res.write(image1)
            res.end()
        break
        case '/portfolio.css' :
            res.writeHead(200,{"Content-Type": "text/css"})
            res.write(portfoliocss)
            res.end()
        break
        case '/grafiki/person.png' :
            res.writeHead(200,{"Content-Type": "image/png"})
            res.write(image2)
            res.end()
        break
        case '/grafiki/szczegoliki.jpg' :
            res.writeHead(200,{"Content-Type": "image/jpg"})
            res.write(image3)
            res.end()
        break
        case '/grafiki/usmiech.jpg' :
            res.writeHead(200,{"Content-Type": "image/jpg"})
            res.write(image4)
            res.end()
        break
        case '/grafiki/zimneognie.jpg' :
            res.writeHead(200,{"Content-Type": "image/jpg"})
            res.write(image5)
            res.end()
        break
        case '/grafiki/blackwhite.jpg' :
            res.writeHead(200,{"Content-Type": "image/jpg"})
            res.write(image6)
            res.end()
        break
        case '/grafiki/fb.png' :
            res.writeHead(200,{"Content-Type": "image/png"})
            res.write(image7)
            res.end()
        break
        case '/grafiki/taniec.jpg' :
            res.writeHead(200,{"Content-Type": "image/jpg"})
            res.write(image8)
            res.end()
        break
        case '/grafiki/nozki.jpg' :
            res.writeHead(200,{"Content-Type": "image/jpg"})
            res.write(image9)
            res.end()
        break
        case '/grafiki/git.png' :
            res.writeHead(200,{"Content-Type": "image/png"})
            res.write(image10)
            res.end()
        break
        default :
            res.writeHead(404,{"Content-Type": "text/html"})
            res.write(error)
            res.end()
            break
        }
    }
).listen(8888)