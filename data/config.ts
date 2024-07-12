const name = "Kurumi Codex";
const belowLink = "www.kurumicodex.com"
const bio = "いつか、私がヒトじゃなくなっても"
const portfolio = "https://www.kurumicodex.com"
const porto = "https://www.kurumicodex.com";
// only github url is supported (change in next.config.js for more domain support)
const avatar = "https://telegra.ph/file/afdc7100a826ac0b4e021.jpg";

const whatsapp = "https://wa.me/";
const instagram = "https://www.instagram.com/";
const youtube = "https://www.youtube.com/@KurumiCodex";
const telegram = "https://t.me/";
const email = "mailto:contact@kurumicodex.com"
const github = "https://www.github.com/kurumicodex";

export const Badges = [
    {
        emoji: "💻",
        label: "Coder",
    },
    {
        emoji: "🎨",
        label: "Designer",
    },
    {
        emoji: "🎐",
        label: "Anime",
    },
    {
        emoji: "♟️",
        label: "Chess",
    },
    {
        emoji: "🎵",
        label: "Music",
    },
]


export const config = {
    name,
    belowLink,
    bio,
    avatar,
    portfolio,
    porto,
    socials: {
        whatsapp,
        instagram,
        youtube,
        telegram,
        email,
        github,
    }
}