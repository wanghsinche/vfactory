export interface IData {
    name: string
    position: number
    cate: string
    unit: string
    votes: string | number
    src: string
}

export const data = [
    {
        "position": "10",
        "name": "Panda",
        "subTitle": "五条老师的学生，搞笑担当。",
        "desc": "Debut: Anime (Episode 5) Manga (Chapter 0-1)",
        "imgSrc": "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2024/01/panda-with-armband-in-jujutsu-kaisen.jpg",
        "tip": ""
    },
    {
        "position": "9",
        "name": "Utahime Iori",
        "subTitle": "五条老师的同事",
        "desc": "Debut: Anime (Episode 14), Manga (Chapter 32)",
        "imgSrc": "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2023/12/utahime-in-jujutsu-kaisen.jpg",
        "tip": ""
    },
    {
        "position": "8",
        "name": "Masamichi Yaga",
        "subTitle": "五条悟的老师，现任老板",
        "desc": "Debut: Anime (Episode 2), Manga (Chapter 3)",
        "imgSrc": "https://i0.wp.com/quotetheanime.com/wp-content/uploads/elementor/thumbs/Masamichi-Yaga-Appearance-pxppoemo14mkr4bfpj7ixiimzz6zzs61x1npwdvkw8.jpg",
        "tip": ""
    },
    {
        "position": "7",
        "name": "Yuta Okkotsu",
        "subTitle": "五条老师教导出来的特级咒术师",
        "desc": "Debut: Anime (Episode 47), Manga (Chapter 0-1)",
        "imgSrc": "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2024/04/yuta-okkotsu-in-jujutsu-kaisen.jpg",
        "tip": ""
    },
    {
        "position": "6",
        "name": "Yuji Itadori",
        "subTitle": "一年级生，咒术届明星，不解释",
        "desc": "Debut: Anime (Episode 1), Manga (Chapter 1)",
        "imgSrc": "https://i.redd.it/h0aubq87qxwb1.jpg",
        "tip": ""
    },
    {
        "position": "5",
        "name": "Megumi",
        "subTitle": "一年级生，五条老师养大的",
        "desc": "Debut: Anime (Episode 1), Manga Chapter 1",
        "imgSrc": "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2023/12/megumi-in-jujutsu-kaisen.jpg",
        "tip": ""
    },
    {
        "position": "4",
        "name": "Mei Mei",
        "subTitle": "五条悟的校友",
        "desc": "Debut: Anime (Episode 17), Manga (Chapter 0-3)",
        "imgSrc": "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2023/12/mei-in-jujutsu-kaisen.jpg",
        "tip": ""
    },
    {
        "position": "3",
        "name": "Shoko Ieiri",
        "subTitle": "五条悟的同班同学",
        "desc": "Debut: Anime (Episode 5), Manga (Chapter 10)",
        "imgSrc": "https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/5ee29366-2b31-4fb8-bb03-04768a1ef32c/width=1200/5ee29366-2b31-4fb8-bb03-04768a1ef32c.jpeg",
        "tip": ""
    },
    {
        "position": "2",
        "name": "Kento Nanami",
        "subTitle": "五条悟信赖的挚友",
        "desc": "Debut: Anime (Episode 8), Manga (Chapter 18)",
        "imgSrc": "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2023/12/nanami-in-jujutsu-kaisen.jpg",
        "tip": ""
    },
    {
        "position": "1",
        "name": "Suguru Geto",
        "subTitle": "青梅竹马了，直接原地硬控",
        "desc": "Debut: Anime (Episode 5), Manga (Chapter 0-2)",
        "imgSrc": "https://miro.medium.com/v2/resize:fit:1400/1*dEAVkeXXr_b440_RqUGS1g.jpeg",
        "tip": ""
    }

]
    .map((el, idx) => ({
        name: el.name,
        position: Number(el.position),
        cate: 'Place',
        votes: el.desc.match(/Anime \(Episode \d+\)/)?.[0]?.replace('Anime', '出场'),
        unit: el.subTitle,
        src: el.imgSrc
    })) as IData[]

export const BGColor = '#2094dd'//'#d4dfe5'//'linear-gradient(90deg, #24090b 20%, rgba(36, 9, 11, 0.6) 80%, #24090b)'
export const descBGColor = '#2094dd'
export const descTextColor = '#d5d5d5'//#f7f7f7
export const nameBGColor = '#d3d108'
export const textContainerBGColor = 'black'