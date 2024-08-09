import Image from "next/image"

type ServerInfo = {
    id: number,
    name: string,
    description: string,
    plugins: typeof Image[],
    status: number,
}

export default ServerInfo