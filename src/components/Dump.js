import React, { useState, useEffect } from 'react';

export const Dump = ({asyncGetter}) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const dbData = await asyncGetter();
      setData(dbData);
    }
    getData();
  }, [asyncGetter])

  return (
    <pre style={{backgroundColor: 'silver', borderColor: 'black', borderRadius: '.25rem', padding: '1rem', margin: '1rem'}}>
      {JSON.stringify(data.sort(({prescidence: lhs}, {prescidence: rhs}) => lhs - rhs), null, 2)}
    </pre>
  );
}