import { FC } from "react";
import './drag_lines.less';
export interface DragLineData {
    isMoving: boolean;
    movePositions: number[];
    assistPositions: number[];
}
export type DragLineProps = DragLineData & {
    scrollLeft: number;
};
/** 拖拽辅助线 */
export declare const DragLines: FC<DragLineProps>;
