import app from "./app"
import {logger} from './logger'
import http from 'http'

const HOST = "0.0.0.0"
const PORT = 7000

try {
    http.createServer(app).listen(PORT, HOST, () => {
        logger.info(`Application started listening http://${HOST}:${PORT}`)
        console.log(`Application started listening http://${HOST}:${PORT}`)
    })
} catch(error) {
    logger.error(`Application Startup Failed`)
    logger.error(error)
    console.log(error);
}