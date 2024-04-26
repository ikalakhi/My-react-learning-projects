import { CORE_CONCEPTS } from "./data"
import Header from "./components/Header/Header";
import CoreConcept from "./components/CoreConcept";
import TabButton from "./components/TabButton";
import { useState } from "react";
import {EXAMPLES} from "./data";

function App() {
  const [selectedTopic, setSelectedTopic] = useState();
  
  let tabContent = 'please click a button';

  function handelSelect(selectedButton) {
    setSelectedTopic(selectedButton);
    console.log(selectedTopic);
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Time to get started!</h2>
          <ul>
            <CoreConcept {...CORE_CONCEPTS[0]}/>
            <CoreConcept {...CORE_CONCEPTS[1]}/>
            <CoreConcept {...CORE_CONCEPTS[2]}/>
            <CoreConcept {...CORE_CONCEPTS[3]}/>
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={() => handelSelect('components')}>Components</TabButton>
            <TabButton onSelect={() => handelSelect('jsx')}>JSX</TabButton>
            <TabButton onSelect={() => handelSelect('props')}>Props</TabButton>
            <TabButton onSelect={() => handelSelect('state')}>State</TabButton>
          </menu>
          {!selectedTopic ? (<p>Please select a topic</p>) : null}
          {selectedTopic ? 
          <div id="tab-content">
          <h3>{EXAMPLES[selectedTopic].title}</h3>
          <p>{EXAMPLES[selectedTopic].description}</p>
          <pre>
            <code>
            {EXAMPLES[selectedTopic].code}
            </code>
          </pre>
        </div> : null}
        </section>
      </main>
    </div>
  );
}

export default App;
