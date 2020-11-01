import React, {
  CSSProperties,
  PropsWithChildren,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import './TransparentAccordion.css';

interface Props {
  arrowPosition?: 'bottom' | 'left';
  header?: string;
  open?: boolean;
  additionalHeightPx?: number;
}

function TransparentAccordion({
  arrowPosition = 'bottom',
  header,
  open = false,
  additionalHeightPx = 0,
  children,
}: PropsWithChildren<Props>) {
  const [childrenRef, setChildrenRef] = useState<HTMLDivElement | null>(null);
  const [height, setHeight] = useState<number>(0);
  const [opened, setOpened] = useState(open);
  useEffect(() => {
    const handleHeightChange = () => {
      setHeight(
        opened && childrenRef
          ? childrenRef.scrollHeight + additionalHeightPx
          : 0
      );
    };
    handleHeightChange();
    window.addEventListener('resize', handleHeightChange);
    return () => {
      window.removeEventListener('resize', handleHeightChange);
    };
  }, [opened, childrenRef]);

  const flexProps: CSSProperties = useMemo(() => {
    switch (arrowPosition) {
      case 'bottom':
        return {
          flexDirection: 'column-reverse',
        };
      case 'left':
        return {
          flexDirection: 'row',
          justifyItems: 'center',
        };
    }
  }, [arrowPosition]);

  const handleClick = () => setOpened(!opened)

  return (
    <div className="TransparentAccordion" style={flexProps}>
      <div
        className="accordion-arrow-container switching-opacity switch-opacity-a-lot"
        onClick={handleClick}>
        <div
          className={`accordion-arrow-content ${
            opened ? `accordion-arrow-content-flipped` : ''
          }`}>
          {'|>'}
        </div>
      </div>
      <div className='accordion'>
        {header ? <div onClick={handleClick} className='accordion-header'>{header}</div> : null}
        <div
          className="accordion-content"
          style={{
            height: `${height}px`,
          }}>
          <div ref={setChildrenRef}>{children}</div>
        </div>
      </div>
    </div>
  );
}

export default TransparentAccordion;
