import { FC, useRef } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { Object3D, PerspectiveCamera, Vector3 } from 'three'
import { OrbitControls } from '@react-three/drei'

interface CameraProps {
	fov: number
	aspect: number
	near: number
	far: number
	position: Vector3
	modelRef: React.MutableRefObject<Object3D | null>
	maxZoomDistance?: number
}

const Camera: FC<CameraProps> = ({
	fov,
	aspect,
	near,
	far,
	position,
	modelRef,
	maxZoomDistance,
}) => {
	const cameraRef = useRef<PerspectiveCamera>(null)
	const { gl, camera } = useThree()

	useFrame(() => {
		if (cameraRef.current && modelRef.current) {
			cameraRef.current.position.set(0, 0, 10)
			cameraRef.current.lookAt(modelRef.current.position)
		}
	})

	return (
		<>
			<perspectiveCamera
				ref={cameraRef}
				fov={fov}
				aspect={aspect}
				near={near}
				far={far}
				position={position}
			/>
			<OrbitControls
				enableDamping
				dampingFactor={0.25}
				rotateSpeed={0.4}
				args={[camera, gl.domElement]}
				minDistance={maxZoomDistance || 5}
				maxDistance={maxZoomDistance || 10}
				enablePan={false}
			/>
		</>
	)
}

export default Camera
