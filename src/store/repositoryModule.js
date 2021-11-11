// import extension_css from "../assets/images/extensions/css.svg";
//
// export const repositoryModule = {
//     state: () => ({
//         Points: [],
//         createNewPointType:'',
//         pointToDelete: {},
//         filesPoint: [
//             {id: 1, name: 'тестовое имя1', directories:'folder1/folder1/',extensionsType:extension_css},
//             {id: 2, name: 'тестовое имя2', directories:'folder1/',extensionsType:extension_css},
//             {id: 3, name: 'тестовое имя3', directories:'folder1/folder1/',extensionsType:extension_css},
//             {id: 4, name: 'тестовое имя4', directories:'folder1/',extensionsType:extension_css},
//             {id: 5, name: 'тестовое имя5', directories:'folder1/folder1/',extensionsType:extension_css},
//             {id: 6, name: 'тестовое имя6', directories:'folder1/folder1/',extensionsType:extension_css},
//             {id: 7, name: 'тестовое имя7', directories:'/',extensionsType:extension_css},
//             {id: 8, name: 'тестовое имя8', directories:'folder1/',extensionsType:extension_css},
//             {id: 9, name: 'тестовое имя9', directories:'folder1/folder1/',extensionsType:extension_css},
//             {id: 10, name: 'тестовое имя10', directories:'folder1/folder1/',extensionsType:extension_css},
//             {id: 11, name: 'тестовое имя11', directories:'folder1/folder1/',extensionsType:extension_css},
//             {id: 12, name: 'тестовое имя12', directories:'folder1/',extensionsType:extension_css},
//             {id: 13, name: 'тестовое имя13', directories:'folder1/folder1/',extensionsType:extension_css},
//             {id: 14, name: 'тестовое имя14', directories:'folder1/folder1/',extensionsType:extension_css},
//             {id: 15, name: 'тестовое имя15', directories:'folder1/folder1/',extensionsType:extension_css},
//             {id: 16, name: 'тестовое имя16', directories:'folder1/folder1/',extensionsType:extension_css},
//         ]
//     }),
//     getters: {
//
//     },
//     mutations: {
//         createPointType(state, arg) {
//             state.createNewPointType = arg
//         },
//         createPoint(state) {
//             const newPoint = {
//                 id: Date.now(),
//                 Authors: [],
//                 Company:[],
//                 Participants:[],
//                 AdditionalInformation: '',
//                 Type: 1,
//                 logoType: state.createNewPointType,
//                 stateId: 1,
//                 Files: state.filesPoint
//             }
//             state.Points.push(newPoint)
//
//             state.createNewPointType = ''
//         },
//         removePoint(state) {
//             state.Points = state.Points.filter(f => f.id !== Point.id)
//         },
//         answerToRemovePoint(arg) {
//             if (arg) {
//                 this.removePoint(this.pointToDelete)
//             }
//             this.dialogVisibleShow = false
//             this.dialogVisibleType = ''
//             this.pointToDelete = {}
//         }
//     },
//     actions: {
//
//     },
// }