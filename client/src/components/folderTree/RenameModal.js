import React, { Fragment, useState, useEffect } from "react";
import { connect } from "react-redux";
import { Dialog, Transition } from "@headlessui/react";
import { updateFolderRequest } from "../../state/Folder/thunks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/pro-regular-svg-icons";

const RenameModal = ({ folder, updateFolder }) => {
  const [title, setTitle] = useState(folder.title);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (folder._id) {
      setTitle(folder.title);
    }

    const handleClick = () => {
      if (!open) {
        document.addEventListener("click", handleOutsideClick, false);
      } else {
        document.removeEventListener("click", handleOutsideClick, false);
      }
    };

    const handleOutsideClick = (e) => {
      if (!this.node.contains(e.target)) handleClick();
    };
  }, [folder._id, folder.title, open]);

  return (
    <div className="relative w-full">
      <button
        onClick={(e) => {
          e.preventDefault();
          if (folder._id) {
            setOpen(true);
          }
        }}
        type="button"
        className="relative w-full flex align-bottom items-center px-5 mb-4 w-1/2 py-2 border border-transparent shadow-sm text-sm leading-4 font-medium rounded--tl-md text-white bg-indigo-600 border-indigo-300 dark:bg-gray-600 dark:border-4 dark:border-gray-300 dark:text-gray-300"
      >
        <FontAwesomeIcon
          icon={faEdit}
          className="-ml-1 mr-2 h-6 w-6"
          fixedWidth
        />
        Rename
      </button>
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          static
          className="fixed z-10 inset-0 overflow-y-auto"
          open={open}
          onClose={setOpen}
        >
          <div
            id="modalDiv"
            className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
          >
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <div
                role="none"
                className="inline-block align-bottom bg-white dark:bg-gray-500 dark:text-gray-300 rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6"
              >
                <form
                  id="modalForm"
                  onSubmit={(e) => {
                    e.preventDefault();
                    updateFolder({ ...folder, title: title });
                    setTitle(folder.title);
                    setOpen(false);
                  }}
                >
                  <div>
                    <div className="mt-3 text-center sm:mt-5">
                      <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-gray-400">
                        Please choose a new name for this folder.
                      </h3>
                      <div className="mt-1 flex rounded-md shadow-sm h-8">
                        <input
                          onChange={(e) => setTitle(e.target.value)}
                          value={title}
                          type="text"
                          name="title"
                          id="title"
                          autoComplete="title"
                          className="flex-1 focus:ring-indigo-500 focus:border-indigo-500 dark:focus:ring-gray-300 dark:focus:border-gray-300 block min-w-0 rounded-none rounded-md sm:text-sm border-gray-300 dark:bg-gray-500 dark:text-gray-300 pl-1"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mt-5 sm:mt-6">
                    <button
                      type="submit"
                      className="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
                    >
                      Rename
                    </button>
                  </div>
                </form>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </div>
  );
};

const mapStateToProps = (state) => ({
  folder: state.folder,
});

const mapDispatchToProps = (dispatch) => ({
  updateFolder: (folder) => dispatch(updateFolderRequest(folder)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RenameModal);
