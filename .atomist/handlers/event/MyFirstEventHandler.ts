import { EventHandler, Tags } from "@atomist/rug/operations/Decorators";
import { ChannelAddress, DirectedMessage, HandleEvent, Plan } from "@atomist/rug/operations/Handlers";
import { Match } from "@atomist/rug/tree/PathExpression";

import { Tag } from "@atomist/cortex/Tag";

/**
 * A sample Rug TypeScript event handler.
 */
@EventHandler("MyFirstEventHandler", "sample Rug TypeScript event handler", "/Tag()")
@Tags("documentation")
export class MyFirstEventHandler implements HandleEvent<Tag, Tag> {
    public handle(event: Match<Tag, Tag>): Plan {
        const root: Tag = event.root();
        const message = new DirectedMessage(`${root.nodeName()} event received`, new ChannelAddress("#general"));
        return Plan.ofMessage(message);
    }
}

export const myFirstEventHandler = new MyFirstEventHandler();
