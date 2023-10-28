import { Component, Inject } from '@angular/core';
import { SwDialogModule } from '../../dialog.module';
import { SwDialogService } from '../../services/dialog.service';
import { SwDialogRef } from '../../models/dialog.ref';
import { SW_DIALOG_DATA } from '../../dialog.constant';
import { Meta, Story, moduleMetadata } from '@storybook/angular';

@Component({
  standalone: true,
  selector: 'sw-dialog-demo',
  template: `<sw-dialog size="sm">
    <h2>Welcome to {{ data.libName }}</h2>
    <button (click)="closeModal()">close</button>
  </sw-dialog>`,
  imports: [SwDialogModule],
})
class DialogDemoComponent {
  constructor(
    @Inject(SW_DIALOG_DATA) public data: any,
    private dialogRef: SwDialogRef<any>,
  ) {}

  public closeModal() {
    this.dialogRef.close('Congrats!');
  }
}

@Component({
  standalone: true,
  selector: 'sw-dialog-demo-host',
  template: `<button (click)="openDialog()">Open Dialog</button>`,
  imports: [SwDialogModule],
})
class DialogDemoHostComponent {
  constructor(private dialog: SwDialogService) {}

  public openDialog() {
    const ref = this.dialog.open(DialogDemoComponent, {
      data: { libName: 'Simple Widgets' },
    });
    // prints "Congrats!"
    ref.afterClosed$.subscribe(console.log);
  }
}

export default {
  title: 'Simple Widgets/Dialog',
  decorators: [
    moduleMetadata({
      imports: [DialogDemoHostComponent],
    }),
  ],
  tags: ['docs'],
} as Meta;

export const Dialog: Story = (args) => ({
  props: { ...args },
  template: `
		<sw-dialog-demo-host></sw-dialog-demo-host>
	`,
});
