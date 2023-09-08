import * as Icon from 'react-feather';
import './App.css';

const Grid = () => {
  const data = [
    { name: 'Winter Orbit', rating: 5, id: 1 },
    { name: 'Dial D for Deadman', rating: 4, id: 2 },
  ];

  return (
    <div className="container">
    <div >
      <div className="card-container">
        {data.map((item) => {
          return (
            <>
              <div key={item.id} className="card">
                <h1>{item.name}</h1>
                <p>Rating: {item.rating}/5</p>
                <div>
                  <Icon.Star />
                </div>
              </div>
            </>
          );
        })}
      </div>

      <div className="grid-container">
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
      </div>
      <div className="grid-container2">
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
      </div>
    </div>
    </div>
  );
};

export default Grid;
