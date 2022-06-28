import axios from "axios";
import apiHelpers from "./apiHelpers";

const BASE_URL = "http://localhost:8000/api/";

const contactAPI = {};

contactAPI.getCategories = async () => {
  return await apiHelpers.tryCatchFetch(() =>
    axios.get(`${BASE_URL}categories/`)
  );
};

contactAPI.getCategoryByID = async (categoryId) => {
  return await apiHelpers.tryCatchFetch(() =>
    axios.get(`${BASE_URL}categories/${categoryId}/`)
  );
};

contactAPI.createCategory = async (categoryData) => {
  return await apiHelpers.tryCatchFetch(() =>
    axios.post(`${BASE_URL}categories/`, categoryData)
  );
};

contactAPI.updateCategory = async (categoryId, categoryData) => {
  return await apiHelpers.tryCatchFetch(() =>
    axios.put(`${BASE_URL}categories/${categoryId}/`, categoryData)
  );
};

contactAPI.deleteCategory = async (categoryId) => {
  return await apiHelpers.tryCatchFetch(() =>
    axios.delete(`${BASE_URL}categories/${categoryId}/`)
  );
};

contactAPI.getContactById = async (contactId) => {
  return await apiHelpers.tryCatchFetch(() =>
    axios.get(`${BASE_URL}contacts/${contactId}/`)
  );
};

contactAPI.createContact = async (contactData) => {
  return await apiHelpers.tryCatchFetch(() =>
    axios.post(`${BASE_URL}contacts/`, contactData)
  );
};

contactAPI.updateContact = async (contactId, contactData) => {
  return await apiHelpers.tryCatchFetch(() =>
    axios.put(`${BASE_URL}contacts/${contactId}/`, contactData)
  );
};

contactAPI.deleteContact = async (contactId) => {
  return await apiHelpers.tryCatchFetch(() =>
    axios.delete(`${BASE_URL}contacts/${contactId}/`)
  );
};

export default contactAPI;
