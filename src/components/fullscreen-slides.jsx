import * as React from "react";
import { Box, Fade } from "@mui/material";
import { clsx } from "clsx";

function FullscreenSlides({ images }) {
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    if (!images?.length) {
      return;
    }
    const timer = setInterval(() => {
      setCurrent((i) => {
        const next = i + 1;
        return next < images.length ? next : 0;
      });
    }, 5000);

    return () => clearInterval(timer);
  }, [images]);

  return (
    <Box
      sx={{
        position: "relative",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        "& > *": {
          flexGrow: 1,
        },
      }}
    >
      {images?.map((src, index) => (
        <Slide key={src} img={src} active={index === current} />
      ))}
    </Box>
  );
}

const Slide = React.forwardRef(({ img, active = false }, ref) => {
  return (
    <Box
      ref={ref}
      className={clsx({ active: active })}
      sx={{
        opacity: 0,
        position: "absolute",
        inset: 0,
        backgroundImage: `url(${img})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        transition: "opacity 1s",
        "&.active": {
          opacity: 1,
          transition: "opacity 1s",
        },
      }}
    />
  );
});

export { FullscreenSlides };
