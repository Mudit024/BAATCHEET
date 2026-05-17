import { create } from 'zustand';

export const useAuthStore =create((set)=>({
         authUser:{name:"john"},
         isLoading:false,
         login : () => {
            console.log("wejust logged in");
         }
}))