import { useEffect, useState } from "react";
import Tree from "react-d3-tree";

import styles from "../styles/TreeDiagram.module.css";
import { useStateContext } from "../state";

// const renderForeignObjectNode = ({
//   nodeDatum,
//   onNodeLabelClick,
//   foreignObjectProps,
// }) => (
//   <g>
//     <circle r={nodeDatum.children ? 10 : 5}></circle>
//     <foreignObject {...foreignObjectProps}>
//       <div
//         style={{ top: nodeDatum.children ? 10 : 100 }}
//         onClick={() => onNodeLabelClick(nodeDatum)}
//       >
//         <p
//           style={{ textAlign: "center", fontSize: "1.2rem", fontWeight: "500" }}
//         >
//           {nodeDatum.name}
//         </p>
//       </div>
//     </foreignObject>
//   </g>
// );

const renderCustomNode = ({
  nodeDatum,
  toggleNode,
  selectedNode,
  onNodeLabelClick,
}) => {
  const isSelected = selectedNode?.name === nodeDatum.name;
  return (
    <>
      <circle r={nodeDatum.children ? 10 : 5} onClick={toggleNode}></circle>
      <text
        onClick={() => onNodeLabelClick(nodeDatum)}
        textAnchor="middle"
        fontSize={isSelected ? "14" : "12"}
        fontWeight={isSelected ? "700" : "400"}
        dx={
          nodeDatum.children ? "60" : Math.max(nodeDatum.name?.length * 3.5, 25)
        }
        dy={nodeDatum.children ? "25" : "5"}
        fill={isSelected ? "#903BF8" : "#000"}
        strokeWidth={0}
      >
        {nodeDatum.name}
      </text>
    </>
  );
};

export default function TreeDiagram({ jobTitle, courseTitle, university }) {
  const [data, setData] = useState();
  const { selectedNode, setSelectedNode } = useStateContext();

  useEffect(() => {
    console.log({ jobTitle });
    if (jobTitle || courseTitle || university) {
      const fileName = (jobTitle || courseTitle || university)
        .toLowerCase()
        .replace(" ", "-");
      import(`../data/${fileName}.json`).then((data) => {
        console.log({ data });
        setData(data);
      });
    }
  }, [jobTitle, courseTitle, university]);

  const handleNodeLabelClick = (nodeData) => {
    if (nodeData.name === selectedNode?.name) {
      setSelectedNode({});
    } else {
      setSelectedNode(nodeData);
    }
  };

  if (!jobTitle || !data) {
    return null;
  }

  return (
    <>
      <Tree
        translate={{ x: 300, y: 300 }}
        scaleExtent={{ min: 0.5, max: 2 }}
        data={data}
        rootNodeClassName={styles.rootNode}
        branchNodeClassName={styles.branchNode}
        leafNodeClassName={styles.leafNode}
        renderCustomNodeElement={(rd3tProps) =>
          renderCustomNode({
            ...rd3tProps,
            selectedNode,
            onNodeLabelClick: handleNodeLabelClick,
          })
        }
      />
    </>
  );
}
