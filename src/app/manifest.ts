import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Anitha Karni Portfolio",
    short_name: "Anitha Karni",
    description:
      "A portfolio focused on data science, GIS, analytics, and spatial storytelling.",
    start_url: "/",
    display: "standalone",
    background_color: "#080304",
    theme_color: "#b91c1c",
    icons: [
      {
        src: "/logo-mark.svg",
        sizes: "96x96",
        type: "image/svg+xml",
        purpose: "any",
      },
      {
        src: "/logo-mark.svg",
        sizes: "96x96",
        type: "image/svg+xml",
        purpose: "maskable",
      },
      {
        src: "/logo-mark.svg",
        sizes: "96x96",
        type: "image/svg+xml",
        purpose: "any",
      },
      {
        src: "/logo-mark.svg",
        sizes: "96x96",
        type: "image/svg+xml",
        purpose: "maskable",
      },
    ],
    screenshots: [
      {
        src: "/og-atlas.svg",
        sizes: "1280x720",
        type: "image/svg+xml",
        form_factor: "wide",
      },
      {
        src: "/og-atlas.svg",
        sizes: "1080x1920",
        type: "image/svg+xml",
        form_factor: "narrow",
      },
    ],
  };
}
