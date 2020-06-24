const connect = require("../utilities/connection")

const Menudata = {}

Menudata.getData = ()=>{
   return connect.getMenu().then((model)=>{
        return model.find().then((data)=>{
            if(data)
            {
                return data
            }
            else{
                return null;
            }
        })
    })
}

Menudata.getDataByParams = (type) => {
    return connect.getMenu().then((model)=>{
        return model.find({dishType : type},{}).then((data)=>{
            if(data.length !== 0)
            {
                return data
            }
            else
            {
                return null
            }
        })
    })
}

Menudata.getDataByDish = (dish) => {
    return connect.getMenu().then((model)=>{
        return model.find({dishName : dish},{}).then((data)=>{
            if(data.length !== 0)
            {
                return data
            }
            else
            {
                return null
            }
        })
    })
}

Menudata.getDataByInc = () => {
    return connect.getMenu().then((model)=>{
        return model.find({},{}).sort({dishPrice:1}).then((data)=>{
            if(data.length !== 0)
            {
                return data
            }
            else
            {
                return null
            }
        })
    })
}

Menudata.getDataByDec = () => {
    return connect.getMenu().then((model)=>{
        return model.find({},{}).sort({dishPrice:-1}).then((data)=>{
            if(data.length !== 0)
            {
                return data
            }
            else
            {
                return null
            }
        })
    })
}
module.exports = Menudata;