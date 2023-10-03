import { SwCalendarComponent } from "./calendar.component";
import { FormsModule, FormControl } from "@angular/forms";

describe('calendar component should', () => {
	function mountComponent() {
		const dateControl = new FormControl(new Date());
		cy.mount(`
			<sw-calendar formControl="dateControl"></sw-calendar>
		`, {imports: [FormsModule, SwCalendarComponent]})
	}

	it('should render calendar component', () => {
		mountComponent();
	})
})