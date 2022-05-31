
export const navOptionsReducer = (state = {}, action) => {
switch (action.type) {
    case "HOME_SELECTED":
        return { home: true,
            about: false,
            services: false,
            projects: false,
            learn: false,
            caseStudy: false
        }
    case "ABOUT_SELECTED":
        return { home: false,
            about: true,
            services: false,
            projects: false,
            learn: false,
            caseStudy: false
        }
    case "SERVICES_SELECTED":
        return { home: false,
            about: false,
            services: true,
            projects: false,
            learn: false,
            caseStudy: false
        }
    case "PROJECTS_SELECTED":
        return { home: false,
            about: false,
            services: false,
            projects: true,
            learn: false,
            caseStudy: false
        }
    case "LEARN_SELECTED":
        return { home: false,
            about: false,
            services: false,
            projects: false,
            learn: true,
            caseStudy: false
        }
    case "CASE_STUDY_SELECTED":
        return { home: false,
            about: false,
            services: false,
            projects: false,
            learn: false,
            caseStudy: true
        }
      default:
        return state
    }
  }