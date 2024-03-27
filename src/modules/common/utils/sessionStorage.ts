export const getSessionStorageJWTToken = () => {
  return sessionStorage.token;
};
export const setSessionStorageJWTToken = (token: string) => {
  sessionStorage.setItem('token',token);

};

