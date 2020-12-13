import React from "react";
import { FormattedMessage } from "react-intl";

const GreetingsComponent = () => {
  return (
    <span>
      <FormattedMessage id="greetingsMessage" defaultMessage="Hi there!" />
    </span>
  );
};

export default GreetingsComponent;
