import React, { useState, useEffect } from 'react';
import * as repositories from '../data';
import { getAllAsync, getByIdAsync } from '../utils';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel'
import { Button } from '@material-ui/core';

const getAllBeltsAsync = async setter => getAllAsync(repositories.belts, setter);
const getStudentByIdAsync = async (studentId, setter) => getByIdAsync(repositories.students, studentId, setter);

export const UpdateStudent = ({ studentId, onSave = () => {} }) => {
  const [name, setName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [beltId, setBeltId] = useState('');
  const [belts, setBelts] = useState([]);

  useEffect(() => {
    getAllBeltsAsync(setBelts);
  }, []);

  useEffect(() => {
    if (belts.length && !beltId) setBeltId(belts.find(({ prescidence }) => prescidence === 0).id);
  }, [studentId, belts, beltId]);

  useEffect(() => {
    getStudentByIdAsync(studentId, ({ name: studentName, dateOfBirth: studentDateOfBirth, beltId: studentBeltId }) => {
      setName(studentName);
      setDateOfBirth(studentDateOfBirth);
      setBeltId(studentBeltId);
    });
  }, [studentId]);

  const updateStudent = async event => {
    await repositories.students.update(studentId, { name, dateOfBirth, beltId });
    onSave(await repositories.students.getById(studentId));
  }

  return (
    (name && dateOfBirth && beltId && <form noValidate autoComplete="off">
      <TextField label="Student Name" value={name} onChange={e => setName(e.target.value)} />
      <TextField type="date" label="Date of Birth" value={dateOfBirth} onChange={e => setDateOfBirth(e.target.value)} />
      <FormControl>
        <InputLabel id="beltIdLabel">Belt Rank</InputLabel>
        <Select labelId="beltIdLabel" value={beltId} onChange={e => setBeltId(e.target.value)}>
          {belts && belts.sort(({ prescidence: lhs }, { prescidence: rhs }) => lhs - rhs).map(({ id, rank }) => (
            <MenuItem value={id} key={id}>{rank}</MenuItem>
          ))}
        </Select>
      </FormControl>
      <Button onClick={updateStudent}>Save</Button>
    </form>
    ) || null
  );
}