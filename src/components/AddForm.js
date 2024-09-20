import React, { useRef } from 'react';
import { useDispatch , useSelector } from 'react-redux';
import { insertBook } from './store/booksSlice';

const Addform = () => {
  
  const {isLoggedIn} = useSelector((state) => {
    return state.authSlice
  })

  const tittle = useRef(null)
  const price = useRef(null)
  const discrebtion = useRef(null)

  const dispatch = useDispatch();

  const handleSubmite = (e) => {
    e.preventDefault();
    const data = {
      title: tittle.current.value,
      price: price.current.value,
      description: discrebtion.current.value,
    };
    dispatch(insertBook(data));
    tittle.current.value = null
    price.current.value = null
    discrebtion.current.value = null
  };


  return (
    <div className='row'>
      <div className='col-6 offset-3 mt-3'>
        <h2>Insert Book</h2>
        <form onSubmit={handleSubmite}>
          <div className='form-group'>
            <label htmlFor='title'>Title</label>
            <input type='text' className='form-control' id='title' required ref={tittle}/>
          </div>
          <div className='form-group'>
            <label htmlFor='price'>Price</label>
            <input type='number' className='form-control' id='price' required ref={price}/>
          </div>
          <div className='form-group'>
            <label htmlFor='Description'>Description</label>
            <textarea
              ref={discrebtion}
              className='form-control'
              id='Description'
              rows='3'
              required
            ></textarea>
          </div>
          <button type='submit' className='btn btn-primary' disabled={!isLoggedIn}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Addform;
