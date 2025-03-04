import { SitemapStream, streamToPromise } from "sitemap";
import { writeFile } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

// Fix __dirname issue in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const sitemapLinks = [
    { url: "/", changefreq: "daily", priority: 1.0 },
    { url: "/Home", changefreq: "weekly", priority: 0.8 },
    { url: "/Services", changefreq: "weekly", priority: 0.8 },
    { url: "/Expertise", changefreq: "monthly", priority: 0.7 },
    { url: "/Contact", changefreq: "monthly", priority: 0.5 },
];

(async () => {
    try {
        const sitemap = new SitemapStream({
            hostname: "https://aditya-software-solution.netlify.app",
        });

        sitemapLinks.forEach((link) => sitemap.write(link));
        sitemap.end();

        // Convert stream to a string
        const sitemapXml = await streamToPromise(sitemap).then((data) => data.toString());

        // Define output path
        const sitemapPath = path.join(__dirname, "public", "sitemap.xml");

        // Write the sitemap file
        await writeFile(sitemapPath, sitemapXml, "utf8");

        console.log("✅ Sitemap generated successfully at:", sitemapPath);
    } catch (err) {
        console.error("❌ Error generating sitemap:", err);
    }
})();
