import "./style.css";

//import MyWorker from "./worker.js"; // Import the JavaScript output of the worker
const worker = new Worker("./src/worker.ts");

import { UI } from "@peasy-lib/peasy-ui";
const model = {};
const template = `<div> Hello Peasy!!! </div>`;
await UI.create(document.body, model, template).attached;
console.log(`Hello World`);

// Set up a message handler to receive data from the worker
worker.onmessage = (event: any) => {
  const result = event.data;
  // Handle the result from the worker
};

// Send data to the worker
const inputData = {
  /* your data */
};

worker.postMessage(inputData);
