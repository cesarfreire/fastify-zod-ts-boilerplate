import { fastify } from "fastify";
import { fastifyCors } from "@fastify/cors";
import {
  validatorCompiler,
  serializerCompiler,
  ZodTypeProvider,
  jsonSchemaTransform,
} from "fastify-type-provider-zod";
import { fastifySwagger } from "@fastify/swagger";
import { fastifySwaggerUi } from "@fastify/swagger-ui";
import { routes } from "./routes";

const app = fastify().withTypeProvider<ZodTypeProvider>();

// Register zod compilers
app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);

// Register cors
app.register(fastifyCors, { origin: "*" });

// Register swagger
app.register(fastifySwagger, {
  openapi: {
    info: {
      title: "Fastify API",
      version: "0.1.0",
    },
  },
  transform: jsonSchemaTransform,
});

// Register swagger ui
app.register(fastifySwaggerUi, {
  routePrefix: "/docs",
});

// Register routes
app.register(routes);


// Start the server
app.listen({ port: 3333 }).then(() => {
  console.log("Server is running on port 3333");
});
