import { getClient } from '../../src/nablaflow/archiwind/client';

async function main() {
  const sdk = getClient();

  // NOTE: Enter your simulation id and token below. 
  // Token is only required to access other users' public simulations.
  const { simulationV1 } = await sdk.findSimulationV1ById({
    id: "simulation_id",
    token: "token",
  });

  console.log(simulationV1);
}

main();
