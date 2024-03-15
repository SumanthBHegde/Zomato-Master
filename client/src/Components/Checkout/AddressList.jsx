import { useState } from "react";
import { RadioGroup } from "@headlessui/react";

export default function AddressList(props) {
  // State to track the selected address
  const [selected, setSelected] = useState(props.address[0]);

  return (
    <div className="w-full px-4 ">
      <div className="w-full max-w-md mx-auto">
        {/* Radio group to manage address selection */}
        <RadioGroup value={selected} onChange={setSelected}>
          {/* Label for screen readers */}
          <RadioGroup.Label className="sr-only">Server size</RadioGroup.Label>
          <div className="space-y-2">
            {/* Mapping over the address list */}
            {props.address.map((item) => (
              <RadioGroup.Option
                key={item.name}
                value={item}
                // Styling for each radio option
                className={({ active, checked }) =>
                  `${
                    active
                      ? "ring-2 ring-offset-2 ring-offset-zomato-300 ring-white ring-opacity-60"
                      : ""
                  }
                  ${
                    checked
                      ? "bg-zomato-100 bg-opacity-75 text-zomato-600"
                      : "bg-white"
                  }
                    relative rounded-lg shadow-md px-5 py-4 cursor-pointer flex focus:outline-none`
                }
              >
                {({ active, checked }) => (
                  <>
                    {/* Address details */}
                    <div className="flex items-center justify-between w-full">
                      <div className="flex items-center">
                        <div className="text-sm">
                          {/* Address name */}
                          <RadioGroup.Label
                            as="p"
                            className={`font-medium  ${
                              checked ? "text-zomato-600" : "text-gray-900"
                            }`}
                          >
                            {item.name}
                          </RadioGroup.Label>
                          {/* Address description */}
                          <RadioGroup.Description
                            as="span"
                            className={`inline ${
                              checked ? "text-zomato-500" : "text-gray-500"
                            }`}
                          >
                            <span>{item.address}</span>
                          </RadioGroup.Description>
                        </div>
                      </div>
                      {/* Checkmark icon for selected address */}
                      {checked && (
                        <div className="flex-shrink-0 text-white">
                          <CheckIcon className="w-6 h-6" />
                        </div>
                      )}
                    </div>
                  </>
                )}
              </RadioGroup.Option>
            ))}
          </div>
        </RadioGroup>
      </div>
    </div>
  );
}

// Checkmark icon component
function CheckIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      {/* Circle background */}
      <circle cx={12} cy={12} r={12} fill="#fff" opacity="0.2" />
      {/* Checkmark */}
      <path
        d="M7 13l3 3 7-7"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
