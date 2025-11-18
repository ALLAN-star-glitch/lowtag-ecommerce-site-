import { FloatingShape } from "../common/floatingShape";
import { TrustItem } from "./trustItem";

export type HeroSectionProps = {
  gradientFrom: string;
  gradientVia: string;
  gradientTo: string;

  floatingShapes: FloatingShape[];

  bannerText: string;
  bannerColor: string;

  heading: string;
  highlight: string;
  highlightColor: string;

  subtext: string;

  trustIndicators: TrustItem[];

  imageUrl: string;
};