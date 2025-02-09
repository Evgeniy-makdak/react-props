import Header from './components/header/Header';
import { ways } from './data';
import OurDesription from './components/OurDesription';
import './index.css';
import Button from './components/button/Button';

function App() {
  return (
    <div>
      <Header />
      <h1 className="mainTitle">React быстро</h1>
      <section>
        <ul>
          <OurDesription {...ways[0]} />
          <Button {...ways[0]}/>
          <OurDesription {...ways[1]} />
          <Button {...ways[1]}/>
          <OurDesription {...ways[2]} />
          <Button {...ways[2]}/>
          <OurDesription {...ways[3]} />
          <Button {...ways[3]}/>
        </ul>
      </section>
    </div>
  );
}

export default App;
