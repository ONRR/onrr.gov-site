import { createTabBlockLabel } from '../queries/tabBlockLabels';
import { GraphQLClient } from "graphql-request";
import { logger } from '../utils/logger';

export async function createTabBlockLabelItem(data, endpoint, authToken) {
    try {
        const variables = {
            data: data,
        };
        const client = new GraphQLClient(endpoint, {
            headers: {
                authorization: `Bearer ${authToken}`
            }
        });
        const response = await client.request(createTabBlockLabel, variables);
        logger.info(JSON.stringify(response, null, 2));
        return response.create_tab_block_label_item.id;
    } catch (error) {
        logger.error("Error creating tab block label:", error);
    }
}