import Layout from "./compontents/Layout/Layout";
import {Route, Routes} from "react-router-dom";
import Meal from "./pages/Meal";

function App() {
  return (
    <div className="App">
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route path="/" element={<Meal/>}/>
                <Route path="/meal" element={<Meal/>}/>
            </Route>
        </Routes>
    </div>
  );
}

export default App;
