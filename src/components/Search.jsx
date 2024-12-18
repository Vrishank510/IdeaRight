import { useState } from 'react';
import SearchIcon from './SearchIcon';
import Lists from './List';
import DetailsModal from './DetailsModal';
import '../assets/Search.css';

function Search() {
  const [inputValue, setInputValue] = useState("");
  const [press, setPress] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState();

  const handleClick = async (e) => {
    e.preventDefault();

    if (inputValue === "") {
      setErrorMessage("Please enter something!");
      setPress(false);
      return;
    } else {
      setPress(true);
      setErrorMessage("");
    }

    console.log(inputValue);
    setLoading(true);
    try {
      const response = await fetch("http://localhost:3000/message", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: inputValue }),
      });

      if (response.ok) {
        const jsonData = await response.json();
        console.log("Response from backend:", jsonData);
        setLoading(false);
        setItems(jsonData);
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setLoading(false);
    }
  };

  const handleDetails = (company) => {
    console.log(company);
    setSelectedItem(company);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false); 
    setSelectedItem(null); 
  };

  return (
    <div className='master-container'>
      <div className="title-container">
        <h1 className='title'>Identify Your Competitors Today!</h1>
      </div>
      <div className="search-container">
        <form className="search-bar">
          <input
            type="text"
            placeholder="What Are You Trying To Solve/Build?"
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button type="submit" onClick={handleClick}>
            <SearchIcon />
          </button>
        </form>
      </div>
      {errorMessage && <p style={{ color: "red", fontSize: "xx-large", fontWeight: "bold" }}>{errorMessage}</p>}
      {press && (
        loading ? "loading..." : (
          <div>
            {items.length === 0 ? "Nothing To Show" : (
              <div>
                <Lists 
                    items={items} 
                    generateArray={(data) => console.log(data)} 
                    onDetailsClick={handleDetails} />
              </div>
            )}
          </div>
        )
      )}

      <DetailsModal 
        showModal={showModal} 
        handleClose={handleClose} 
        selectedItem={selectedItem} 
      />


    </div>
  );
}

export default Search;
