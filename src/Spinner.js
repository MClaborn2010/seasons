import React from "react";

const Spinner = (props) => {
  return (
    <div class="ui active dimmer">
      <div class="ui loader big text">
        {props.message}
        <i class="map marker alternate icon"></i>
      </div>
    </div>
  );
};

Spinner.defaultProps = {
  message: "Loading page...",
};

export default Spinner;
