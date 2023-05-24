import { getClient } from '../../src/nablaflow/archiwind/client';
import fs from 'node:fs';
import axios from 'axios';

async function createModel(sdk) {
  const { createModelV1 } = await sdk.createModelV1({
    input: {
      name: "test model from api",
      building: {filename: "building.stl"},
      surroundings: {filename: "surroundings.stl"},
      terrain: {filename: "terrain.stl"},
    }
  });

  return createModelV1;
}

async function createSimulation(sdk, modelId) {
  const { createSimulationV1 } = await sdk.createSimulationV1({
    input: {
      name: "test from api",
      modelId: modelId,
      coordinates: {latitude: 12.5, longitude: -12.5},
      quality: "BASIC",
      windDirections: 8
    }
  });

  return createSimulationV1;
}

async function uploadAssets(model) {
  await axios.put(
    model.building.uploadUrl,
    (await fs.promises.readFile('examples/archiwind/assets/building.stl')),
    {
      validateStatus: function (status) { return status < 400; },
    }
  );

  await axios.put(
    model.terrain.uploadUrl,
    (await fs.promises.readFile('examples/archiwind/assets/terrain.stl')),
    {
      validateStatus: function (status) { return status < 400; },
    }
  );

  await axios.put(
    model.surroundings.uploadUrl,
    (await fs.promises.readFile('examples/archiwind/assets/surroundings.stl')),
    {
      validateStatus: function (status) { return status < 400; },
    }
  );
}

async function main() {
  const sdk = getClient();

  const model = await createModel(sdk);
  await uploadAssets(model);

  const modelId = model.id;
  const simulation = await createSimulation(sdk, model.id);

  console.log(simulation);
}

main();
