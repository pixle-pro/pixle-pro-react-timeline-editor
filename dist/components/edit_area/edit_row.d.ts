import React, { FC } from 'react';
import { TimelineRow } from '../../interface/action';
import { CommonProp } from '../../interface/common_prop';
import { DragLineData } from './drag_lines';
import './edit_row.less';
export type EditRowProps = CommonProp & {
    areaRef: React.MutableRefObject<HTMLDivElement>;
    rowData?: TimelineRow;
    style?: React.CSSProperties;
    dragLineData: DragLineData;
    setEditorData: (params: TimelineRow[]) => void;
    /** 距离左侧滚动距离 */
    scrollLeft: number;
    /** 设置scroll left */
    deltaScrollLeft: (scrollLeft: number) => void;
};
export declare const EditRow: FC<EditRowProps>;
