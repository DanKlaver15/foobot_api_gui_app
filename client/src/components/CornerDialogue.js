import React, { useState } from "react";
import { CornerDialog } from "evergreen-ui";

const UpdateDevicesDialog = (showing) => {
  const [show, setShow] = useState(showing);

  return (
    <React.Fragment>
      <CornerDialog
        title="To Update Foobots..."
        isShown={show}
        onCloseComplete={() => setShow(false)}
        intent="none"
      >
        please log out and then visit your{" "}
        <a href="https://dashboard.foobot.io/">Foobot Dashboard</a>. After you
        log back in here your devices will be updated.
      </CornerDialog>
    </React.Fragment>
  );
};

export default UpdateDevicesDialog;
