export const leadPopUpReducer = (state = {open: false}, action) => {
  switch (action.type) {
    case "IS_LEAD_POPUP_OPEN":
      return { open: true };
    case "IS_LEAD_POPUP_CLOSE":
      return { open: false };

    default:
      return state;
  }
};
