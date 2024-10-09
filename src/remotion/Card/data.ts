import { staticFile } from "remotion";
export interface IData {
    name: string
    position: number
    cate: string
    unit: string
    votes: string | number
    src: string
    src2: string
    srcIsGif?: boolean
}

export const data = [
    {
        "src": "https://staticg.sportskeeda.com/editor/2023/09/dff48-16950406372284-1920.jpg",
        "alt": "7:00 pm",
        "alias": "Shibuya Crossing",
        "desc": "帷帐落下",
        "src2": "https://a3.cdn.japantravel.com/photo/3016-197865/800!/tokyo-shibuya-crossing-197865.jpg"
    },


    {
        "src": "https://www.animepilgrimage.com/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fanime-pilgrimage-bc.appspot.com%2Fo%2Fimages%252Fjjk_s2_2%252Fjjk-s2-2-10.jpg%3Falt%3Dmedia%26token%3Dd5cba96c-1969-4418-9ad0-f6d7d9c211f8&w=1080&q=75",
        "alt": "8:14 pm",
        "alias": "Exit 13 of the Shibuya Metro Station",
        "desc": "七海组到达",
        "src2": "https://www.animepilgrimage.com/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fanime-pilgrimage-bc.appspot.com%2Fo%2Fimages%252Fjjk_s2_2%252Fjjk-s2-2-10r.jpg%3Falt%3Dmedia%26token%3D79071c5e-e52c-41af-bc90-af5f05d6956a&w=1080&q=75"
    },

    {
        "src": "https://www.animepilgrimage.com/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fanime-pilgrimage-bc.appspot.com%2Fo%2Fimages%252Fjjk_s2_2%252Fjjk-s2-2-8.jpg%3Falt%3Dmedia%26token%3Da3414cd9-5ea4-473a-8228-8dde450483b2&w=1080&q=75",
        "alt": "8:14 pm",
        "alias": "Louvers of mirror at shibuya",
        "desc": "禅院组到达",
        "src2": "https://www.animepilgrimage.com/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fanime-pilgrimage-bc.appspot.com%2Fo%2Fimages%252Fjjk_s2_2%252Fjjk-s2-2-8r.jpg%3Falt%3Dmedia%26token%3D95484067-ba87-4712-9357-903f5edcc6a4&w=1080&q=75 "
    },
    {
        "src": "https://www.animepilgrimage.com/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fanime-pilgrimage-bc.appspot.com%2Fo%2Fimages%252Fjjk_s2_2%252Fjjk-s2-2-13.jpg%3Falt%3Dmedia%26token%3Dbf6c9f86-9048-456a-ad85-1dc8de196248&w=1080&q=75",
        "alt": "8:14 pm",
        "alias": "Shin Minami entrance",
        "desc": "日下部组到达",
        "src2": "https://www.animepilgrimage.com/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fanime-pilgrimage-bc.appspot.com%2Fo%2Fimages%252Fjjk_s2_2%252Fjjk-s2-2-13r.jpg%3Falt%3Dmedia%26token%3D2be18271-9162-4ae2-b878-2c5b395378f3&w=1080&q=75"
    },

    {
        "src": staticFile('gojo-enter.gif'),
        "alt": "8:31 pm",
        "alias": "Doegnzaka Nichome East",
        "desc": "五条悟进入帷帐",
        "src2": "https://cdn.cheapoguides.com/wp-content/uploads/sites/2/2021/10/Shinjuku-nichome-5-Yana-1.jpeg",
        "srcIsGif": true
    },


    {
        "src": "https://www.animepilgrimage.com/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fanime-pilgrimage-bc.appspot.com%2Fo%2Fimages%252Fjjk_s2_2%252Fjjk-s2-2-4.jpg%3Falt%3Dmedia%26token%3Db410b31a-8028-4723-9340-cc3ee111fc40&w=1080&q=75",
        "alt": "8:31 pm",
        "alias": "Shin Q BF1",
        "desc": "五条悟进入涩谷HIKARIE",
        "src2": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV0P5xZz6KJbE-662STs85ugyg_45lwM-bCz3mGFKIwre-MiRt0mxPTp5wDanpioiDFMk&usqp=CAU"
    },

    {
        "src": "https://staticg.sportskeeda.com/editor/2023/12/fc175-17031805015582-1920.jpg?w=640",
        "alt": "8:39 pm",
        "alias": "Aoyama Cemetery",
        "desc": "冥冥组开始行动",
        "src2": "https://i0.wp.com/www.tokyostreetview.com/wp-content/uploads/2016/04/20160405-Tokyo-Aoyama-Cemetery.jpg?fit=1280%2C720&ssl=1"
    },


    {
        "src": "https://www.animepilgrimage.com/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fanime-pilgrimage-bc.appspot.com%2Fo%2Fimages%252Fjjk_s2_2%252Fjjk-s2-2-14.jpg%3Falt%3Dmedia%26token%3D97392665-db26-4e6f-90eb-e58a45659311&w=1080&q=75",
        "alt": "8:51 pm",
        "alias": "Meiji-Jingumae station",
        "desc": "帷帐原理被解析",
        "src2": "https://www.animepilgrimage.com/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fanime-pilgrimage-bc.appspot.com%2Fo%2Fimages%252Fjjk_s2_2%252Fjjk-s2-2-14r.jpg%3Falt%3Dmedia%26token%3Da26019c9-e9b7-42a6-bce4-282587933eb3&w=1080&q=75"
    },

    

    {
        "src": "https://www.animepilgrimage.com/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fanime-pilgrimage-bc.appspot.com%2Fo%2Fimages%252Fjjk_s2_2%252Fjjk-s2-2-15.jpg%3Falt%3Dmedia%26token%3D87234c38-5ff9-423c-81ee-1cf1b486d10b&w=1080&q=75",
        "alt": "8:51 pm",
        "alias": "Meiji-Jingumae",
        "desc": "虎杖遇到咒灵，冥冥破解第二层帷帐",
        "src2": "https://www.animepilgrimage.com/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fanime-pilgrimage-bc.appspot.com%2Fo%2Fimages%252Fjjk_s2_2%252Fjjk-s2-2-15r.jpg%3Falt%3Dmedia%26token%3Dd5228e8b-dd60-4393-95aa-2884bf734e20&w=1080&q=75"
    },

    

    {
        "src": "https://www.animepilgrimage.com/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fanime-pilgrimage-bc.appspot.com%2Fo%2Fimages%252Fjjk_s2_2%252Fjjk-s2-2-30.jpg%3Falt%3Dmedia%26token%3D31f66ad3-e0f6-4a6b-b41f-040852f4c5ee&w=1080&q=75",
        "alt": "9:14 pm",
        "alias": "Harajaku/Meiji - Jinguame",
        "desc": "冥冥组重启行动",
        "src2": "https://www.animepilgrimage.com/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fanime-pilgrimage-bc.appspot.com%2Fo%2Fimages%252Fjjk_s2_2%252Fjjk-s2-2-30r.jpg%3Falt%3Dmedia%26token%3D123c33be-d01a-4d57-902c-74064a5c6a8d&w=1080&q=75"
    },

    
    {
        "src": staticFile('mahito-enter.gif'),
        "alt": "9:15 pm",
        "alias": "Shibuya",
        "desc": "真人到达涩谷地下站台",
        "src2": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Shibuya_Station_Toyoko_Line_Platform_4_%26_5_2018.jpg/300px-Shibuya_Station_Toyoko_Line_Platform_4_%26_5_2018.jpg",
        "srcIsGif": true
    },


    {
        "src": staticFile('zero02.gif'),
        "alt": "9:22 pm",
        "alias": "Shibuya B5F",
        "desc": "五条悟0.2秒领域展开",
        "src2": "https://upload.wikimedia.org/wikipedia/commons/5/54/TokyoMetro-shibuya-Z01-platform.jpg",
        "srcIsGif": true
    },


    {
        "src": 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7804bcbCqJFo-_m04Rc6ykIfqfTJf_WCY0A&s',
        "alt": "9:26 pm",
        "alias": "Shibuya B5F",
        "desc": "五条悟被封印",
        "src2": "https://www.animepilgrimage.com/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fanime-pilgrimage-bc.appspot.com%2Fo%2Fimages%252Fjjk_s2_2%252Fjjk-s2-2-3r.jpg%3Falt%3Dmedia%26token%3D2e3cecd3-e3a4-4e4f-b2c8-3d1581177e81&w=1080&q=75",
    },
]
.reverse()    
.map((el, idx) => ({
        name: el.alt,
        position: idx+1,
        cate: el.alias,
        votes: '',
        src2: el.src2,
        unit: el.desc,
        src: el.src,
        srcIsGif: el.srcIsGif
    })) as IData[]

export const BGColor = '#2094dd'//'#d4dfe5'//'linear-gradient(90deg, #24090b 20%, rgba(36, 9, 11, 0.6) 80%, #24090b)'
export const descBGColor = '#2094dd'
export const descTextColor = '#d5d5d5'//#f7f7f7
export const nameBGColor = '#d3d108'
export const textContainerBGColor = 'black'