import Board from "./components/Board";

const cardIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
cardIds.sort(() => 0.5 - Math.random());

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Shape Matcher</h1>
      </header>
      <div
        style={{
          padding: "16px 0px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <button
          onClick={() => {
            window.location.reload();
          }}
        >
          RESTART
        </button>
      </div>
      <main>
        <div
          style={{ width: "100%", justifyContent: "center", display: "flex" }}
        >
          <Board cardIds={cardIds} />
        </div>
      </main>
    </div>
  );
}

export default App;
