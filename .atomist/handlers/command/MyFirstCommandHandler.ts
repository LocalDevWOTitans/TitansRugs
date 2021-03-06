import { CommandHandler, Intent, Parameter, Tags } from "@atomist/rug/operations/Decorators";
import { HandleCommand, HandlerContext, Plan, CommandPlan, ResponseMessage } from "@atomist/rug/operations/Handlers";
import { Pattern } from "@atomist/rug/operations/RugOperation";

/**
 * A sample Rug TypeScript command handler.
 */
@CommandHandler("MyFirstCommandHandler", "sample Rug TypeScript command handler")
@Tags("documentation")
@Intent("run MyFirstCommandHandler")
export class MyFirstCommandHandler implements HandleCommand {

    @Parameter({
        displayName: "Some Input",
        description: "example of how to specify a parameter using decorators",
        pattern: Pattern.any,
        validInput: "a description of the valid input",
        minLength: 1,
        maxLength: 100,
        required: false,
    })
    public inputParameter: string = "default value";

    public handle(command: HandlerContext): Plan {
        const message = new ResponseMessage(`Successfully ran MyFirstCommandHandler: ${this.inputParameter}`);
        return CommandPlan.ofMessage(message);
    }
}

export const myFirstCommandHandler = new MyFirstCommandHandler();
