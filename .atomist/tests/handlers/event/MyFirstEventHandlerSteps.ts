import { DirectedMessage, EventPlan } from "@atomist/rug/operations/Handlers";
import { EventHandlerScenarioWorld, Given, HandlerScenarioWorld, Then, When } from "@atomist/rug/test/handler/Core";

import { Tag } from "@atomist/cortex/stub/Tag";

Given("the MyFirstEventHandler is registered", (world: HandlerScenarioWorld<EventPlan>) => {
    const w: EventHandlerScenarioWorld = world as EventHandlerScenarioWorld;
    w.registerHandler("MyFirstEventHandler");
});

When("a new Tag is received", (world: HandlerScenarioWorld<EventPlan>) => {
    const w: EventHandlerScenarioWorld = world as EventHandlerScenarioWorld;
    const event = new Tag();
    w.sendEvent(event);
});

Then("the MyFirstEventHandler event handler should respond with the correct message", (w: HandlerScenarioWorld<EventPlan>) => {
    const expected = `Tag event received`;
    const message = (w.plan().messages[0] as DirectedMessage).body;
    return message === expected;
});
