import React, { useState } from "react";
import DataFormatSetting from "./RadioGroup";
import { connect } from "react-redux";
import DateFnsUtils from "@date-io/date-fns"; // choose your lib
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import { createMuiTheme } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import lightBlue from "@material-ui/core/colors/lightBlue";
import grey from "@material-ui/core/colors/grey";

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

const DataDownload = () => {
  let today = new Date();
  let yesterday = today.setDate(today.getDate() - 1);

  const [startDate, setStartDate] = useState(yesterday);
  const [endDate, setEndDate] = useState(new Date());
  const [sensorList, setSensorList] = useState("pm,voc,hum,co2,tmp,allpollu");

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
                If<span className="font-bold mx-1">NO</span>foobot is selected
                above then data will be gathered from
                <span className="font-bold mx-1">ALL</span>Foobots.
              </p>
            </div>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">
            <form action="#" method="POST">
              <div className="grid grid-cols-7 gap-8">
                <div className="col-span-4">
                  <label
                    htmlFor="uuid"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-400"
                  >
                    UUID
                  </label>
                  <input
                    type="text"
                    disabled="true"
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
                        clearable
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
                        clearable
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
                    Average By
                  </label>
                  <input
                    type="text"
                    name="average_by"
                    id="average_by"
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md dark:bg-gray-400"
                  />
                </div>

                <div className="col-span-4 row-start-4">
                  <label
                    htmlFor="street_address"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-400"
                  >
                    Sensor List
                  </label>
                  <input
                    value={sensorList}
                    type="text"
                    name="sensor_list"
                    id="sensor_list"
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md dark:bg-gray-400"
                  />
                </div>

                <div className="col-span-4 row-start-5 row-span-1">
                  <DataFormatSetting />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="flex justify-end">
        <button
          type="button"
          className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default DataDownload;
