import { DraggableOptions } from "@interactjs/actions/drag/plugin";
import { ResizableOptions } from "@interactjs/actions/resize/plugin";
import { Interactable } from "@interactjs/types";
import { FC } from "react";
export declare const InteractComp: FC<{
    interactRef?: React.MutableRefObject<Interactable>;
    draggable: boolean;
    draggableOptions: DraggableOptions;
    resizable: boolean;
    resizableOptions: ResizableOptions;
}>;
