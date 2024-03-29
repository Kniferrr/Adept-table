import CompanyList from "./components/CompanyList/CompanyList";
import EmployeeList from "./components/EmployeeList/EmployeeList";
import "./App.css";
import { Provider } from "react-redux";
import { store } from "./store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <CompanyList />
        <EmployeeList />
      </Provider>
    </div>
  );
}

export default App;
