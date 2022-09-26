// export function addHeaderAction(args) {
//   return {
//     type: 'HEADER',
//     data: args.data
//   }
// }

// export function addEducation(args) {
//   return {
//     type: 'EDUCATION',
//     data: args.data
//   }
// }

export default function addDetails(type, data) {
  switch (type) {
    case 'BASIC':
      return {
        type,
        data
      };
    case 'EDUCATION':
      return {
        type,
        data
      };
    case 'WORK_EXP':
      return {
        type,
        data
      };
    case 'SKILLS':
      return {
        type,
        data
      };
    case 'AWARDS':
      return {
        type,
        data
      };
    case 'PERSONAL_PROJECTS':
      return {
        type,
        data
      };
    case 'CLEAR': 
      return {
        type
      }
    default:
      return {};
  }
}