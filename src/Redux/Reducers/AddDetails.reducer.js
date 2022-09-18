const initialState = {
  header: {
    name: '',
    email: '',
    phone: '',
    summary: ''
  },
  education: {},
  workExp: {},
  skills: [],
  awards: {},
  projects: {}
}

export default function addDetailsReducer(state = initialState, actions){
  switch (actions.type) {
    case 'BASIC':
      return {
        ...state,
        header: {
          ...state.header,
          name: actions.data?.name,
          email: actions.data?.email,
          phone: actions.data?.phone,
          summary: actions.data?.phone
        }
      };
    case 'EDUCATION':
      return {
        ...state,
        education: actions.data
      };
    case 'WORK_EXP':
      return {
        ...state,
        worksExp: actions.data
      };
    case 'SKILLS':
      return {
        ...state,
        skills: actions.data
      };
    case 'AWARDS':
      return {
        ...state,
        awards: actions.data
      };
    case 'PERSONAL_PROJECTS':
      return {
        ...state,
        projects: actions.projects
      };
    default:
      return state;
  }
} 