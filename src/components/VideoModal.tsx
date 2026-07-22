import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

interface VideoModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  youtubeId?: string;
  videoSrc?: string;
  title?: string;
}

const VideoModal = ({
  open,
  onOpenChange,
  youtubeId,
  videoSrc,
  title = "Platform walkthrough",
}: VideoModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl p-0 bg-black border-0 overflow-hidden">
        <VisuallyHidden>
          <DialogTitle>{title}</DialogTitle>
        </VisuallyHidden>
        <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
          {open && youtubeId && !videoSrc && (
            <iframe
              className="absolute inset-0 w-full h-full"
              src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0`}
              title={title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          )}
          {open && videoSrc && (
            <video
              className="absolute inset-0 w-full h-full"
              src={videoSrc}
              controls
              autoPlay
              playsInline
              title={title}
            />
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default VideoModal;
