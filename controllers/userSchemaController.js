const userSchema = require("../model/Userschema")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")


const signup = async(req,res)=>{

    
    try{

        const {username , email, password, confrimpassword} = req.body

        const exists = await userSchema.findOne({email})

        if(exists){
            res.status(400).send("User already Registered...")
        }
        else if( password !== confrimpassword){
            res.status(400).send("Password are not matching!..")
        }

        const hashedPassword = await bcrypt.hash(password,12)

        let userDetails = userSchema({
            username,
            email,
            password: hashedPassword,
            confrimpassword: hashedPassword
        })

        await userDetails.save()
        res.status(200).json({message:"Registered Sucessfully!..",userDetails})
    }
    catch(error){
        console.log(error)
        res.status(500).json({message:"Server Error!.."})
    }
}



const login = async(req,res)=>{
    try{

        const {email, password} = req.body

        let exist = await userSchema.findOne({email})

        if(!exist){
            return res.status(404).send("User not found")
        }
        const ispasswordMatch = await bcrypt.compare(password , exist.password)

        if(!ispasswordMatch){
            return res.status(401).send("Unauthorized access/Passwords are not matvhing...")
        }

       
        let payload = {
            user : {
                id :exist.id
            }
        }

        jwt.sign(payload , process.env.JWT_SECRET , {expiresIn:3600000},
            (error,token)=>{
                if(error) throw error;
                return res.json({message:"User loggedin sucessfully!...",token})
            })
    }
    catch(error){
        console.log(error)
        res.status(500).json({message:"Server Error!.."})
    }
}



const userDetails = async (req,res)=>{
    try{
         const users = await userSchema.find();

         if(!users  || users.length === 0){
            return res.status(404).json({message:"No Users found in database!..."})
         }
         return res.status(200).json(users)


    }
    catch(error){
        console.log(error)
        return res.status(500).json({message:"Server Error!..."})
    }
}


module.exports = {signup , login , userDetails }