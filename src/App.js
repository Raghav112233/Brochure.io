import img from "./apartment.jpg"
import Form from './Form';
import Header from './Header';

let loc = window.location.href;
let params = new URLSearchParams(loc.search);
console.log(params.size)

function App() {
    return (
        <div className="App">
            <div id="body_box" style={{backgroundImage : `url(${img})`}}>
                <Header />
                <Form />
            </div>
        </div>
      );
}

export default App;
