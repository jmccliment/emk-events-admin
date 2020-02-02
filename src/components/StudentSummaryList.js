import React from 'react';
import { Link } from '@reach/router';

const StudentSummary = ({id, name, dateOfBirth, age, rank}) => {
  return (
    <ul>
      <li>Name: {name}</li>
      <li>Age: {age}</li>
      <li>Date of Birth: {dateOfBirth}</li>
      <li>Rank: {rank}</li>
      <li><Link to={`/students/${id}`}>Edit</Link></li>
    </ul>
  )
};

export const StudentSummaryList = ({students}) => {
  return (
    <div>
      {students && students.map(student => (<StudentSummary key={student.id} {...student} />))}
    </div>
  )
}