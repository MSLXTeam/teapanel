import {RegisteredParser} from "@/lib/types/registered_parser";
import {TYPES} from "@/lib/types/enum_target_types";

const builtin_parsers: RegisteredParser[] = [
    {name: "Vanilla", enable_condition: (type) => {return type == TYPES.JAVA}},
    {name: "Forge/NeoForge", enable_condition: (type) => {return type == TYPES.JAVA}},
    {name: "Fabric", enable_condition: (type) => {return type == TYPES.JAVA}},
    {name: "Bukkit/Spigot/Paper/Purpur/Leaves/Folia", enable_condition: (type) => {return type == TYPES.JAVA}},
    {name: "Arclight", enable_condition: (type) => {return type == TYPES.JAVA}},
    {name: "Mohist", enable_condition: (type) => {return type == TYPES.JAVA}},
    {name: "Banner", enable_condition: (type) => {return type == TYPES.JAVA}},
    {name: "SpongeForge", enable_condition: (type) => {return type == TYPES.JAVA}},
    {name: "Lightfall", enable_condition: (type) => {return type == TYPES.JAVA}},
    {name: "PufferFish", enable_condition: (type) => {return type == TYPES.JAVA}},
    {name: "TraverTine", enable_condition: (type) => {return type == TYPES.JAVA}},
    {name: "Velocity", enable_condition: (type) => {return type == TYPES.JAVA}},
    {name: "BungeeCord", enable_condition: (type) => {return type == TYPES.JAVA}},
    {name: "Nukkit/NukkitX", enable_condition: (type) => {return type == TYPES.JAVA}},
    {name: "Quilt", enable_condition: (type) => {return type == TYPES.JAVA}},
    {name: "Minecraft Bedrock Edition Server", enable_condition: (type) => {return type == TYPES.BEDROCK}},
]

export default builtin_parsers;