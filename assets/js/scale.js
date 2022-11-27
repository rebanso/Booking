const SCALE_FACTOR = 3;

const numberWithinRange = (number, min, max) =>
  Math.min(Math.max(number, min), max);

const calculateScaleTransforms = (embla) => {
  const engine = embla.internalEngine();
  const scrollProgress = embla.scrollProgress();

  return embla.scrollSnapList().map((scrollSnap, index) => {
    if (!embla.slidesInView().includes(index)) return 0;
    let diffToTarget = scrollSnap - scrollProgress;

    if (engine.options.loop) {
      engine.slideLooper.loopPoints.forEach((loopItem) => {
        const target = loopItem.getTarget();
        if (index === loopItem.index && target !== 0) {
          const sign = Math.sign(target);
          if (sign === -1) diffToTarget = scrollSnap - (1 + scrollProgress);
          if (sign === 1) diffToTarget = scrollSnap + (1 - scrollProgress);
        }
      });
    }
    const scale = 1 - Math.abs(diffToTarget * SCALE_FACTOR);
    return numberWithinRange(scale, 0, 1);
  });
};

export const scale = (embla) => {
  const slides = embla.slideNodes();
  const layers = slides.map((s) => s.querySelector(".embla__slide__inner"));

  const applyScaleStyles = () => {
    const scaleTransforms = calculateScaleTransforms(embla);
    scaleTransforms.forEach((transform, index) => {
      layers[index].style.transform = `scale(${transform})`;
    });
  };

  return applyScaleStyles;
};
