export type NodeType = 'start' | 'question' | 'response' | 'end';

export interface FlowNode {
  id: string;
  type: NodeType;
  text: string;
  x: number;
  y: number;
  children: string[];
  options?: string[];
}

export interface FlowData {
  nodes: FlowNode[];
}
