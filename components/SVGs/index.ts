export { default as Logo } from "./Logo";
export { default as Twitter } from "./Twitter";
export { default as Discord } from "./Discord";
export { default as MagicEden } from "./MagicEden";
export { default as AnimatedStraight } from "./AnimatedStraight";
export { default as AnimatedGuitar } from "./AnimatedGuitar";

/**
 * Aim for all SVGs to have these params
 */
export type SVGIconParams = {
  width: number;
  height: number;
  className?: string;
};

/**
 * Aim for all animated SVGs using a foreground mask to have these params
 */
export type AnimatedSVGIconParams = {
  height?: number;
  strokeWidth: number;
  animationSpeed?: number;
  className?: string;
};
