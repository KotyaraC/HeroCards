export const filterHeroes = (heroes, attribute) => {
    return heroes.filter(hero => hero.primary_attr === attribute);
};

export const sortHeroesByName = (heroes) => {
    return [...heroes].sort((a, b) => a.localized_name.localeCompare(b.localized_name));
};

export const sortHeroesByStat = (heroes, stat) => {
    return [...heroes].sort((a, b) => b[stat] - a[stat]);
};
