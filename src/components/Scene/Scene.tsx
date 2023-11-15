import { FC } from 'react'
import { OrbitControls, Sky } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import styles from './Scene.module.scss'
import Ground from './../Ground/Ground'
import { Physics, RigidBody } from '@react-three/rapier'

interface SceneProps {
	position: [number, number, number]
	children: React.ReactNode
}

const Scene: FC<SceneProps> = ({ position, children }) => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.scene}>
				<Canvas camera={{ position: position }} shadows>
					<Sky sunPosition={[100, 20, 100]} />

					{/* <directionalLight position={[0, 1, 5]} castShadow /> */}

					<ambientLight intensity={3.5} />

					{/* <Circle args={[10]} rotation-x={-Math.PI / 2} receiveShadow>
						<meshStandardMaterial />
					</Circle> */}

					<Physics gravity={[0, -20, 0]}>
						<Ground />
						<RigidBody>
							<mesh position={[0, 3, -5]}>{children}</mesh>
						</RigidBody>
					</Physics>

					{/* <Ground /> */}

					<OrbitControls target={[0, 1, 0]} />
				</Canvas>
			</div>
		</div>
	)
}

export default Scene
