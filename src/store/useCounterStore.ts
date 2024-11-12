import { create} from 'zustand'
type Store = {
    count: number
    resetCount: () => void;
    increaseCount: (amount: number) => void;
    decreaseCount: () => void;
}
//  const useCounterStore = create<Store>(function(set){
//     return {
//         count: 3,
//         resetCount: function(){
//             return set({count:0})
//         },
//         increaseCount: function(){
//             return set(function(state){
//                 return state.count + 1
//             })
//         }
//     }
//  })
 
const useCounterStore = create<Store>((set) => ({
    count: 3,
    resetCount: () => set({count:0}),
    increaseCount: (amount) => set((state) => ({count: state.count + amount}) ),
    decreaseCount: () => set((state) => ({count: state.count - 1}))
}))
 export default useCounterStore;