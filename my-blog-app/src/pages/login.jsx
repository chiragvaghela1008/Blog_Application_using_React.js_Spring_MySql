import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate(); 

  const handleLogin = (e) => {
    e.preventDefault();

    if (id === 'admin@gmail.com' && password === 'admin123') {
      setMessage('Login successful!');
      setTimeout(() => {
        navigate('/addblog'); 
      });
    } else {
      setMessage('Invalid ID or password.');
    }
  };

  return (
     <div style={styles.container}>
     <h2 style={styles.title}>Login Page</h2>

      <form onSubmit={handleLogin} style={styles.form}>
        <label>Enter Username</label>
        <input
          type="text"
          placeholder="Enter ID"
          value={id}
          onChange={(e) => setId(e.target.value)}
          style={styles.input}
        />

        <label>Enter Password</label>
        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
        />

        <button type="submit" style={styles.button}>
           
          Login
        </button>

         {message && <p style={styles.message}>{message}</p>}

        
      </form>
    </div>
  );
};

const styles = {
  container: {
    minHeight: '100vh',
    backgroundColor: '#00ffff',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
  },
  title: {
    marginBottom: '20px',
  },
  form: {
    backgroundColor: '#ffff00',
    padding: '30px',
    borderRadius: '12px',
    boxShadow: '0 0 15px rgba(0,0,0,0.2)',
    width: '100%',
    maxWidth: '400px',
    textAlign: 'left',
  },
  input: {
    display: 'block',
    width: '100%',
    height: '40px',
    marginBottom: '15px',
    padding: '10px',
    borderRadius: '6px',
    border: '1px solid #ccc',
    fontSize: '16px',
  },
  button: {
    width: '100%',
    padding: '12px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    fontSize: '16px',
    cursor: 'pointer',
    transition: 'background 0.3s ease',
  },
  message: {
    marginTop: '15px',
    fontWeight: 'bold',
    textAlign: 'center',
  },
};


export default Login;
