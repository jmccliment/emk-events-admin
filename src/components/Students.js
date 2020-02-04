import React, { useState, useEffect } from 'react';
import * as repositories from '../data';
import { StudentSummaryList } from './StudentSummaryList';
import { getAllAsync } from '../utils';
import Grid from '@material-ui/core/Grid';

export const Students = ({ children, refreshToken }) => {
  const [students, setStudents] = useState([]);
  useEffect(() => {
    if (refreshToken || students.length === 0) {
      getAllAsync(repositories.studentSummaries, setStudents)
    }
  }, [refreshToken, students]);



  return (
    <Grid container spacing={3}>
      <Grid item xs={6}>
        <StudentSummaryList students={students} />
      </Grid>
      <Grid item xs={6}>
        {children}
      </Grid>
    </Grid>
  );
}
