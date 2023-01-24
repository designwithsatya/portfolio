import React, { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../App';
import Loading from '../components/Loading';

const Logout = () => {
  const navigate = useNavigate();
  const { dispatch } = useContext(UserContext);
  useEffect(() => {
    fetch('/logout', {
      method: 'GET',
      headers: {
        Accept: 'appllication/json',
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    })
      .then((res) => {
        dispatch({ type: 'USER', payload: false });
        navigate('/2023/home', { replace: true });
        if (res.status !== 200) {
          const error = new Error(res.error);
          throw error;
        }
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return (
    <>
      <Loading />
    </>
  );
};

export default Logout;
