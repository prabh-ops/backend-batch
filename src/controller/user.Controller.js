import {
  createUser,
  deleteUser,
  getUser,
  getUsers,
  updateUser,
} from "../services/user.services.js";

export const createUsercontroller = async (req, res) => {
  try {
    const user = await createUser(createUserreq.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ message: "Error creating user" });
    console.log(req.body, error);
  }
};

export const getUsercontroller = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await getUser(id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(user);
  } catch (error) {
    console.error("Error getting user:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const getUserscontroller = async (req, res) => {
  try {
    const users = await getUsers();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: "Error getting users" });
    console.log(error);
  }
};
export const updateUsercontroller = async (req, res) => {
  try {
    const user = await updateUser(req.params.id, req.body);
    res.status(200).json({ message: "User updated successfully", user });
  } catch (error) {
    res.status(500).json({ message:error.message,success:false});
    console.log(req.body, error);
  }
};
export const deleteUsercontroller = async (req, res) => {
  try {
    const { id } = req.params;
    await deleteUser(id);
    res
      .status(200)
      .json({ message: "User deleted successfully", success: true });
  } catch (error) {
    console.log("error :>> ", error);

    res.status(500).json({ message: error.message, success: false });
  }
};
