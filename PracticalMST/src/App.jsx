import { useState } from "react";
import "./App.css";

function App() {
  const [restaurants] = useState([
    { id: 1, name: "Dominos", cuisines: "Pizza"},
    { id: 2, name: "KFC", cuisines: "Fried Chicken"},
    { id: 3, name: "Barbeque Nation", cuisines: "Indian" },
    { id: 4, name: "Mainland China", cuisines: "Chinese" },
  ]);

  const [search, setSearch] = useState("");

  
  const filteredRestaurants = restaurants.filter((res) =>
    res.cuisines.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      
      <h1>Restaurant List</h1>

      <input
        type="text"
        placeholder="Search by cuisines..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search"
      />

     
      <div className="grid">
        {filteredRestaurants.length > 0 ? (
          filteredRestaurants.map((res) => (
            <div key={res.id} className="card">
              <h2>{res.name}</h2>
              <p>
                <strong>Cuisines:</strong> {res.cuisines}
              </p>
            </div>
          ))
        ) : (
          <p>No restaurants found .</p>
        )}
      </div>
    </div>
  );
}

export default App;
