import React from "react";
import { useIntl, FormattedMessage } from "react-intl";

const GreetingsComponentIntlHook = () => {
  const intl = useIntl();

  return (
    <span
      title={intl.formatMessage({
        id: "greetingsMessageTitle",
        defaultMessage: "Hi!",
      })}
    >
      <FormattedMessage id="greetingsMessage" />
    </span>
  );
};

export default GreetingsComponentIntlHook;
