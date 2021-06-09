import './App.css';
import Header from './Header';
import SearchIcon from '@material-ui/icons/Search';
import Main from './Main';

function App() {
  return (
    <div className="app">
        <div className="banner">
          <p>Not responsive. Based on Nokshi, all creadits to the creator, original <a target="_blank" href="https://dribbble.com/shots/15790828-Nokshi-Handmade-Shopify-Theme">here</a></p>
        </div>
        <div className="container__left">
          <Header/>
          <Main/>
        </div>
        <div className="container__right">
          <img width={94} height={59} src="http://preview.hasthemes.com/nokshi/assets/img/logo/logo.png"/>
          <SearchIcon/>
        </div>
    </div>
  );
}

export default App;


/*

https://images.unsplash.com/photo-1597696929644-a2157a251a43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80
http://preview.hasthemes.com/nokshi/index-2.html
https://dribbble.com/shots/15790828-Nokshi-Handmade-Shopify-Theme
*/