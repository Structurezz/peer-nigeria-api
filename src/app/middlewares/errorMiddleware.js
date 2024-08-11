// Middleware to handle 404 errors (Not Found)
export const notFound = (req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  res.status(404);
  next(error); // Pass the error to the error handling middleware
};


// General error handling middleware
export const errorHandler = (err, req, res, next) => {
  // Set status code to 500 (Internal Server Error) if it hasn't been set yet
  const statusCode = res && res.statusCode && res.statusCode !== 200 ? res.statusCode : 500;

  // Ensure the response object exists before attempting to send a response
  if (res) {
    res.status(statusCode).json({
      success: false,
      message: err.message,
     
    });
  } else {
    console.error('Response object is missing:', err);
  }

  // Optional: Pass the error to the next middleware, or handle it here
  next(err);
};
