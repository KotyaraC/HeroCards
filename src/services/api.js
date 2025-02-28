export const fetchHeroes = async () => {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 5000);

    try {
        console.log("📡 Fetching heroes...");

        const response = await fetch('https://api.opendota.com/api/heroStats', {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "User-Agent": "HeroGuideApp"
            },
            signal: controller.signal
        });

        if (!response.ok) {
            throw new Error(`⚠️ HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log(`✅ Heroes loaded: ${data.length}`);
        return data;

    } catch (error) {
        if (error.name === 'AbortError') {
            console.error('❌ Request timed out (5s)');
        } else {
            console.error('❌ API Error:', error.message);
        }
        throw error;

    } finally {
        clearTimeout(timeout);
    }
};
