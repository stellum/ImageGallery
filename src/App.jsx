import Container from "./component/Container";
import Gallery from "./component/Gallery";
import TitleComponent from "./component/TitleComponent";

function App() {
  return (
    <>
      <Container>
        <TitleComponent />
        <Gallery />
      </Container>
    </>
  );
}

export default App;
