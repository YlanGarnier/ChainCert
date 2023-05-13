import { useEffect, useRef } from 'react';
import './textResize.scss';

interface OneLineTextProps {
  text: string;
  containerRef: React.RefObject<HTMLDivElement>;
  baseFontSize?: string;
}

const OneLineText: React.FC<OneLineTextProps> = ({ text, containerRef, baseFontSize }) => {
  const textRef = useRef<HTMLParagraphElement>(null);

  const adjustFontSize = () => {
    if (!containerRef.current || !textRef.current) return;

    textRef.current.style.fontSize = baseFontSize as string;

    const containerWidth = containerRef.current.offsetWidth;
    const textWidth = textRef.current.scrollWidth;

    if (textWidth > containerWidth) {
      const fontSize = parseFloat(window.getComputedStyle(textRef.current).fontSize);
      const newFontSize = fontSize * (containerWidth / textWidth);
      textRef.current.style.fontSize = `${newFontSize}px`;
    }
  };

  useEffect(() => {
    if (textRef.current) {
      textRef.current.style.fontSize = baseFontSize as string;
    }
    adjustFontSize();
    window.addEventListener('resize', adjustFontSize);

    return () => {
      window.removeEventListener('resize', adjustFontSize);
    };
  }, [text, containerRef, baseFontSize]);

  return (
    <p className="text" ref={textRef}>{text}</p>
  );
};

export default OneLineText;
