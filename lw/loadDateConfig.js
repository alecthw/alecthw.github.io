// 动态加载 dateConfig
export async function loadDateConfig(dateStr) {
    let file = 'none';
    if (dateStr !== 'none') file = dateStr;
    try {
        const mod = await import(`./dateConfig/${file}.js`);
        return mod.default;
    } catch (e) {
        // fallback
        const fallback = await import('./dateConfig/none.js');
        return fallback.default;
    }
}