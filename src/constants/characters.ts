type Character = {
    icon_name: string;
    name?: string;
    element: string;
    rarity: number;
}

export const Characters: Record<number, Character> = {
    10000002: {
        icon_name: "Ayaka",
        name: "Kamisato Ayaka",
        element: "Cryo",
        rarity: 5
    },
    10000003: {
        icon_name: "Qin",
        name: "Jean",
        element: "Anemo",
        rarity: 5
    },
    10000005: {
        icon_name: "PlayerBoy",
        name: "Traveler",
        element: "",
        rarity: 5
    },
    10000006: {
        icon_name: "Lisa",
        element: "Electro",
        rarity: 4
    },
    10000007: {
        icon_name: "PlayerGirl",
        name: "Traveler",
        element: "",
        rarity: 5
    },
    10000014: {
        icon_name: "Barbara",
        element: "Hydro",
        rarity: 4
    },
    10000015: {
        icon_name: "Kaeya",
        element: "Cryo",
        rarity: 4
    },
    10000016: {
        icon_name: "Diluc",
        element: "Pyro",
        rarity: 5
    },
    10000020: {
        icon_name: "Razor",
        element: "Electro",
        rarity: 4
    },
    10000021: {
        icon_name: "Ambor",
        name: "Amber",
        element: "Pyro",
        rarity: 4
    },
    10000022: {
        icon_name: "Venti",
        element: "Anemo",
        rarity: 5
    },
    10000023: {
        icon_name: "Xiangling",
        element: "Pyro",
        rarity: 4
    },
    10000024: {
        icon_name: "Beidou",
        element: "Electro",
        rarity: 4
    },
    10000025: {
        icon_name: "Xingqiu",
        element: "Hydro",
        rarity: 4
    },
    10000026: {
        icon_name: "Xiao",
        element: "Anemo",
        rarity: 5
    },
    10000027: {
        icon_name: "Ningguang",
        element: "Geo",
        rarity: 4
    },
    10000029: {
        icon_name: "Klee",
        element: "Pyro",
        rarity: 5
    },
    10000030: {
        icon_name: "Zhongli",
        element: "Geo",
        rarity: 5
    },
    10000031: {
        icon_name: "Fischl",
        element: "Electro",
        rarity: 4
    },
    10000032: {
        icon_name: "Bennett",
        element: "Pyro",
        rarity: 4
    },
    10000033: {
        icon_name: "Tartaglia",
        element: "Hydro",
        rarity: 5
    },
    10000034: {
        icon_name: "Noel",
        name: "Noelle",
        element: "Geo",
        rarity: 4
    },
    10000035: {
        icon_name: "Qiqi",
        element: "Cryo",
        rarity: 5
    },
    10000036: {
        icon_name: "Chongyun",
        element: "Cryo",
        rarity: 4
    },
    10000037: {
        icon_name: "Ganyu",
        element: "Cryo",
        rarity: 5
    },
    10000038: {
        icon_name: "Albedo",
        element: "Geo",
        rarity: 5
    },
    10000039: {
        icon_name: "Diona",
        element: "Cryo",
        rarity: 4
    },
    10000041: {
        icon_name: "Mona",
        element: "Hydro",
        rarity: 5
    },
    10000042: {
        icon_name: "Keqing",
        element: "Electro",
        rarity: 5
    },
    10000043: {
        icon_name: "Sucrose",
        element: "Anemo",
        rarity: 4
    },
    10000044: {
        icon_name: "Xinyan",
        element: "Pyro",
        rarity: 4
    },
    10000045: {
        icon_name: "Rosaria",
        element: "Cryo",
        rarity: 4
    },
    10000046: {
        icon_name: "Hutao",
        name: "Hu Tao",
        element: "Pyro",
        rarity: 5
    },
    10000047: {
        icon_name: "Kazuha",
        name: "Kaedehara Kazuha",
        element: "Anemo",
        rarity: 5
    },
    10000048: {
        icon_name: "Feiyan",
        name: "Yanfei",
        element: "Pyro",
        rarity: 4
    },
    10000049: {
        icon_name: "Yoimiya",
        element: "Pyro",
        rarity: 5
    },
    10000050: {
        icon_name: "Tohma",
        name: "Thoma",
        element: "Pyro",
        rarity: 4
    },
    10000051: {
        icon_name: "Eula",
        element: "Cryo",
        rarity: 5
    },
    10000052: {
        icon_name: "Shougun",
        name: "Raiden Shogun",
        element: "Electro",
        rarity: 5
    },
    10000053: {
        icon_name: "Sayu",
        element: "Anemo",
        rarity: 4
    },
    10000054: {
        icon_name: "Kokomi",
        name: "Sangonomiya Kokomi",
        element: "Hydro",
        rarity: 5
    },
    10000055: {
        icon_name: "Gorou",
        element: "Geo",
        rarity: 4
    },
    10000056: {
        icon_name: "Sara",
        name: "Kujou Sara",
        element: "Electro",
        rarity: 4
    },
    10000057: {
        icon_name: "Itto",
        name: "Arataki Itto",
        element: "Geo",
        rarity: 5
    },
    10000058: {
        icon_name: "YaeMiko",
        name: "Yae Miko",
        element: "Electro",
        rarity: 5
    },
    10000062: {
        icon_name: "Aloy",
        element: "Cryo",
        rarity: 10
    },

    10000063: {
        icon_name: "Shenhe",
        element: "Cryo",
        rarity: 5
    },
    10000064: {
        icon_name: "Yunjin",
        name: "Yun Jin",
        element: "Geo",
        rarity: 4
    },
    10000066: {
        icon_name: "Ayato",
        element: "Hydro",
        rarity: 5
    }
}

export const getCharacterById = (id: number) => Characters?.[id];

export const getCharacterByName = (name: string) =>
    Object.values(Characters).find(c => c.name === name)

export const getCharacterByIconName = (iconName: string) =>
    Object.values(Characters).find(c => c.icon_name === iconName)

export const getCharactersByElement = (element: string) =>
    Object.values(Characters).filter(c => c.element === element)

export const getCharactersByRarity = (rarity: number) =>
    Object.values(Characters).filter(c => c.rarity === rarity)