import React from "react";
import { injectIntl, FormattedMessage } from "react-intl";

class GreetingsComponentClassBased extends React.Component {
  render() {
    const { intl } = this.props;
    
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
  }
}

export default injectIntl(GreetingsComponentClassBased);
