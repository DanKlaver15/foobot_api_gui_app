import axios from "axios";

import {
  dataInProgress,
  dataInFailure,
  dataInSuccess,
  updateData,
  deleteData,
} from "./actions";

export const updateDataRequest = (
  apiKey,
  uuid,
  start,
  end,
  averageBy,
  dataFormat
) => async (dispatch, getState) => {
  dispatch(dataInProgress);

  try {
    const response = await axios.get(
      `https://api.foobot.io/v2/device/${uuid}/datapoint/${start}/${end}/${averageBy}/`,
      {
        headers: {
          "x-api-key-token": apiKey,
          accept: `${dataFormat};charset=UTF-8`,
        },
      }
    );

    const data = await response.data;
    dispatch(dataInSuccess());
    dispatch(updateData(data));
  } catch (err) {
    console.log("error:", err);
    dispatch(dataInFailure);
  }
};

export const updateDataFromAllDevicesRequest = (
  user,
  start,
  end,
  averageBy,
  dataFormat
) => async (dispatch, getState) => {
  dispatch(dataInProgress);

  const download = (data) => {
    if (dataFormat === "text/csv") {
      let link = document.createElement("a");
      link.href = window.URL.createObjectURL(new Blob([data], { type: "txt" }));
      link.download = "foobot_data.txt";
      document.body.appendChild(link);
      link.click();
      setTimeout(function () {
        window.URL.revokeObjectURL(link);
      }, 200);
    } else {
      let link = document.createElement("a");
      link.href = window.URL.createObjectURL(
        new Blob([data], { type: "json" })
      );
      link.download = "foobot_data.json";
      document.body.appendChild(link);
      link.click();
      setTimeout(function () {
        window.URL.revokeObjectURL(link);
      }, 200);
    }
  };

  let allData = [];

  try {
    user.devices.forEach((device) => async () => {
      const response = await axios.get(
        `https://api.foobot.io/v2/device/${device.uuid}/datapoint/${start}/${end}/${averageBy}/`,
        {
          headers: {
            "x-api-key-token": user.apiKey,
            accept: `${dataFormat};charset=UTF-8`,
          },
        }
      );
      allData.push(response.data);
    });

    download(allData);

    dispatch(dataInSuccess());
  } catch (err) {
    console.log("error:", err);
    dispatch(dataInFailure);
  }
};
