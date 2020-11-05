import './App.css';
import UserById from "./components/user-by-id/user-by-id";
import UserByChar from "./components/users-by-char/user-by-char";

function App() {
  return (
    <div className={'d-flex flex-row justify-content-center'}>
        <h1 className="bg-primary text-white">React Homework #3</h1>
      <UserById/>
      <UserByChar/>
    </div>
  );
}

export default App;
