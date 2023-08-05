import { Dialog, Transition } from "@headlessui/react";
import { MessageDots } from "@styled-icons/boxicons-regular";
import { Fragment, useState } from "react";
import FeedbackForm from "../Forms/FeedbackForm";
export default function FeedbackModal() {
  const [isOpen, setIsOpen] = useState(false);

  function handleToggleModal() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="p-2 border-t border-dark-border">
      <button
        onClick={handleToggleModal}
        className="w-full flex items-center justify-center gap-2 text-sm bg-brand-green/5 text-brand-green p-2 rounded hover:bg-brand-green/10 transition-colors"
      >
        <MessageDots width={18} />
        Feedback
      </button>

      <Transition appear show={isOpen}>
        <Dialog as="div" onClose={handleToggleModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/50" />
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
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden border border-dark-border rounded-md bg-dark-contrast p-6 text-left align-middle shadow-xl transition-all">
                  <FeedbackForm />

                  <div className="mt-4">
                    <button
                      type="button"
                      className="w-full rounded-md bg-dark-secondary py-2 font-medium text-zinc-500 hover:bg-red-500/10 hover:text-red-500/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={handleToggleModal}
                    >
                      Cancelar
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
}
