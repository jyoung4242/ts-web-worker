// worker.ts

self.onmessage = event => {
  const data = event.data;
  console.log(data);
  // Perform some heavy computation
  const result = performHeavyComputation(data);

  // Send the result back to the main thread
  self.postMessage(result);
};

function performHeavyComputation(data: any) {
  // Your heavy computation logic here
}
