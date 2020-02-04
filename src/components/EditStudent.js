import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

export const EditStudent = ({student, belts}) => {
  const [name, setName] = useState(student.name || '');
  const [dateOfBirth, setDateOfBirth] = useState(student.dateOfBirth || '');
  const [beltId, setBeltId] = useState(student.beltId || '');


  return (
    <form noValidate autoComplete="off">
      <ul>
        <li>
          <TextField label="Student Name" value={name} onChange={e=>setName(e.target.value)} />
        </li>
        <li>
          <TextField type="date" label = "Date of Birth" value={dateOfBirth} onChange={e=>setDateOfBirth(e.target.value)} />
        </li>
        <li>
        <Select value={beltId} onChange={e => setBeltId(e.target.value)}>
          {belts && belts.sort(({prescidence: lhs}, {prescidence: rhs}) => lhs - rhs).map(({id, rank}) => (
            <MenuItem value={id} key={id}>{rank}</MenuItem>
          ))}
        </Select>
        </li>
      </ul>
    </form>
  )
}