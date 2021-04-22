import React, { useState } from "react";
import { RadioGroup } from "@headlessui/react";

const settings = [
  {
    name: "Text/CSV",
  },
  {
    name: "JSON",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const DataFormatSetting = () => {
  const [selected, setSelected] = useState(settings[0]);

  return (
    <RadioGroup value={selected} onChange={setSelected}>
      <RadioGroup.Label className="sr-only">Data type setting</RadioGroup.Label>
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
                settingIdx === settings.length - 1 ? "rounded-md" : "",
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
                      checked ? "text-indigo-900" : "text-gray-900",
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
  );
};

export default DataFormatSetting;
