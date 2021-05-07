import * as express from 'express'
import clientLoginRoutes from "../components/client-login/routes"

let router = express.Router()

router.use('/clientLogin', clientLoginRoutes)

export default router