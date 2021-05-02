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
