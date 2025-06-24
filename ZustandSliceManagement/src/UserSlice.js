import React from "react";

export const createUserSlice = (set, get) => ({
  isLogged: false,
  userName: "",

  setLogged: (status) => set({ isLogged: status }),
  setUserName: (name) => set({ userName: name }),

  userIntroduce: () => {
    const { isLogged, userName } = get();
    return (
      <p>
        {userName
          ? `${userName} is ${isLogged ? "logged in" : "logged out"}`
          : "No name set"}
      </p>
    );
  },
});
