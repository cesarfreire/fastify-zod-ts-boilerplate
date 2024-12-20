# Fastify + Zod + TypeScript Boilerplate

A lightweight and efficient backend boilerplate using **Fastify**, **Zod**, and **TypeScript**. This template is designed to accelerate the development of APIs with robust type safety and powerful runtime validation.

## Features

- **Fastify**: A fast and low-overhead web framework for Node.js.
- **Zod**: Schema validation for runtime and TypeScript inference.
- **TypeScript**: Type-safe code for better development experience.
- Minimal setup to get started quickly.

## Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (>= 20.x)
- [pnpm](https://pnpm.io/) (preferred package manager)

## Installation

1. Clone this repository:
    ```bash
    git clone https://github.com/cesarfreire/fastify-zod-ts-boilerplate.git
    cd fastify-zod-ts-boilerplate
    ```

2. Install dependencies:
    ```bash
    pnpm install
    ```

## Development

Run the development server with hot-reloading:

```bash
pnpm run dev
```

This command uses tsx to watch and restart the server when files change.

## File Structure
```bash
src/
├── server.ts   # Entry point of the application
└── routes.ts   # Define your Fastify routes here
```

## Usage

- Define your API routes inside the src/routes directory.
- Use Zod schemas for validating incoming requests and responses.
- Enjoy type safety and powerful runtime validations.

Thanks!