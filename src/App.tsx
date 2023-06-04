import { useCountStore } from "./stores/count";

function Counter() {
  const count = useCountStore((state) => state.count);
  return <p className="inline">Count: {count}</p>;
}

function Controls() {
  const increase = useCountStore((state) => state.increase);
  return (
    <>
      <button onClick={() => increase(1)}>one up</button>
      <button onClick={() => increase(-1)}>one down</button>
    </>
  );
}

function App() {
  return (
    <>
      <p className="text-2xl text-center py-4">
        Vite + React + Tailwind + Zustand
      </p>
      <div className="flex flex-col">
        <Controls />
        <Counter />
      </div>
    </>
  );
}

export default App;
