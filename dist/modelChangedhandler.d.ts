import { ChangedEvent } from 'gojs';
import { BaseNodeModel, LinkModel, DiagramModel } from '.';
import { ModelChangeEvent } from './modelChangeEvent';
export interface ModelChangedHandler<N extends BaseNodeModel, L extends LinkModel> {
    canHandle: (evt: ChangedEvent) => boolean;
    handle: (
        evt: ChangedEvent,
        model: DiagramModel<N, L>,
        diagramNotificationDelegate: DiagramNotificationDelegate<N, L>
    ) => void;
}
export interface DiagramNotificationDelegate<N extends BaseNodeModel, L extends LinkModel> {
    enqueueEvent(event: ModelChangeEvent<N, L>): any;
    clear(): any;
    dispatchAll(): any;
}
export declare class AddNodeModelChangedHandler<N extends BaseNodeModel, L extends LinkModel>
    implements ModelChangedHandler<N, L> {
    canHandle(evt: ChangedEvent): boolean;
    handle(
        evt: ChangedEvent,
        model: DiagramModel<N, L>,
        diagramNotificationDelegate: DiagramNotificationDelegate<N, L>
    ): void;
}
export declare class AddLinkModelChangedHandler<N extends BaseNodeModel, L extends LinkModel>
    implements ModelChangedHandler<N, L> {
    canHandle(evt: ChangedEvent): boolean;
    handle(
        evt: ChangedEvent,
        model: DiagramModel<N, L>,
        diagramNotificationDelegate: DiagramNotificationDelegate<N, L>
    ): void;
}
export declare class RemoveNodeModelChangedHandler<N extends BaseNodeModel, L extends LinkModel>
    implements ModelChangedHandler<N, L> {
    canHandle(evt: ChangedEvent): boolean;
    handle(
        evt: ChangedEvent,
        model: DiagramModel<N, L>,
        diagramNotificationDelegate: DiagramNotificationDelegate<N, L>
    ): void;
}
export declare class RemoveLinkModelChangedHandler<N extends BaseNodeModel, L extends LinkModel>
    implements ModelChangedHandler<N, L> {
    canHandle(evt: ChangedEvent): boolean;
    handle(
        evt: ChangedEvent,
        model: DiagramModel<N, L>,
        diagramNotificationDelegate: DiagramNotificationDelegate<N, L>
    ): void;
}
export declare class GroupNodeModelChangedHandler<N extends BaseNodeModel, L extends LinkModel>
    implements ModelChangedHandler<N, L> {
    canHandle(evt: ChangedEvent): boolean;
    handle(
        evt: ChangedEvent,
        model: DiagramModel<N, L>,
        diagramNotificationDelegate: DiagramNotificationDelegate<N, L>
    ): void;
}
export declare class BeginTransactionHandler<N extends BaseNodeModel, L extends LinkModel>
    implements ModelChangedHandler<N, L> {
    canHandle(evt: ChangedEvent): boolean;
    handle(
        evt: ChangedEvent,
        model: DiagramModel<N, L>,
        diagramNotificationDelegate: DiagramNotificationDelegate<N, L>
    ): void;
}
export declare class CommitTransactionHandler<N extends BaseNodeModel, L extends LinkModel>
    implements ModelChangedHandler<N, L> {
    canHandle(evt: ChangedEvent): boolean;
    handle(
        evt: ChangedEvent,
        model: DiagramModel<N, L>,
        diagramNotificationDelegate: DiagramNotificationDelegate<N, L>
    ): void;
}
