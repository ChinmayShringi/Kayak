import { MysqlError } from "mysql";
import { ClientScan } from "../../models/client-scan.model"
import { ClientLevel } from "../../models/client-level.model"
import { ClientDet } from "../../models/client.model"
import db from '../dbpool'

const DATABASE_NAME = 'scanqr'
const CLIENT_DETAILS_TABLE_NAME = 'clientDet'
const CLIENT_SCAN_TABLE_NAME = 'clientScanned'
const CLIENT_LEVEL_TABLE_NAME = 'clientLevel'

class ClientLoginController {

    // createNew = (client: ClientDet): Promise<number> => {
    //     return new Promise((resolve, reject) => {
    //         this.createRegister(client).then((val:number)=>
    //             resolve(val)
    //         )
    //     })
    // }

    createRegister = (client: ClientDet): Promise<ClientDet> => {
        return new Promise((resolve, reject) => {
                    let sql = "INSERT INTO `"+DATABASE_NAME+"`.`"+CLIENT_DETAILS_TABLE_NAME+"` (`gId`,`email`,`photourl`) VALUES (?,?,?);"
                    db.query(sql, [client.gId,client.photourl,client.email], (error:MysqlError|null, results: any) => {
                        if(error || !results.insertId) reject(error)
                        else {
                            client.id=results.insertId;
                                    resolve(client)
                        }
                    })
        })
    }

    createLevel = (client: ClientLevel): Promise<ClientLevel> => {
        return new Promise((resolve, reject) => {
                    let sql = "INSERT INTO `"+DATABASE_NAME+"`.`"+CLIENT_LEVEL_TABLE_NAME+"` (`gId`,`level`,`word`,`letter`) VALUES (?,?,?,?);"
                    db.query(sql, [client.gId,client.level,client.word,client.letter], (error:MysqlError|null, results: any) => {
                        if(error || !results.insertId) reject(error)
                        else {
                            client.id=results.insertId;
                            resolve(results.insertId)
                        }
                    })
        })
    }

    createScanned = (client: ClientScan): Promise<ClientScan> => {
        return new Promise((resolve, reject) => {
                    let sql = "INSERT INTO `"+DATABASE_NAME+"`.`"+CLIENT_SCAN_TABLE_NAME+"` (`gid`,`fid`) VALUES (?,?);"
                    db.query(sql, [client.gId,client.fId], (error:MysqlError|null, results: any) => {
                        if(error || !results.insertId) reject(error)
                        else {
                            client.id=results.insertId;
                            resolve(results.insertId)
                        }
                    })
        })
    }

    getUser = (clientId: number): Promise<any> => {
        return new Promise((resolve, reject) => {
                    let sql = `SELECT * FROM `+DATABASE_NAME+`.`+CLIENT_DETAILS_TABLE_NAME+` WHERE ID="${clientId}";`
                    db.query(sql, (error:MysqlError|null, results: any) => {
                        if(error || !results) reject(error)
                        else {
                                resolve(results[0])
                        }
                    })
        })
    }

    getUserLevel = (clientId: number): Promise<any> => {
        return new Promise((resolve, reject) => {
                    let sql = `SELECT * FROM `+DATABASE_NAME+`.`+CLIENT_LEVEL_TABLE_NAME+` WHERE ID="${clientId}";`
                    db.query(sql, (error:MysqlError|null, results: any) => {
                        if(error || !results) reject(error)
                        else {
                                resolve(results[0])
                        }
                    })
        })
    }

    getUserScanned = (clientId: number): Promise<any> => {
        return new Promise((resolve, reject) => {
                    let sql = `SELECT * FROM `+DATABASE_NAME+`.`+CLIENT_SCAN_TABLE_NAME+` WHERE ID="${clientId}";`
                    db.query(sql, (error:MysqlError|null, results: any) => {
                        if(error || !results) reject(error)
                        else {
                                resolve(results[0])
                        }
                    })
        })
    }

    checkUser = (client: ClientDet): Promise<ClientDet> => {
        return new Promise((resolve, reject) => {
                    let sql = `SELECT GID,EMAIL,PHOTOURL FROM `+DATABASE_NAME+`.`+CLIENT_DETAILS_TABLE_NAME+` WHERE gid="${client.gId}";`
                    db.query(sql, (error:MysqlError|null, results: any) => {
                        if(error || !results) reject(error)
                        else {
                            if(results[0].PASSWORD==client.gId){
                                resolve(results[0])
                            } else {
                                resolve(results[0])
                            }
                        }
                    })
        })
    }
}

export default new ClientLoginController()