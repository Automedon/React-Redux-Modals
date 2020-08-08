import React from "react";
import { connect } from "react-redux";
import { InputGroup, InputGroupAddon, InputGroupText, Input } from "reactstrap";
import { toggleCheckPoint } from "../redux/modals/checkpoint";

const Example = ({ toggleCheckPoint, even }) => {
  return (
    <div>
      <InputGroup>
        <InputGroupAddon addonType="prepend">
          <InputGroupText>
            <Input
              addon
              type="checkbox"
              aria-label="Checkbox for following text input"
              checked={even}
              onChange={toggleCheckPoint}
              placeholder="Only even"
            />
          </InputGroupText>
        </InputGroupAddon>
        <Input placeholder={even ? "Only even" : "All numbers"} disabled />
      </InputGroup>
    </div>
  );
};
const mapDispatchToProps = { toggleCheckPoint };
const mapStateToProps = (state) => {
  return {
    even: state.CheckpointReducer.even,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Example);
