import CategoryService from "../../service/categoryService";
import { CATEGORY_SET } from "./actionTypes";

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
