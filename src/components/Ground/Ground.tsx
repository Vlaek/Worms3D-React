import * as THREE from 'three'
import { useTexture } from '@react-three/drei'
import { FC } from 'react'
import { RigidBody } from '@react-three/rapier'

const Ground: FC = () => {
	const texture = useTexture('/Textures/Inside.png')
	texture.wrapS = texture.wrapT = THREE.RepeatWrapping

	return (
		<RigidBody>
			<mesh position={[0, -5, 0]} rotation-x={-Math.PI / 2}>
				<planeGeometry args={[500, 500]} />
				<meshStandardMaterial
					color='gray'
					map={texture}
					map-repeat={[100, 100]}
				/>
			</mesh>
		</RigidBody>
	)
}

export default Ground
