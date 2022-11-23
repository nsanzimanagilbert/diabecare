import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listAllGlucose } from "../actions/glucoseActions";
import { useEffect } from 'react';
import { Container } from 'react-bootstrap';

const RecordsScreen = () => {
    const dispatch = useDispatch();
  const glucoseList = useSelector((state) => state.glucoseList);
  const { loading, error, glucose } = glucoseList;

   useEffect(() => {
    dispatch(listAllGlucose())
  }, [dispatch]);


  return (
    <Container>
        <div className='pageHeader'>
            <h3>The Records...</h3>
            {glucose.map((record)=>{ return <div>
                    <p>{record.name}</p>
                <p>{record.qty}</p>
                <p>{record.createdAt}</p>


            </div>
                

            })}
        </div>
      
    </Container>
  )
}

export default RecordsScreen
