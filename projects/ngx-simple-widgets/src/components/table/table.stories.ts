import { Meta, Story, moduleMetadata } from '@storybook/angular';
import { SwTableComponent } from './table.component';
import { SwIconComponent } from '../icon/icon.component';

export default {
  title: 'Simple Widgets/Table',
  decorators: [
    moduleMetadata({
      imports: [SwIconComponent, SwTableComponent],
    }),
  ],
  argTypes: {
    rows: {
      control: 'object',
      description: 'Array of objects to render as rows',
      table: {
        defaultValue: { summary: '[]' },
      },
    },
    activeColumns: {
      control: 'object',
      description: 'List of all column configuration',
      table: {
        defaultValue: { summary: '[]' },
      },
    },
    isLoading: {
      control: 'boolean',
      description: 'Is table data is loading',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    cellTemplate: {
      control: 'text',
      description:
        'Template to render custom UI for table cell value. Receives row, column and cell values as input',
      table: {
        defaultValue: { summary: '' },
      },
    },
  },
} as Meta;

const TableTemplate: Story = (args) => ({
  props: {
    ...args,
  },
  template: `
        <sw-table 
            [rows]="rows" 
            [isLoading]="isLoading" 
            [customCellTemplate]="cellTemplate" 
            [activeColumns]="activeColumns"
        >
        </sw-table>
        <ng-template #cellTemplate let-row="row" let-column="column" let-value="value">
            <ng-container [ngSwitch]="column.label">
                <ng-template ngSwitchCase="Is SUV">
                    <sw-icon [name]="value ? 'done' : 'close'"></sw-icon>
                </ng-template>
            </ng-container>
        </ng-template>
    `,
});

export const Table = TableTemplate.bind({});
Table.args = {
  rows: [
    { brand: 'Toyota', name: 'Fortuner', isSUV: true },
    { brand: 'Hyundai', name: 'i20', isSUV: false },
  ],
  activeColumns: [
    {
      fieldName: 'brand',
      label: 'Brand',
      renderTemplate: false,
      flex: '0 0 33%',
    },
    {
      fieldName: 'name',
      label: 'Car name',
      renderTemplate: false,
      flex: '0 0 33%',
    },
    {
      fieldName: 'isSUV',
      label: 'Is SUV',
      renderTemplate: true,
      flex: '0 0 33%',
    },
  ],
  isLoading: false,
};
