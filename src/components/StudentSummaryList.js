import React from 'react';
import { Link } from '@reach/router';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { navigate } from '@reach/router';

const StudentSummary = ({id, name, dateOfBirth, age, rank}) => {
  return (
    <Card>
      <CardContent>
      <ul>
        <li>Name: {name}</li>
        <li>Age: {age}</li>
        <li>Date of Birth: {dateOfBirth}</li>
        <li>Rank: {rank}</li>
        </ul>
        </CardContent>
        <CardActions>
          <Button onClick={() => navigate(`students/${id}`)} />
        </CardActions>
    </Card>
  )
};

export const StudentSummaryList = ({students}) => {
  return (
    <div>
      {students && students.map(student => (<StudentSummary key={student.id} {...student} />))}
    </div>
  )
}