import React, { useEffect, useState } from "react";
import { Waypoint } from "react-waypoint";
import { Scrollbars } from "react-custom-scrollbars";
import { Link, Route, useLocation, useHistory } from "react-router-dom";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  InputGroup,
  InputGroupAddon,
  Input,
} from "reactstrap";
import Checkout from "./Checkout";
import { getData } from "../redux/modals/modalA";
import { connect } from "react-redux";
import { getAllContactsA } from "../redux/modals/selectors";
import OneContact from "./OneContact";

const ModalExample = (props) => {
  const [search, setSearch] = useState("");
  const history = useHistory();
  const { pathname } = useLocation();
  const needReset = () => search.length !== 0;
  const {
    buttonLabel,
    className,
    toggle,
    getData,
    contacts,
    loading,
    page,
  } = props;
  const newPage = page + 1;

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      getData(1, search, needReset());
    }
  };
  useEffect(() => {
    getData();
  }, [getData]);
  return (
    <div>
      <Link to="/modala">
        <Button
          color="primary"
          onClick={() => history.push("/modala")}
          className={className}
        >
          {buttonLabel}
        </Button>
      </Link>
      <Route path="/modala">
        <Modal isOpen={pathname === "/modala"} toggle={toggle}>
          <ModalHeader toggle={toggle}>{buttonLabel}</ModalHeader>
          {loading && !contacts.length && <ModalBody>Loading...</ModalBody>}
          <br />
          {contacts.length === 0 && <ModalBody>No Items</ModalBody>}
          {(!loading || contacts.length) && (
            <ModalBody>
              <InputGroup style={{ width: "available" }}>
                <InputGroupAddon addonType="prepend">
                  <Button
                    onClick={() => {
                      getData(1, search, needReset());
                      setSearch("");
                    }}
                  >
                    Search
                  </Button>
                </InputGroupAddon>
                <Input
                  onChange={(e) => {
                    setSearch(e.target.value);
                    getData(1, search, needReset());
                  }}
                  onKeyPress={handleKeyPress}
                  value={search}
                  placeholder="Search"
                />
              </InputGroup>
              <Scrollbars
                autoHeight
                style={{
                  width: "available",
                  height: "500px",
                  overflowY: "hidden",
                }}
              >
                <br />
                {contacts &&
                  contacts.map(
                    ({ id, first_name, country_id, color, key }, i) => (
                      <div key={key}>
                        <OneContact
                          buttonLabel={id}
                          first_name={first_name}
                          country_id={country_id}
                          id={id}
                        />
                        {contacts.length - 3 === i && (
                          <Waypoint onEnter={() => getData(newPage, search)} />
                        )}
                      </div>
                    )
                  )}
              </Scrollbars>
            </ModalBody>
          )}
          <ModalFooter>
            <Button color="primary">All Contacts</Button>{" "}
            <Button color="primary" onClick={() => history.push("/modalb")}>
              US Contacts
            </Button>{" "}
            <Button color="primary" className={"btnC"} onClick={toggle}>
              Close
            </Button>{" "}
            <br />
            <hr />
            <Checkout />
          </ModalFooter>
        </Modal>
      </Route>
    </div>
  );
};
const mapDispatchToProps = { getData };
const mapStateToProps = (state) => {
  return {
    AReducer: state.ModalAReducer,
    contacts: getAllContactsA({
      ...state.ModalAReducer,
      ...state.CheckpointReducer,
    }),
    loading: state.ModalAReducer.loading,
    even: state.CheckpointReducer.even,
    page: state.ModalAReducer.page,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalExample);
