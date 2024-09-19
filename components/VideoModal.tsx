import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "../components/ui/dialog";

const VideoModal = ({ videoSrc }: { videoSrc: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      {/* Button to trigger modal */}
      <button
        onClick={openModal}
      >
        Demo Video
      </button>

      {/* Modal structure */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle>Video Player</DialogTitle>
            <DialogClose />
          </DialogHeader>

          {/* Video Content */}
          <div className="relative w-full h-64">
            <video className="w-full h-full rounded-md" controls autoPlay>
              <source src={videoSrc} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default VideoModal;
