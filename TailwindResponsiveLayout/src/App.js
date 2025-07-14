import "./App.css";

function App() {
  return (
    <div className="min-h-screen flex flex-col p-4">
      {/* Nagłówek */}

      <header className="flex flex-col items-start md:flex-row md:justify-between md:text-left w-full p-4 bg-gray-100 gap-3">
        <div className="bg-red-500 text-white p-2 rounded flex-auto text-center">
          {" "}
          Home{" "}
        </div>
        <div className="bg-green-500 text-white p-2 rounded flex-auto text-center">
          Main Page{" "}
        </div>
        <div className="bg-blue-500 text-white p-2 rounded flex-auto text-center">
          {" "}
          About us{" "}
        </div>
      </header>

      {/* Treść główna */}

      <main className="flex-1 grid grid-cols-1 md:grid-cols-3 md:grid-rows-6 gap-4 p-4">
        <div className="bg-blue-400 hover:bg-red-400 text-center rounded p-4 md:row-span-6 md:col-span-1">
          Box 1
        </div>
        <div className="bg-blue-300 hover:bg-red-300 text-center rounded p-4 md:row-span-3 md:col-span-2">
          Box 2
        </div>
        <div className="bg-blue-200 hover:bg-red-200 text-center rounded p-4 md:row-span-1 md:col-span-2 md:ow-span-2">
          Box 3
        </div>
      </main>

      {/* Stopka */}

      <footer className="bg-gray-200 text-black p-2 m-2 rounded text-center">
        {" "}
        @ 2025 Footer{" "}
      </footer>
    </div>
  );
}

export default App;
