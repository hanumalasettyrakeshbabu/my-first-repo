const connection = require( "../utilities/connection" )
 const Menudata = [
     {
         dishId : 1001,
         dishName : "Rava-Idli",
         dishSubtext : "It is a traditional breakfast made in every South Indian household. Its not only healthy but also a delicious vegetarian breakfast option. Idli is usally served with coconut chutney and sambar. There are many popular variation of idli made in South Indian homes like",
         dishImg : "https://i2.wp.com/www.vegrecipesofindia.com/wp-content/uploads/2012/04/idli.jpg",
         dishType : "Breakfast",
         dishPrice : 30.00,
         dishAvaliability : 10
     },
     {
        dishId : 1002,
        dishName : "Ven-Pongal",
        dishSubtext : "popular South Indian breakfast made with rice and yellow moong lentils. there are many variations possible. At times grated coconut is also added. You could even add some chopped veggies to make a mix veg Pongal.",
        dishImg : "https://i2.wp.com/www.vegrecipesofindia.com/wp-content/uploads/2016/07/pongal-recipe-breakfast-recipes.jpg",
        dishType : "Breakfast",
        dishPrice : 50.00,
        dishAvaliability : 10
    },
    {
        dishId : 1003,
        dishName : "Appam",
        dishSubtext : "these lacy soft hoppers also known as appam or palappam are a popular Kerala breakfast served along with vegetable stew or kadala curry.",
        dishImg : "https://i2.wp.com/www.vegrecipesofindia.com/wp-content/uploads/2016/07/appam-recipe-breakfast-recipes.jpg",
        dishType : "Breakfast",
        dishPrice : 40.00,
        dishAvaliability : 10
    },
    {
        dishId : 1004,
        dishName : "Hyderabadi biryani",
        dishSubtext : "Biryani reached Hyderabad with the invading army of the Mughal emperor Aurangzeb in the late 1600s, and the chefs for Nizam (the monarchy of Hyderabad) developed 47 new varieties for royal consumption.",
        dishImg : "https://d36tnp772eyphs.cloudfront.net/blogs/1/2019/05/Hyderabadi-biryani-in-a-clay-pot-.jpg",
        dishType : "Biriyani",
        dishPrice : 70.00,
        dishAvaliability : 20
    },
    {
        dishId : 1005,
        dishName : "Dindigul biryani",
        dishSubtext : "Another product of the Tamil Nadu region, this one uses jeera samba rice, which is ideal for absorbing flavors. Cube-sized meat pieces are used instead of large chunks.",
        dishImg : "https://d36tnp772eyphs.cloudfront.net/blogs/1/2019/05/Mushroom-biryani-from-Tamil-Nadu-India.jpg",
        dishType : "Biriyani",
        dishPrice : 90.00,
        dishAvaliability : 20
    },
    {
        dishId : 1006,
        dishName : "Malabar biryani",
        dishSubtext : "Another special Biryani from Kozhikode region of Kerala, but this one is cooked in dum style (slow in the oven), making it moister. Varieties include mutton, chicken, prawn, and fish",
        dishImg : "https://static.toiimg.com/img/65090479/Master.jpg",
        dishType : "Biriyani",
        dishPrice : 100.00,
        dishAvaliability : 20   
    },
    {   
        dishId : 1007,
        dishName : "Bedmi Puri With Raseele Aloo",
        dishSubtext : "Bedmi poori is a delicious, crispy Indian bread that goes best with the delectable curry of Aloo",
        dishImg : "https://i.ndtvimg.com/i/2018-02/aloo_620x350_71519818753.jpg",
        dishType : "Snack",
        dishPrice : 50.00,
        dishAvaliability : 30   
    },
    {   
        dishId : 1008,
        dishName : "Chatpati Aloo Chaat",
        dishSubtext : "The most popular street food dish that finds its origins in the by lanes of Old delhi and now has a good fan following elsewhere in the country as well",
        dishImg : "https://i.ndtvimg.com/i/2017-12/aloo-chaat_806x605_81512122096.jpg",
        dishType : "Snack",
        dishPrice : 60.00,
        dishAvaliability : 30   
    },
    {   
        dishId : 1009,
        dishName : "Baked Ragi Chakli",
        dishSubtext : "Chakli or Murukku is a tasty tea time snack that is prepared in Indian homes. It is easy to make and too delicious to resist! ",
        dishImg : "https://c.ndtvimg.com/2018-11/hosg9vbo_baked-chakli_625x300_05_November_18.jpg",
        dishType : "Snack",
        dishPrice : 40.00,
        dishAvaliability : 30   
    },


 ]

 exports.Menusetup = () => {
     return connection.getMenu().then((mymenu)=>{
         return mymenu.deleteMany().then((data)=>{
            if(data)
            {
                return mymenu.insertMany(Menudata).then((data)=>{
                    if(data)
                    {
                       return "Insertion-Successfull"
                    }
                    else
                    {
                        throw new Error( "Insertion failed" )
                    }
                })
            }
         })

     })
 }