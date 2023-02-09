import Container from "./components/Container";
import Heading from "./components/Heading";
import Footer from "./components/Footer";
import Pages from "./components/Pages";

function App() {
  return (
    <div className="App">
      <Container>
        <Heading />
        <Pages />
        <Footer />
      </Container>
    </div>
  );
}

export default App;
