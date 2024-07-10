import User from "../Model/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const userList = async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//Register a user
export const registerUser = async (req, res) => {
  try {
    const {
      roleId,
      first_name,
      last_name,
      user_name,
      email,
      mobile,
      status,
      password,
      profile_image,
    } = req.body;
    const encryptedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      roleId,
      first_name,
      last_name,
      user_name,
      email,
      mobile,
      status,
      password: encryptedPassword,
      profile_image,
    });
    // Generate JWT Token
    const token = jwt.sign(
      { user_id: user._id, email },
      process.env.JWT_SECRET,
      {expiresIn: "1h"}
    );

    const response = {
      "status": "success",
      "message": "User created successfully",
      "data": {
        "access_token": {
          "token": token,
          "type": "bearer",
          "expires": "1h",
        },
        }
      }
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//User Details from token
export const getUserDetails = async (req, res) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (token == null) {
    return res.status(401).json({ 
      satus: 'false',
      message: 'Unauthorized'
    });
  }
 jwt.verify(token, process.env.JWT_SECRET, async (err, user) => {
    if (err) {
      return res.status(403).json({ 
        satus: 'false',
        message: err.message 
      });
    }
      const userData = await User.findOne({ where: { email: user.email } });
      res.status(200).json({
        status: 'success',
        message: 'User details',
        data: userData
      });
  });
}

//Login
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(404).json({
        status: 'false',
        message: 'User not found'
      });
    }
    if (await bcrypt.compare(password, user.password)) {
      const token = jwt.sign(
        { user_id: user._id, email },
        process.env.JWT_SECRET,
        {expiresIn: "1h"}
      );
      return res.status(200).json({
        status: 'success',
        message: 'Login successful',
        data: {
          "access_token": {
            "token": token,
            "type": "bearer",
            "expires": "60 minutes",
          },
        }
      });
    }
    res.status(401).json({
      status: 'false',
      message: 'Invalid credentials'
    });
  }
  catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// Logout the user 
export const logout = async (req, res) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (token == null) {
    return res.status(401).json({ 
      satus: 'false',
      message: 'Unauthorized'
    });
  }
  jwt.verify(token, process.env.JWT_SECRET, async (err, user) => {
    if (err) {
      return res.status(403).json({ 
        satus: 'false',
        message: err.message 
      });
    }
    res.status(200).json({
      status: 'success',
      message: 'Logout successful'
    });
  });
}