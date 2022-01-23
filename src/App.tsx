import React, { useState, useEffect } from 'react';
import { useFetch } from './useFetch';
import Follower from './Follower';

export interface IFollower {
  login: string;
  id: number;
  avatar_url: string;
  html_url: string;
}

function App() {
  const { data, loading } = useFetch();
  const [followers, setFollowers] = useState<IFollower[]>([]);
  const [page, setPage] = useState(0);

  useEffect(() => {
    if (loading) return;
    setFollowers(data[page]);
  }, [loading, data, page]);

  const prevPage = () => {
    if (page <= 0) {
      setPage(data.length - 1);
    } else {
      setPage(prevPage => prevPage - 1);
    }
  };

  const nextPage = () => {
    if (page >= data.length - 1) {
      setPage(0);
    } else {
      setPage(prevPage => prevPage + 1);
    }
  };

  return (
    <main>
      <div className="section-title">
        <h1>{loading ? 'Loading...' : 'Pagination'}</h1>
        <div className="underline"></div>
      </div>
      <section className="followers">
        <div className="container">
          {followers.map(follower => (
            <Follower key={follower.id} {...follower} />
          ))}
        </div>
        {!loading && (
          <div className="btn-container">
            <button className="prev-btn" onClick={prevPage}>
              Prev
            </button>
            {data.map((item: any, index: number) => {
              return (
                <button
                  onClick={() => setPage(index)}
                  key={index}
                  className={`page-btn ${index === page ? 'active-btn' : null}`}
                >
                  {index + 1}
                </button>
              );
            })}
            <button className="next-btn" onClick={nextPage}>
              Next
            </button>
          </div>
        )}
      </section>
    </main>
  );
}

export default App;
