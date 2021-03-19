import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <header className="app-header">
        <h1>musicbook</h1>
      </header>

      <div className="contents">
        <div className="content">
          <h2>
            Put a Little Love On Me
          </h2>
          <h5>
            Niall Horan
          </h5>
          <hr/>
          <div className="media">
            <p>
            We fight, we get high holding on to love <br/>
            We came down 'cause there was nothing holding us <br/>
            Is it wrong that I still wonder where you are? <br/>
            Is it wrong that I still don't know my heart? <br/>  
            </p>
            <iframe width="500px" height="300px" src="https://www.youtube.com/embed/bO3S8CKafbE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </div>

        <div className="content">
          <h2>
            Amnesia
          </h2>
          <h5>
            5 Second of Summer
          </h5>
          <hr/>
          <div className="media">
            <p>
            I wish that I could wake up with amnesia <br/>
            And forget about the stupid little things <br/>
            Like the way it felt to fall asleep next to you <br/>
            And the memories I never can escape <br/>
            </p>
            <iframe height="300px" width="500px" src="https://www.youtube.com/embed/DCCJCILiX3o" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
            </iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
