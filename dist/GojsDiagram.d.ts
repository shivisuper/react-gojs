import * as React from 'react';
import * as go from 'gojs';
import { Diagram, ObjectData } from 'gojs';
import { DiagramModel, BaseNodeModel, LinkModel } from './model';
import { ModelChangeEvent } from './modelChangeEvent';
import { DiagramNotificationDelegate } from './modelChangedhandler';
export interface GojsDiagramProps<N extends BaseNodeModel, L extends LinkModel> {
    model: DiagramModel<N, L>;
    createDiagram: (id: string) => Diagram;
    diagramId: string;
    className: string;
    onDropHandler?: (event: React.DragEvent<HTMLDivElement>) => void;
    onModelChange?: (event: ModelChangeEvent<N, L>) => void;
    linkFromPortIdProperty?: string;
    linkToPortIdProperty?: string;
    nodeCategoryProperty?: string;
    linkKeyProperty?: string;
    makeUniqueKeyFunction?: () => go.Key;
    makeUniqueLinkKeyFunction?: () => go.Key;
    copyNodeDataFunction?: (data: ObjectData, model: go.Model) => ObjectData;
    updateDiagramProps?: (myDiagram: Diagram) => void;
}
export interface GojsModel extends go.Model {
    linkDataArray: ObjectData[];
    addLinkDataCollection: (links: ObjectData[]) => void;
    removeLinkDataCollection: (links: ObjectData[]) => void;
    addLinkData: (link: ObjectData) => void;
    removeLinkData: (link: ObjectData) => void;
}
declare class GojsDiagram<N extends BaseNodeModel, L extends LinkModel>
    extends React.PureComponent<GojsDiagramProps<N, L>>
    implements DiagramNotificationDelegate<N, L> {
    private myDiagram;
    private eventsToDispatch;
    private modelChangedHandlers;
    constructor(props: GojsDiagramProps<N, L>);
    componentDidMount(): void;
    componentWillUnmount(): void;
    componentDidUpdate(): void;
    init(): void;
    render(): JSX.Element;
    enqueueEvent(event: ModelChangeEvent<N, L>): void;
    clear(): void;
    dispatchAll(): void;
    private dragOverHandler;
    private modelChangedHandler;
    private applyAddRemoveNodesFromModel;
    private applyAddRemoveLinksFromModel;
    private applyUpdatesFromModel;
}
export default GojsDiagram;
