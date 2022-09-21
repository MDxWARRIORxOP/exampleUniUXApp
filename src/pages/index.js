import * as React from "react";
import * as UniUX from "uniux";
import { appConfig } from "../appConfigs/index";

class Page extends React.Component {
  render() {
    return (
      <>
        <UniUX.Main
          appConfig={appConfig}
          page={appConfig.pageConfigs.home}
          pageType="columnedApp"
        >
          <h1>Hello World!</h1>
          <p>Welcome to the Home page.</p>
          <UniUX.Link to="/about">Go to About page.</UniUX.Link>
        </UniUX.Main>
      </>
    );
  }
}

export default Page;
