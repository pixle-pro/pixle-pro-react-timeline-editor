import { DragEvent, ResizeEvent } from '@interactjs/types/index';
export declare function useAutoScroll(target: React.MutableRefObject<HTMLDivElement>): {
    initAutoScroll: () => void;
    dealDragAutoScroll: (e: DragEvent, deltaScroll?: (delta: number) => void) => boolean;
    dealResizeAutoScroll: (e: ResizeEvent, dir: "left" | "right", deltaScroll?: (delta: number) => void) => boolean;
    stopAutoScroll: () => void;
};
