export default function isAuth(navigate) {
  const auth = true;
  let newNavigate = [];
  if (auth === true) {
    newNavigate = navigate.filter((item) => item !== "Login");
  } else {
    newNavigate = navigate;
  }
  return newNavigate;
}
