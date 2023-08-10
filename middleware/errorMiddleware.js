const errorHandler = (err, req, res, next) => {
  let statusCode = err.status || 500;
  let message = err.message || "Internal Server Error";
  console.log(err.stack);
  res.status(statusCode).json({ message });
};

export default errorHandler;
