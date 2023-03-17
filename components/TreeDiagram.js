import { useState } from "react";
import Tree from "react-d3-tree";

import styles from "../styles/TreeDiagram.module.css";

const orgChart = {
  name: "CEO",
  children: [
    {
      name: "Manager",
      attributes: {
        department: "Production",
      },
      children: [
        {
          name: "Foreman",
          attributes: {
            department: "Fabrication",
          },
          children: [
            {
              name: "Worker",
            },
          ],
        },
        {
          name: "Foreman",
          attributes: {
            department: "Assembly",
          },
          children: [
            {
              name: "Worker",
            },
          ],
        },
      ],
    },
  ],
};

function NodeLabel({ nodeData }) {
  return (
    <div className="nodeLabel" onClick={() => console.log({ nodeData })}>
      <p>{nodeData.name}</p>
    </div>
  );
}

export default function TreeDiagram() {
  const [node, setNode] = useState(null);

  const handleNodeClick = (_, nodeData) => {
    setNode(nodeData);
  };

  const handleCloseClick = () => {
    setNode(null);
  };

  const renderPopover = () => {
    if (!node) return null;

    const { x, y } = node;
    return (
      <div className={styles.popover} style={{ top: y + "px", left: x + "px" }}>
        <h3>{node.name}</h3>
        <p>{node.description}</p>
        <button onClick={handleCloseClick}>Close</button>
      </div>
    );
  };

  return (
    <>
      <Tree
        translate={{ x: 50, y: 300 }}
        scaleExtent={{ min: 0.5, max: 2 }}
        data={orgChart}
        rootNodeClassName={styles.rootNode}
        branchNodeClassName={styles.branchNode}
        leafNodeClassName={styles.leafNode}
        onClick={handleNodeClick}
        nodeLabelComponent={{
          render: <NodeLabel />,
          foreignObjectWrapper: {
            x: -50,
            y: -15,
            width: 100,
            height: 30,
            style: {
              pointerEvents: "none",
            },
          },
        }}
      />
      {renderPopover()}
    </>
  );
}
