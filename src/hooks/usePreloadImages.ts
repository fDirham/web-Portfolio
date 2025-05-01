import { useEffect } from "preact/hooks";

export default function usePreloadImages(srcList: string[]) {
  useEffect(() => {
    srcList.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  return null;
}
