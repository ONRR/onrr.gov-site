import { createExpansionPanelItemMutation } from "../../queries/expansionPanels";
import { GraphQLClient } from "graphql-request";
import { logger } from '../../utils/logger';

export async function createExpansionPanelsItem(item, endpoint, authToken) {
    try {
        const client = new GraphQLClient(endpoint, {
            headers: {
                authorization: `Bearer ${authToken}`
            }
        });
        const response = await client.request(createExpansionPanelItemMutation, { item: item });
        return response.create_expansion_panels_item.id;
    } catch (error) {
        logger.error('Error in createExpansionPanelsItem', error);
        throw new Error('Error in createExpansionPanelsItem');
    }
}