import "./App.css";
import Game from "./components/game";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

// const user = {
//   name: "Hedy Lamarr",
//   imageUrl: "https://i.imgur.com/yXOvdOSs.jpg",
//   imageSize: 90,
// };

function App() {
  return (
    <>
      <Game />
      {/* <h1>Welcome to my app</h1>
      <Content/> */}

      {/* <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={"Photo of " + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize,
        }}
      /> */}
    </>
  );
}

export default App;
