import CategoryService from "../../service/categoryService";
import {
  CATEGORIES_SET,
  CATEGORIES_STATE_CLEAR,
  CATEGORY_SET,
} from "./actionTypes";

export const insertCategory = (category, navigate) => async (dispatch) => {
  const service = new CategoryService();

  try {
    const response = await service.insertCategory(category);
    console.log("insert category", response);
    if (response.status === 201) {
      dispatch({
        type: CATEGORY_SET,
        payload: response.data,
      });
    }
  } catch (error) {
    console.log("error" + error);
  }
  navigate("/categories/list");
};

export const getCategories = () => async (dispatch) => {
  const service = new CategoryService();

  try {
    const response = await service.getCategories();
    console.log("Get categories");
    console.log(response);
    if (response.status === 200) {
      dispatch({
        type: CATEGORIES_SET,
        payload: response.data,
      });
    }
  } catch (error) {
    console.log(error);
  }
};
export const clearCategoryState = () => (dispatch) => {
  dispatch({
    type: CATEGORIES_STATE_CLEAR,
  });
};
