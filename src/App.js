import "./App.css";
import { useEffect, useState } from "react";
import SearchBox from "./components/search-box/SearchBox";
import { CardList } from "./components/card-list/CardList.component";

const App = () => {
  const [searchField, setSearchField] = useState("");
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilterededMonsters] = useState(monsters);

  const onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();
    setSearchField(searchField);
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((data) => data.json())
      //can pass an object where monsters points to users (like below) or use the function method
      //so that we can take advantage of a callback function
      .then((users) => setMonsters(users));
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    setFilterededMonsters(newFilteredMonsters);
  }, [monsters, searchField]);

  return (
    <div className="App">
      <h1 className="app-title">Monster Rolodex</h1>
      <SearchBox
        className="search-box"
        onChangeHandlder={onSearchChange}
        placeholder="search monsters"
      />

      <CardList monsters={filteredMonsters} />
    </div>
  );
};
// class App extends Component {
//   //constructor method
//   constructor() {
//     super();
//     this.state = {
//       monsters: [],
//       searchField: "",
//     };
//   }

//   //Life cycle method - when component finished mounting the first time, run this
//   componentDidMount() {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((data) => data.json())
//       //can pass an object where monsters points to users (like below) or use the function method
//       //so that we can take advantage of a callback function
//       .then((users) => this.setState({ monsters: users }));
//   }

//   // this is a traditional function
//   // cannot use an arrow function as a method
//   onSearchChange = (event) => {
//     console.log(event.target.value);
//     const searchField = event.target.value.toLocaleLowerCase();

//     this.setState(() => {
//       return { searchField };
//     });
//   };

//   render() {
//     //deconstructure in class
//     const { monsters, searchField } = this.state;
//     const { onSearchChange } = this;

//     //cannot move this outside of render because we're working with class, there's only methods (or functions)
//     // inside a class (remember python)
//     const filteredMonsters = monsters.filter((monster) => {
//       return monster.name.toLocaleLowerCase().includes(searchField);
//     });

//     return (
//       <div className="App">
//         <h1 className="app-title">Monster Rolodex</h1>
//         <SearchBox
//           className="search-box"
//           onChangeHandlder={onSearchChange}
//           placeholder="search monsters"
//         />

//         <CardList monsters={filteredMonsters} />
//       </div>
//     );
//   }
// }

export default App;
