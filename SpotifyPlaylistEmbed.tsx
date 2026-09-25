// User request: Create a new Framer code component named SpotifyPlaylistEmbed that renders a responsive Spotify playlist iframe with editable controls for playlistUrl, title, height, cornerRadius, and borderColor. It should convert public open.spotify.com/playlist URLs to standard Spotify embed URLs, default to https://open.spotify.com/playlist/7pbXF9L0I1R0HXOXVEKFw2, stay accessible with an iframe title, render full-width, be static-render friendly with no runtime fetching, and keep premium/glassmorphism surface styling in the canvas parent.
import { addPropertyControls, ControlType } from "framer"
import { useMemo } from "react"

interface MyComponentProps {
    playlistUrl: string
    title: string
    height: number
    cornerRadius: number
    borderColor: string
}

function toSpotifyEmbedUrl(url: string): string {
    const trimmed = (url || "").trim()
    if (!trimmed) return "https://open.spotify.com/embed/playlist/7pbXF9L0I1R0HXOXVEKFw2"

    const playlistMatch = trimmed.match(/open\.spotify\.com\/playlist\/([a-zA-Z0-9]+)(?:[/?].*)?$/)
    if (playlistMatch?.[1]) {
        return `https://open.spotify.com/embed/playlist/${playlistMatch[1]}`
    }

    const embedMatch = trimmed.match(/open\.spotify\.com\/embed\/playlist\/([a-zA-Z0-9]+)(?:[/?].*)?$/)
    if (embedMatch?.[1]) {
        return `https://open.spotify.com/embed/playlist/${embedMatch[1]}`
    }

    return trimmed
}

/**
 * @framerSupportedLayoutWidth any-prefer-fixed
 * @framerSupportedLayoutHeight fixed
 */
export default function SpotifyPlaylistEmbed(props: MyComponentProps) {
    const {
        playlistUrl = "https://open.spotify.com/playlist/7pbXF9L0I1R0HXOXVEKFw2",
        title = "Spotify Playlist",
        height = 352,
        cornerRadius = 16,
        borderColor = "#EEEEEE",
    } = props

    const src = useMemo(() => toSpotifyEmbedUrl(playlistUrl), [playlistUrl])

    return (
        <div
            style={{
                position: "relative",
                width: "100%",
                height: `${height}px`,
                overflow: "hidden",
                borderRadius: `${cornerRadius}px`,
                border: `1px solid ${borderColor}`,
            }}
        >
            <iframe
                title={title}
                src={src}
                width="100%"
                height="100%"
                frameBorder={0}
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                style={{
                    display: "block",
                    width: "100%",
                    height: "100%",
                    border: "none",
                    borderRadius: `${cornerRadius}px`,
                }}
            />
        </div>
    )
}

addPropertyControls(SpotifyPlaylistEmbed, {
    playlistUrl: {
        type: ControlType.String,
        title: "Playlist URL",
        defaultValue: "https://open.spotify.com/playlist/7pbXF9L0I1R0HXOXVEKFw2",
        placeholder: "https://open.spotify.com/playlist/...",
    },
    title: {
        type: ControlType.String,
        title: "Title",
        defaultValue: "Spotify Playlist",
    },
    height: {
        type: ControlType.Number,
        title: "Height",
        defaultValue: 352,
        min: 152,
        max: 1000,
        step: 1,
        unit: "px",
    },
    cornerRadius: {
        type: ControlType.Number,
        title: "Radius",
        defaultValue: 16,
        min: 0,
        max: 80,
        step: 1,
        unit: "px",
    },
    borderColor: {
        type: ControlType.Color,
        title: "Border",
        defaultValue: "#EEEEEE",
    },
})