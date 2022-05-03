import Joi from "joi";

const loginValidation = async (req, res, next) => {
  const body = req.body;
  const schema = Joi.object({
    email: Joi.string().email(),
    password: Joi.string().min(4).required(),
  });
  try {
    await schema.validateAsync(body);
  } catch (error) {
    res.status(400).json({ code: 400, message: error.message });
  }
  next();
};

const registerValidation = async (req, res, next) => {
  const body = req.body;
  const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(4).required(),
    name: Joi.string().min(2).required(),
  });
  try {
    await schema.validateAsync(body);
  } catch (error) {
    res.status(400).json({ code: 400, message: error.message });
  }
  next();
};

export { loginValidation, registerValidation };
