import { FC, useMemo } from 'react'
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { IWorm } from './../../types/Worm'

const Worm: FC<IWorm> = ({ position, texture = 'Worm.glb' }) => {
	const gltf = useLoader(GLTFLoader, `/Models/${texture}`)

	const copiedGltf = useMemo(() => gltf.scene.clone(), [gltf])

	return <primitive object={copiedGltf} position={position} />
}

export default Worm
