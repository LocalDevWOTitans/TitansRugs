import { ResponseMessage, CommandPlan } from "@atomist/rug/operations/Handlers";
import { CommandHandlerScenarioWorld, Given, HandlerScenarioWorld, Then, When } from "@atomist/rug/test/handler/Core";


Given("nothing", (f) => { return; });

When("the MyFirstCommandHandler is invoked", (world: HandlerScenarioWorld<CommandPlan>) => {
    const w: CommandHandlerScenarioWorld = world as CommandHandlerScenarioWorld;
    const handler = w.commandHandler("MyFirstCommandHandler");
    w.invokeHandler(handler, {});
});

Then("you get the right response", (world: HandlerScenarioWorld<CommandPlan>) => {
    const w: CommandHandlerScenarioWorld = world as CommandHandlerScenarioWorld;
    const expected = "Successfully ran MyFirstCommandHandler: default value";
    const message = (w.plan().messages[0] as ResponseMessage).body;
    return message === expected;
});
