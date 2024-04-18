import BackgroundHeading from "./BackgroundHeading";
import Footer from "./Footer";
import Header from "./Header/Header";
import ItemList from "./Item/ItemList";
import Sidebar from "./Sidebar/Sidebar";
function App() {
    return (
        <>
            <BackgroundHeading />
            <main>
                <Header />
                <ItemList />
                <Sidebar />
            </main>
            <Footer />
        </>
    );
}

export default App;
