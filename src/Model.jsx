import { useGLTF } from "@react-three/drei";

export default function Model(props) {
  const { scene, nodes, materials } = useGLTF("/samand.glb");

  return <primitive object={scene} {...props} />;
}
