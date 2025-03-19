import { parserPixelToTime } from '@/utils/deal_data';
import React, { FC, useEffect, useRef } from 'react';
import { AutoSizer, Grid, GridCellRenderer, OnScrollParams } from 'react-virtualized';
import { CommonProp } from '../../interface/common_prop';
import { prefix } from '../../utils/deal_class_prefix';
import './time_area.less';

/** 动画时间轴组件参数 */
export type TimeAreaProps = CommonProp & {
  /** 左侧滚动距离 */
  scrollLeft: number;
  /** 滚动回调，用于同步滚动 */
  onScroll: (params: OnScrollParams) => void;
  /** 设置光标位置 */
  setCursor: (param: { left?: number; time?: number }) => void;

  comments: any;

  handleCommentClick: (commentId: string) => void;
};

/** 动画时间轴组件 */
export const TimeArea: FC<TimeAreaProps> = ({ setCursor, maxScaleCount, hideCursor, scale, scaleWidth, scaleCount, scaleSplitCount, startLeft, scrollLeft, onClickTimeArea, getScaleRender, comments, handleCommentClick }) => {
  const gridRef = useRef<Grid>();
  const commentDotsRef = useRef<Map<string, HTMLElement>>(new Map());

  /** 是否显示细分刻度 */
  const showUnit = scaleSplitCount > 0;

  // Helper function to check if a point is inside a circle
  const isPointInCircle = (x: number, y: number, circleX: number, circleY: number, radius: number) => {
    const dx = x - circleX;
    const dy = y - circleY;
    return dx * dx + dy * dy <= radius * radius;
  };

  // Register comment dots for later hit testing
  const registerCommentDot = (element: HTMLElement, commentId: string) => {
    commentDotsRef.current.set(commentId, element);
  };

  /** 获取每个cell渲染内容 */
  const cellRenderer: GridCellRenderer = ({ columnIndex, key, style }) => {
    const isShowScale = showUnit ? columnIndex % scaleSplitCount === 0 : true;
    const classNames = ['time-unit'];
    if (isShowScale) classNames.push('time-unit-big');
    const item = (showUnit ? columnIndex / scaleSplitCount : columnIndex) * scale;
    const commentsInRange = comments.filter(comment => Math.floor(comment.timestamp) === item);

    return (
      <div key={key} style={style} className={prefix(...classNames)}>
        {isShowScale && <div className={prefix('time-unit-scale')}>{getScaleRender ? getScaleRender(item) : item}</div>}
        {commentsInRange.map(comment => (
          <div
            key={comment.id}
            className={prefix('comment-dot')}
            data-comment-id={comment.id}
            ref={(el) => el && registerCommentDot(el, comment.id)}
            style={{
              position: 'absolute',
              top: '-23px',
              left: '50%',
              //transform: 'translateX(-50%)',
              width: '10px',
              height: '10px',
              backgroundColor: '#6A58A5',
              borderRadius: '50%',
              cursor: 'pointer',
              zIndex: 1000,
              //pointerEvents: 'all',
              //pointerEvents: 'auto'
            }}
/*
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              console.log(`Clicked on comment at ${comment.timestamp}s`);
              handleCommentClick(comment.id);
            }}
*/
          />
        ))}
      </div>
    );
  };

  useEffect(() => {
    gridRef.current?.recomputeGridSize();
    commentDotsRef.current.clear();
  }, [scaleWidth, startLeft]);

  /** 获取列宽 */
  const getColumnWidth = (data: { index: number }) => {
    switch (data.index) {
      case 0:
        return startLeft;
      default:
        return showUnit ? scaleWidth / scaleSplitCount : scaleWidth;
    }
  };
  const estColumnWidth=getColumnWidth({index:1});
  return (
    <div className={prefix('time-area')}>
      <AutoSizer>
        {({ width, height }) => {
          return (
            <>
              <Grid
                ref={gridRef}
                columnCount={showUnit ? scaleCount * scaleSplitCount + 1 : scaleCount}
                columnWidth={getColumnWidth}
                estimatedColumnSize={estColumnWidth}
                rowCount={1}
                rowHeight={height}
                width={width}
                height={height}
                overscanRowCount={0}
                overscanColumnCount={10}
                cellRenderer={cellRenderer}
                scrollLeft={scrollLeft}
              ></Grid>
              <div
                style={{ width, height }}
                onClick={(e) => {
                  const clickX = e.clientX;
                  const clickY = e.clientY;

                  // Check if the click hits any comment dot
                  let hitCommentId: string | null = null;

                  commentDotsRef.current.forEach((dotElement, commentId) => {
                    const rect = dotElement.getBoundingClientRect();
                    const centerX = rect.left + rect.width / 2;
                    const centerY = rect.top + rect.height / 2;
                    const radius = rect.width / 2;

                    if (isPointInCircle(clickX, clickY, centerX, centerY, radius)) {
                      hitCommentId = commentId;
                    }
                  });

                  if (hitCommentId) {
                    // We hit a comment dot
                    console.log(`Clicked on comment ${hitCommentId}`);
                    handleCommentClick(hitCommentId);
                    return;
                  }
                  if (hideCursor) return;
                  const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
                  const position = e.clientX - rect.x;
                  const left = Math.max(position + scrollLeft, startLeft);
                  if (left > maxScaleCount * scaleWidth + startLeft - scrollLeft) return;

                  const time = parserPixelToTime(left, { startLeft, scale, scaleWidth });
                  const result = onClickTimeArea && onClickTimeArea(time, e);
                  if (result === false) return; // Block cursor update if needed
                  setCursor({ time });
                }}
                className={prefix('time-area-interact')}
              ></div>
            </>
          );
        }}
      </AutoSizer>
    </div>
  );
};
