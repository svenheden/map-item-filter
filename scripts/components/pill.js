import React, { PropTypes } from 'react'; // eslint-disable-line no-unused-vars

const Pill = (props) => (
  <button
    type="button"
    className="pill"
    title={props.tooltip}
    onClick={props.onClick}
  >{props.label}</button>
);

Pill.propTypes = {
  id: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  tooltip: PropTypes.string,
  onClick: PropTypes.func.isRequired
};

export default Pill;
