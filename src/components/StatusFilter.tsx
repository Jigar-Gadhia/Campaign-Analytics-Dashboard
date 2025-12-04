import { Menu, MenuButton, MenuItem, MenuItems, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { Fragment } from "react";

type StatusType = "" | "Active" | "Paused";

interface Props {
  status: StatusType;
  setStatus: (value: StatusType) => void;
}

const options: StatusType[] = ["", "Active", "Paused"];

export const StatusFilter = ({ status, setStatus }: Props) => {
  const label = status === "" ? "All" : status;

  return (
    <div className="relative inline-block text-left w-full sm:w-auto">
      <Menu as="div" className="w-full">
        {/* Button */}
        <MenuButton
          className="
            w-full sm:w-40 
            flex items-center justify-between 
            px-4 py-2 text-sm font-medium
            bg-white/10 backdrop-blur-md
            text-white
            rounded-lg
            hover:bg-white/20 
            transition
          "
        >
          <span>{label}</span>
          <ChevronDownIcon className="h-4 w-4" />
        </MenuButton>

        {/* Dropdown Panel */}
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <MenuItems
            className="
              absolute z-20 mt-2 
              w-full sm:w-40 
              origin-top-right
              rounded-lg 
              bg-gray-800 shadow-lg 
              ring-1 ring-black ring-opacity-5 
              focus:outline-none
            "
          >
            {options.map((item) => (
              <MenuItem key={item}>
                {({ active }) => {
                  const label = item === "" ? "All" : item;
                  return (
                    <button
                      onClick={() => setStatus(item)}
                      className={`
                        w-full text-left px-4 py-2 text-sm text-white
                        ${active ? "bg-gray-600" : ""}
                      `}
                    >
                      {label}
                    </button>
                  );
                }}
              </MenuItem>
            ))}
          </MenuItems>
        </Transition>
      </Menu>
    </div>
  );
};
