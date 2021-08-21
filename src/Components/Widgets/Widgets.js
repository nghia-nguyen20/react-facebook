import React from "react";
import "./Widgets.scss"
import WidgetsRow from "./WidgetsRow/WidgetsRow";
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import CloseIcon from '@material-ui/icons/Close';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import SearchIcon from '@material-ui/icons/Search';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';


const Widgets = () => {

    return(
        
    <div className="widgets">

        <div className="widgets__top">
            <button className="widgets__top-btn">
                <div className="widgets__top-btn-1">
                    <CardGiftcardIcon style={{ color:"pink" , fontSize: "30px"}}/>
                    <b className="widgets__top-btn-1-b">Sinh nhật</b>
                    <CloseIcon/>
                </div>
                <div className="widgets__top-btn-2">
                    <p> Hôm nay là sinh nhật của</p>
                    <b> Nguyễn Phương Vi</b>
                </div>
            </button>

        </div>
        <hr style={{height: "1px", width:"100%", color:"gray"}}/>

        <div className="widgets__bottom">

            <div className="widgets__bottom-title">
                <p> Người liên hệ</p>
                <div className="widgets__bottom-title-icon">
                    <VideoCallIcon className="widgets__bottom-title-icon-1" style={{fontSize:"20px"}}/>
                    <SearchIcon className="widgets__bottom-title-icon-1" style={{fontSize:"20px"}}/>
                    <MoreHorizIcon className="widgets__bottom-title-icon-1" style={{fontSize:"20px"}}/>
                </div>
            </div>

            <WidgetsRow className="widgets__bottom-img" src='https://scontent.fsgn7-1.fna.fbcdn.net/v/t1.6435-9/147317563_185353929692504_1772836466397017752_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=174925&_nc_ohc=qtNxKCjbUzcAX_mjaxt&_nc_ht=scontent.fsgn7-1.fna&oh=54bb900b32adc8c31c00a63ede4effac&oe=613F895C' title='Nghiêm Tuấn'/>
            <WidgetsRow className="widgets__bottom-img" src='https://scontent.fsgn7-1.fna.fbcdn.net/v/t1.6435-9/164525440_1631260000399266_6026603678439695928_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=HroRsFb7ZwsAX-_Je_Z&tn=sB0yq4oThYVY6Sim&_nc_ht=scontent.fsgn7-1.fna&oh=898dd485794d34b664236e50caa359da&oe=6141D996' title='Như Lan'/>
            <WidgetsRow className="widgets__bottom-img" src='https://scontent.fsgn7-1.fna.fbcdn.net/v/t1.6435-9/232364086_1088292695035398_2169970328871706984_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=OaNEbQdw_EUAX-wfQHV&_nc_ht=scontent.fsgn7-1.fna&oh=7b84355cbb43c0c937555d2f40196ebc&oe=613FAC54' title='Tăng Khánh Hiền'/>
            <WidgetsRow className="widgets__bottom-img" src='https://scontent.fsgn7-1.fna.fbcdn.net/v/t1.6435-9/184621698_3574144969478197_8064864270129710319_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=e3f864&_nc_ohc=rWD-Vw1HVPMAX_tksKA&_nc_ht=scontent.fsgn7-1.fna&oh=dd3308f86c9f6caab294c6d8b7940ce3&oe=61400686' title='Thu Quỳnh'/>
            <WidgetsRow className="widgets__bottom-img" src='https://scontent.fsgn7-1.fna.fbcdn.net/v/t1.6435-9/231784544_1206515846525681_3350295082073584965_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=6Y4AkVBD3UMAX9VjxPc&_nc_ht=scontent.fsgn7-1.fna&oh=acd1f17503673e1644493c5e95448b4b&oe=613FD913' title='Hoàng Thiên Hương'/>
            <WidgetsRow className="widgets__bottom-img" src='https://scontent.fsgn7-1.fna.fbcdn.net/v/t1.6435-9/172248638_3006509146235493_7228136150275204119_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=aEz_Fyptj0AAX9tWKWx&_nc_ht=scontent.fsgn7-1.fna&oh=e499d674f3c54a0b4923ed51eda183f0&oe=613FB523' title='Gia Vy'/>
           

        </div>

    </div>
)}

export default Widgets
