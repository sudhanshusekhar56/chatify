export const login = (req, res) => {
  console.log("Login Route");
  res.send("Login Route");
};

export const signup = (req, res) => {
  console.log("signup route");
  res.send("signup Route");
};

export const logout = (req, res) => {
  console.log("Logout Route");
  res.send("Logout Route");
};
