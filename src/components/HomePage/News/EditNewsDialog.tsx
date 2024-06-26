import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

import { motion } from "framer-motion";
import { HiPencil } from "react-icons/hi2";
import EditNewsButton from "./EditNewsButton";
import NewsSourceButton from "./NewsSourceButton";
import NewsSourceButtonGroup from "./NewsSourceButtonGroup";

const secondaryVariants = {
  initial: { display: "none" },
  hover: { display: "flex" },
};

const EditNewsDialog = () => {
  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <EditNewsButton openModal={openModal}/>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-slate-100  text-rose-950 p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 "
                  >
                    News Preferences
                  </Dialog.Title>
                  <div className="mt-2">
                  <div className="flex flex-row justify-between items-center text-sm text-slate-500">
                      <div className="flex">
                        <p>Units</p>
                      </div>
                      <NewsSourceButtonGroup setUnits={undefined}/>
                    </div>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-rose-900 hover:bg-rose-950 text-rose-300 px-4 py-2 text-sm font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Save Changes
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default EditNewsDialog;
