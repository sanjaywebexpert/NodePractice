
import {User} from './model/user.js'
export const AddUser = async (req, res)=>{
    const {name,email,phone} = req.body
    try{
        let user = await User.create({name,email,phone})
        res.send('<h1>User created Successfully</h1')
    }catch{
        res.send('<h1>Error Accured</h1')
    }
        console.log(req.body)
        //res.render('userform.ejs')
        res.json({topic:'form handling successfull'})
       console.log('Form Submitted Successfully');
}