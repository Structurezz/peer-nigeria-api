// Send a success response
export const sendSuccessResponse = (res, data, message = 'Request successful') => {
    res.status(200).json({
      success: true,
      message,
      data,
    });
  };
  
  // Send an error response
  export const sendErrorResponse = (res, error, message = 'An error occurred') => {
    res.status(error.statusCode || 500).json({
      success: false,
      message,
      error: error.message || message,
    });
  };
  