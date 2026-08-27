import { type JSX } from 'react';
import { useGLTF } from '@react-three/drei';
import type { GLTF } from 'three-stdlib';
import type { AnimationClip, Mesh, MeshStandardMaterial } from 'three';

type GLTFResult = GLTF & {
    nodes: {
        apartment_block_01: Mesh
    },
    materials: {
        lowpoly: MeshStandardMaterial
    },
    animations: AnimationClip[]
}

export function ApartmentModel(props: JSX.IntrinsicElements['group']) {
    const { nodes, materials } = useGLTF('/models/apartment.glb') as unknown as GLTFResult;
    return (
        <group {...props} dispose={null}>
            <mesh geometry={nodes.apartment_block_01.geometry} material={materials.lowpoly}/>
        </group>
    )
}

useGLTF.preload('/models/apartment.glb');