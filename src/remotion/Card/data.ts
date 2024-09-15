export interface IData {
    name: string
    position: number
    cate: string
    unit: string
    votes: string | number
    src: string
    src2: string
}

export const data = [
    {
        "src": "https://i0.wp.com/inbetweendrafts.com/wp-content/uploads/2023/09/Frn_EP01_still_013.jpg?fit=1920%2C1080&ssl=1",
        "alt": "Frieren",
        "alias": "Frozen",
        "desc": "冷冻，令人感觉寒冷，芙莉莲也是雪的颜色",
        "src2": "https://thumbs.dreamstime.com/b/winter-anime-wallpaper-snowy-foggy-landscape-ai-generated-image-301469386.jpg"
    },
    {
        "src": "https://media.thepopverse.com/media/himmel-in-frieren-cekjwgmwvrpfldmtg3vh3yebpu.jpg",
        "alt": "Himmel",
        "alias": "Heaven",
        "desc": "天空，蓝色，天空的颜色",
        "src2": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYlznahGAykuQMLvJkpIiojAjtBXMdGjWBRw&s"
    },
    {
        "src": "https://i.pinimg.com/736x/aa/fd/e9/aafde9d2e10e13b3b4f80ea1e331e599.jpg",
        "alt": "Heiter",
        "alias": "humorous",
        "desc": "幽默，愉快",
        "src2": "https://imgcdn.stablediffusionweb.com/2024/5/17/26570584-03af-4634-8eab-c836e090a441.jpg"
    },
    {
        "src": "https://staticg.sportskeeda.com/editor/2023/10/b03df-16967427088542-1920.jpg",
        "alt": "Eisen",
        "alias": "Iron",
        "desc": "铁，铁一般的意志",
        "src2": "https://images.nationalgeographic.org/image/upload/t_edhub_resource_key_image/v1638891630/EducationHub/photos/lava-flow.jpg"
    },
    {
        "src": "https://image.tensorartassets.com/model_showcase/654179349731462294/aeebadc1-1e11-81e2-0d9a-fd05ecc77f30.jpeg",
        "alt": "Fern",
        "alias": "Far",
        "desc": "距离感，远距离魔法攻击",
        "src2": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt2yjJgLN6UWWUuad8WkCv9OU-_ov4pnspeovgzdY_YTbm9TYELOTI9zujW6ia1hlIvEY&usqp=CAU"
    },
    {
        "src": "https://cdn.oneesports.gg/cdn-data/2024/03/How_old_is_Stark_Frieren_A_Journeys_End_Anime.jpg",
        "alt": "Stark",
        "alias": "Strong",
        "desc": "强壮的战士",
        "src2": "https://i.pinimg.com/originals/b0/6e/bd/b06ebd20b2e79d36aef9c8526da665b8.gif"
    },
    {
        "src": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmXoE_qfkcqtjKRPv44UYGHryC8FoFS0RoPg&s",
        "alt": "Flamme",
        "alias": "Flame",
        "desc": "火焰，火焰的颜色，热情性格",
        "src2": "https://png.pngtree.com/png-clipart/20230331/original/pngtree-illustrated-fire-art-png-image_9013436.png"
    },
    {
        "src": "https://animerants.net/wp-content/uploads/2024/01/frieren-episode-07-lugner-wine.png?w=1024",
        "alt": "Lügner",
        "alias": "Liar",
        "desc": "撒谎者，骗子",
        "src2": "https://media.istockphoto.com/id/912932764/vector/vector-illustration-business-person-disguise-with-mask.jpg?s=612x612&w=0&k=20&c=zXMTgFFhEYKdMVrf0hrkbTx05mP73NWN5qvi-lYkLx4="
    },
    {
        "src": "https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/61488f0e-7337-4d82-a366-aeb2fb45ee80/width=450/3859677.jpeg",
        "alt": "Kraft",
        "alias": "Power",
        "desc": "力量，精灵武僧",
        "src2": "https://pics.craiyon.com/2023-08-27/dd714737115a47f3b009dba7b14ca6f5.webp"
    },
    {
        "src": "https://static1.srcdn.com/wordpress/wp-content/uploads/2024/01/ubel-looks-around-in-frieren.jpg",
        "alt": "Übel",
        "alias": "Evil",
        "desc": "邪恶，腹黑的Übel",
        "src2": "https://wallpapercave.com/wp/wp2129382.jpg"
    },
    {
        "src": "https://s2.dmcdn.net/v/Va5lr1bd2z70r8rHe/x1080",
        "alt": "Denken",
        "alias": "Thinker",
        "desc": "思考者，邓肯是一个睿智的人",
        "src2": "https://vinaire.me/wp-content/uploads/2015/03/mind5.jpg"
    }
]
    .map((el, idx) => ({
        name: el.alt,
        position: idx+1,
        cate: el.alias,
        votes: '',
        src2: el.src2,
        unit: el.desc,
        src: el.src
    })) as IData[]

export const BGColor = '#2094dd'//'#d4dfe5'//'linear-gradient(90deg, #24090b 20%, rgba(36, 9, 11, 0.6) 80%, #24090b)'
export const descBGColor = '#2094dd'
export const descTextColor = '#d5d5d5'//#f7f7f7
export const nameBGColor = '#d3d108'
export const textContainerBGColor = 'black'