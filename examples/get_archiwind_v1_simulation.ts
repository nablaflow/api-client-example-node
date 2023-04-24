import { getClient } from '../src/nablaflow/client';

async function main() {
  const sdk = getClient();

  // NOTE: Enter your simulation id and token below. 
  // Token is only required to access other users' public simulations.
  const { archiwindV1Simulation } = await sdk.findArchiwindV1SimulationById({
    id: "simulation_id",
    token: "token"
  });

  console.log(archiwindV1Simulation);
}

main();
