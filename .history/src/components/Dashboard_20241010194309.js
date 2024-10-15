import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Dashboard</h2>
      <ul style={styles.list}>
        <li><Link to="/topic1" style={styles.link}>Tópico 1</Link></li>
        <li><Link to="/topic2" style={styles.link}>Tópico 2</Link></li>
        <li><Link to="/topic3" style={styles.link}>Tópico 3</Link></li>
        <li><Link to="/topic4" style={styles.link}>Tópico 4</Link></li>
        <li><Link to="/topic5" style={styles.link}>Tópico 5</Link></li>
        <li><Link to="/topic6" style={styles.link}>Tópico 6</Link></li>
        <li><Link to="/topic7" style={styles.link}>Tópico 7</Link></li>
        <li><Link to="/topic8" style={styles.link}>Tópico 8</Link></li>
      </ul>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    padding: '20px',
    backgroundColor: '#f4f4f4',
  },
  title: {
    marginBottom: '20px',
    fontSize: '24px',
  },
  list: {
    listStyleType: 'none',
    padding: 0,
  },
  link: {
    textDecoration: 'none',
    color: '#4CAF50',
    fontSize: '18px',
    margin: '10px 0',
  },
};

export default Dashboard;
