import {RegisteredParser} from "@/lib/types/registered_parser";
import {TYPES} from "@/lib/types/enum_target_types";

const isJava = (type: number) => {
    return type == TYPES.JAVA
}

const builtin_parsers: RegisteredParser[] = [
    {
        name: "Vanilla", enable_condition: isJava
    },
    {
        name: "Forge/NeoForge", enable_condition: isJava
    },
    {
        name: "Fabric", enable_condition: isJava
    },
    {
        name: "Bukkit/Spigot/Paper/Purpur/Leaves/Folia", enable_condition: isJava
    },
    {
        name: "Arclight", enable_condition: isJava
    },
    {
        name: "Mohist", enable_condition: isJava
    },
    {
        name: "Banner", enable_condition: isJava
    },
    {
        name: "SpongeForge", enable_condition: isJava
    },
    {
        name: "Lightfall", enable_condition: isJava
    },
    {
        name: "PufferFish", enable_condition: isJava
    },
    {
        name: "TraverTine", enable_condition: isJava
    },
    {
        name: "Velocity", enable_condition: isJava
    },
    {
        name: "BungeeCord", enable_condition: isJava
    },
    {
        name: "Nukkit/NukkitX", enable_condition: isJava
    },
    {
        name: "Quilt", enable_condition: isJava
    },
    {
        name: "Minecraft Bedrock Edition Server", enable_condition: (type) => {
            return type == TYPES.BEDROCK
        }
    },
]

export default builtin_parsers;