import { staticFile } from "remotion";

// tiktok video
export const videoWidth = 1080
export const videoHeight = 1920

export const cardWidth = videoWidth / 2
export const cardHeight = cardWidth / 1080 * 1920
export const gap = 5

export const cardNumber = 10;
export const fps = 60
export const eachDurationInSec = 10;



export const cardSpeed = (gap + cardWidth + gap + videoWidth) / eachDurationInSec;
export const occuringDurationFromEdgeInSec = (gap + cardWidth + gap) / cardSpeed
export const totalDurationInSec = occuringDurationFromEdgeInSec * (cardNumber - 1) + eachDurationInSec

export const cardColorArrayInTailwind = [
    'bg-red-300',
    'bg-blue-300',
    'bg-green-300',
    'bg-yellow-300',
    'bg-pink-300',
    'bg-purple-300',
    'bg-orange-300',
    'bg-teal-300',
    'bg-gray-300',
    'bg-indigo-300',
]



export const cardArray: Array<{
    src: string
    name: string
    votes: number | string
    place: number
    unit: string
}> = [
        {
            "src": "https://resizing.flixster.com/Lyw-kyg5APf-m-kdWEIrEZzJdIs=/206x305/v2/https://resizing.flixster.com/xCKKiD9OFB-f9oB12qYagRIY6l8=/ems.cHJkLWVtcy1hc3NldHMvdHZzZXJpZXMvZWQ5ZTk3OWMtZWVkNi00MGIxLTljYTUtZDNjMTNiMjQxZDg2LmpwZw==",
            "name": "Scavengers Reign",
            "votes": "Popcornmeter: 96%",
            "place": 1,
            "unit": "Sci-Fi, Adventure"
        },
        {
            "src": "https://resizing.flixster.com/FtfMB8t5ntDMV3oW8wvg-xjY3-A=/206x305/v2/https://resizing.flixster.com/s3rsf5qQ8Z41R2plMiRI6vTSLJg=/ems.cHJkLWVtcy1hc3NldHMvdHZzZXJpZXMvUlRUVjkwMjAzOS53ZWJw",
            "name": "Jujutsu Kaisen",
            "votes": "Popcornmeter: 87%",
            "place": 2,
            "unit": "Supernatural."
        },
        {
            "src": "https://resizing.flixster.com/UkgaL4TQSBJwG09wXg8chQSTWRA=/206x305/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p16749713_b_v8_ak.jpg",
            "name": "Demon Slayer",
            "votes": "Popcornmeter: 87%",
            "place": 3,
            "unit": "Action, Adventure."
        },
        {
            "src": "https://resizing.flixster.com/8calhngeAJZOPfvSFfLeHjfGrzU=/206x305/v2/https://resizing.flixster.com/WbMVIapZ0xGSCA0bjm5nukQi3QE=/ems.cHJkLWVtcy1hc3NldHMvdHZzZXJpZXMvMTRhNzFlMmQtZTNlMi00M2MyLWFkZGItMWFjNWZiMmVmYjc4LmpwZw==",
            "name": "Pluto",
            "votes": "Popcornmeter: 95%",
            "place": 4,
            "unit": "Sci-Fi, Mystery."
        },
        {
            "src": "https://resizing.flixster.com/VM0PpjdGAiVgE5rz0jdeeZfrtoo=/206x305/v2/https://resizing.flixster.com/H4vBioi_7L6dzSykCLDpyutcnXw=/ems.cHJkLWVtcy1hc3NldHMvdHZzZXJpZXMvMjI4YmM5ODItODVjYy00NDBjLTg2MDItNTg5NjRjZWIxYzg3LmpwZw==",
            "name": "Delicious in Dungeon",
            "votes": "Popcornmeter: 95%",
            "place": 5,
            "unit": "Fantasy, Adventure."
        },
        {
            "src": "https://resizing.flixster.com/o25UhuQ07AQO_oj-sEQ3EBrZNmA=/206x305/v2/https://resizing.flixster.com/UwW5gfJPEpuvDdCnAPRT9V9plfI=/ems.cHJkLWVtcy1hc3NldHMvdHZzZXJpZXMvUlRUVjcxMjgxNy53ZWJw",
            "name": "Vinland Saga",
            "votes": "Popcornmeter: 78%",
            "place": 6,
            "unit": "Action, Historical."
        },
        {
            "src": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTodo1l4UfRDRm2Tnlg1eBDtX9pxLCAtFBK2Khg6ogxe1NT2ZhABbPUHzQt1M1CX9SwQpc&usqp=CAU",
            "name": "My Hero Academia Uncut",
            "votes": "Popcornmeter: 87%",
            "place": 7,
            "unit": "Action, Superhero."
        },
        {
            "src": "https://resizing.flixster.com/AXjakkOp7onq96NTjnSlVKPm-Ns=/206x305/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p186423_b_v8_ae.jpg",
            "name": "One Piece",
            "votes": "Popcornmeter: 92%",
            "place": 8,
            "unit": "Action, Adventure."
        },
        {
            "src": "https://m.media-amazon.com/images/M/MV5BOTcyOGZiMzctNTQyOS00OTYzLTk0M2EtMTI5MTU0NmU5ZGU2XkEyXkFqcGdeQXVyMTI2NTY3NDg5._V1_.jpg",
            "name": "Record of Ragnarok",
            "votes": "Popcornmeter: 74%",
            "place": 9,
            "unit": "Action, Fantasy."
        },
        {
            "src": "https://resizing.flixster.com/Smx93H5cbKs4D45X1r75ZNj1gOo=/206x305/v2/https://resizing.flixster.com/zsWu778dkr50G1r2eJqvhWWzMUk=/ems.cHJkLWVtcy1hc3NldHMvdHZzZXJpZXMvZTA2MWExZWQtNjdkYy00NDkyLWEwY2ItZTRjOGFiOGRhMjllLmpwZw==",
            "name": "Junji Ito Maniac",
            "votes": "Popcornmeter: 57%",
            "place": 10,
            "unit": "Horror, Anthology."
        },
    ]
