// logos
export { default as Logo } from "./Logo";
export { default as Twitter } from "./Twitter";
export { default as Discord } from "./Discord";
export { default as MagicEden } from "./MagicEden";
export { default as OpenSea } from "./OpenSea";
// animated
export { default as AnimatedStraight } from "./AnimatedStraight";
export { default as AnimatedGuitar } from "./AnimatedGuitar";
// artifacts
export { default as Blob } from "./Blob";
export { default as Blob2 } from "./BlobTwo";

/**
 * Aim for all SVGs to have these params
 */
export type SVGIconParams = {
  width?: number | string;
  height?: number | string;
  className?: string;
};

/**
 * Aim for all animated SVGs using a foreground mask to have these params
 */
export type AnimatedSVGIconParams = {
  width?: number | string;
  height?: number | string;
  strokeWidth: number;
  animationSpeed?: number;
  className?: string;
};
