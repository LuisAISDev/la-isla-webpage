import { useEffect, useState } from "react";
import CardList from "../components/card-list/card-list-func.component";
import SearchBox from "../components/search-box/search-box-func.component";
import "./monstersapp.styles.css"

const MonstersApp = () => {
    const [searchField, setSearchField] = useState("");
    const [monsters, setMonsters] = useState([]);
    const [filteredMonsters, setFilterMonsters] = useState(monsters);
    
    const onSearchChange = (event) => {
      const searchFieldString = event.target.value.toLocaleLowerCase();
      setSearchField(searchFieldString);
    };
    
    useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setMonsters(users));
    }, []);
    
    useEffect(() => {
      const newFilteredMonsters = monsters.filter((monster) => {
        return monster.name.toLocaleLowerCase().includes(searchField);
      });
    
      setFilterMonsters(newFilteredMonsters);
    }, [monsters, searchField]);
    
    return (
      <div className="App">
        <h1 className="app-title">Monsters Rolodex</h1>
        <SearchBox
          className="search-box"
          onChangeHandler={onSearchChange}
          placeholder="Search monsters"
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
};
  
  export default MonstersApp;
  
