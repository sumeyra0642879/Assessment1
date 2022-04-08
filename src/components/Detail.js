import React from 'react'
import CandidateAction from '../actions/CandidateAction';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Table} from 'react-bootstrap';

export  const Detail=()=> {
  const params = useParams();
  console.log(params)
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(CandidateAction())
  },[]);

  const state = useSelector((state) => state);

  const { candidates } = state;
  console.log(candidates)

  return (
    <div>
      <h1>Detail Page</h1>
      <Table striped bordered hover >
  <thead>
    <tr>
      <th>Name-Lastname</th>
      <th>E-mail</th>
      <th>Phone</th>
      <th>Website</th>
      <th>Address</th>
    </tr>
  </thead>
  <tbody>{candidates.filter((item)=>item.id == params.id)
  .map((item)=>( 
  <tr key={item.id}>
      <td  > {item.name} </td>
      <td> {item.email} </td>
      <td> {item.phone}  </td>
      <td> {item.website}</td>
      <td> {item.address.city}</td>
    </tr>))}
    
  </tbody>
</Table>


    </div>
  )
}
export default Detail