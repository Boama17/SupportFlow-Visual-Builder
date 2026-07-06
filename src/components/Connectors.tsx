'use client';

import { FlowNode } from '@/types';

interface ConnectorsProps {
  nodes: FlowNode[];
  activeConnector?: string;
}

const getNodeSize = (type: string) => {
  return type === 'response' ? { w: 240, h: 100 } : { w: 240, h: 80 };
};

const getCenterPoint = (x: number, y: number, type: string) => {
  const size = getNodeSize(type);
  return {
    x: x + size.w / 2,
    y: y + size.h / 2,
  };
};

const cubicBezier = (p0: [number, number], p1: [number, number], p2: [number, number], p3: [number, number]) => {
  return `M ${p0[0]} ${p0[1]} C ${p1[0]} ${p1[1]}, ${p2[0]} ${p2[1]}, ${p3[0]} ${p3[1]}`;
};

export default function Connectors({ nodes, activeConnector }: ConnectorsProps) {
  const nodeMap = new Map(nodes.map((n) => [n.id, n]));

  const lines = nodes.flatMap((node) =>
    node.children.map((childId, childIndex) => {
      const child = nodeMap.get(childId);
      if (!child) return null;

      const start = getCenterPoint(node.x, node.y, node.type);
      const end = getCenterPoint(child.x, child.y, child.type);
      
      const yDistance = end.y - start.y;
      const xDistance = end.x - start.x;
      const controlOffset = Math.max(yDistance * 0.4, 60);
      
      const control1: [number, number] = [start.x + xDistance * 0.1, start.y + controlOffset];
      const control2: [number, number] = [end.x - xDistance * 0.1, end.y - controlOffset];
      
      const connectorId = `${node.id}-${childId}`;
      const isActive = activeConnector === connectorId;

      return (
        <g key={connectorId} data-connector={connectorId}>
          <defs>
            <marker
              id={`arrow-${connectorId}`}
              markerWidth="10"
              markerHeight="10"
              refX="9"
              refY="3.5"
              orient="auto"
              markerUnits="strokeWidth"
            >
              <path
                d="M0,0 L0,7 L10,3.5 z"
                fill={isActive ? '#3b82f6' : '#475569'}
                opacity="0.7"
              />
            </marker>
          </defs>
          <path
            d={cubicBezier([start.x, start.y], control1, control2, [end.x, end.y])}
            stroke={isActive ? '#3b82f6' : '#475569'}
            strokeWidth={isActive ? 2.5 : 1.5}
            fill="none"
            markerEnd={`url(#arrow-${connectorId})`}
            className="transition-all duration-300"
            strokeLinecap="round"
            opacity={isActive ? 1 : 0.6}
          />
        </g>
      );
    })
  );

  return (
    <svg
      className="absolute top-0 left-0 w-full h-full ms-[12rem] mt-[2rem] pointer-events-none"
      style={{ zIndex: 0 }}
    >
      {lines}
    </svg>
  );
}
