# Proof of Concept: Nx Build Dependencies in Tests

This repository demonstrates an issue with Nx where dependencies that are only referenced in tests are included in the `build` target.

## Issue Description

When a dependency is referenced only in test files and not in the main application code, Nx will still mark these dependencies as requiring to be built, and these end up in the final dist dir.

This behavior is not expected as within the `nx.json` file the inputs set for `build` under the `targetDefaults` includes a glob pattern to not check the `spec` files.

## Repository Structure

This POC contains a minimal setup to reproduce the dependency issue with Nx builds.

## Expected behavior

When running the `build` target for a project, the project will not include any dependencies related to the `spec` files, or files omitted by the `inputs`.