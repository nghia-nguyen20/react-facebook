import React from "react";
import "./Feed.scss"
import StoryReel from "../StoryReel/StoryReel";
import MessageSender from "../MessageSender/MessageSender";
import Post from "../Post/Post";

const Feed = () => {
    return (
        <div className="feed">
            <StoryReel/>
            <MessageSender/>
            <div className="feed__content">
                <Post 
                    profilePic="https://scontent.fsgn7-1.fna.fbcdn.net/v/t1.6435-9/161464195_530042511297120_7964325490732409690_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=mcKZdarOMN0AX-kDYD4&_nc_ht=scontent.fsgn7-1.fna&oh=87b26ea6e997e050597ef46e86c1d33b&oe=614239D2"
                    message="Aloo, Xuống lấy rau em êiiiii 👌🏻"
                    timestamp="10 min"
                    username="Ngân Hoàng"
                    image="https://scontent.fsgn7-1.fna.fbcdn.net/v/t39.30808-6/231111166_615004522800918_5332621482856961261_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=snEcPtql9yEAX-ukDn_&_nc_ht=scontent.fsgn7-1.fna&oh=26c13ca678ad9098cb2211a817882c73&oe=6120A505"
                />

                <Post 
                    profilePic="https://scontent.fsgn7-1.fna.fbcdn.net/v/t1.6435-9/177614722_1806980522817963_4870917626327458911_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=EcahsZduLQIAX9HjMUP&_nc_ht=scontent.fsgn7-1.fna&oh=455ded974de034103137a6a2943033a2&oe=61401060"
                    message="Lớn rồi mình thấy nhiều tuổi hơn hồi bé ☹️"
                    timestamp="30 min"
                    username="Kim Thoa"
                    image="https://scontent.fsgn7-1.fna.fbcdn.net/v/t1.6435-9/181139931_1811885445660804_3504389338909968794_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=zxdqKsq4xoQAX9pdpgf&tn=sB0yq4oThYVY6Sim&_nc_ht=scontent.fsgn7-1.fna&oh=3928e3d91ae711ad4723d89c6cfbaa34&oe=61405C49"
                />

                <Post 
                    profilePic="https://scontent.fsgn7-1.fna.fbcdn.net/v/t1.6435-9/164525440_1631260000399266_6026603678439695928_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=HroRsFb7ZwsAX-_Je_Z&tn=sB0yq4oThYVY6Sim&_nc_ht=scontent.fsgn7-1.fna&oh=898dd485794d34b664236e50caa359da&oe=6141D996"
                    message="Dân chơi hệ cam thường 😝"
                    timestamp="40 min"
                    username="Như Lan"
                    image="https://scontent.fsgn7-1.fna.fbcdn.net/v/t1.6435-9/166569463_1635479763310623_7916996694801983621_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=XLTJOOjM9k0AX8-3_nM&_nc_ht=scontent.fsgn7-1.fna&oh=8429f155df74636c5f0dad011845ca2c&oe=613EFA42"
                />

                <Post
                    profilePic="https://scontent.fsgn7-1.fna.fbcdn.net/v/t1.6435-9/184067235_1348083058918738_3771481779164185186_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=kxUltTdUGh0AX9IP1PS&_nc_ht=scontent.fsgn7-1.fna&oh=614d215a76e62c0aff3189e146d7c668&oe=6141AFC2"
                    message="Giải cứu Triều Hà"
                    timestamp="35 min"
                    username="Triều Hà"
                    image="https://scontent.fsgn7-1.fna.fbcdn.net/v/t1.6435-9/234655154_1415280112199032_4383425778425610287_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=4bfDYXMkWrEAX9zqDFy&tn=sB0yq4oThYVY6Sim&_nc_ht=scontent.fsgn7-1.fna&oh=5a89a1fc44c602de6209c7dcaed842b0&oe=61415593"
                />

                <Post 
                    profilePic="https://scontent.fsgn7-1.fna.fbcdn.net/v/t1.6435-9/232364086_1088292695035398_2169970328871706984_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=OaNEbQdw_EUAX-wfQHV&_nc_ht=scontent.fsgn7-1.fna&oh=7b84355cbb43c0c937555d2f40196ebc&oe=613FAC54"
                    message="Babi cho em hôn 1 cái. Nếu ko thích anh có thể trả lại 😋"
                    timestamp="1 hour"
                    username="Tăng Khánh Hiền"
                    image="https://scontent.fsgn7-1.fna.fbcdn.net/v/t1.6435-9/234518456_1088937898304211_8265099654687172645_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=FaO10m8Rm_sAX9K2I8V&_nc_ht=scontent.fsgn7-1.fna&oh=7b2a9d876b52229c8378785a6898bde2&oe=614081DA"
                />
            </div>
        </div>
    )
}

export default Feed;
