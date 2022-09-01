import React, { createContext, useContext, useState } from "react";

const context = createContext();

const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};
