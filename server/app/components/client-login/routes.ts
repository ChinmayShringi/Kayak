import { Router, Response, Request, NextFunction } from "express"
import * as jwt from "jsonwebtoken"
import db from './db'
import { logger } from "../../logger"
import { ClientLogin } from "../../models/client-login.model"
import { NewClient } from "../../models/client.model"

let toErrorString = (req:Request, error:string) => {
    return "clientLoginRouter ["+req.url+"] : "+error
}

var router: Router = Router()

export function verifyToken(req:Request , res:Response, next:NextFunction) {
    console.log('called');
    if(!req.headers.authorization) {
        return res.status(401).send('Unauth Req')
    } else {
        let token = req.headers.authorization.split(' ')[1]
        if(token === 'null') {
           return res.status(401).send('Unauth Req')
        } else {
            let payload=jwt.verify(token, 'secrets')
            if(!payload){
                return res.status(401).send('Unauth Req')
            } else {
                req.body.payload = payload
                next()
            }
        }
    }

}

router.post("/login", (req: Request, res: Response) => {
    let clientLogin:ClientLogin = req.body.clientLogin
    if(clientLogin) {
        db.checkLogin(clientLogin).then((val) => {
            if(val!=0) {
            res.status(200).json({
                success: true,
                token: jwt.sign({ subject: val }, 'secrets')
            })
        } else {
            res.status(401).json({
                success: false,
                error: 'Incorrect Password'
            })
        }
        }).catch((error:any) => {
            logger.error(toErrorString(req, error))
            res.status(401).json({
                success: false,
                error: error
            })
        })
    } else {
        res.status(401).json({
            success: false,
            error: 'Invalid parameter : ClientLogin'
        })
    }
})

router.post("/register", (req: Request, res: Response) => {
    let client:NewClient = req.body.clientDetails
    if(client) { 
        db.createNew(client).then((val) => {
            res.status(200).json({
                success: true,
                token: jwt.sign({ subject: val }, 'secrets')
            })
        }).catch((error:any) => {
            logger.error(toErrorString(req, error))
            res.status(401).json({
                success: false,
                error: error
            })
        })
    } else {
        res.status(401).json({
            success: false,
            error: 'Invalid parameter : ClientLogin'
        })
    }
})

router.post("/getUser",verifyToken, (req: Request, res: Response) => {
    let client:number = req.body.payload.subject
    if(client) { 
        db.getUser(client).then((val) => {
            res.status(200).json({
                success: true,
                clientDetails: val
            })
        }).catch((error:any) => {
            logger.error(toErrorString(req, error))
            res.status(401).json({
                success: false,
                error: error
            })
        })
    } else {
        res.status(401).json({
            success: false,
            error: 'Invalid parameter : ClientLogin'
        })
    }
})

export default router