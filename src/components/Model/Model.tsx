import { FC, useState, useEffect, useMemo } from 'react'
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
// import { IModel } from '../../types/Model'
import { Box3, Object3D } from 'three'

interface ModelProps {
	modelRef: React.MutableRefObject<Object3D | null>
	model?: string
}

const Model: FC<ModelProps> = ({ modelRef, model = 'Worm' }) => {
	const [height, setHeight] = useState<number>(0)

	const gltf = useLoader(GLTFLoader, `./Models/${model}.glb`)

	const copiedGltf = useMemo(() => gltf.scene.clone(), [gltf])

	useEffect(() => {
		if (modelRef.current) {
			const bbox = new Box3().setFromObject(modelRef.current)
			setHeight(bbox.max.y - bbox.min.y)
		}
	}, [modelRef, model])

	return (
		<primitive
			object={copiedGltf}
			ref={modelRef}
			position={[0, -height / 2, 0]}
		/>
	)
}

export default Model
