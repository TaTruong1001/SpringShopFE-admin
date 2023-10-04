export const insertCategory = (category, navigate) => async (dispatch) => {
  //   const service = new CategoryService();

  try {
    console.log("insert category");
  } catch (error) {
    console.log("error" + error);
  }
  navigate("/categories/list");
};
