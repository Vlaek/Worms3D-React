import { FC } from 'react'
import Scene from './Scene/Scene'
import Content from './Content/Content'
import Worm from './Worms/Worm'
import Player from './Worms/Player'
import { IModels } from '../types/Worm'

const App: FC = () => {
	return (
		<>
			<Scene position={[0, 8, 10]}>
				<Worm position={[-15, 0.5, -3]} texture={IModels.ParachuteWorm} />
				<Worm position={[-10, 0.5, -3]} />
				<Worm position={[-5, 0.5, -3]} texture={IModels.JetPackWorm} />
				<Worm position={[0, 0.5, -3]} texture={IModels.GirderWorm} />
				<Worm position={[5, 0.5, -3]} texture={IModels.FreezeWorm} />
				<Worm position={[10, 0.5, -3]} texture={IModels.OldWoman} />
				<Worm position={[15, 0.5, -3]} texture={IModels.WeaponCrate} />
				<Player />
			</Scene>

			<Content />

			{/* <Scene position={[0, 3, 5]}>
				<Worm position={[-10, 0.5, 5]} texture={IModels.JetPackWorm} />
				<Worm position={[-5, 0.5, 5]} texture={IModels.JetPackWorm} />
				<Worm position={[0, 0.5, 5]} texture={IModels.JetPackWorm} />
				<Worm position={[5, 0.5, 5]} texture={IModels.JetPackWorm} />
				<Worm position={[10, 0.5, 5]} texture={IModels.JetPackWorm} />

				<Worm position={[-10, 0.5, 0]} texture={IModels.JetPackWorm} />
				<Worm position={[-5, 0.5, 0]} texture={IModels.JetPackWorm} />
				<Worm position={[0, 0.5, 0]} texture={IModels.JetPackWorm} />
				<Worm position={[5, 0.5, 0]} texture={IModels.JetPackWorm} />
				<Worm position={[10, 0.5, 0]} texture={IModels.JetPackWorm} />

				<Worm position={[-10, 0.5, -5]} texture={IModels.JetPackWorm} />
				<Worm position={[-5, 0.5, -5]} texture={IModels.JetPackWorm} />
				<Worm position={[0, 0.5, -5]} texture={IModels.JetPackWorm} />
				<Worm position={[5, 0.5, -5]} texture={IModels.JetPackWorm} />
				<Worm position={[10, 0.5, -5]} texture={IModels.JetPackWorm} />

				<Worm position={[-10, 0.5, -10]} texture={IModels.JetPackWorm} />
				<Worm position={[-5, 0.5, -10]} texture={IModels.JetPackWorm} />
				<Worm position={[0, 0.5, -10]} texture={IModels.JetPackWorm} />
				<Worm position={[5, 0.5, -10]} texture={IModels.JetPackWorm} />
				<Worm position={[10, 0.5, -10]} texture={IModels.JetPackWorm} />

				<Worm position={[-10, 0.5, -15]} texture={IModels.JetPackWorm} />
				<Worm position={[-5, 0.5, -15]} texture={IModels.JetPackWorm} />
				<Worm position={[0, 0.5, -15]} texture={IModels.JetPackWorm} />
				<Worm position={[5, 0.5, -15]} texture={IModels.JetPackWorm} />
				<Worm position={[10, 0.5, -15]} texture={IModels.JetPackWorm} />

				<Worm position={[-10, 0.5, -20]} texture={IModels.JetPackWorm} />
				<Worm position={[-5, 0.5, -20]} texture={IModels.JetPackWorm} />
				<Worm position={[0, 0.5, -20]} texture={IModels.JetPackWorm} />
				<Worm position={[5, 0.5, -20]} texture={IModels.JetPackWorm} />
				<Worm position={[10, 0.5, -20]} texture={IModels.JetPackWorm} />
			</Scene> */}

			<Content />
		</>
	)
}

export default App
