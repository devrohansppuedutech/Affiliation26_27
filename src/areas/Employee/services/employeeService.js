const API_URL = "https://jsonplaceholder.typicode.com/users";

export const getEmployees = async () => {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error("Failed to fetch employees");
  }

  return await response.json();
};

import axios from "axios";

const API_URL = "https://jsonplaceholder.typicode.com/users";

export const getEmployees = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};
import axios from "axios";

const API_URL = "http://localhost:8080/api/employees";

export const getEmployees = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};