import * as React from "react";
import * as UniUX from "uniux";
import { appConfig } from "../appConfigs";

class Page extends React.Component {
  render() {
    return (
      <>
        <UniUX.Main
          appConfig={appConfig}
          page={appConfig.pageConfigs.about}
          pageType="columnedApp"
        >
            <h1>About Us</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas erat imperdiet sed euismod nisi porta lorem. Quam nulla porttitor massa id. Felis eget nunc lobortis mattis aliquam faucibus purus. Duis ut diam quam nulla porttitor massa id. Ullamcorper eget nulla facilisi etiam dignissimLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas erat imperdiet sed euismod nisi porta lorem. Quam nulla porttitor massa id. Felis eget nunc lobortis mattis aliquam faucibus purus. Duis ut diam quam nulla porttitor massa id. Ullamcorper eget nulla facilisi etiam dignissim.</p>
        </UniUX.Main>
      </>
    );
  }
}

export default Page;
