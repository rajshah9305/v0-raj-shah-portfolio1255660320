
const { performance } = require('perf_hooks');

const SOCIAL_LINKS = [
    { name: "GitHub", url: "https://github.com/rajshah9305", handle: "@rajshah9305" },
    { name: "Website", url: "https://www.rajai.org", handle: "rajai.org" },
    { name: "Email", url: "mailto:contact@rajai.org", handle: "contact@rajai.org" },
];

const DISPLAY_SOCIAL_LINKS = SOCIAL_LINKS.filter(link => link.name !== 'Email');

function benchmark() {
    const iterations = 1000000;

    // Baseline: Filtering every time
    const start1 = performance.now();
    for (let i = 0; i < iterations; i++) {
        const filtered = SOCIAL_LINKS.filter(link => link.name !== 'Email');
        filtered.map(link => link.url);
    }
    const end1 = performance.now();
    const time1 = end1 - start1;

    // Optimized: Using pre-filtered array
    const start2 = performance.now();
    for (let i = 0; i < iterations; i++) {
        DISPLAY_SOCIAL_LINKS.map(link => link.url);
    }
    const end2 = performance.now();
    const time2 = end2 - start2;

    console.log(`Iterations: ${iterations}`);
    console.log(`Unoptimized (filter per render): ${time1.toFixed(2)} ms`);
    console.log(`Optimized (static filter): ${time2.toFixed(2)} ms`);
    console.log(`Improvement: ${(time1 / time2).toFixed(2)}x faster`);
}

benchmark();
