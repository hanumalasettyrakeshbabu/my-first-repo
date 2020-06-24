const express  = require("express")
const router = express.Router();
const setupmenu = require("../model/menuSetup")
const menudata = require("../service/menuService")

router.get("/setup",(req,res,next)=>{
    setupmenu.Menusetup().then((data)=>{
        res.send(data)
    }).catch((err)=>{
        next(err)
    })
})

router.get("/menudata",(req,res,next)=>{
    menudata.getData().then((data)=>{
        res.send(data)
    }).catch((err)=>{
        next(err)
    })
    })

router.get("/menudatabytype/:type",(req,res,next)=>{
    menudata.getDataByParams(req.params.type).then((data)=>{
        res.send(data)
    }).catch((err)=>{
        next(err)
    })
})

router.get("/menudatabydish/:dish",(req,res,next)=>{
    menudata.getDataByDish(req.params.dish).then((data)=>{
        res.send(data)
    }).catch((err)=>{
        next(err)
    })
})

router.get("/menudata/incsorted",(req,res,next)=>{
    menudata.getDataByInc().then((data)=>{
        res.send(data)
    }).catch((err)=>{
        next(err)
    })
})

router.get("/menudata/decsorted",(req,res,next)=>{
    menudata.getDataByDec().then((data)=>{
        res.send(data)
    }).catch((err)=>{
        next(err)
    })
})

module.exports = router;

