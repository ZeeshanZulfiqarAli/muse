import React, { useCallback } from 'react';
import Canvas from '../Canvas';
import {
    SceneLoader,
    FreeCamera,
    Vector3,
    HemisphericLight,
    VertexBuffer,
    FxaaPostProcess,
    Color3,
    ImageProcessingConfiguration,
    Scene,
} from '@babylonjs/core';
import '@babylonjs/loaders';
import voxelRoom from '../../model/voxel-room v3 6.glb';

const forceUV1 = new Set(['painting 1', 'painting 2', 'painting 3', 'glass']);
// const forceDuplicateTexture = new Set(['', 'Cube.198'])
const Model = () => {
    const onSceneReady = useCallback((scene) => {
        const camera = new FreeCamera('camera1', new Vector3(0, 5, -10), scene);

        // This targets the camera to scene origin
        camera.setTarget(Vector3.Zero());

        // Append glTF model to scene.
        SceneLoader.Append(
            process.env.REACT_APP_MODEL_URL || voxelRoom,
            '',
            scene,
            function (scene) {
                scene.materials.forEach((material) => {
                    const textures = material.getActiveTextures();

                    const mesh = Object.values(material.meshMap)[0];

                    if (!mesh) return;

                    let hasTwoUVSets =
                        mesh.isVerticesDataPresent(VertexBuffer.UVKind) &&
                        mesh.isVerticesDataPresent(VertexBuffer.UV2Kind);

                    if (forceUV1.has(material.name)) {
                        hasTwoUVSets = false;
                    }
                    textures.forEach((texture) => {
                        texture.coordinatesIndex = hasTwoUVSets ? 1 : 0;
                    });
                });

                // scene.meshes.forEach((mesh) => {
                //     if (duplicateTexture.has(mesh.id)) {

                //     }
                // })
                scene.clearColor = new Color3(0, 0, 0);
                scene.fogColor = new Color3(0, 0, 0);
                scene.fogMode = Scene.FOGMODE_LINEAR;
                scene.fogStart = 10.3;
                scene.fogEnd = 14.5;

                // This creates a light, aiming 0,1,0 - to the sky (non-mesh)
                const light = new HemisphericLight('light', new Vector3(0, 1, 0), scene);
                light.intensity = 8;

                // Create a default arc rotate camera and light.
                scene.createDefaultCameraOrLight(true, true, true);
                const camera = scene.activeCamera;
                camera.alpha = 2.35;
                camera.beta = 1.31;
                camera.radius = 9.548;
                camera.setPosition(new Vector3(-4.8, 2.53, 4.756));
                camera.setTarget(new Vector3(1.698, 0.198, -1.8));
                camera.lowerAlphaLimit = 1.9;
                camera.upperAlphaLimit = 2.7;
                camera.lowerBetaLimit = 1.12;
                camera.upperBetaLimit = 1.46;
                camera.lowerRadiusLimit = 5.0;
                camera.upperRadiusLimit = 10.8;
                camera.fov = 0.422;
                camera.maxZ = 100;
                camera.panningSensibility = 0;

                scene.imageProcessingConfiguration.toneMappingType =
                    ImageProcessingConfiguration.TONEMAPPING_ACES;
                scene.imageProcessingConfiguration.vignetteEnabled = true;
                scene.imageProcessingConfiguration.exposure = 4.4;

                new FxaaPostProcess('fxaa', 2, camera);
            },
        );

        return scene;
    }, []);

    return (
        <Canvas
            onSceneReady={onSceneReady}
            adaptToDeviceRatio
            engineOptions={{ premultipliedAlpha: true }}
        />
    );
};

export default Model;
