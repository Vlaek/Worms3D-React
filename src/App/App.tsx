import { FC, useState, useEffect, useRef } from 'react'
import Model from '../components/Model/Model'
import { Canvas } from '@react-three/fiber'
import { Object3D, TextureLoader, Vector3 } from 'three'
import Camera from '../components/Camera/Camera'
import styles from './App.module.scss'
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io'

const models = [
	'Worm',
	'Old Woman',
	'Jet Pack Worm',
	'Freeze Worm',
	'Girder Worm',
	'Parachute Worm',
	'Weapon Crate',
	'Air Strike',
	'Fire Punch Worm',
	'Homing Pigeon',
	'Mad Cow',
	'Mortar',
	'Sheep',
	'Super Sheep',
]

const textures = [
	'Grass',
	'Inside',
	'Gray',
	'Purple',
	'Red',
	'RedLeaves',
	'Stone',
	'StoneGrass',
	'Wood',
	'Yellow',
	'YellowGrass',
]

const App: FC = () => {
	const [backgroundIndex, setBackgroundIndex] = useState<number>(0)
	const [modelIndex, setModelIndex] = useState<number>(0)

	const modelRef = useRef<Object3D>(null)

	useEffect(() => {
		if (modelIndex >= models.length) setModelIndex(0)
		if (modelIndex < 0) setModelIndex(models.length - 1)
	}, [modelIndex])

	useEffect(() => {
		if (backgroundIndex >= textures.length) setBackgroundIndex(0)
		if (backgroundIndex < 0) setBackgroundIndex(textures.length - 1)
	}, [backgroundIndex])

	return (
		<div className={styles.wrapper}>
			<header>
				<div className={styles.header}>{models[modelIndex]}</div>
			</header>
			<main className={styles.main}>
				<div className={styles.btn}>
					<IoIosArrowBack
						className={styles.arrow_btn}
						onClick={() => setModelIndex(prev => prev - 1)}
						title={'Предыдущая модель'}
					/>
				</div>
				<div className={styles.title}>{models[modelIndex]}</div>
				<div className={styles.scene}>
					<Canvas>
						<ambientLight intensity={0.5} />

						<spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />

						<mesh>
							<boxGeometry args={[250, 250, 250]} />
							<meshBasicMaterial
								map={new TextureLoader().load(
									`./Textures/${textures[backgroundIndex]}.png`,
								)}
								side={2}
							/>
						</mesh>

						<directionalLight position={[5, 5, 5]} intensity={1} />

						<Model modelRef={modelRef} model={models[modelIndex]} />

						<Camera
							fov={75}
							aspect={window.innerWidth / window.innerHeight}
							near={0.1}
							far={1000}
							modelRef={modelRef}
							position={new Vector3(0, 0, 0)}
						/>
					</Canvas>
				</div>
				<div className={styles.btn}>
					<IoIosArrowForward
						className={styles.arrow_btn}
						onClick={() => setModelIndex(prev => prev + 1)}
						title={'Следующая модель'}
					/>
				</div>
			</main>
			<footer>
				<div className={styles.footer}>
					<div className={styles.btn}>
						<IoIosArrowBack
							className={styles.arrow_btn}
							onClick={() => setBackgroundIndex(prev => prev - 1)}
							title={'Предыдущий фон'}
						/>
					</div>
					<div className={styles.footer__title}>
						{textures[backgroundIndex]}
					</div>
					<div className={styles.btn}>
						<IoIosArrowForward
							className={styles.arrow_btn}
							onClick={() => setBackgroundIndex(prev => prev + 1)}
							title={'Следующий фон'}
						/>
					</div>
				</div>
			</footer>
		</div>
	)
}

export default App
