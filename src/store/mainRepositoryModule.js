//
// export const mainRepositoryModule = {
//     state: () => ({
//         Files:[
//             {id: 1,extensionsType:'css',name:'css'},
//             {id: 2,extensionsType:'excel',name:'excel'},
//             {id: 3,extensionsType:'zip',name:'zip'},
//             {id: 4,extensionsType:'html',name:'html'},
//             {id: 5,extensionsType:'jpg',name:'jpg'},
//             {id: 6,extensionsType:'js',name:'js'},
//             {id: 7,extensionsType:'pdf',name:'pdf'},
//             {id: 8,extensionsType:'png',name:'png'},
//             {id: 9,extensionsType:'point',name:'point'},
//             {id: 10,extensionsType:'psd',name:'psd'},
//             {id: 11,extensionsType:'rar',name:'rar'},
//             {id: 12,extensionsType:'svg',name:'svg'},
//             {id: 13,extensionsType:'txt',name:'txt'},
//             {id: 14,extensionsType:'word',name:'word'}
//         ],
//         fileToDelete: {},
//     }),
//     getters: {
//
//     },
//     mutations: {
//         showPopupRemoveFile(state, file) {
//             state.fileToDelete = file
//             // this.dialogVisibleShow = true
//             // this.dialogVisibleType = 'file-remove'
//         },
//         answerToRemoveFile(arg) {
//             if (arg) {
//                 this.removeFile(this.fileToDelete)
//             }
//             this.dialogVisibleShow = false
//             this.dialogVisibleType = ''
//             this.fileToDelete = {}
//         },
//         removeFile(file) {
//             this.Files = this.Files.filter(f => f.id !== file.id)
//         },
//         showPopupRemovePoint(Point){
//             this.pointToDelete = Point
//             this.dialogVisibleShow = true
//             this.dialogVisibleType = 'point-remove'
//         },
//     },
//     actions: {
//
//     },
// }