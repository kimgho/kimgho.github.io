"use client";

import { AlertCircle, Info, AlertTriangle, CheckCircle } from "lucide-react";

type CalloutType = "info" | "warning" | "danger" | "success";

interface CalloutProps {
  type?: CalloutType;
  title?: string;
  children: React.ReactNode;
}

const calloutConfig: Record<
  CalloutType,
  {
    icon: React.ElementType;
    bgColor: string;
    borderColor: string;
    textColor: string;
    titleColor: string;
    iconColor: string;
  }
> = {
  info: {
    icon: Info,
    bgColor: "bg-blue-50",
    borderColor: "border-blue-500",
    textColor: "text-blue-900",
    titleColor: "text-blue-800",
    iconColor: "text-blue-600",
  },
  warning: {
    icon: AlertTriangle,
    bgColor: "bg-amber-50",
    borderColor: "border-amber-500",
    textColor: "text-amber-900",
    titleColor: "text-amber-800",
    iconColor: "text-amber-600",
  },
  danger: {
    icon: AlertCircle,
    bgColor: "bg-red-50",
    borderColor: "border-red-500",
    textColor: "text-red-900",
    titleColor: "text-red-800",
    iconColor: "text-red-600",
  },
  success: {
    icon: CheckCircle,
    bgColor: "bg-emerald-50",
    borderColor: "border-emerald-500",
    textColor: "text-emerald-900",
    titleColor: "text-emerald-800",
    iconColor: "text-emerald-600",
  },
};

export function Callout({ type = "info", title, children }: CalloutProps) {
  const config = calloutConfig[type];
  const Icon = config.icon;

  return (
    <aside
      className={`my-2 rounded-lg border-l-4 p-4 ${config.bgColor} ${config.borderColor}`}
      role="note"
    >
      {title && (
        <div className="flex items-center gap-2">
          <Icon className={`h-5 w-5 shrink-0 ${config.iconColor}`} aria-hidden="true" />
          <p className={`font-semibold leading-tight ${config.titleColor}`}>{title}</p>
        </div>
      )}
      <div className={`text-sm leading-relaxed ${config.textColor}`}>{children}</div>
    </aside>
  );
}
