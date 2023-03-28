import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="description">
        <h2>Hello, my name is Jeff.</h2>
        <span>I am a Software Engineer based in NYC.</span>
        <div />
        <span> Currently, I am looking for a new role.</span>
        <ul>
          <li>
            <a href="./public/Jeff-Diers-Resume-2023.pdf" download>
              Resume (97kb)
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/jeff-diers/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://github.com/jeffdiers"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
