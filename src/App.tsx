import styled from "styled-components";
import TodoContainer from "./components/Organisms/TodoContainer";

const Main = styled.div`
  overflow: hidden;
  width: 600px;
  height: 800px;
  margin: 0px auto;
  margin-top: 50px;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;

function App() {
  return (
    <Main>
      <TodoContainer />
    </Main>
  );
}

export default App;
