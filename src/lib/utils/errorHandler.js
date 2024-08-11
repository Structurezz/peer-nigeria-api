export const errorHandler = (err, req, res, next) => {
    console.log('Error Handler:', { err, req, res });
  
    if (res && res.status) {
      const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
      res.status(statusCode).json({
        success: false,
        message: 'An error occurred',
        error: err.message,
        stack: process.env.NODE_ENV === 'production' ? null : err.stack,
      });
    } else {
      console.error('Error encountered without response object:', err);
      next(err);
    }
  };
  