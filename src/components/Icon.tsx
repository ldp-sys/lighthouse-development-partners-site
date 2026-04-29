import {
  Briefcase,
  Building2,
  CheckCircle2,
  CircleDollarSign,
  Compass,
  Factory,
  FileText,
  Globe2,
  Handshake,
  Home,
  Landmark,
  Leaf,
  LockKeyhole,
  Map,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
  Waves
} from "lucide-react";
import type { IconName } from "@/data/site";

const icons = {
  building: Building2,
  briefcase: Briefcase,
  chart: CircleDollarSign,
  check: CheckCircle2,
  city: Landmark,
  compass: Compass,
  factory: Factory,
  file: FileText,
  globe: Globe2,
  handshake: Handshake,
  home: Home,
  leaf: Leaf,
  lock: LockKeyhole,
  map: Map,
  shield: ShieldCheck,
  spark: Sparkles,
  target: Target,
  users: Users,
  waves: Waves
};

type IconProps = {
  name: IconName;
  className?: string;
  "aria-hidden"?: boolean;
};

export function Icon({ name, className, ...props }: IconProps) {
  const Component = icons[name];
  return <Component className={className} strokeWidth={1.8} {...props} />;
}
