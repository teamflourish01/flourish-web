import React, { useEffect, useState } from 'react';
import '../LastLets/LastLets.css';
import YellowWhiteBtn from '../../../YellowWhiteBtn/YellowWhiteBtn'
import { useParams } from 'react-router-dom';

const LastLets = () => {
  const { slug } = useParams();
  const [letLast, setLetLast] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  let url=process.env.REACT_APP_DEV_URL
  useEffect(() => {
    const getData = async () => {
      try {
        console.log(url);
        
        setLoading(true);
        const response = await fetch(
          `${url}/subservice/${slug}`
        );
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        const res = await response.json();
        console.log(res, "subService");

        setLetLast(res.data); // Store fetched data in state
        setLoading(false);
      } catch (error) {
        setError(error.message);
      }
    };

    getData();
  }, [slug]); // Runs when `slug` changes

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;


  return (
    <>
      <div className="lets-title">
        <div className="lets-title-container">
            <p className="lets-dev-title">
            {letLast?.last_title}
            </p>
            <p className="let-desc">{letLast?.last_text1}</p>
            <p className="let-des">{letLast?.last_text2}</p>
            <YellowWhiteBtn btnName="Contact Us"/>
        </div>
      </div>
    </>
  );
}

export default LastLets;
