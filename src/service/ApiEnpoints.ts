const { VITE_API_URI } = import.meta.env;

export const API_USER_MAIN_DATA = `${VITE_API_URI}/user/:userId`;
export const API_USER_ACTIVITY = `${VITE_API_URI}/user/:userId/activity`;
export const API_USER_AVERAGE_SESSIONS = `${VITE_API_URI}/user/:userId/average-sessions`;
export const API_USER_PERFORMANCE = `${VITE_API_URI}/user/:userId/performance`;
