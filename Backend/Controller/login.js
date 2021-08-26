const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const LoginModel = require("../Model/Login");
const LogModel = require("../Model/Log")

const register = async (req, res) => {
const {name, email, password } = req.body;
try {
    const encryptPass = await bcrypt.hash(password, 12);
    const user = await LoginModel.findOne({ email });
     if (user) {
          return res.status(400).json({ 
              message: "User already exists" 
            });
        }
    
    const result = await LoginModel.create({name, email, password: encryptPass  });
    res.status(201).json({ 
        result 
    });
    }catch (error) {
     res.status(500).json({ 
        message: "Error Creating" 
        });
}
};

const login = async (req, res) => {
    
    const { email, password } = req.body;
    const date=new Date()
    const time=new Date().toTimeString()
    try {
        const user = await LoginModel.findOne({ email });
  
        if (!user) {
            return res.status(404).json({ 
                message: "Auth failed no such user"
            });
        }
      const matchPass = await bcrypt.compare(password, user.password);
  
      if (!matchPass) {
          return res.status(400).json({ 
             message: "Auth failed inccorect password" 
            });
      }
      const token = jwt.sign(
          { email: user.email, id: user._id }, 
          "weather_secret", 
          { expiresIn: "1h" });

      const log = new LogModel ({email,date,time})
      await log.save()
      res.status(200).json({ 
          result: user, 
          token 
        });
    }catch (err) {
        res.status(500).json({ 
            error: err 
        });
    }  
  };
  
 

module.exports={register,login}