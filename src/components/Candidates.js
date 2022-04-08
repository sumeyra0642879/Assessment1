import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import CandidateAction from '../actions/CandidateAction'
import { useState, useEffect } from 'react'
import { Form, FormControl, Button, Table} from 'react-bootstrap'
import { Link, Route, Routes } from 'react-router-dom'
import Detail from './Detail'

export default function Candidates() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(CandidateAction())
  }, [dispatch])

  const state = useSelector((state) => state)

  const { candidates } = state

  candidates.sort((a, b) => a.name.localeCompare(b.name))

  const [inputValue, setInputValue] = useState('')

  const filterCandidates = candidates.filter((item) =>
    item.name.toLowerCase().includes(inputValue.toLowerCase())
  )

  return (
    <div>
      <h1>CANDIDATE LIST</h1>
      <Form className="d-flex">
        <FormControl
          onChange={(e) => setInputValue(e.target.value)}
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-dark">Search</Button>
      </Form>

      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Name-Lastname</th>
            <th>E-mail</th>
            <th>Phone</th>
            <th>Information Detail</th>
          </tr>
        </thead>
        <tbody>
          {filterCandidates.map((user, index) => (
            <tr key={user.id}>
              <td >{index + 1}</td>
              <td> {user.name} </td>
              <td> {user.email} </td>
              <td> {user.phone} </td>
              <td>
                <Button
                  as={Link}
                  to={'Detail/' + user.id}
                  variant="outline-dark"
                >
                  Detail
                </Button>{' '}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      
      <Routes>
        <Route path="Detail/:id" element={<Detail />} />
      </Routes>
    </div>
  )
}

