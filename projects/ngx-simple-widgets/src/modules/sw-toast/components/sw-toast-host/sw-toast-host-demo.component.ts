import { OnInit, Component, ChangeDetectionStrategy, Input } from "@angular/core";
import { SwToastService } from "../../services/sw-toast.service";


@Component({
	selector: 'sw-toast-host-demo',
	template: `
		Showing toast notification
	`,

})
export class SwToastHostDemoComponent implements OnInit {
	@Input() level!: string;
	
	constructor(
		private swToastService: SwToastService
	) {}
	
	ngOnInit() {
		if(this.level === "warn") {
			this.swToastService.warn({
				message: "Toast message shown for demo",
				title: "Toast demo"
			});
		}
		else if(this.level === "success") {
			this.swToastService.success({
				message: "Toast message shown for demo",
				title: "Toast demo"
			});
		}
		else if(this.level === "error") {
			this.swToastService.error({
				message: "Toast message shown for demo",
				title: "Toast demo"
			});
		}
	}
}
