import SharinganEye from "@/components/SharinganEye";

interface Props {
  className?: string;
  spin?: boolean;
}

export const SharinganLogo = ({ className = "", spin = false }: Props) => {
  return <SharinganEye className={className} variant={spin ? "slowSpin" : "static"} />;
};
