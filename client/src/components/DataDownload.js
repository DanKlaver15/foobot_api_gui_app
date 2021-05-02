import React, { useState } from "react";
import { connect } from "react-redux";
import DateFnsUtils from "@date-io/date-fns";
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import { createMuiTheme } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import lightBlue from "@material-ui/core/colors/lightBlue";
import grey from "@material-ui/core/colors/grey";
import { updateDataRequest } from "../state/Data/thunks";
import moment from "moment";
import { RadioGroup } from "@headlessui/react";
import Table from "./Table";

const materialTheme = createMuiTheme({
  overrides: {
    MuiInputBase: {
      input: {
        color: grey["400"],
      },
    },
    MuiPickersToolbar: {
      toolbar: {
        backgroundColor: lightBlue.A200,
      },
    },
    MuiPickersDay: {
      day: {
        color: lightBlue.A700,
      },
      daySelected: {
        backgroundColor: lightBlue["400"],
      },
      dayDisabled: {
        color: lightBlue["100"],
      },
      current: {
        color: lightBlue["900"],
      },
    },
    MuiPickersModal: {
      dialogAction: {
        color: lightBlue["400"],
      },
    },
  },
});

const settings = [
  {
    name: "Text/CSV",
  },
  {
    name: "Application/JSON",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const DataDownload = ({ device, getData, user, data }) => {
  let today = new Date();
  let yesterday = today.setDate(today.getDate() - 1);

  const [startDate, setStartDate] = useState(yesterday);
  const [endDate, setEndDate] = useState(new Date());
  const [averageBy, setAverageBy] = useState("0");
  // const [sensorList, setSensorList] = useState("pm,voc,hum,co2,tmp,allpollu");
  const [selected, setSelected] = useState(settings[0]);

  const download = () => {
    if (selected.name === "Text/CSV") {
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

  return (
    <div>
      <div className="bg-white shadow px-4 py-5 sm:rounded-lg sm:p-6 dark:bg-gray-600">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <h3 className="text-lg font-medium leading-6 text-gray-900 dark:text-gray-300">
              Download Settings
            </h3>
            <div className="mt-1 text-sm dark:text-gray-400">
              <p>
                If you have any questions about what to enter in these fields,
                please review the &nbsp;
                <a
                  target="blank"
                  href="https://api.foobot.io/apidoc/index.html"
                >
                  Foobot API documentation
                </a>
                .
              </p>
            </div>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                getData(
                  user.apiKey,
                  device.uuid,
                  moment(startDate).unix(),
                  moment(endDate).unix(),
                  averageBy,
                  selected.name.toLowerCase()
                );
              }}
              action="#"
              method="POST"
            >
              <div className="grid grid-cols-7 gap-8">
                <div className="col-span-4">
                  <label
                    htmlFor="uuid"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-400"
                  >
                    UUID
                  </label>
                  <input
                    value={device.uuid}
                    onChange={(e) => e.preventDefault()}
                    type="text"
                    disabled={true}
                    name="uuid"
                    id="uuid"
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md dark:bg-gray-400"
                  />
                </div>

                <div className="col-span-2 sm:col-span-1.5 row-start-2">
                  <label
                    htmlFor="last_name"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-400"
                  >
                    Start Date
                  </label>
                  <ThemeProvider theme={materialTheme}>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                      <KeyboardDatePicker
                        clearable="true"
                        variant="inline"
                        value={startDate}
                        onChange={(date) => setStartDate(date)}
                        format="MM/dd/yyyy"
                        placeholder="Pick a start date"
                        id="start_date"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 dark:focus:ring-white block w-full shadow-sm sm:text-sm border-gray-300 rounded-md dark:text-gray-400"
                      />
                    </MuiPickersUtilsProvider>
                  </ThemeProvider>
                </div>

                <div className="col-span-2 sm:col-span-1.5 row-start-2">
                  <label
                    htmlFor="email_address"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-400"
                  >
                    End Date
                  </label>
                  <ThemeProvider theme={materialTheme}>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                      <KeyboardDatePicker
                        clearable="true"
                        disableFuture="true"
                        variant="inline"
                        value={endDate}
                        onChange={(date) => setEndDate(date)}
                        format="MM/dd/yyyy"
                        placeholder="Pick an end date"
                        id="end_date"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </MuiPickersUtilsProvider>
                  </ThemeProvider>
                </div>

                <div className="col-span-4 row-start-3">
                  <label
                    htmlFor="average_by"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-400"
                  >
                    Average By (in seconds)
                  </label>
                  <input
                    onChange={(e) => setAverageBy(e.target.value)}
                    value={averageBy}
                    type="text"
                    name="average_by"
                    id="average_by"
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md dark:bg-gray-400"
                  />
                </div>

                {/*<div className="col-span-4 row-start-4">*/}
                {/*  <label*/}
                {/*    htmlFor="street_address"*/}
                {/*    className="block text-sm font-medium text-gray-700 dark:text-gray-400"*/}
                {/*  >*/}
                {/*    Sensor List*/}
                {/*  </label>*/}
                {/*  <input*/}
                {/*    value={sensorList}*/}
                {/*    onChange={(e) => setSensorList(e.target.value)}*/}
                {/*    type="text"*/}
                {/*    name="sensor_list"*/}
                {/*    id="sensor_list"*/}
                {/*    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md dark:bg-gray-400"*/}
                {/*  />*/}
                {/*</div>*/}

                <div className="col-span-4 row-start-5 row-span-1">
                  <RadioGroup value={selected} onChange={setSelected}>
                    <RadioGroup.Label className="sr-only">
                      Data type setting
                    </RadioGroup.Label>
                    <label
                      htmlFor="data_type"
                      id="data_type"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-400"
                    >
                      Return Data Type
                    </label>
                    <div className="bg-white dark:bg-gray-400 rounded-md grid grid-cols-2 h-full">
                      {settings.map((setting, settingIdx) => (
                        <RadioGroup.Option
                          key={setting.name}
                          value={setting}
                          className={({ checked }) =>
                            classNames(
                              settingIdx === 0 ? "rounded-md" : "",
                              settingIdx === settings.length - 1
                                ? "rounded-md"
                                : "",
                              checked
                                ? "bg-indigo-50 border-indigo-200 z-10"
                                : "border-gray-200",
                              "relative border p-4 flex cursor-pointer focus:outline-none"
                            )
                          }
                        >
                          {({ active, checked }) => (
                            <>
                              <span
                                className={classNames(
                                  checked
                                    ? "bg-indigo-600 border-transparent"
                                    : "bg-white dark:bg-gray-300 border-gray-300",
                                  active ? "" : "",
                                  "h-4 w-4 mt-0.5 cursor-pointer rounded-full border flex items-center justify-center"
                                )}
                                aria-hidden="true"
                              >
                                <span className="rounded-full bg-white dark:bg-gray-300 w-1.5 h-1.5" />
                              </span>
                              <div className="ml-3 flex flex-col">
                                <RadioGroup.Label
                                  as="span"
                                  className={classNames(
                                    checked
                                      ? "text-indigo-900"
                                      : "text-gray-900",
                                    "block text-sm font-medium"
                                  )}
                                >
                                  {setting.name}
                                </RadioGroup.Label>
                              </div>
                            </>
                          )}
                        </RadioGroup.Option>
                      ))}
                    </div>
                  </RadioGroup>
                </div>
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="ml-3 mt-10 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
        <div>
          <div className="bg-white shadow px-4 py-5 sm:rounded-lg sm:p-6 dark:bg-gray-600">
            <div>
              <div>
                <h3 className="text-lg font-medium leading-6 text-gray-900 dark:text-gray-300">
                  Data Preview
                </h3>
              </div>
              <div className="mt-5 md:mt-0 md:col-span-2">
                <form>
                  <div>
                    <Table type={selected.name} />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-end">
        <button
          onClick={download}
          className="ml-3 mb-4 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Download
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  device: state.device,
  user: state.user,
  data: state.data,
});

const mapDispatchToProps = (dispatch) => ({
  getData: (apiKey, uuid, start, end, averageBy, dataFormat) =>
    dispatch(
      updateDataRequest(apiKey, uuid, start, end, averageBy, dataFormat)
    ),
});

export default connect(mapStateToProps, mapDispatchToProps)(DataDownload);
