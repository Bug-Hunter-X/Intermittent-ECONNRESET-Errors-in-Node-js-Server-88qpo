# Node.js Intermittent ECONNRESET Bug

This repository demonstrates a bug causing intermittent ECONNRESET errors in a simple Node.js HTTP server. The server crashes unpredictably, especially under load.

## Bug Description
The server, when handling multiple concurrent requests, occasionally throws an 'ECONNRESET' error and crashes without proper handling. This leads to server unavailability.

## Solution
The provided solution uses error handling with the 'close' event to gracefully handle the ECONNRESET error. It also adds logic to prevent the server from crashing.