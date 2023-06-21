import "./App.css";
import Self from "./assets/self.png";
import Resume from "./assets/Jeff-Diers-Resume-2023.pdf";
import DrugWarsImage from "./assets/drug-wars-screen-shot.png";
import CRWNImage from "./assets/crwn-screen-shot.png";

function App() {
  return (
    <div className="container">
      <div className="description">
        <img className="avatar" src={Self} />
        <h2>Hello, my name is Jeff.</h2>
        <span>I am a Software Engineer based in NYC.</span>
        <div />
        <span> Currently, I am looking for a new role.</span>
        <ul>
          <li>
            <a href={Resume} download>
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
      <div className="projects">
        <h2>Projects</h2>
        <div className="project">
          <img className="project-image" src={DrugWarsImage} />
          <h3>Drug Wars</h3>
          <span>
            A turn-based strategy video game in which the player assumes the
            role of a drug dealer engaged in arbitrage. Inspired by the by the
            DOS game by John E. Dell in 1984. Built for the web using React and
            Typescript.
          </span>
          <ul>
            <li>
              <a
                href="https://drug-wars.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                Website
              </a>
            </li>
            <li>
              <a
                href="https://github.com/jeffdiers/drugwars"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </li>
          </ul>
        </div>
        <div className="project">
          <img className="project-image" src={CRWNImage} />
          <h3>CRWN Clothing</h3>
          <span>
            A basic example of an e-commerce site that sells streetware fashion.
            Built with React and Typescript.
          </span>
          <ul>
            <li>
              <a
                href="https://magical-sunflower-2f0d00.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                Website
              </a>
            </li>
            <li>
              <a
                href="https://github.com/jeffdiers/crwn-clothing"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
