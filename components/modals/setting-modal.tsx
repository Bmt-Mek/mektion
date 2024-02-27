"use client";

import { useSettings } from "@/hooks/use-setting";
import { ModeToggle } from "../mode-toggle";
import { Dialog, DialogContent, DialogHeader } from "../ui/dialog";
import { Label } from "@radix-ui/react-dropdown-menu";

ModeToggle;

export const SettingModal = () => {
  const settings = useSettings();

  return (
    <Dialog open={settings.isOpen} onOpenChange={settings.onClose}>
      <DialogContent>
        <DialogHeader className="border-b pb-3">
          <h2 className=" text-lg font-medium">My settings</h2>
        </DialogHeader>
        <div className=" flex items-center justify-between">
          <div className="flex flex-col gap-y-1">
            <Label>Apperance</Label>
            <span className="text-[0.8rem] text-muted-foreground">
              Customized how Mektion looks on your device
            </span>
          </div>
          <ModeToggle></ModeToggle>
        </div>
      </DialogContent>
    </Dialog>
  );
};
