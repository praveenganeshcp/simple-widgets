import { SwAllowedSizes } from "../../../shared/constants";

export interface SwDialogConfig<I> {
    data?: I | null,
    size?: SwAllowedSizes
}