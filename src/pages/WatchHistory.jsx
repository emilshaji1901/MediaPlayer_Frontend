import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { deleteHistory, getAllHistory } from '../services/allAPI';

function WatchHistory() {
  const [history, setHistory] = useState();

  const watchAllHistory = async () => {
    try {
      const { data } = await getAllHistory();
      setHistory(data);
    } catch (error) {
      console.error('Error fetching watch history:', error);
    }
  };

  const removeHistory = async (id) => {
    try {
      await deleteHistory(id);
      watchAllHistory(); // Get all remaining history
    } catch (error) {
      console.error('Error removing history item:', error);
    }
  };

  useEffect(() => {
    watchAllHistory();
  }, []);

  return (
    <>
      <div className="container mt-5 d-flex justify-content-between">
        <h3>Watch History</h3>
        <Link to={'/home'} className='d-flex align-items-center' style={{ textDecoration: 'none', color: 'white', fontSize: '20px' }}>
          <i className="fa-solid fa-arrow-left fa-beat me-2"></i>Back to Home
        </Link>
      </div>
      <table className='table mt-5 mb-5 container'>
        <thead>
          <tr>
            <th>#</th>
            <th>Caption</th>
            <th>Url</th>
            <th>Time Stamp</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {history?.length > 0 ? (
            history.map((item, index) => (
              <tr key={item.id}>
                <td>{index + 1}</td>
                <td>{item.caption}</td>
                <td>
                  <a href={item.embedLink} target='_blank' rel='noopener noreferrer'>
                    {item.embedLink}
                  </a>
                </td>
                <td>{item.timestamp}</td>
                <td>
                  <button onClick={() => removeHistory(item?.id)} className='btn btn-danger'>
                    <i className="fa-solid fa-trash-can"></i>
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5">No watch history available</td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
}

export default WatchHistory;
