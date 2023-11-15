import { FC, useEffect, useMemo } from 'react'
import { RigidBody, useRapier } from '@react-three/rapier'
import { useLoader } from '@react-three/fiber'
import * as THREE from 'three'
import { useRef } from 'react'
import { usePersonControls } from '../../hooks/usePersonControls'
import { useFrame } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import * as RAPIER from '@dimforge/rapier3d-compat'

const MOVE_SPEED = 5
const direction = new THREE.Vector3()
const frontVector = new THREE.Vector3()
const sideVector = new THREE.Vector3()

const Player: FC = () => {
	const playerRef = useRef()
	const { forward, backward, left, right, jump } = usePersonControls()

	const rapier = useRapier()

	const gltf = useLoader(GLTFLoader, `/Models/Worm.glb`)

	const copiedGltf = useMemo(() => gltf.scene.clone(), [gltf])

	useFrame(state => {
		if (!playerRef.current) return

		// moving player
		const velocity = playerRef.current.linvel()

		frontVector.set(0, 0, backward - forward)
		sideVector.set(left - right, 0, 0)
		direction
			.subVectors(frontVector, sideVector)
			.normalize()
			.multiplyScalar(MOVE_SPEED)
			.applyEuler(state.camera.rotation)

		playerRef.current.wakeUp()
		playerRef.current.setLinvel({
			x: direction.x,
			y: velocity.y,
			z: direction.z,
		})

		// jumping
		const world = rapier.world
		const ray = world.castRay(
			new RAPIER.Ray(playerRef.current.translation(), { x: 0, y: -1, z: 0 }),
		)
		const grounded = ray && ray.collider && Math.abs(ray.toi) <= 1.5

		if (jump && grounded) doJump()

		// moving camera
		const { x, y, z } = playerRef.current.translation()
		state.camera.position.set(x, y + 10, z)
	})

	const doJump = () => {
		playerRef.current.setLinvel({ x: 0, y: 8, z: 0 })
	}

	useEffect(() => {
		const preventScroll = (e: KeyboardEvent) => {
			if (e.keyCode === 32 && e.target === document.body) {
				e.preventDefault()
			}
		}

		window.addEventListener('keydown', preventScroll)

		return () => {
			window.removeEventListener('keydown', preventScroll)
		}
	}, [])

	return (
		<RigidBody position={[0, 1, -2]} mass={1} ref={playerRef} lockRotations>
			<mesh>
				<primitive object={copiedGltf} position={[0, 0, 0]} />
			</mesh>
		</RigidBody>
	)
}

export default Player
