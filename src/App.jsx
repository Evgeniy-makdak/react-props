import Header from './components/header/Header';
import { ways } from './data'
import OurDesription from './components/OurDesription';
import './index.css';

function App() {
  return (
    <div>
      <Header />
      <h1 className="mainTitle">Системы водоочистки</h1>
      <section>
        <ul>
          {/* <OurDesription title={ways[0].title} description={ways[0].description} /> Полная запись, которую можно переписать, используя
          спред оператор ... */}
          <OurDesription {...ways[0]} />
          <OurDesription {...ways[1]} />
          <OurDesription {...ways[2]} />
          <OurDesription {...ways[3]} />
        </ul>
      </section>
    </div>
  );
}

export default App;
