import axios from 'axios'

// export default function CandidateAction() {

//  return (dispatch)=>{
//    axios.get("https://jsonplaceholder.typicode.com/users")
//    .then((res)=>res.data)
//    .then (data=>dispatch({type:CANDIDATE_INFORMATION, payload: data}))
//    .catch(err=>dispatch({type:CANDIDATE_INFORMATION_ERROR, payload: err}))
//  }
// }

export default function CandidateAction() {

  return (dispatch)=>{
    dispatch({type:"FETCH_CANDIDATE" , 
              payload: axios
              .get("https://jsonplaceholder.typicode.com/users")
              .then(res=>res.data),
            });
    
  }
 }