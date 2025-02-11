import { Converter, Application } from "typedoc";
import { processComments } from "./process-comments";

export function load(application: Application) {
	application.on(Application.EVENT_BOOTSTRAP_END, () => {
		application.options.setValue("blockTags", [
			...new Set([
				...application.options.getValue("blockTags"),
				"@includeExample"
			])
		]);
	});

	application.converter.on(Converter.EVENT_RESOLVE_BEGIN, processComments);
}
