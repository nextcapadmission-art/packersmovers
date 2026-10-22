import {
  Home,
  Building2,
  Package,
  Car,
  MapPin,
  Truck,
  Warehouse,
  Users,
  FileText,
  ShieldCheck,
  Clock,
  Smartphone,
  BadgeIndianRupee,
  Phone,
  ClipboardCheck,
  Award,
  BadgeCheck,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Home,
  Building2,
  Package,
  Car,
  MapPin,
  Truck,
  Warehouse,
  Users,
  FileText,
  ShieldCheck,
  Clock,
  Smartphone,
  BadgeIndianRupee,
  Phone,
  ClipboardCheck,
  Award,
  BadgeCheck,
};

export function getIcon(name: string): LucideIcon {
  return iconMap[name] ?? Package;
}
