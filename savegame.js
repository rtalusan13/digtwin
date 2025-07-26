// Cookie utility functions
function setCookie(name, value, days) {
    const expires = new Date(Date.now() + days * 864e5).toUTCString();
    document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/`;
}

function getCookie(name) {
    return document.cookie.split('; ').reduce((r, v) => {
        const parts = v.split('=');
        return parts[0] === name ? decodeURIComponent(parts[1]) : r;
    }, '');
}

// Save game state into a cookie
function saveGame(peaches, clickPower, peachRate, upgradeData) {
    const state = {
        peaches,
        clickPower,
        peachRate,
        upgradeData
    };
    setCookie('digTwinSave', JSON.stringify(state), 30); // expires in 30 days
}

// Load game state from cookie
function loadGame() {
    const saved = getCookie('digTwinSave');
    if (!saved) return null;
    try {
        return JSON.parse(saved);
    } catch (e) {
        console.warn('Invalid saved cookie data');
        return null;
    }
}
