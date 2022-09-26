const initialState = {
  header: {
    name: '',
    email: '',
    phone: '',
    summary: ''
  },
  education: {},
  workExp: {},
  skills: '',
  skillsArr: [],
  awards: '',
  awardsArr: [],
  projects: '',
  projectsArr: [] 
}

export default function addDetailsReducer(state = initialState, actions){
  switch (actions.type) {
    case 'BASIC':
      return {
        ...state,
        header: {
          ...state.header,
          name: actions.data?.name ?? state.header.name,
          email: actions.data?.email ?? state.header.email,
          phone: actions.data?.phone ?? state.header.phone,
          summary: actions.data?.summary ?? state.header.summary
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
        skills: actions.data?.[0] ?? '',
        skillsArr: actions.data?.[1] ?? []
      };
    case 'AWARDS':
      return {
        ...state,
        awards: actions.data?.[0] ?? '',
        awardsArr: actions.data?.[1] ?? []
      };
    case 'PERSONAL_PROJECTS':
      return {
        ...state,
        projects: actions.data?.[0] ?? '',
        projectsArr: actions.data?.[1] ?? []
      };
    case 'CLEAR':
      return {
        header: {
          name: '',
          email: '',
          phone: '',
          summary: ''
        },
        education: {},
        workExp: {},
        skills: '',
        skillsArr: [],
        awards: '',
        awardsArr: [],
        projects: '',
        projectsArr: []
      }
    default:
      return state;
  }
} 