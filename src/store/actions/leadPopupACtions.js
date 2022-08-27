export const openLeadPopUp = () =>  (dispatch) => {
    try {
        
      dispatch({
        type: "IS_LEAD_POPUP_OPEN"
      })
  
    } catch (error) {
        alert(error)
    }
  }

  export const closeLeadPopUp = () =>  (dispatch) => {
    try {
        
      dispatch({
        type: "IS_LEAD_POPUP_CLOSE"
      })
  
    } catch (error) {
        alert(error)
    }
  }