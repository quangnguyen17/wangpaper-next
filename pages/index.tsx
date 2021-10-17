import { useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';

const Home = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    axios.get(`${window.location.origin}/photos.json`).then(({ data }: AxiosResponse<any, any>) => {
      setPhotos(data.photos.map((url: string) => `${window.location.origin}/photos/${url}`));
    });
  }, []);

  return (
    <>
      <nav className="m-1">
        <h1 className="title">WangPaper</h1>
      </nav>
      <div className="Home">
        {photos.map((src, idx) => (
          <img key={idx} src={src} className="wallpaper mb-1" />
        ))}
      </div>
    </>
  );
};

export default Home;
