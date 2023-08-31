import { Meta, Story, moduleMetadata } from "@storybook/angular";
import { SwTableComponent } from "./table.component";
import { SwIconComponent } from "../icon/icon.component";

export default{
    title: 'Simple Widgets/Table',
    component: SwTableComponent,
    decorators: [
        moduleMetadata({
            imports: [
                SwIconComponent
            ]
        })
    ]
} as Meta;

export const Table: Story = (args) => ({
    props: {
        rows: [
            { brand: 'Toyota', name: "Fortuner", isSUV: true },
            { brand: 'Hyundai', name: "i20", isSUV: false },
            { brand: 'Tata', name: "Harrier", isSUV: true },
            { brand: 'Tata', name: "Altroz", isSUV: false },
            { brand: 'Renault', name: "Kiger", isSUV: true },
        ],
        activeColumns: [
            { fieldName: 'brand', label: 'Brand', renderTemplate: false, flex: '0 0 33%' },
            { fieldName: 'name', label: 'Car name', renderTemplate: false, flex: '0 0 33%' },
            { fieldName: 'isSUV', label: 'Is SUV', renderTemplate: true, flex: '0 0 33%' },
        ],
        isLoading: false
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
            <sw-icon [name]="value ? 'done' : 'close'"></sw-icon>
        </ng-template>
    `
})