import { useBoundStore } from "./state/store";

function Counter() {
  const count = useBoundStore((state) => state.count);
  const age = useBoundStore((state) => state.age);
  return (
    <div className="flex flex-col">
      <p className="inline">Count: {count}</p>
      <p className="inline">Age: {age}</p>
    </div>
  );
}

function Controls() {
  const incrementCount = useBoundStore((state) => state.incrementCount);
  const decrementCount = useBoundStore((state) => state.decrementCount);
  const incrementAge = useBoundStore((state) => state.incrementAge);
  const decrementAge = useBoundStore((state) => state.decrementAge);
  return (
    <>
      <div>
        <p>Count</p>
        <button onClick={incrementCount}>one up</button>
        <button onClick={decrementCount}>one down</button>
      </div>
      <div>
        <p>Age</p>
        <button onClick={incrementAge}>one up</button>
        <button onClick={decrementAge}>one down</button>
      </div>
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
