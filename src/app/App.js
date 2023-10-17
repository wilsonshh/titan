import 'bootstrap/dist/css/bootstrap.min.css';
import Main from '../layout/Main';
import NewsFeedScreen from '../pages/newsfeed/Newsfeed';
import {Route, Routes} from 'react-router-dom';

function App() {
    return (
        <Main>
            <Routes>
                <Route path={"/"} element={<NewsFeedScreen/>}/>
            </Routes>
        </Main>
    );
}

export default App;
