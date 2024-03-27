import { CORE_CONCEPTS } from "./data"
import Header from "./components/Header/Header";
import CoreConcept from "./components/CoreConcept";
import TabButton from "./components/TabButton";

function App() {
  function handelSelect() {
    console.log("selected!");
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
            <TabButton onSelect={handelSelect}>Conmponents</TabButton>
            <TabButton onSelect={handelSelect}>JSX</TabButton>
            <TabButton onSelect={handelSelect}>Props</TabButton>
            <TabButton onSelect={handelSelect}>State</TabButton>
          </menu>
        </section>
      </main>
    </div>
  );
}

export default App;
