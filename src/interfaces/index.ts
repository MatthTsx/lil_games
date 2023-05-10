import type { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export interface Loaders {
    gltf : GLTFLoader
}

export type Assets = {
    type: string,
    path: string
}[]