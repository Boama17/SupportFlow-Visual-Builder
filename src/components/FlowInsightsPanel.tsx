'use client';

import { useMemo } from 'react';
import { FlowData, FlowNode } from '@/types';

interface FlowInsightsPanelProps {
  data: FlowData;
  selectedNode?: string;
  theme?: 'dark' | 'light';
}

interface NodeInsightsSummary {
  nodeLabel: string;
  nodeType: string;
  reach: number;
  depth: number;
  branchCount: number;
  isDeadEnd: boolean;
  nextNodes: string[];
  impact: string;
  suggestion: string;
}

const getNodeLabel = (node: FlowNode) => {
  const base = node.type.charAt(0).toUpperCase() + node.type.slice(1);
  return `${base} • ${node.id}`;
};

export default function FlowInsightsPanel({ data, selectedNode, theme = 'dark' }: FlowInsightsPanelProps) {
  const selectedNodeData = data.nodes.find((node) => node.id === selectedNode);
  const isDark = theme === 'dark';

  const insights = useMemo<NodeInsightsSummary | null>(() => {
    if (!selectedNodeData) {
      return null;
    }

    const nodeMap = new Map(data.nodes.map((node) => [node.id, node]));
    const startNode = data.nodes.find((node) => node.type === 'start');

    const paths: string[][] = [];
    const walk = (nodeId: string, currentPath: string[]) => {
      const node = nodeMap.get(nodeId);
      if (!node) return;

      const nextPath = [...currentPath, node.id];
      if (node.children.length === 0 || node.type === 'end') {
        paths.push(nextPath);
        return;
      }

      node.children.forEach((childId) => walk(childId, nextPath));
    };

    if (startNode) {
      walk(startNode.id, []);
    }

    const totalPaths = paths.length || 1;
    const reachCounts: Record<string, number> = Object.fromEntries(data.nodes.map((node) => [node.id, 0]));

    paths.forEach((path) => {
      path.forEach((nodeId) => {
        if (reachCounts[nodeId] !== undefined) {
          reachCounts[nodeId] += 1;
        }
      });
    });

    const reach = Math.round(((reachCounts[selectedNodeData.id] ?? 0) / totalPaths) * 100);

    let depth = 0;
    const queue: Array<[string, number]> = [[startNode?.id ?? selectedNodeData.id, 0]];
    const visited = new Set<string>();

    while (queue.length > 0) {
      const [nodeId, currentDepth] = queue.shift()!;
      if (visited.has(nodeId)) continue;
      visited.add(nodeId);

      if (nodeId === selectedNodeData.id) {
        depth = currentDepth;
        break;
      }

      const node = nodeMap.get(nodeId);
      node?.children.forEach((childId) => queue.push([childId, currentDepth + 1]));
    }

    const isDeadEnd = selectedNodeData.children.length === 0 && selectedNodeData.type !== 'end';
    const nextNodes = selectedNodeData.children
      .map((childId) => nodeMap.get(childId)?.text || childId)
      .filter(Boolean);

    let impact = 'Low impact';
    if (reach >= 60) impact = 'High impact';
    else if (reach >= 30) impact = 'Moderate impact';

    let suggestion = 'This node keeps the conversation moving cleanly.';
    if (isDeadEnd) {
      suggestion = 'Add a follow-up response or resolution path so this branch does not stall.';
    } else if (selectedNodeData.children.length > 2) {
      suggestion = 'This decision point branches heavily; consider simplifying the options.';
    } else if (selectedNodeData.type === 'question') {
      suggestion = 'This question is a strong branch point; keep the wording focused.';
    }

    return {
      nodeLabel: getNodeLabel(selectedNodeData),
      nodeType: selectedNodeData.type,
      reach,
      depth,
      branchCount: selectedNodeData.children.length,
      isDeadEnd,
      nextNodes,
      impact,
      suggestion,
    };
  }, [data, selectedNodeData]);

  return (
    <section className={`mx-4 mb-4 rounded-[24px] border backdrop-blur-xl flex flex-col shadow-[12px_12px_24px_rgba(0,0,0,0.18)] ${isDark ? 'border-[#ffe3cc]/15 bg-[#23160d]/90' : 'border-[#fb7507]/15 bg-[#fffaf4]/95'}`}>
      <div className={`border-b px-4 py-3 ${isDark ? 'border-[#ffe3cc]/15' : 'border-[#fb7507]/15'}`}>
        <h2 className={`text-sm font-semibold uppercase tracking-[0.3em] ${isDark ? 'text-[#e7a46e]' : 'text-[#c85a08]'}`}>Node Insights</h2>
        <p className={`text-xs ${isDark ? 'text-[#ffe3cc]/70' : 'text-[#7a4518]/70'}`}>Focused view for the currently selected node</p>
      </div>

      <div className="overflow-y-auto p-5 space-y-4">
        {!selectedNodeData ? (
          <div className="neo-card p-4 text-sm text-[#ffe3cc]/70">
            Select a node on the canvas to inspect its path impact and flow behavior.
          </div>
        ) : !insights ? (
          <div className="neo-card p-4 text-sm text-[#ffe3cc]/70">
            No node insights available for the current selection.
          </div>
        ) : (
          <>
            <div className={`rounded-[20px] border p-4 shadow-[inset_2px_2px_8px_rgba(0,0,0,0.1)] ${isDark ? 'border-[#ffe3cc]/15 bg-linear-to-br from-[#ffe3cc]/15 via-[#e7a46e]/10 to-[#fb7507]/15' : 'border-[#fb7507]/15 bg-linear-to-br from-[#fff7ef] via-[#ffe8d2] to-[#ffd2aa]'}`}>
              <p className={`text-xs uppercase tracking-[0.3em] ${isDark ? 'text-[#e7a46e]' : 'text-[#c85a08]'}`}>Selected Node</p>
              <p className={`mt-2 text-xl font-semibold ${isDark ? 'text-[#fff7ef]' : 'text-[#23160d]'}`}>{insights.nodeLabel}</p>
              <p className={`mt-1 text-sm ${isDark ? 'text-[#ffe3cc]' : 'text-[#5b2b0c]'}`}>{insights.nodeType} node • {insights.impact}</p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className={`neo-card p-3 ${isDark ? '' : 'bg-[#fff7ef]'}`}>
                <p className={`text-xs uppercase tracking-[0.25em] ${isDark ? 'text-[#e7a46e]' : 'text-[#c85a08]'}`}>Reach</p>
                <p className={`mt-2 text-2xl font-semibold ${isDark ? 'text-[#fff7ef]' : 'text-[#23160d]'}`}>{insights.reach}%</p>
              </div>
              <div className={`neo-card p-3 ${isDark ? '' : 'bg-[#fff7ef]'}`}>
                <p className={`text-xs uppercase tracking-[0.25em] ${isDark ? 'text-[#e7a46e]' : 'text-[#c85a08]'}`}>Depth</p>
                <p className={`mt-2 text-2xl font-semibold ${isDark ? 'text-[#fff7ef]' : 'text-[#23160d]'}`}>{insights.depth}</p>
              </div>
            </div>

            <div className={`neo-card p-4 ${isDark ? '' : 'bg-[#fff7ef]'}`}>
              <h3 className={`text-sm font-semibold ${isDark ? 'text-[#fff7ef]' : 'text-[#23160d]'}`}>Branch Summary</h3>
              <div className={`mt-3 space-y-2 text-sm ${isDark ? 'text-[#ffe3cc]' : 'text-[#5b2b0c]'}`}>
                <div className={`rounded-2xl border p-3 shadow-[inset_2px_2px_6px_rgba(0,0,0,0.1)] ${isDark ? 'border-[#ffe3cc]/15 bg-[#2d1d10]/70' : 'border-[#fb7507]/15 bg-[#fff2e8]'}`}>
                  <p className={`text-xs uppercase tracking-[0.25em] ${isDark ? 'text-[#e7a46e]' : 'text-[#c85a08]'}`}>Outgoing branches</p>
                  <p className={`mt-1 text-lg font-semibold ${isDark ? 'text-[#fff7ef]' : 'text-[#23160d]'}`}>{insights.branchCount}</p>
                </div>
                <div className={`rounded-2xl border p-3 shadow-[inset_2px_2px_6px_rgba(0,0,0,0.1)] ${isDark ? 'border-[#ffe3cc]/15 bg-[#2d1d10]/70' : 'border-[#fb7507]/15 bg-[#fff2e8]'}`}>
                  <p className={`text-xs uppercase tracking-[0.25em] ${isDark ? 'text-[#e7a46e]' : 'text-[#c85a08]'}`}>Next step(s)</p>
                  {insights.nextNodes.length > 0 ? (
                    <ul className={`mt-2 list-disc space-y-1 pl-5 ${isDark ? 'text-[#ffe3cc]' : 'text-[#5b2b0c]'}`}>
                      {insights.nextNodes.map((nextNode) => <li key={nextNode}>{nextNode}</li>)}
                    </ul>
                  ) : (
                    <p className={`mt-2 ${isDark ? 'text-[#ffe3cc]/70' : 'text-[#7a4518]/70'}`}>No outgoing branches.</p>
                  )}
                </div>
              </div>
            </div>

            <div className={`neo-card p-4 ${isDark ? '' : 'bg-[#fff7ef]'}`}>
              <h3 className={`text-sm font-semibold ${isDark ? 'text-[#fff7ef]' : 'text-[#23160d]'}`}>Flow Health</h3>
              <div className={`mt-3 space-y-3 text-sm ${isDark ? 'text-[#ffe3cc]' : 'text-[#5b2b0c]'}`}>
                <div className={`rounded-2xl border p-3 ${insights.isDeadEnd ? 'border-red-400/20 bg-red-500/10' : isDark ? 'border-[#e7a46e]/25 bg-[#e7a46e]/10' : 'border-[#fb7507]/20 bg-[#ffe8d2]'}`}>
                  <p className={`font-semibold ${insights.isDeadEnd ? 'text-red-300' : isDark ? 'text-[#ffe3cc]' : 'text-[#c85a08]'}`}>
                    {insights.isDeadEnd ? 'Dead end warning' : 'Healthy continuation'}
                  </p>
                  <p className="mt-1">{insights.isDeadEnd ? 'This node has no forward path.' : 'This node continues the conversation smoothly.'}</p>
                </div>

                <div className={`rounded-2xl border p-3 shadow-[inset_2px_2px_6px_rgba(0,0,0,0.1)] ${isDark ? 'border-[#ffe3cc]/15 bg-[#2d1d10]/70' : 'border-[#fb7507]/15 bg-[#fff2e8]'}`}>
                  <p className={`font-semibold ${isDark ? 'text-[#e7a46e]' : 'text-[#c85a08]'}`}>Suggested move</p>
                  <p className="mt-1">{insights.suggestion}</p>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
