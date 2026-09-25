// User request: Create a new Framer React/TypeScript code component file named ZCallerContentPage.tsx, exporting a default component named ZCallerContentPage. This will replace several simple text-led ZCaller Music routes while matching their existing visual system: off-white page background (#F7F7F8), almost-black typography (#101114), muted gray body copy (#686A70), restrained warm red eyebrow accent (#D35B50), Clash Display font stack, large heavy uppercase headline, generous desktop whitespace, white rounded cards with a subtle #E5E5E7 1px border. The component must be self-contained, responsive without browser APIs, and safe in canvas/SSR. Use semantic HTML. Support a generous auto-height layout at any width.
import { addPropertyControls, ControlType } from "framer"
import { useMemo } from "react"

interface CardItem {
    title: string
    description: string
}

interface MyComponentProps {
    eyebrow: string
    title: string
    description: string
    cards: CardItem[]
    columns: 1 | 2
    cardLayout: "grid" | "stacked"
    showCards: boolean
    ctaLabel: string
    ctaHref: string
    surfaceColor: string
    pageColor: string
    accentColor: string
}

/**
 * @framerSupportedLayoutWidth any-prefer-fixed
 * @framerSupportedLayoutHeight auto
 */
export default function ZCallerContentPage(props: MyComponentProps) {
    const {
        eyebrow = "ZCaller Music",
        title = "MUSIC DISTRIBUTION FOR INDEPENDENT ARTISTS",
        description = "Release your music to major streaming platforms and keep your catalog organized with a straightforward delivery workflow designed for creators.",
        cards = [
            {
                title: "Global Platform Delivery",
                description:
                    "Publish across major services with one submission, while keeping release details consistent and easy to update.",
            },
            {
                title: "Rights-Ready Metadata",
                description:
                    "Maintain clean track and artist information so credits, ownership, and publishing details travel correctly.",
            },
            {
                title: "Simple Release Planning",
                description:
                    "Coordinate singles, EPs, and album timelines with clear milestones for artwork, assets, and launch dates.",
            },
        ],
        columns = 2,
        cardLayout = "grid",
        showCards = true,
        ctaLabel = "Get Started",
        ctaHref = "",
        surfaceColor = "#FFFFFF",
        pageColor = "#F7F7F8",
        accentColor = "#D35B50",
    } = props

    const visibleCards = useMemo(() => {
        if (!showCards || !cards?.length) return []
        return cards.filter((card) => (card?.title || "").trim().length > 0)
    }, [showCards, cards])

    const shouldShowDescription = description.trim().length > 0
    const shouldShowCards = visibleCards.length > 0
    const shouldShowCta = ctaLabel.trim().length > 0
    const cardGap = "clamp(14px, 1.9vw, 22px)"

    return (
        <main
            style={{
                position: "relative",
                width: "100%",
                backgroundColor: pageColor,
                color: "#101114",
                padding: "clamp(24px, 4.5vw, 72px) clamp(20px, 5vw, 72px) clamp(56px, 8vw, 120px)",
                boxSizing: "border-box",
                fontFamily: `"Clash Display", "ClashDisplay", Inter, "Segoe UI", sans-serif`,
            }}
        >
            <article
                style={{
                    width: "100%",
                    maxWidth: "1120px",
                    margin: "0 auto",
                    display: "flex",
                    flexDirection: "column",
                    gap: "clamp(18px, 2.8vw, 30px)",
                }}
            >
                <header
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "clamp(14px, 2vw, 24px)",
                        maxWidth: "920px",
                    }}
                >
                    <p
                        style={{
                            margin: 0,
                            color: accentColor,
                            fontSize: "12px",
                            lineHeight: 1.2,
                            letterSpacing: "0.12em",
                            textTransform: "uppercase",
                            fontWeight: 600,
                        }}
                    >
                        {eyebrow}
                    </p>
                    <h1
                        style={{
                            margin: 0,
                            color: "#101114",
                            fontSize: "clamp(36px, 6.8vw, 78px)",
                            lineHeight: 0.94,
                            letterSpacing: "-0.03em",
                            textTransform: "uppercase",
                            fontWeight: 800,
                        }}
                    >
                        {title}
                    </h1>
                    {shouldShowDescription && (
                        <p
                            style={{
                                margin: 0,
                                color: "#686A70",
                                fontSize: "clamp(16px, 2.15vw, 22px)",
                                lineHeight: 1.45,
                                maxWidth: "760px",
                            }}
                        >
                            {description}
                        </p>
                    )}
                    {shouldShowCta && (
                        <p style={{ margin: 0, paddingTop: "4px" }}>
                            <a
                                href={ctaHref || undefined}
                                style={{
                                    color: "#101114",
                                    textDecoration: "none",
                                    borderBottom: "1px solid #101114",
                                    paddingBottom: "2px",
                                    fontSize: "15px",
                                    fontWeight: 600,
                                    letterSpacing: "0.01em",
                                }}
                            >
                                {ctaLabel}
                            </a>
                        </p>
                    )}
                </header>

                {shouldShowCards && (
                    <section
                        aria-label="Content cards"
                        style={{
                            marginTop: "clamp(40px, 9vw, 120px)",
                        }}
                    >
                        <div
                            style={{
                                display: "flex",
                                flexWrap: cardLayout === "grid" ? "wrap" : "nowrap",
                                flexDirection: cardLayout === "stacked" ? "column" : "row",
                                gap: cardGap,
                                width: "100%",
                            }}
                        >
                            {visibleCards.map((card, index) => (
                                <section
                                    key={`${card.title}-${index}`}
                                    style={{
                                        flex:
                                            cardLayout === "stacked"
                                                ? "1 1 100%"
                                                : columns === 1
                                                  ? "1 1 100%"
                                                  : "1 1 clamp(260px, 46%, 540px)",
                                        minWidth: 0,
                                        backgroundColor: surfaceColor,
                                        border: "1px solid #E5E5E7",
                                        borderRadius: "24px",
                                        padding: "clamp(18px, 2.6vw, 28px)",
                                        boxSizing: "border-box",
                                        display: "flex",
                                        flexDirection: "column",
                                        gap: "10px",
                                    }}
                                >
                                    <h2
                                        style={{
                                            margin: 0,
                                            color: "#101114",
                                            fontSize: "clamp(20px, 2.6vw, 30px)",
                                            lineHeight: 1.08,
                                            letterSpacing: "-0.02em",
                                            textTransform: "uppercase",
                                            fontWeight: 700,
                                        }}
                                    >
                                        {card.title}
                                    </h2>
                                    {card.description.trim().length > 0 && (
                                        <p
                                            style={{
                                                margin: 0,
                                                color: "#686A70",
                                                fontSize: "16px",
                                                lineHeight: 1.5,
                                            }}
                                        >
                                            {card.description}
                                        </p>
                                    )}
                                </section>
                            ))}
                        </div>
                    </section>
                )}
            </article>
        </main>
    )
}

addPropertyControls(ZCallerContentPage, {
    eyebrow: {
        type: ControlType.String,
        title: "Eyebrow",
        defaultValue: "ZCaller Music",
    },
    title: {
        type: ControlType.String,
        title: "Title",
        defaultValue: "MUSIC DISTRIBUTION FOR INDEPENDENT ARTISTS",
    },
    description: {
        type: ControlType.String,
        title: "Description",
        defaultValue:
            "Release your music to major streaming platforms and keep your catalog organized with a straightforward delivery workflow designed for creators.",
        displayTextArea: true,
    },
    cards: {
        type: ControlType.Array,
        title: "Cards",
        control: {
            type: ControlType.Object,
            controls: {
                title: {
                    type: ControlType.String,
                    title: "Title",
                    defaultValue: "Card title",
                },
                description: {
                    type: ControlType.String,
                    title: "Description",
                    defaultValue: "Card description",
                    displayTextArea: true,
                },
            },
        },
        defaultValue: [
            {
                title: "Global Platform Delivery",
                description:
                    "Publish across major services with one submission, while keeping release details consistent and easy to update.",
            },
            {
                title: "Rights-Ready Metadata",
                description:
                    "Maintain clean track and artist information so credits, ownership, and publishing details travel correctly.",
            },
            {
                title: "Simple Release Planning",
                description:
                    "Coordinate singles, EPs, and album timelines with clear milestones for artwork, assets, and launch dates.",
            },
        ],
    },
    columns: {
        type: ControlType.Enum,
        title: "Columns",
        options: [1, 2],
        optionTitles: ["1", "2"],
        defaultValue: 2,
        displaySegmentedControl: true,
    },
    cardLayout: {
        type: ControlType.Enum,
        title: "Card Layout",
        options: ["grid", "stacked"],
        optionTitles: ["Grid", "Stacked"],
        defaultValue: "grid",
        displaySegmentedControl: true,
    },
    showCards: {
        type: ControlType.Boolean,
        title: "Show Cards",
        defaultValue: true,
        enabledTitle: "On",
        disabledTitle: "Off",
    },
    ctaLabel: {
        type: ControlType.String,
        title: "CTA Label",
        defaultValue: "Get Started",
    },
    ctaHref: {
        type: ControlType.Link,
        title: "CTA Link",
        defaultValue: "",
    },
    surfaceColor: {
        type: ControlType.Color,
        title: "Surface",
        defaultValue: "#FFFFFF",
    },
    pageColor: {
        type: ControlType.Color,
        title: "Page",
        defaultValue: "#F7F7F8",
    },
    accentColor: {
        type: ControlType.Color,
        title: "Accent",
        defaultValue: "#D35B50",
    },
})