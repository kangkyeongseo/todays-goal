import styled from "styled-components";
import TodoContainer from "./components/Organisms/TodoContainer";

const Main = styled.div`
  max-width: 500px;
  margin: 0 auto;
`;

function App() {
  return (
    <Main>
      <TodoContainer />
    </Main>
  );
}

export default App;
