import { getClient } from '../src/nablaflow/client';
import fs from 'node:fs';
import axios from 'axios';

async function createModel(sdk) {
  const { createArchiwindV1Model } = await sdk.createArchiwindV1Model({
    input: {
      name: "test model from api",
      building: {filename: "building.stl"},
      surroundings: {filename: "surroundings.stl"},
      terrain: {filename: "terrain.stl"},
    }
  });

  return createArchiwindV1Model;
}

async function createSimulation(sdk, modelId) {
  const { createArchiwindV1Simulation } = await sdk.createArchiwindV1Simulation({
    input: {
      name: "test from api",
      modelId: modelId,
      coordinates: {latitude: 12.5, longitude: -12.5},
      quality: "BASIC",
      windDirections: 8
    }
  });

  return createArchiwindV1Simulation;
}

async function uploadAssets(createArchiwindV1Model) {
  await axios.put(
    createArchiwindV1Model.building.uploadUrl,
    (await fs.promises.readFile('examples/assets/building.stl')),
    {
      validateStatus: function (status) { return status < 400; },
    }
  );

  await axios.put(
    createArchiwindV1Model.terrain.uploadUrl,
    (await fs.promises.readFile('examples/assets/terrain.stl')),
    {
      validateStatus: function (status) { return status < 400; },
    }
  );

  await axios.put(
    createArchiwindV1Model.surroundings.uploadUrl,
    (await fs.promises.readFile('examples/assets/surroundings.stl')),
    {
      validateStatus: function (status) { return status < 400; },
    }
  );
}

async function main() {
  const sdk = getClient();

  const createArchiwindV1Model = await createModel(sdk);
  await uploadAssets(createArchiwindV1Model);

  const modelId = createArchiwindV1Model.id;
  const createArchiwindV1Simulation = await createSimulation(sdk, modelId);

  console.log(createArchiwindV1Simulation);
}

main();
