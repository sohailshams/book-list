import NewBookForm from './components/Bookform';
import BookList from './components/Booklist';
import Navbar from './components/Navbar';
import BookContextProvider from './context/BookContext';

function App() {
  return (
    <div className="App">
      <BookContextProvider>
        <Navbar />
        <BookList />
        <NewBookForm />
      </BookContextProvider>
    </div>
  );
}

export default App;
