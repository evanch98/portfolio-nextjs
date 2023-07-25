export interface projectCardVariants {
  initial?: projectCardVariantsInitial;
  animate?: projectCardVariantsAnimate;
  hover?: projectCardVariantsHover;
}

export interface projectCardVariantsInitial {
  x?: number;
  y?: number;
  transition?: { duration: number };
}

export interface projectCardVariantsAnimate {
  x?: number;
  y?: number;
  transition?: { duration: number };
}

export interface projectCardVariantsHover {
  x?: number;
  y?: number;
  transition?: { duration: number };
}
