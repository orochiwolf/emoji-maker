'use client';

import { Switch } from "@/components/ui/switch";
import { useApiMode } from "@/store/provider";
import { useStore } from "zustand";

export function ApiModeSwitch() {
  const store = useApiMode();
  const { useRealApi, toggleApiMode } = useStore(store);

  return (
    <div className="flex items-center gap-2">
      <span className="text-sm text-gray-600">Mock API</span>
      <Switch
        checked={useRealApi}
        onCheckedChange={toggleApiMode}
        className="data-[state=checked]:bg-blue-600"
      />
      <span className="text-sm text-gray-600">Real API</span>
    </div>
  );
} 