import sharinganTexture from "@/assets/sharingan.png";
import { cn } from "@/lib/utils";

type SharinganVariant = "static" | "slowSpin" | "hero";

interface SharinganEyeProps {
  size?: number;
  className?: string;
  variant?: SharinganVariant;
}

export default function SharinganEye({
  size = 50,
  className,
  variant = "static",
}: SharinganEyeProps) {
  return (
    <div
      className={cn(
        "relative flex items-center justify-center rounded-full overflow-hidden",
        className
      )}
      style={{ width: size, height: size }}
    >
      {/* Blue/Purple Chakra Glow */}
      <div className="absolute inset-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-20 blur-2xl" />

      {/* Red Aura */}
      <div
        className={cn(
          "absolute inset-0 rounded-full bg-red-600/70 blur-xl opacity-60",
          variant === "hero" && "animate-[pulse_2s_ease-in-out_infinite]"
        )}
      />

      {/* Inner Glow */}
      <div className="absolute inset-[14%] rounded-full bg-red-500/40 blur-md" />

      {/* Sharingan Image */}
      <img
        src={sharinganTexture}
        alt="Sharingan"
        className={cn(
          "relative z-10 w-full h-full rounded-full object-cover drop-shadow-[0_0_25px_rgba(255,0,0,0.9)]",
          variant === "slowSpin" && "animate-[spin_14s_linear_infinite]",
          variant === "hero" && "animate-[spin_10s_linear_infinite]"
        )}
      />
    </div>
  );
}