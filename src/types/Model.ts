import { Vector3 } from 'three'

export interface IModel {
	position: Vector3
	texture?: string
}

export enum ModelEnum {
	FreezeWorm = 'Freeze Worm.glb',
	GirderWorm = 'Girder Worm.glb',
	JetPackWorm = 'Jet Pack Worm.glb',
	OldWoman = 'Old Woman.glb',
	ParachuteWorm = 'Parachute Worm.glb',
	TestTubes = 'Test Tubes.glb',
	WeaponCrate = 'Weapon Crate.glb',
	Worm = 'Worm.glb',
}
