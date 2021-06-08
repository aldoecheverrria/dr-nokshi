import './App.css';
import Header from './Header';
import PanToolIcon from '@material-ui/icons/PanTool';
import SearchIcon from '@material-ui/icons/Search';
import Main from './Main';

function App() {
  return (
    <div className="app">
        <div className="container__left">
          <Header/>
          <Main/>
        </div>
        <div className="container__right">
          <PanToolIcon/>
          <SearchIcon/>
        </div>
    </div>
  );
}

export default App;


/*

https://images.unsplash.com/photo-1597696929644-a2157a251a43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80

*/