import { FC, useState } from 'react'
import { PointerLockControls, Sky } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import styles from './Scene.module.scss'
import Ground from './../Ground/Ground'
import { Physics } from '@react-three/rapier'

interface SceneProps {
	position: [number, number, number]
	children: React.ReactNode
}

const shadowOffset = 50

const Scene: FC<SceneProps> = ({ position, children }) => {
	const [isLock, setIsLock] = useState(false)

	return (
		<div className={styles.wrapper}>
			<div className={styles.scene}>
				<div className={styles.aim}></div>
				<Canvas
					camera={{ position: position, fov: 75, far: 500, near: 1 }}
					shadows
				>
					{/* <PointerLockControls /> */}
					<PointerLockControls
						onLock={() => setIsLock(true)}
						onUnlock={() => setIsLock(false)}
					/>
					<Sky sunPosition={[100, 20, 100]} />

					{/* <directionalLight position={[0, 1, 5]} castShadow /> */}

					<ambientLight intensity={2.5} />

					<directionalLight
						castShadow
						intensity={1.5}
						shadow-mapSize={4096}
						shadow-camera-top={shadowOffset}
						shadow-camera-bottom={-shadowOffset}
						shadow-camera-left={shadowOffset}
						shadow-camera-right={-shadowOffset}
						position={[100, 100, 0]}
					/>

					{/* <Circle args={[10]} rotation-x={-Math.PI / 2} receiveShadow>
						<meshStandardMaterial />
					</Circle> */}

					<Physics gravity={[0, -20, 0]}>
						<Ground />
						{children}
					</Physics>

					{/* <Ground /> */}

					{/* <OrbitControls target={[0, 1, 0]} /> */}
				</Canvas>
			</div>
		</div>
	)
}

export default Scene
