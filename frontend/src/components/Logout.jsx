import React, { useState, useEffect } from 'react';
import axiosInstance from '../axios';
import { useNavigate } from "react-router-dom";

import { Container } from "react-bootstrap";

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
		// const response = axiosInstance.post('user/logout/blacklist/', {
		// 	refresh_token: localStorage.getItem('refresh_token'),
		// });
		localStorage.removeItem('access_token');
		localStorage.removeItem('refresh_token');
		axiosInstance.defaults.headers['Authorization'] = null;
		navigate('/login');
	});

  return <Container>logout</Container>;
};

export default Logout;
