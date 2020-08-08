import React from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import ModalA from "../components/ModalA";
import ModalB from "../components/ModalB";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  button {
    margin-left: 10px;
  }
`;

const IndexPage = () => {
  const history = useHistory();
  const toggle = () => {
    history.push("/");
  };
  return (
    <Wrapper>
      <Switch>
        <Route path="/">
          <ModalA buttonLabel={"Modal A"} className={"btnA"} toggle={toggle} />
          <ModalB buttonLabel={"Modal B"} className={"btnB"} toggle={toggle} />
        </Route>
      </Switch>
    </Wrapper>
  );
};

export default IndexPage;
