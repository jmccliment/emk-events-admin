import React, { useState, useEffect } from 'react';
import * as repositories from '../data';
import { getAllAsync, } from '../utils';

export const Belts = () => {
  const [belts, setBelts] = useState([]);
  useEffect(() => {
    getAllAsync(repositories.belts, setBelts);
  }, []);

  return (
    <div>{JSON.stringify(belts)}</div>
  )
}