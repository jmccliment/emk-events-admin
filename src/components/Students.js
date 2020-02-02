import React, { useState, useEffect } from 'react';
import * as repositories from '../data';
import { StudentSummaryList } from './StudentSummaryList';
import { getAllAsync } from '../utils';

export const Students = ({children}) => {
  const [students, setStudents] = useState([]);
  useEffect(() => {
    getAllAsync(repositories.studentSummaries, setStudents)
  }, []);

  return (
    <div>
      {children}
      <StudentSummaryList students={students} />
    </div>
  );
}
