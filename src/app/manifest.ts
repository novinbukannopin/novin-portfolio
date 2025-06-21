import {MetadataRoute} from "next";
import {DATA} from "@/data/resume";

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: "Resume of " + DATA.name,
        short_name: DATA.name,
        description: DATA.description,
        start_url: "/",
        display: "standalone",
        background_color: "#ffffff",
        theme_color: "#000000",
        icons: [
            {
                src: '/favicon.ico',
                sizes: '64x64 32x32 24x24 16x16',
                type: 'image/x-icon'
            },
            {
                src: '/icon.png',
                sizes: '192x192',
                type: 'image/png'
            },
            {
                src: '/apple-icon.png',
                sizes: '180x180',
                type: 'image/png'
            }
        ]
    }
}