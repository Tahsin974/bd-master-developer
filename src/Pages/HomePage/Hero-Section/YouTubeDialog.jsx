import { Dialog, DialogPanel } from "@headlessui/react";

const YouTubeDialog = ({ setOpen, Open }) => {
  return (
    <Dialog
      open={Open}
      as="div"
      className="relative z-50 focus:outline-none rounded-none"
      onClose={() => setOpen(false)}
    >
      <div className="fixed inset-0 z-10  overflow-y-auto ">
        <div className="flex min-h-screen items-center justify-center ">
          <DialogPanel
            transition
            className="min-h-screen w-screen  bg-black/40 p-6 backdrop-blur-xl duration-200 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
          >
            <div>
              <button
                onClick={() => setOpen(false)}
                className="btn bg-white border-white shadow-none text-[#1D2345] mb-4"
              >
                X
              </button>
              <div className="flex justify-center items-center">
                <iframe
                  src="https://www.youtube.com/embed/g6l9UYJq7Go?si=0JacQaXXeSRzI6xx"
                  className="w-[900px] h-[500px]"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="YouTube video player"
                />
              </div>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
};

export default YouTubeDialog;
