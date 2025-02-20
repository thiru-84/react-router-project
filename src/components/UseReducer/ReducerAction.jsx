export default function ReducerAction(state, action){
  switch (action.type){
     case "SUB": {
         return state - action.payload;
     }
     
     case "ADD": {
         return state + action.payload;
     }
 
     default : {
         return state;
     }
    }
}
  