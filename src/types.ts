import { BaseSchemes } from 'rete'

export type RenderMeta = { filled?: boolean }
export type RenderSignal<Type extends string, Data> =
  | { type: 'render', data: { element: HTMLElement, type: Type } & RenderMeta & Data }
  | { type: 'rendered', data: { element: HTMLElement, type: Type } & Data }

export type Side = 'input' | 'output'
export type InOut = 'in' | 'out'
export type Position = { x: number, y: number }

export type ExpectArea2DExtra<Schemes extends BaseSchemes> =
  | RenderSignal<'socket', {
    nodeId: string
    key: string
    side: Side
  }>
  | RenderSignal<'connection', { payload: Schemes['Connection'], start?: Position, end?: Position }>
  | { type: 'unmount', data: { element: HTMLElement } }
  | { type: 'noderesized', data: { id: string } }
  | { type: 'nodetranslated', data: { id: string, position: any } }
