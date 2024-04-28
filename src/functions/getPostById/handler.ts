import type { ValidatedEventAPIGatewayProxyEvent } from "@libs/api-gateway";
import { formatJSONResponse } from "@libs/api-gateway";
import { middyfy } from "@libs/lambda";

import schema from "./schema";

const getPostById: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (
  event
) => {
  console.log("Event Body in Name Property :::", event.body.id);

  return formatJSONResponse({
    message: `getPostById ${event.body.id}, welcome to the exciting Serverless world!`,
    event,
  });
};

export const main = middyfy(getPostById);
