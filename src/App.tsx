import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-row justify-center items-center">
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a className="text-5xl p-6" href="https://daisyui.com/">
          🌻
        </a>
      </div>
      <h1 className="text-5xl my-10">Vite + React + DaisyUI</h1>
      <div className="flex flex-col justify-center items-center">
        <button
          className="btn btn-primary w-60 my-10"
          onClick={() => setCount((count) => count + 1)}
        >
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
