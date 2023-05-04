import {homeImage} from './images/images';
import {
    animeIcon,
    artsIcon,
    collectibleIcon,
    musicIcon,
    sportIcon,
    swordIcon,
  } from "./images/images";

const baseUri = "https://ipfs.io/ipfs/"

export const NFTData = [
    {
        id:0,
        name:"Fine DigitAIzed",
        image:"https://ipfs.io/ipfs/bafybeicevevirexotaoy7nfl24gzt7fmgjpyuypze5wdnnf4uqerzpygtq/603.png",
        description:"Fine DigitAIzed Art is a collection of 2022 art images born in the Metaverse. With all spectrums of abstract art interpretation, from inspiring portraits to still life, vehicles, weird spaces and uncategorised situations, this is the most fantastic presentation of the emerging art subculture and one to become a blue chip in the current domain of modern art. Categorised with individual traits and framed in stylish composition, this collection is sure to please anyone with an appreciation for digital art. https://www.compatiblecreative.co.uk/",
        type:"Art",
        ipfs:"ipfs://bafybeif5uwquqeqikucphxwqiewmmmvg5nikyldugvapyn5tbxobwnge2q/603",
        isTrending:true
    },
    {
        id:1,
        name:"fastdinosaur.crypto",
        image:"https://metadata.unstoppabledomains.com/image-src/fastdinosaur.crypto.svg",
        description:"A CNS or UNS blockchain domain. Use it to resolve your cryptocurrency addresses and decentralized websites.",
        type:"Art",
        ipfs:"ipfs://QmUQvy6e2bDmB2WRskesWMkC8dHxwws9Z91o7H9xdnKcLA",
    },
    {
        id:2,
        name:"Seasons",
        image:"https://dirtyrobot.mypinata.cloud/ipfs/QmQaGRFxzfiWqjgz1F8ZmXEudMjR5eFgGs9oiMt6B8HyLT/Autumn/1/1a.jpeg",
        description:"As leaves fall in the cool breeze of autumn, one reflects on life after an eventful summer.",
        type:"Art",
        ipfs:"ipfs://QmcDjyaj2zP9KdGT94FFYfDoRR8L4zR8LkNwXZvaqhbUBx",
        isTrending:true
    },
    {
        id:3,
        name:"Seasons",
        image:"https://dirtyrobot.mypinata.cloud/ipfs/QmQaGRFxzfiWqjgz1F8ZmXEudMjR5eFgGs9oiMt6B8HyLT/Frames/Night/Spring/Single/3/3d.jpeg",
        description:"As winter passes, the springtime run is on — let's go!",
        type:"Art",
        ipfs:"ipfs://QmYFbewLkdbhoCieFNRCZuzZvsTFcETjs4zDLV9QYAtdZE"
    },
    {
        id:4,
        name:"Chromie Squiggle",
        image:"https://media-proxy.artblocks.io/0x059edd72cd353df5106d2b9cc5ab83a52287ac3a/9592.png",
        description:"Simple and easily identifiable, each squiggle embodies the soul of the Art Blocks platform. Consider each my personal signature as an artist, developer, and tinkerer. Public minting of the Chromie Squiggle is permanently paused. They are now reserved for manual distribution to collectors and community members over a longer period of time. Please visit OpenSea to explore Squiggles available on the secondary market.",
        type:"Art",
        ipfs:"ipfs://QmSZM86NmMmE89akR11MDuN2phBBY8YAisht1hXcsdJz5m"
    },
    {
        id:5,
        name:"RARE PEPZOGZ Pepe",
        image:`${baseUri}QmXQZd73DGpsb7urk5Y8G5qFp7ZibQQLfE8w8qBKQ68kLE`,
        description:"Pepe Open Editions by Matt Furie",
        type:"Collectible",
        ipfs:"ipfs://QmQccpm3Zx2bAPjfMhYXKvvuKKi94vCC98q8WQY5b6W4En",
        isTrending:true
    },

    {
        id:6,
        name:"ROAR",
        image:`${baseUri}bafybeiff2exg4nqxq6ekjdqovoit3qx7vkrea6qet3yguxuewuusovhf2e`,
        description:"NFT of a person Minting the nft",
        type:"Collectible",
        ipfs:"ipfs://QmeSJjVtBUQxYXo6CCAGVk8j2DsUVgEvF1sFXMGzeVCcft/10238.json",
        isTrending:true
    },
    {
        id:7,
        name:"Merkel",
        image:"https://storage.googleapis.com/waltsvault/imageswv/wv_placeholder.gif",
        description:"Walt’s Vault is a magical, hand-crafted collection that brings a new character and a nostalgic art form to life on the blockchain. Harkening back to the 1930s, the magic and storytelling of that time will be reflected in every way our community experiences the ownership of their characters. This collection pushes what is possible in the space and NFT’s as a whole.",
        ipfs:"ipfs://QmPmSmAmx6gufxT1WHjtRJE5wHkpi79948V2DDh5orQgyx",
        type:"Collectible"
    },
    {
        id:8,
        name:"Legend",
        image:"https://d1iczm3wxxz9zd.cloudfront.net/31660f87-3229-4369-9317-935d4264d01a/000000-0000000002/102076085475523849969891990263821580670943934396955082597526760385246021251858/ITEM_PREVIEW1.png",
        description:"Bob marley and Ray charles puffin together in heaven.",
        ipfs:"ipfs://QmS38JdbpcC8u8iM7XtAh58duvHaTNU1VCdsnmZJdCG1TZ",
        type:"Music",
        isTrending:true
    },{
        id:9,
        name:"White Rabbit Producer Pass Chapter 1",
        image:"https://shibuya.mypinata.cloud/ipfs/QmTNaL2EjtUoB7XAzpLYZNYZX2M4cUyypQCzPMmjLw5pHZ/1.gif",
        description:"hese are utility NFTs for voting on shibuya.xyz at the end of each chapter to earn $WRAB, which represents fractionalized NFT ownership of the final film.",
        ipfs:"ipfs://QmWMJvpUbsX7uayFy9mgESrwATbqhdpvKVVjEY5PPbx2ht/1.json",
        type:"Anime",
        isTrending:true
    },
    {
        id:10,
        name:"Car",
        image:"https://d1iczm3wxxz9zd.cloudfront.net/e33c667c-9eda-4f76-91f2-c7b493471a5b/000000-0000000002/27312598302341570210852822864311585836904843980391794227567106889600480653335/ITEM_PREVIEW1.png",
        description:"Car Racing on Mars",
        type:"Sport",
        isTrending:true
    },
    {
        name:"Minted NFT Card",
        image:homeImage,
        description:"NFT of a person Minting the nft",
        type:"Art"
    },
    {
        name:"Minted NFT Card",
        image:homeImage,
        description:"NFT of a person Minting the nft",
        type:"Art"
    },
    {
        name:"Minted NFT Card",
        image:homeImage,
        description:"NFT of a person Minting the nft",
        type:"Art"
    },
    {
        name:"Minted NFT Card",
        image:homeImage,
        description:"NFT of a person Minting the nft",
        type:"Art"
    },
    {
        name:"Minted NFT Card",
        image:homeImage,
        description:"NFT of a person Minting the nft",
        type:"Art"
    }
]

export const categories = [
    {
      name: "Arts",
      image: artsIcon,
    },
    {
      name: "Music",
      image: musicIcon,
    },
    {
      name: "Collectibles",
      image: collectibleIcon,
    },
    {
      name: "Sport",
      image: sportIcon,
    },
    {
      name: "Anime",
      image: animeIcon,
    },
    {
      name: "Swords",
      image: swordIcon,
    },
  ];
