import React from "react";
import {
  ShieldCheck,
  Store,
  Zap,
  Cpu,
  Crown,
  TrendingUp,
  Star,
} from "lucide-react";

export type BadgeType =
  | "warranty"
  | "official-store"
  | "fast-charge"
  | "high-performance"
  | "exclusive"
  | "top-rated"
  | "trending";

interface ProductBadgeProps {
  type: BadgeType;
  className?: string;
}

const badgeConfig = {
  warranty: {
    label: "1–2 Year Warranty",
    icon: ShieldCheck,
    bgColor: "bg-blue-600",
    textColor: "text-white",
  },
  "official-store": {
    label: "Official Store",
    icon: Store,
    bgColor: "bg-purple-600",
    textColor: "text-white",
  },
  "fast-charge": {
    label: "Fast Charging",
    icon: Zap,
    bgColor: "bg-yellow-400",
    textColor: "text-black",
  },
  "high-performance": {
    label: "High Performance",
    icon: Cpu,
    bgColor: "bg-gray-900",
    textColor: "text-white",
  },
  exclusive: {
    label: "Exclusive Drop",
    icon: Crown,
    bgColor: "bg-amber-500",
    textColor: "text-white",
  },
  "top-rated": {
    label: "Top Rated",
    icon: Star,
    bgColor: "bg-green-600",
    textColor: "text-white",
  },
  trending: {
    label: "Trending",
    icon: TrendingUp,
    bgColor: "bg-red-500",
    textColor: "text-white",
  },
};

export default function ProductBadge({
  type,
  className = "",
}: ProductBadgeProps) {
  const config = badgeConfig[type];
  const Icon = config.icon;

  return (
    <div
      className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${config.bgColor} ${config.textColor} ${className}`}
    >
      <Icon className="w-3 h-3" />
      <span>{config.label}</span>
    </div>
  );
}
