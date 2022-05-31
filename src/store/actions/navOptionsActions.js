
export const goToHome = () =>  (dispatch) => {
    try {
        
      dispatch({
        type: "HOME_SELECTED"
      })
  
    } catch (error) {
        alert(error)
    }
  }

  export const goToAbout = () =>  (dispatch) => {
    try {
        
      dispatch({
        type: "ABOUT_SELECTED"
      })
  
    } catch (error) {
        alert(error)
    }
  }

  export const goToServices = () =>  (dispatch) => {
    try {
        
      dispatch({
        type: "SERVICES_SELECTED"
      })
  
    } catch (error) {
        alert(error)
    }
  }

  export const goToProjects = () =>  (dispatch) => {
    try {
        
      dispatch({
        type: "PROJECTS_SELECTED"
      })
  
    } catch (error) {
        alert(error)
    }
  }

  export const goToLearn = () =>  (dispatch) => {
    try {
        
      dispatch({
        type: "LEARN_SELECTED"
      })
  
    } catch (error) {
        alert(error)
    }
  }

  export const goToCaseStudy = () =>  (dispatch) => {
    try {
        
      dispatch({
        type: "CASE_STUDY_SELECTED"
      })
  
    } catch (error) {
        alert(error)
    }
  }
  