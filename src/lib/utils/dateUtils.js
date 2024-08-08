import dayjs from 'dayjs';

// Format a date to YYYY-MM-DD
export const formatDate = (date) => {
  return dayjs(date).format('YYYY-MM-DD');
};

// Format a date to a more readable format
export const formatDateTime = (date) => {
  return dayjs(date).format('YYYY-MM-DD HH:mm:ss');
};
