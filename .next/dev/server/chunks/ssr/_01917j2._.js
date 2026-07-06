module.exports = [
"[project]/src/components/NodeCard.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>NodeCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
'use client';
;
const getNodeColors = (type)=>{
    switch(type){
        case 'start':
            return [
                '#fb7507',
                '#dd8136'
            ];
        case 'question':
            return [
                '#dd8136',
                '#e7a46e'
            ];
        case 'response':
            return [
                '#e7a46e',
                '#ffe3cc'
            ];
        case 'end':
            return [
                '#fb7507',
                '#e7a46e'
            ];
        default:
            return [
                '#fb7507',
                '#dd8136'
            ];
    }
};
const getNodeLabel = (type)=>{
    switch(type){
        case 'start':
            return 'START';
        case 'question':
            return 'QUESTION';
        case 'response':
            return 'RESPONSE';
        case 'end':
            return 'END';
        default:
            return '';
    }
};
const getNodeIcon = (type)=>{
    switch(type){
        case 'start':
            return '▸';
        case 'question':
            return '◆';
        case 'response':
            return '◎';
        case 'end':
            return '●';
        default:
            return '';
    }
};
const getNodeSize = (type)=>{
    return type === 'response' ? {
        w: 150,
        h: 100
    } : {
        w: 250,
        h: 120
    };
};
function NodeCard({ node, isEditing, isActive, onEdit, onSelectForPreview, editingId, editingText, onEditingChange }) {
    const [startColor, endColor] = getNodeColors(node.type);
    const icon = getNodeIcon(node.type);
    const size = getNodeSize(node.type);
    const isCurrentlyEditing = editingId === node.id && isEditing;
    const textColor = node.type === 'response' ? '#23160d' : '#fff7ef';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        onClick: ()=>onSelectForPreview?.(node.id),
        className: "absolute cursor-pointer ms-48 mt-8 transition-transform duration-200 hover:scale-105",
        style: {
            left: `${node.x}px`,
            top: `${node.y}px`,
            width: `${size.w}px`,
            height: `${size.h}px`,
            zIndex: 10
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative w-full h-full flex flex-col items-center justify-center p-2 font-medium transition-all duration-200 border-2",
            style: {
                backgroundImage: `linear-gradient(135deg, ${startColor} 0%, ${endColor} 100%)`,
                borderColor: isActive ? '#fff7ef' : startColor,
                borderWidth: isActive ? '3px' : '2px',
                boxShadow: isActive ? `0 0 24px ${startColor}80, 0 12px 28px rgba(0, 0, 0, 0.55)` : `0 10px 22px rgba(0, 0, 0, 0.35), inset 0 1px 0 rgba(255,255,255,0.18)`,
                opacity: 0.98,
                borderRadius: '18px',
                color: textColor
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-sm mb-2 flex items-center gap-1",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-base leading-none",
                            children: icon
                        }, void 0, false, {
                            fileName: "[project]/src/components/NodeCard.tsx",
                            lineNumber: 109,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-xs font-bold tracking-widest opacity-90",
                            children: getNodeLabel(node.type)
                        }, void 0, false, {
                            fileName: "[project]/src/components/NodeCard.tsx",
                            lineNumber: 110,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/NodeCard.tsx",
                    lineNumber: 108,
                    columnNumber: 9
                }, this),
                isEditing && isCurrentlyEditing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                    autoFocus: true,
                    onClick: (e)=>e.stopPropagation(),
                    value: editingText || '',
                    onChange: (e)=>onEditingChange?.(e.target.value),
                    onBlur: ()=>onEdit(node.id, editingText || ''),
                    onKeyDown: (e)=>{
                        if (e.key === 'Enter' && !e.shiftKey && !e.nativeEvent.isComposing) {
                            e.preventDefault();
                            onEdit(node.id, editingText || '');
                        }
                    },
                    className: "w-full h-full p-1.5 bg-black/20 text-xs text-center rounded border-none resize-none focus:outline-none focus:ring-2 focus:ring-white/50",
                    style: {
                        color: textColor,
                        fontFamily: 'inherit'
                    }
                }, void 0, false, {
                    fileName: "[project]/src/components/NodeCard.tsx",
                    lineNumber: 113,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-center text-xs leading-snug whitespace-pre-line wrap-break-word",
                    children: node.text
                }, void 0, false, {
                    fileName: "[project]/src/components/NodeCard.tsx",
                    lineNumber: 129,
                    columnNumber: 11
                }, this),
                node.children && node.children.length > 0 && !isCurrentlyEditing && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-xs opacity-70 mt-1 text-center",
                    children: [
                        node.children.length,
                        " ",
                        node.children.length === 1 ? 'path' : 'paths'
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/NodeCard.tsx",
                    lineNumber: 132,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/NodeCard.tsx",
            lineNumber: 94,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/NodeCard.tsx",
        lineNumber: 83,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/Connectors.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Connectors
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
'use client';
;
const getNodeSize = (type)=>{
    return type === 'response' ? {
        w: 240,
        h: 100
    } : {
        w: 240,
        h: 80
    };
};
const getCenterPoint = (x, y, type)=>{
    const size = getNodeSize(type);
    return {
        x: x + size.w / 2,
        y: y + size.h / 2
    };
};
const cubicBezier = (p0, p1, p2, p3)=>{
    return `M ${p0[0]} ${p0[1]} C ${p1[0]} ${p1[1]}, ${p2[0]} ${p2[1]}, ${p3[0]} ${p3[1]}`;
};
function Connectors({ nodes, activeConnector }) {
    const nodeMap = new Map(nodes.map((n)=>[
            n.id,
            n
        ]));
    const lines = nodes.flatMap((node)=>node.children.map((childId, childIndex)=>{
            const child = nodeMap.get(childId);
            if (!child) return null;
            const start = getCenterPoint(node.x, node.y, node.type);
            const end = getCenterPoint(child.x, child.y, child.type);
            const yDistance = end.y - start.y;
            const xDistance = end.x - start.x;
            const controlOffset = Math.max(yDistance * 0.4, 60);
            const control1 = [
                start.x + xDistance * 0.1,
                start.y + controlOffset
            ];
            const control2 = [
                end.x - xDistance * 0.1,
                end.y - controlOffset
            ];
            const connectorId = `${node.id}-${childId}`;
            const isActive = activeConnector === connectorId;
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                "data-connector": connectorId,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("marker", {
                            id: `arrow-${connectorId}`,
                            markerWidth: "10",
                            markerHeight: "10",
                            refX: "9",
                            refY: "3.5",
                            orient: "auto",
                            markerUnits: "strokeWidth",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M0,0 L0,7 L10,3.5 z",
                                fill: isActive ? '#fb7507' : '#e7a46e',
                                opacity: "0.7"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Connectors.tsx",
                                lineNumber: 59,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/Connectors.tsx",
                            lineNumber: 50,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/Connectors.tsx",
                        lineNumber: 49,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: cubicBezier([
                            start.x,
                            start.y
                        ], control1, control2, [
                            end.x,
                            end.y
                        ]),
                        stroke: isActive ? '#fb7507' : '#e7a46e',
                        strokeWidth: isActive ? 2.5 : 1.5,
                        fill: "none",
                        markerEnd: `url(#arrow-${connectorId})`,
                        className: "transition-all duration-300",
                        strokeLinecap: "round",
                        opacity: isActive ? 1 : 0.6
                    }, void 0, false, {
                        fileName: "[project]/src/components/Connectors.tsx",
                        lineNumber: 66,
                        columnNumber: 11
                    }, this)
                ]
            }, connectorId, true, {
                fileName: "[project]/src/components/Connectors.tsx",
                lineNumber: 48,
                columnNumber: 9
            }, this);
        }));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: "absolute top-0 left-0 w-full h-full ms-48 mt-8 pointer-events-none",
        style: {
            zIndex: 0
        },
        children: lines
    }, void 0, false, {
        fileName: "[project]/src/components/Connectors.tsx",
        lineNumber: 82,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/Canvas.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Canvas
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$NodeCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/NodeCard.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Connectors$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Connectors.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
function Canvas({ data, isEditing, activeNode, onNodeEdit, onNodeSelect, theme = 'dark' }) {
    const [editingId, setEditingId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])();
    const isDark = theme === 'dark';
    const [editingText, setEditingText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const handleNodeClick = (nodeId)=>{
        onNodeSelect?.(nodeId);
        if (isEditing) {
            const node = data.nodes.find((n)=>n.id === nodeId);
            if (node) {
                if (editingId === nodeId) {
                    // Double click same node - exit edit mode
                    setEditingId(undefined);
                } else {
                    // Click different node or first click - enter edit mode
                    setEditingId(nodeId);
                    setEditingText(node.text);
                }
            }
        }
    };
    const handleSaveEdit = (id, text)=>{
        setEditingId(undefined);
        onNodeEdit?.(id, text);
    };
    const canvasHeight = 700;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `relative w-full overflow-hidden rounded-[24px] border shadow-[20px_20px_44px_rgba(0,0,0,0.22),inset_0_1px_0_rgba(255,255,255,0.05)] ${isDark ? 'border-[#ffe3cc]/15 bg-[radial-gradient(circle_at_top_left,_rgba(255,227,204,0.16),_transparent_35%),linear-gradient(135deg,_#17110b_0%,_#23160d_100%)]' : 'border-[#fb7507]/15 bg-[radial-gradient(circle_at_top_left,_rgba(251,117,7,0.12),_transparent_35%),linear-gradient(135deg,_#fffaf4_0%,_#ffebd9_100%)]'}`,
        style: {
            height: `${canvasHeight}px`
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Connectors$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                nodes: data.nodes,
                activeConnector: undefined
            }, void 0, false, {
                fileName: "[project]/src/components/Canvas.tsx",
                lineNumber: 58,
                columnNumber: 7
            }, this),
            data.nodes.map((node)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$NodeCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    node: node,
                    isEditing: isEditing,
                    isActive: activeNode === node.id,
                    onEdit: handleSaveEdit,
                    onSelectForPreview: handleNodeClick,
                    editingId: editingId,
                    editingText: editingText,
                    onEditingChange: setEditingText
                }, node.id, false, {
                    fileName: "[project]/src/components/Canvas.tsx",
                    lineNumber: 60,
                    columnNumber: 9
                }, this))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Canvas.tsx",
        lineNumber: 54,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/ChatPreview.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ChatPreview
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
function ChatPreview({ data, onClose, theme = 'dark' }) {
    const [messages, setMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const isDark = theme === 'dark';
    const [currentNodeId, setCurrentNodeId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const nodeMap = new Map(data.nodes.map((n)=>[
            n.id,
            n
        ]));
    // Initialize conversation on first render
    if (messages.length === 0 && currentNodeId === null) {
        const startNode = nodeMap.get('start');
        if (startNode) {
            setMessages([
                {
                    type: 'bot',
                    text: startNode.text,
                    nodeId: 'start'
                }
            ]);
            setCurrentNodeId('start');
        }
    }
    const currentNode = currentNodeId ? nodeMap.get(currentNodeId) : null;
    const handleOptionSelect = (childId)=>{
        const childNode = nodeMap.get(childId);
        if (!childNode) return;
        // Add user selection as message
        const userMessage = {
            type: 'user',
            text: childNode.text.split(' - ')[0] || childNode.text,
            nodeId: childId
        };
        setMessages((prev)=>[
                ...prev,
                userMessage
            ]);
        // Auto-advance through response nodes to show bot response
        if (childNode.type === 'response' && childNode.children.length > 0) {
            const endNode = nodeMap.get(childNode.children[0]);
            if (endNode) {
                setTimeout(()=>{
                    const botMessage = {
                        type: 'bot',
                        text: endNode.text,
                        nodeId: endNode.id
                    };
                    setMessages((prev)=>[
                            ...prev,
                            botMessage
                        ]);
                    setCurrentNodeId(endNode.id);
                }, 400);
            }
        } else if (childNode.type === 'question') {
            const botMessage = {
                type: 'bot',
                text: childNode.text,
                nodeId: childId
            };
            setMessages((prev)=>[
                    ...prev,
                    botMessage
                ]);
            setCurrentNodeId(childId);
        } else if (childNode.type === 'end') {
            const botMessage = {
                type: 'bot',
                text: childNode.text,
                nodeId: childId
            };
            setMessages((prev)=>[
                    ...prev,
                    botMessage
                ]);
            setCurrentNodeId(childId);
        }
    };
    const handleRestart = ()=>{
        const startNode = nodeMap.get('start');
        if (startNode) {
            setMessages([
                {
                    type: 'bot',
                    text: startNode.text,
                    nodeId: 'start'
                }
            ]);
            setCurrentNodeId('start');
        }
    };
    const getNextOptions = ()=>{
        if (!currentNode) return [];
        return currentNode.children.map((id)=>nodeMap.get(id)).filter((n)=>n !== undefined);
    };
    const nextOptions = getNextOptions();
    const isEnd = currentNode?.type === 'end';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `backdrop-blur-sm rounded-[24px] w-full max-w-md shadow-[16px_16px_40px_rgba(0,0,0,0.25)] border flex flex-col ${isDark ? 'bg-[#23160d]/95 border-[#ffe3cc]/15' : 'bg-[#fffaf4]/95 border-[#fb7507]/15'}`,
            style: {
                height: '600px'
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `flex justify-between items-center p-5 border-b ${isDark ? 'border-[#ffe3cc]/15 bg-linear-to-r from-[#2d1d10]/90 to-[#23160d]/80' : 'border-[#fb7507]/15 bg-linear-to-r from-[#fff2e8] to-[#ffe8d2]'}`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: `text-lg font-semibold ${isDark ? 'text-[#fff7ef]' : 'text-[#23160d]'}`,
                            children: "Support Chat"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ChatPreview.tsx",
                            lineNumber: 102,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onClose,
                            className: `transition-colors text-2xl leading-none ${isDark ? 'text-[#e7a46e] hover:text-[#ffe3cc]' : 'text-[#c85a08] hover:text-[#fb7507]'}`,
                            children: "×"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ChatPreview.tsx",
                            lineNumber: 103,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ChatPreview.tsx",
                    lineNumber: 101,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1 overflow-y-auto p-4 space-y-3",
                    children: messages.map((msg, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `max-w-xs px-4 py-2.5 rounded-[18px] text-sm leading-relaxed ${msg.type === 'user' ? 'bg-linear-to-r from-[#fb7507] via-[#dd8136] to-[#e7a46e] text-[#23160d] rounded-br-sm shadow-[0_10px_24px_rgba(251,117,7,0.18)]' : `${isDark ? 'bg-[#2d1d10]/80 text-[#fff7ef]' : 'bg-[#fff2e8] text-[#5b2b0c]'} rounded-bl-sm shadow-[inset_2px_2px_6px_rgba(0,0,0,0.12)]`}`,
                                children: msg.text
                            }, void 0, false, {
                                fileName: "[project]/src/components/ChatPreview.tsx",
                                lineNumber: 114,
                                columnNumber: 15
                            }, this)
                        }, idx, false, {
                            fileName: "[project]/src/components/ChatPreview.tsx",
                            lineNumber: 113,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/ChatPreview.tsx",
                    lineNumber: 111,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "border-t border-slate-700/30 p-4 space-y-2",
                    children: isEnd ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleRestart,
                        className: "w-full bg-linear-to-r from-[#fb7507] via-[#dd8136] to-[#e7a46e] text-[#23160d] font-semibold py-2.5 px-4 rounded-2xl transition-all shadow-[0_10px_24px_rgba(251,117,7,0.2)] hover:scale-[1.01]",
                        children: "Start Over"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ChatPreview.tsx",
                        lineNumber: 129,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2",
                        children: nextOptions.map((node)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>handleOptionSelect(node.id),
                                className: "w-full bg-[#2d1d10]/70 hover:bg-[#3a2414] text-[#fff7ef] text-sm py-2.5 px-3 rounded-2xl transition-all text-left border border-[#ffe3cc]/15 hover:border-[#e7a46e]/30 shadow-[inset_2px_2px_6px_rgba(0,0,0,0.2)]",
                                children: node.text.split(' - ')[0] || node.text
                            }, node.id, false, {
                                fileName: "[project]/src/components/ChatPreview.tsx",
                                lineNumber: 138,
                                columnNumber: 17
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/ChatPreview.tsx",
                        lineNumber: 136,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/ChatPreview.tsx",
                    lineNumber: 127,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ChatPreview.tsx",
            lineNumber: 100,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ChatPreview.tsx",
        lineNumber: 99,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/EditorPanel.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>EditorPanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
'use client';
;
function EditorPanel({ data, selectedNode, onNodeUpdate, onNodeDelete, onPreview, theme = 'dark' }) {
    const selectedNodeData = data.nodes.find((n)=>n.id === selectedNode);
    const isDark = theme === 'dark';
    const handleTextChange = (text)=>{
        if (selectedNode) {
            onNodeUpdate?.(selectedNode, {
                text
            });
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `neo-panel h-full flex flex-col rounded-[24px] m-3 mb-4 overflow-hidden ${isDark ? 'bg-[#23160d]/90' : 'bg-[#fffaf4]/95'}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `border-b px-4 py-3 ${isDark ? 'border-[#ffe3cc]/15 bg-[#2d1d10]/80' : 'border-[#fb7507]/15 bg-[#fff2e8]/90'}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: `text-sm font-semibold uppercase tracking-[0.3em] ${isDark ? 'text-[#e7a46e]' : 'text-[#c85a08]'}`,
                    children: "Node Editor"
                }, void 0, false, {
                    fileName: "[project]/src/components/EditorPanel.tsx",
                    lineNumber: 34,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/EditorPanel.tsx",
                lineNumber: 33,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 overflow-y-auto p-6",
                children: selectedNodeData ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: `text-lg font-bold mb-4 ${isDark ? 'text-[#fff7ef]' : 'text-[#23160d]'}`,
                                    children: "Edit Node"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/EditorPanel.tsx",
                                    lineNumber: 41,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: `text-xs mb-1 font-semibold ${isDark ? 'text-[#e7a46e]' : 'text-[#c85a08]'}`,
                                    children: "Node Type"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/EditorPanel.tsx",
                                    lineNumber: 42,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: `text-sm capitalize mb-4 ${isDark ? 'text-[#ffe3cc]' : 'text-[#5b2b0c]'}`,
                                    children: [
                                        selectedNodeData.type,
                                        " Node"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/EditorPanel.tsx",
                                    lineNumber: 43,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/EditorPanel.tsx",
                            lineNumber: 40,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: `text-sm font-semibold block mb-2 ${isDark ? 'text-[#fff7ef]' : 'text-[#23160d]'}`,
                                    children: "Node ID"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/EditorPanel.tsx",
                                    lineNumber: 47,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    value: selectedNodeData.id,
                                    disabled: true,
                                    className: `w-full rounded-2xl border px-3 py-2 text-sm opacity-70 shadow-[inset_2px_2px_6px_rgba(0,0,0,0.08)] ${isDark ? 'border-[#e7a46e]/25 bg-[#2d1d10]/70 text-[#ffe3cc]' : 'border-[#fb7507]/20 bg-[#fff7ef] text-[#5b2b0c]'}`
                                }, void 0, false, {
                                    fileName: "[project]/src/components/EditorPanel.tsx",
                                    lineNumber: 48,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/EditorPanel.tsx",
                            lineNumber: 46,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: `text-sm font-semibold block mb-2 ${isDark ? 'text-[#fff7ef]' : 'text-[#23160d]'}`,
                                    children: "Message Text"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/EditorPanel.tsx",
                                    lineNumber: 57,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                    value: selectedNodeData.text,
                                    onChange: (e)=>handleTextChange(e.target.value),
                                    className: `w-full rounded-2xl border px-3 py-2 text-sm focus:border-[#fb7507]/60 focus:outline-none transition-colors resize-none shadow-[inset_2px_2px_6px_rgba(0,0,0,0.08)] ${isDark ? 'border-[#e7a46e]/25 bg-[#2d1d10]/70 text-[#fff7ef]' : 'border-[#fb7507]/20 bg-[#fff7ef] text-[#23160d]'}`,
                                    rows: 3
                                }, void 0, false, {
                                    fileName: "[project]/src/components/EditorPanel.tsx",
                                    lineNumber: 58,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/EditorPanel.tsx",
                            lineNumber: 56,
                            columnNumber: 13
                        }, this),
                        selectedNodeData.options && selectedNodeData.options.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: `text-sm font-semibold block mb-2 ${isDark ? 'text-[#fff7ef]' : 'text-[#23160d]'}`,
                                    children: "Response Options"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/EditorPanel.tsx",
                                    lineNumber: 68,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2",
                                    children: selectedNodeData.options.map((option, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `rounded-2xl border px-3 py-2 text-sm shadow-[inset_2px_2px_6px_rgba(0,0,0,0.08)] ${isDark ? 'border-[#e7a46e]/20 bg-[#2d1d10]/80 text-[#ffe3cc]' : 'border-[#fb7507]/20 bg-[#fff7ef] text-[#5b2b0c]'}`,
                                            children: option
                                        }, idx, false, {
                                            fileName: "[project]/src/components/EditorPanel.tsx",
                                            lineNumber: 71,
                                            columnNumber: 21
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/EditorPanel.tsx",
                                    lineNumber: 69,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/EditorPanel.tsx",
                            lineNumber: 67,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/EditorPanel.tsx",
                    lineNumber: 39,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-full flex items-center justify-center text-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: `text-sm mb-1 ${isDark ? 'text-[#e7a46e]' : 'text-[#c85a08]'}`,
                                children: "No node selected"
                            }, void 0, false, {
                                fileName: "[project]/src/components/EditorPanel.tsx",
                                lineNumber: 85,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: `text-xs ${isDark ? 'text-[#ffe3cc]/70' : 'text-[#7a4518]/70'}`,
                                children: "Select a node on the canvas to edit"
                            }, void 0, false, {
                                fileName: "[project]/src/components/EditorPanel.tsx",
                                lineNumber: 86,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/EditorPanel.tsx",
                        lineNumber: 84,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/EditorPanel.tsx",
                    lineNumber: 83,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/EditorPanel.tsx",
                lineNumber: 37,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `border-t p-6 ${isDark ? 'border-[#ffe3cc]/15' : 'border-[#fb7507]/15'}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: onPreview,
                    className: "w-full rounded-2xl bg-gradient-to-r from-[#fb7507] via-[#dd8136] to-[#e7a46e] px-4 py-3 font-semibold text-[#23160d] shadow-[0_10px_24px_rgba(251,117,7,0.24)] transition-transform hover:scale-[1.01]",
                    children: "Preview Flow"
                }, void 0, false, {
                    fileName: "[project]/src/components/EditorPanel.tsx",
                    lineNumber: 93,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/EditorPanel.tsx",
                lineNumber: 92,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/EditorPanel.tsx",
        lineNumber: 32,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/FlowInsightsPanel.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FlowInsightsPanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
const getNodeLabel = (node)=>{
    const base = node.type.charAt(0).toUpperCase() + node.type.slice(1);
    return `${base} • ${node.id}`;
};
function FlowInsightsPanel({ data, selectedNode, theme = 'dark' }) {
    const selectedNodeData = data.nodes.find((node)=>node.id === selectedNode);
    const isDark = theme === 'dark';
    const insights = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (!selectedNodeData) {
            return null;
        }
        const nodeMap = new Map(data.nodes.map((node)=>[
                node.id,
                node
            ]));
        const startNode = data.nodes.find((node)=>node.type === 'start');
        const paths = [];
        const walk = (nodeId, currentPath)=>{
            const node = nodeMap.get(nodeId);
            if (!node) return;
            const nextPath = [
                ...currentPath,
                node.id
            ];
            if (node.children.length === 0 || node.type === 'end') {
                paths.push(nextPath);
                return;
            }
            node.children.forEach((childId)=>walk(childId, nextPath));
        };
        if (startNode) {
            walk(startNode.id, []);
        }
        const totalPaths = paths.length || 1;
        const reachCounts = Object.fromEntries(data.nodes.map((node)=>[
                node.id,
                0
            ]));
        paths.forEach((path)=>{
            path.forEach((nodeId)=>{
                if (reachCounts[nodeId] !== undefined) {
                    reachCounts[nodeId] += 1;
                }
            });
        });
        const reach = Math.round((reachCounts[selectedNodeData.id] ?? 0) / totalPaths * 100);
        let depth = 0;
        const queue = [
            [
                startNode?.id ?? selectedNodeData.id,
                0
            ]
        ];
        const visited = new Set();
        while(queue.length > 0){
            const [nodeId, currentDepth] = queue.shift();
            if (visited.has(nodeId)) continue;
            visited.add(nodeId);
            if (nodeId === selectedNodeData.id) {
                depth = currentDepth;
                break;
            }
            const node = nodeMap.get(nodeId);
            node?.children.forEach((childId)=>queue.push([
                    childId,
                    currentDepth + 1
                ]));
        }
        const isDeadEnd = selectedNodeData.children.length === 0 && selectedNodeData.type !== 'end';
        const nextNodes = selectedNodeData.children.map((childId)=>nodeMap.get(childId)?.text || childId).filter(Boolean);
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
            suggestion
        };
    }, [
        data,
        selectedNodeData
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: `mx-4 mb-4 rounded-[24px] border backdrop-blur-xl flex flex-col shadow-[12px_12px_24px_rgba(0,0,0,0.18)] ${isDark ? 'border-[#ffe3cc]/15 bg-[#23160d]/90' : 'border-[#fb7507]/15 bg-[#fffaf4]/95'}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `border-b px-4 py-3 ${isDark ? 'border-[#ffe3cc]/15' : 'border-[#fb7507]/15'}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: `text-sm font-semibold uppercase tracking-[0.3em] ${isDark ? 'text-[#e7a46e]' : 'text-[#c85a08]'}`,
                        children: "Node Insights"
                    }, void 0, false, {
                        fileName: "[project]/src/components/FlowInsightsPanel.tsx",
                        lineNumber: 124,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: `text-xs ${isDark ? 'text-[#ffe3cc]/70' : 'text-[#7a4518]/70'}`,
                        children: "Focused view for the currently selected node"
                    }, void 0, false, {
                        fileName: "[project]/src/components/FlowInsightsPanel.tsx",
                        lineNumber: 125,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/FlowInsightsPanel.tsx",
                lineNumber: 123,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "overflow-y-auto p-5 space-y-4",
                children: !selectedNodeData ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "neo-card p-4 text-sm text-[#ffe3cc]/70",
                    children: "Select a node on the canvas to inspect its path impact and flow behavior."
                }, void 0, false, {
                    fileName: "[project]/src/components/FlowInsightsPanel.tsx",
                    lineNumber: 130,
                    columnNumber: 11
                }, this) : !insights ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "neo-card p-4 text-sm text-[#ffe3cc]/70",
                    children: "No node insights available for the current selection."
                }, void 0, false, {
                    fileName: "[project]/src/components/FlowInsightsPanel.tsx",
                    lineNumber: 134,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `rounded-[20px] border p-4 shadow-[inset_2px_2px_8px_rgba(0,0,0,0.1)] ${isDark ? 'border-[#ffe3cc]/15 bg-linear-to-br from-[#ffe3cc]/15 via-[#e7a46e]/10 to-[#fb7507]/15' : 'border-[#fb7507]/15 bg-linear-to-br from-[#fff7ef] via-[#ffe8d2] to-[#ffd2aa]'}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: `text-xs uppercase tracking-[0.3em] ${isDark ? 'text-[#e7a46e]' : 'text-[#c85a08]'}`,
                                    children: "Selected Node"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/FlowInsightsPanel.tsx",
                                    lineNumber: 140,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: `mt-2 text-xl font-semibold ${isDark ? 'text-[#fff7ef]' : 'text-[#23160d]'}`,
                                    children: insights.nodeLabel
                                }, void 0, false, {
                                    fileName: "[project]/src/components/FlowInsightsPanel.tsx",
                                    lineNumber: 141,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: `mt-1 text-sm ${isDark ? 'text-[#ffe3cc]' : 'text-[#5b2b0c]'}`,
                                    children: [
                                        insights.nodeType,
                                        " node • ",
                                        insights.impact
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/FlowInsightsPanel.tsx",
                                    lineNumber: 142,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/FlowInsightsPanel.tsx",
                            lineNumber: 139,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-2 gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `neo-card p-3 ${isDark ? '' : 'bg-[#fff7ef]'}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: `text-xs uppercase tracking-[0.25em] ${isDark ? 'text-[#e7a46e]' : 'text-[#c85a08]'}`,
                                            children: "Reach"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/FlowInsightsPanel.tsx",
                                            lineNumber: 147,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: `mt-2 text-2xl font-semibold ${isDark ? 'text-[#fff7ef]' : 'text-[#23160d]'}`,
                                            children: [
                                                insights.reach,
                                                "%"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/FlowInsightsPanel.tsx",
                                            lineNumber: 148,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/FlowInsightsPanel.tsx",
                                    lineNumber: 146,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `neo-card p-3 ${isDark ? '' : 'bg-[#fff7ef]'}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: `text-xs uppercase tracking-[0.25em] ${isDark ? 'text-[#e7a46e]' : 'text-[#c85a08]'}`,
                                            children: "Depth"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/FlowInsightsPanel.tsx",
                                            lineNumber: 151,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: `mt-2 text-2xl font-semibold ${isDark ? 'text-[#fff7ef]' : 'text-[#23160d]'}`,
                                            children: insights.depth
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/FlowInsightsPanel.tsx",
                                            lineNumber: 152,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/FlowInsightsPanel.tsx",
                                    lineNumber: 150,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/FlowInsightsPanel.tsx",
                            lineNumber: 145,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `neo-card p-4 ${isDark ? '' : 'bg-[#fff7ef]'}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: `text-sm font-semibold ${isDark ? 'text-[#fff7ef]' : 'text-[#23160d]'}`,
                                    children: "Branch Summary"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/FlowInsightsPanel.tsx",
                                    lineNumber: 157,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `mt-3 space-y-2 text-sm ${isDark ? 'text-[#ffe3cc]' : 'text-[#5b2b0c]'}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `rounded-2xl border p-3 shadow-[inset_2px_2px_6px_rgba(0,0,0,0.1)] ${isDark ? 'border-[#ffe3cc]/15 bg-[#2d1d10]/70' : 'border-[#fb7507]/15 bg-[#fff2e8]'}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: `text-xs uppercase tracking-[0.25em] ${isDark ? 'text-[#e7a46e]' : 'text-[#c85a08]'}`,
                                                    children: "Outgoing branches"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/FlowInsightsPanel.tsx",
                                                    lineNumber: 160,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: `mt-1 text-lg font-semibold ${isDark ? 'text-[#fff7ef]' : 'text-[#23160d]'}`,
                                                    children: insights.branchCount
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/FlowInsightsPanel.tsx",
                                                    lineNumber: 161,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/FlowInsightsPanel.tsx",
                                            lineNumber: 159,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `rounded-2xl border p-3 shadow-[inset_2px_2px_6px_rgba(0,0,0,0.1)] ${isDark ? 'border-[#ffe3cc]/15 bg-[#2d1d10]/70' : 'border-[#fb7507]/15 bg-[#fff2e8]'}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: `text-xs uppercase tracking-[0.25em] ${isDark ? 'text-[#e7a46e]' : 'text-[#c85a08]'}`,
                                                    children: "Next step(s)"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/FlowInsightsPanel.tsx",
                                                    lineNumber: 164,
                                                    columnNumber: 19
                                                }, this),
                                                insights.nextNodes.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                    className: `mt-2 list-disc space-y-1 pl-5 ${isDark ? 'text-[#ffe3cc]' : 'text-[#5b2b0c]'}`,
                                                    children: insights.nextNodes.map((nextNode)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            children: nextNode
                                                        }, nextNode, false, {
                                                            fileName: "[project]/src/components/FlowInsightsPanel.tsx",
                                                            lineNumber: 167,
                                                            columnNumber: 61
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/FlowInsightsPanel.tsx",
                                                    lineNumber: 166,
                                                    columnNumber: 21
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: `mt-2 ${isDark ? 'text-[#ffe3cc]/70' : 'text-[#7a4518]/70'}`,
                                                    children: "No outgoing branches."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/FlowInsightsPanel.tsx",
                                                    lineNumber: 170,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/FlowInsightsPanel.tsx",
                                            lineNumber: 163,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/FlowInsightsPanel.tsx",
                                    lineNumber: 158,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/FlowInsightsPanel.tsx",
                            lineNumber: 156,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `neo-card p-4 ${isDark ? '' : 'bg-[#fff7ef]'}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: `text-sm font-semibold ${isDark ? 'text-[#fff7ef]' : 'text-[#23160d]'}`,
                                    children: "Flow Health"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/FlowInsightsPanel.tsx",
                                    lineNumber: 177,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `mt-3 space-y-3 text-sm ${isDark ? 'text-[#ffe3cc]' : 'text-[#5b2b0c]'}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `rounded-2xl border p-3 ${insights.isDeadEnd ? 'border-red-400/20 bg-red-500/10' : isDark ? 'border-[#e7a46e]/25 bg-[#e7a46e]/10' : 'border-[#fb7507]/20 bg-[#ffe8d2]'}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: `font-semibold ${insights.isDeadEnd ? 'text-red-300' : isDark ? 'text-[#ffe3cc]' : 'text-[#c85a08]'}`,
                                                    children: insights.isDeadEnd ? 'Dead end warning' : 'Healthy continuation'
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/FlowInsightsPanel.tsx",
                                                    lineNumber: 180,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mt-1",
                                                    children: insights.isDeadEnd ? 'This node has no forward path.' : 'This node continues the conversation smoothly.'
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/FlowInsightsPanel.tsx",
                                                    lineNumber: 183,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/FlowInsightsPanel.tsx",
                                            lineNumber: 179,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `rounded-2xl border p-3 shadow-[inset_2px_2px_6px_rgba(0,0,0,0.1)] ${isDark ? 'border-[#ffe3cc]/15 bg-[#2d1d10]/70' : 'border-[#fb7507]/15 bg-[#fff2e8]'}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: `font-semibold ${isDark ? 'text-[#e7a46e]' : 'text-[#c85a08]'}`,
                                                    children: "Suggested move"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/FlowInsightsPanel.tsx",
                                                    lineNumber: 187,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mt-1",
                                                    children: insights.suggestion
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/FlowInsightsPanel.tsx",
                                                    lineNumber: 188,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/FlowInsightsPanel.tsx",
                                            lineNumber: 186,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/FlowInsightsPanel.tsx",
                                    lineNumber: 178,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/FlowInsightsPanel.tsx",
                            lineNumber: 176,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true)
            }, void 0, false, {
                fileName: "[project]/src/components/FlowInsightsPanel.tsx",
                lineNumber: 128,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/FlowInsightsPanel.tsx",
        lineNumber: 122,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/app/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Page
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Canvas$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Canvas.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ChatPreview$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ChatPreview.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$EditorPanel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/EditorPanel.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FlowInsightsPanel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/FlowInsightsPanel.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
function Page() {
    const [data, setData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [showPreview, setShowPreview] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedNode, setSelectedNode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])();
    const [nodeCount, setNodeCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [theme, setTheme] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('dark');
    const isDark = theme === 'dark';
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const loadData = async ()=>{
            try {
                const res = await fetch('/flow_data.json');
                const flowData = await res.json();
                console.log('Loaded flow data from /flow_data.json:', flowData);
                setData(flowData);
                setNodeCount(flowData.nodes.length);
            } catch (error) {
                console.error('Failed to load flow data:', error);
            }
        };
        loadData();
    }, []);
    const handleNodeEdit = (id, text)=>{
        if (!data) return;
        const updatedData = {
            ...data,
            nodes: data.nodes.map((n)=>n.id === id ? {
                    ...n,
                    text
                } : n)
        };
        setData(updatedData);
    };
    const handleNodeUpdate = (id, updates)=>{
        if (!data) return;
        const updatedData = {
            ...data,
            nodes: data.nodes.map((n)=>n.id === id ? {
                    ...n,
                    ...updates
                } : n)
        };
        setData(updatedData);
    };
    if (!data) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `min-h-screen flex items-center justify-center ${isDark ? 'bg-[#17110b]' : 'bg-[#fff7ef]'}`,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: isDark ? 'text-[#e7a46e]' : 'text-[#fb7507]',
                children: "Loading..."
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 54,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 53,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: `min-h-screen flex flex-col ${isDark ? 'bg-[radial-gradient(circle_at_top,_rgba(255,227,204,0.12),_transparent_35%),linear-gradient(135deg,_#17110b_0%,_#23160d_100%)] text-[#fff7ef]' : 'bg-[radial-gradient(circle_at_top,_rgba(251,117,7,0.12),_transparent_35%),linear-gradient(135deg,_#fffaf4_0%,_#ffebd9_100%)] text-[#23160d]'}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: `h-16 border-b flex items-center justify-between px-8 shadow-[0_12px_30px_rgba(0,0,0,0.18)] backdrop-blur-sm ${isDark ? 'border-[#ffe3cc]/15 bg-[#23160d]/95' : 'border-[#fb7507]/15 bg-[#fffdf8]/95'}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-8 h-8 rounded-2xl bg-linear-to-br from-[#ffe3cc] via-[#e7a46e] to-[#fb7507] flex items-center justify-center shadow-[0_8px_16px_rgba(251,117,7,0.24)]",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-sm font-bold text-[#23160d]",
                                    children: "SF"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 64,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 63,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: `text-xl font-semibold bg-linear-to-r from-[#ffe3cc] via-[#e7a46e] to-[#fb7507] bg-clip-text text-transparent ${isDark ? '' : 'text-[#fb7507]'}`,
                                children: "SupportFlow"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 66,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 62,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `rounded-full border px-3 py-1 text-sm font-medium shadow-[inset_2px_2px_6px_rgba(0,0,0,0.08)] ${isDark ? 'border-[#ffe3cc]/15 bg-[#2d1d10]/80 text-[#e7a46e]' : 'border-[#fb7507]/15 bg-[#fff2e8]/80 text-[#c85a08]'}`,
                                children: [
                                    nodeCount,
                                    " nodes"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 69,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>setTheme(isDark ? 'light' : 'dark'),
                                className: `flex items-center gap-2 rounded-full border px-3 py-1.5 text-sm font-semibold transition-colors ${isDark ? 'border-[#ffe3cc]/15 bg-[#2d1d10]/80 text-[#ffe3cc] hover:bg-[#3a2414]' : 'border-[#fb7507]/20 bg-[#fff7ef] text-[#c85a08] hover:bg-[#ffe8d2]'}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: isDark ? '☀' : '☾'
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 77,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: isDark ? 'Light' : 'Dark'
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 78,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 72,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 68,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 61,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 flex overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 flex flex-col overflow-hidden",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `flex-1 p-6 mb-12 overflow-auto ${isDark ? 'bg-[radial-gradient(circle_at_top_left,_rgba(255,227,204,0.12),_transparent_40%),linear-gradient(135deg,_rgba(23,17,11,0.98),rgba(35,22,13,0.9))]' : 'bg-[radial-gradient(circle_at_top_left,_rgba(251,117,7,0.12),_transparent_40%),linear-gradient(135deg,_rgba(255,250,244,0.98),rgba(255,235,217,0.95))]'}`,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Canvas$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                data: data,
                                isEditing: true,
                                activeNode: selectedNode,
                                onNodeEdit: handleNodeEdit,
                                onNodeSelect: setSelectedNode,
                                theme: theme
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 86,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 85,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 84,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `w-96 h-max border-l overflow-hidden flex flex-col ${isDark ? 'border-[#ffe3cc]/15' : 'border-[#fb7507]/15'}`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$EditorPanel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            data: data,
                            selectedNode: selectedNode,
                            onNodeUpdate: handleNodeUpdate,
                            onPreview: ()=>setShowPreview(true),
                            theme: theme
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 98,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 97,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 83,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FlowInsightsPanel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                data: data,
                selectedNode: selectedNode,
                theme: theme
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 108,
                columnNumber: 7
            }, this),
            showPreview && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ChatPreview$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                data: data,
                onClose: ()=>setShowPreview(false),
                theme: theme
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 110,
                columnNumber: 23
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 60,
        columnNumber: 5
    }, this);
}
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime;
}),
];

//# sourceMappingURL=_01917j2._.js.map