import { FC, useMemo } from 'react'
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { IWorm } from './../../types/Worm'
import { RigidBody } from '@react-three/rapier'

const Worm: FC<IWorm> = ({ position = [0, 0, 0], texture = 'Worm.glb' }) => {
	const gltf = useLoader(GLTFLoader, `/Models/${texture}`)

	const copiedGltf = useMemo(() => gltf.scene.clone(), [gltf])

	return (
		<RigidBody position={position}>
			<mesh>
				<primitive object={copiedGltf} position={position} />
			</mesh>
		</RigidBody>
	)
}

export default Worm
