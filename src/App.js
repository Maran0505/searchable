import React, { useState } from 'react';

const cities = ['Cuddalore', 'Vadalore', 'Chidambaram', 'Virudhachalam'];

function App() {
  const [searchText, setSearchText] = useState('');
  const [filteredCities, setFilteredCities] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleInputChange = (e) => {
    const text = e.target.value;
    setSearchText(text);

    // Filter cities based on the input text
    const filtered = cities.filter((city) =>
      city.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredCities(filtered);
  };

  const selectCity = (city) => {
    setSearchText(city);
    setFilteredCities([]);
    setIsOpen(false);
  };

  return (
    <div className="dropdown">
      <input
        type="text"
        value={searchText}
        onChange={handleInputChange}
        placeholder="Search cities..."
        onClick={toggleDropdown}
      />
      {isOpen && (
        <ul className="dropdown-list">
          {filteredCities.map((city, index) => (
            <li key={index} onClick={() => selectCity(city)}>
              {city}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;

