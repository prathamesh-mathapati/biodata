const res = require('express/lib/response')
const knex=require('./../connecation/db')
const {generatetoken}=require('./../Auth/secuirity')


exports.login=(req,res)=>{
    knex('user').then((data)=>{
        const token=generatetoken(req.body)
        res.cookie("token",token).send('you are logged in successfully')
    }).catch((err)=>{
        res.send('insert the data in database name user inset email and password');
    })
}

exports.logout=(req, res) => {
    try {res.clearCookie('token')
        res.send("Logout successfully..");
    } catch (error) {
        res.send({ msg: error.message });
    }
};

exports.state=(req,res)=>{
    const states=['Andhra Pradesh','assam','bihar','goa','gujarat','himachal pradesh','jharkhand','maharshtra','manipur','hariyana','kanataka','karala','madhya pradesh','meghalaya','mizorm','nagaland','odisa','punjab','sikim','tamil nadu','telangana','tripur','uttar pradesh','uttarakhad','wesh bengal']
    for(i of states){
    knex('state').insert({"state":i}).then(()=>{
        res.send('data is insert in state')
    }).catch(()=>{  
        res.send('state is not insert',err)
    })
}}

exports.showstate=(req,res)=>{
    knex('state').then((data)=>{
        res.send(data)
    })
}
exports.postdisric=(req,res)=>{
    const disrics=["Mau","Gazipur","bodh gaya","nortj delhi","Nicobar","North Middle Andaman","South Andaman",
                    "Anantapur","Chittoor","East Godavari","Guntur","Kadapa","Krishna","Kurnool","Nellore","Prakasam",
                "Srikakulam","Visakhapatnam","Vizianagaram","West Godavari","Anjaw","Central Siang","Bajali","Barpeta",
            "Biswanath","Uttar Dinajpur	","South 24 Parganas","Kalimpong","Bageshwar","Almora","Varanasi","Unnao","Sultanpur",
            "Raebareli","Prayagraj","Pilibhit","Kushinagar","Kannauj","Jhansi","Hamirpur","Ghaziabad","Gautam Buddha Nagar","Etawah","Deoria",
            "Khowai","Dhalai","Yadadri Bhuvanagiri","Warangal Urban	","Warangal Rural","Mandsaur","Morena","Niwari","Panna","Raisen","Rajgarh",
            "Khowai","Dhalai","Yadadri Bhuvanagiri","Warangal Urban	","Warangal Rural","Mandsaur","Morena","Nagda","Narsinghpur",
            "Neemuch","Ratlam","Rewa","Sagar","Satna","Sehore","Seoni","Shahdol","Shajapur","Sheopur"," Shivpuri","Ahmednagar","Akola","Akola","Amravati",
            "Beed","Bhandara","Buldhana","Chandrapur","Dhule","Gadchiroli","Gondia","Hingoli","Jalgaon","Jalna","Kolhapur","Latur","Mumbai City	","pune","Nagpur",
            "Nanded","Nandurbar","Nashik","Osmanabad","Palghar","Parbhani","Raigad","Ratnagiri","Sangli","Satara","Solapur","Thane","Wardha","Washim","Yavatmal	","Bishnupur"
            ,"Gazipur","bodh gaya","nortj delhi","Nicobar","North Middle Andaman","South Andaman",
            "Anantapur","Chittoor","East Godavari","Guntur","Kadapa","Krishna","Kurnool","Nellore","Prakasam",
            "Srikakulam","Visakhapatnam","Vizianagaram","West Godavari","Anjaw","Central Siang","Bajali","Barpeta",
            "Biswanath","Uttar Dinajpur	","South 24 Parganas","Kalimpong","Bageshwar","Almora","Varanasi","Unnao","Sultanpur",
            "Raebareli","Prayagraj","Pilibhit","Kushinagar","Kannauj","Jhansi","Hamirpur","Ghaziabad","Gautam Buddha Nagar","Etawah","Deoria",
            "Khowai","Dhalai","Yadadri Bhuvanagiri","Warangal Urban	","Warangal Rural","Mandsaur","Morena","Niwari","Panna","Raisen","Rajgarh",
            "Khowai","Dhalai","Yadadri Bhuvanagiri","Warangal Urban	","Warangal Rural","Mandsaur","Morena","Nagda","Narsinghpur",
            "Neemuch","Ratlam","Rewa","Sagar","Satna","Sehore","Seoni","Shahdol","Shajapur","Sheopur"," Shivpuri","Ahmednagar","Akola","Akola","Amravati",
            "Beed","Bhandara","Buldhana","Chandrapur","Dhule","Gadchiroli","Gondia","Hingoli","Jalgaon","Jalna","Kolhapur","Latur","Mumbai City	","pune","Nagpur",
            "Nanded"]
    for (i of disrics){
    knex('disrict').insert({"disricts":i}).then(()=>{
        res.send('disrict name is seccssfully save')
    }).catch((err)=>{
        res.send('disrict name is not seccessfully save')
    })
}}

exports.showdisrict=(req,res)=>{
    knex('disrict').then((data)=>{
        res.send(data)
    })
}

exports.postSate=(req,res)=>{
    console.log(req.params.State);
    knex('child').insert({"Name":req.body.Name,
    "sex":req.body.sex,
    "date_of_birth" :req.body.date_of_birth,
    "Father_name":req.body.Father_name,
    "Mother_name":req.body.Mother_name,
    "State":req.params.State,
    "District":req.params.District}).then(()=>{
        res.send('state name is seccssfully save')
    }).catch((err)=>{
        console.log(err);
        res.send('state name is not seccessfully save')
    })
}

exports.showChild=(req,res)=>{
    knex('child').then((data)=>{
        res.send(data)
    })
}