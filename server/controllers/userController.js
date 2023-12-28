import User from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userController = {
  register: async (req, res) => {
    try {
      const { username, password } = req.body;
      const user = await User.findOne({ username });

      if (user)
        return res.json({
          msg: "Пользовател с таким именем уже сушествует",
        });
      if (password.length < 4)
        return res.json({
          msg: "Пароль должен состоять минимум из 4 символов",
        });
      const hashedPassword = await bcrypt.hash(password, 8);

      const newUser = await User.create({
        ...req.body,
        password: hashedPassword,
      });

      !newUser
        ? res.json({
          msg: "При создании пользователя произошла ошибка Пользователь создан успешн",
        })
        : res.json({ msg: "Пользователь создан успешно", newUser });

      console.log(newUser);
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  login: async (req, res) => {
    try {
      const { username, password } = req.body;
      const user = await User.findOne({ username });

      if (!user) return res.json({ msg: "Неверное имя пользователя и пароль" });

      const passwordCheck = await bcrypt.compare(password, user.password);
      if (!passwordCheck)
        return res.json({ msg: "Неверное имя пользователя и пароль" });

      const accessToken = jwt.sign(
        { _id: user._id, password: user.password },
        process.env.ACCESS_token,
        {
          expiresIn: "1h",
        }
      );

      const refreshToken = jwt.sign(
        { _id: user._id },
        process.env.REFRESH_token,
        {
          expiresIn: "30d",
        }
      );

      res.cookie("refreshToken", refreshToken, {
        httpOnly: true,
      });

      return res.json({
        msg: "Вы успешно авторизовались",
        user,
        accessToken,
        refreshToken,
      });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  logout: async (req, res) => {
    try {
      res.clearCookie("refreshtoken", { path: "/api/refresh_token" });
      return res.json({ msg: "Logged out!" });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  generateAccessToken: async (req, res) => {
    try {
      const refreshToken = req.cookies.refreshToken;
      console.log(refreshToken);
      if (!refreshToken)
        return res.status(400).json({ msg: "Please login now." });

      jwt.verify(
        refreshToken,
        process.env.REFRESH_token,
        async (err, result) => {
          if (err) return res.status(400).json({ msg: "Please login now." });

          const user = await User.findById(result._id).select("-password");

          if (!user)
            return res.status(400).json({ msg: "This does not exist." });

          const accessToken = jwt.sign(
            { _id: user._id, password: user.password },
            process.env.ACCESS_token,
            {
              expiresIn: "1h",
            }
          );

          res.json({
            accessToken,
            user,
          });
        }
      );
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
};
export default userController;
