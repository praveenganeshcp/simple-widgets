import { Meta, Story } from "@storybook/angular";
import { SwTableComponent } from "./sw-table.component";

export default{
    title: 'Simple Widgets/Table',
    component: SwTableComponent
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
            { fieldName: 'isSUV', label: 'Is SUV', renderTemplate: false, flex: '0 0 33%' },
        ],
        isLoading: false
    },
    template: `
        <sw-table [rows]="rows" [isLoading]="isLoading" [activeColumns]="activeColumns">
            <ng-template let-row="row" let-column="column">
                <h1>{{ row[column.fieldName] }}</h1>
            </ng-template>
        </sw-table>
    `
})