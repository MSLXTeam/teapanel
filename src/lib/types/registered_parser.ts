import {TYPES} from "@/lib/types/enum_target_types";

export type RegisteredParser = {
    name: string;
    enable_condition: (type: TYPES) => boolean
}