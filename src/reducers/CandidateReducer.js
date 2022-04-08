const initialState = {
  candidates : [],
  fetching : false,
  fetched : false,
  error : {}
}
export default function CandidateReducer(state = initialState, {type, payload}) {

  switch (type  ) {
    case  "FETCH_CANDIDATE_PENDING":
       return {...state, fetching: true};
    
       case  "FETCH_CANDIDATE_FULFILLED":
       return {...state, candidates: payload, fetching: false, fetched: true};
    
       case  "FETCH_CANDIDATE_REJECTED ":
       return {...state, error:payload, fetching: false};
    
    default:
      return state;
  }
}

