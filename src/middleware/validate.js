
const validate = (schema) => (req, res, next) => {
  const validationOptions = {
    abortEarly: false, 
    allowUnknown: true, 
    stripUnknown: true, 
  };

  const { error, value } = schema.validate(req.body, validationOptions);
  
  if (error) {
    const errorDetails = error.details.map(detail => detail.message);
    return res.status(400).json({ errors: errorDetails });
  }

  req.body = value;
  next();
};

export default validate;