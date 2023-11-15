import { FC } from 'react'
import Scene from './Scene/Scene'
import Content from './Content/Content'
import Worm from './Worms/Worm'

const App: FC = () => {
	return (
		<>
			<Scene position={[0, 3, 5]}>
				<Worm position={[-15, 0.5, -3]} texture={'Parachute Worm.glb'} />
				<Worm position={[-10, 0.5, -3]} />
				<Worm position={[-5, 0.5, -3]} texture={'Jet Pack Worm.glb'} />
				<Worm position={[0, 0.5, -3]} texture={'Girder Worm.glb'} />
				<Worm position={[5, 0.5, -3]} texture={'Freeze Worm.glb'} />
				<Worm position={[10, 0.5, -3]} texture={'Old Woman.glb'} />
				<Worm position={[15, 0.5, -3]} texture={'Weapon Crate.glb'} />
			</Scene>
			<Content />
			<Scene position={[0, 3, 5]}>
				<Worm position={[-10, 0.5, 5]} texture={'Jet Pack Worm.glb'} />
				<Worm position={[-5, 0.5, 5]} texture={'Jet Pack Worm.glb'} />
				<Worm position={[0, 0.5, 5]} texture={'Jet Pack Worm.glb'} />
				<Worm position={[5, 0.5, 5]} texture={'Jet Pack Worm.glb'} />
				<Worm position={[10, 0.5, 5]} texture={'Jet Pack Worm.glb'} />

				<Worm position={[-10, 0.5, 0]} texture={'Jet Pack Worm.glb'} />
				<Worm position={[-5, 0.5, 0]} texture={'Jet Pack Worm.glb'} />
				<Worm position={[0, 0.5, 0]} texture={'Jet Pack Worm.glb'} />
				<Worm position={[5, 0.5, 0]} texture={'Jet Pack Worm.glb'} />
				<Worm position={[10, 0.5, 0]} texture={'Jet Pack Worm.glb'} />

				<Worm position={[-10, 0.5, -5]} texture={'Jet Pack Worm.glb'} />
				<Worm position={[-5, 0.5, -5]} texture={'Jet Pack Worm.glb'} />
				<Worm position={[0, 0.5, -5]} texture={'Jet Pack Worm.glb'} />
				<Worm position={[5, 0.5, -5]} texture={'Jet Pack Worm.glb'} />
				<Worm position={[10, 0.5, -5]} texture={'Jet Pack Worm.glb'} />

				<Worm position={[-10, 0.5, -10]} texture={'Jet Pack Worm.glb'} />
				<Worm position={[-5, 0.5, -10]} texture={'Jet Pack Worm.glb'} />
				<Worm position={[0, 0.5, -10]} texture={'Jet Pack Worm.glb'} />
				<Worm position={[5, 0.5, -10]} texture={'Jet Pack Worm.glb'} />
				<Worm position={[10, 0.5, -10]} texture={'Jet Pack Worm.glb'} />

				<Worm position={[-10, 0.5, -15]} texture={'Jet Pack Worm.glb'} />
				<Worm position={[-5, 0.5, -15]} texture={'Jet Pack Worm.glb'} />
				<Worm position={[0, 0.5, -15]} texture={'Jet Pack Worm.glb'} />
				<Worm position={[5, 0.5, -15]} texture={'Jet Pack Worm.glb'} />
				<Worm position={[10, 0.5, -15]} texture={'Jet Pack Worm.glb'} />

				<Worm position={[-10, 0.5, -20]} texture={'Jet Pack Worm.glb'} />
				<Worm position={[-5, 0.5, -20]} texture={'Jet Pack Worm.glb'} />
				<Worm position={[0, 0.5, -20]} texture={'Jet Pack Worm.glb'} />
				<Worm position={[5, 0.5, -20]} texture={'Jet Pack Worm.glb'} />
				<Worm position={[10, 0.5, -20]} texture={'Jet Pack Worm.glb'} />
			</Scene>
			<Content />
		</>
	)
}

export default App
