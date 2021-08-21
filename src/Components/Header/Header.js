import React, { Component,useState } from 'react';
import "./Header.scss"
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import {OndemandVideo, StorefrontOutlined} from "@material-ui/icons";
import {IconButton} from "@material-ui/core";
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AppsIcon from '@material-ui/icons/Apps';
import MenuIcon from '@material-ui/icons/Menu';
import AddIcon from '@material-ui/icons/Add';
import ClearIcon from '@material-ui/icons/Clear';
import tuii from "./img/tuii.jpg"
import AnnouncementIcon from '@material-ui/icons/Announcement';
import SettingsIcon from '@material-ui/icons/Settings';
import HelpIcon from '@material-ui/icons/Help';
import Brightness3Icon from '@material-ui/icons/Brightness3';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import NearMeIcon from '@material-ui/icons/NearMe';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import BorderColorIcon from '@material-ui/icons/BorderColor';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';


        const Header = () => {
            const [showUser,setShowUser] = useState(false)
            const showMenuUser = () => {
                console.log(showUser)
                return setShowUser(!showUser)
            }
            
            const [showMess,setShowMess] = useState(false)
            const showMenuMess = () => {
                console.log(showMess)
                return setShowMess(!showMess)
            }
            const [showMess2,setShowMess2] = useState(false)
            const showMenuMess2 = () => {
                console.log(showMess2)
                return setShowMess2(!showMess2)
            }
            
            
    return (
        <div className="header">
            <div className="header__left">
                <img
                    src="data:image/png;base64,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"
                    alt=""/>
                <div className="header__left-input">
                    
                    <SearchIcon onClick={showMenuMess2} />
                    <input placeholder="Search Facebook" type="search"
                        onClick={showMenuMess2}
                    />
                    {/* {showAction} */}
                    
                </div>
            </div>
            <div className="header__middle">
                <div className="header__option header__option--active">
                    <HomeIcon fontSize="large" />
                </div>
                <div className="header__option">
                    <OndemandVideo fontSize="large"/>
                </div>
                
                <div className="header__option">
                    <StorefrontOutlined fontSize="large"/>
                </div>
                <div className="header__option" >
                    <SupervisedUserCircleIcon fontSize="large"/>
                </div>
                <div className="header__option">
                    <MenuIcon className="header__option-menu" fontSize="large"/>
                </div>
                <div className="header__option-1">
                    <MenuIcon className="header__option-1-menu" style={{color:"gray"}} fontSize="large"/>
                </div>
            </div>
            <div className="header__right">
                <div className="header__info">
                    <img className="header__right-img" src={tuii}/>
                    <h4>Pyy</h4>
                </div>
                <button className="header__info-add">
                    <AddIcon />
                </button>
                <IconButton className="header__info-icon">
                    <AppsIcon/>
                </IconButton>
                <IconButton onClick={showMenuMess}>
                    <ForumIcon/>
                </IconButton>
                <IconButton>
                    <NotificationsActiveIcon/>
                </IconButton>
                <IconButton onClick={showMenuUser}>
                    <ExpandMoreIcon/>
                </IconButton>
            </div>
            <div className="btn__des" className={showMess2 ? "btn__des" : "user_menu"}>
                 <div className="contact-inputtt">
                  <div className="contact-icon">
                     <button className="contact-icon__11" onClick={showMenuMess2}>
                       <ClearIcon stylee={{fontSize:"10px", color:"gray"}}/>
                       
                     </button>
                   </div>
                  <div className="header__input">
                     <SearchIcon /> 
                    <input type="search" placeholder="Search Facebook" /> 
                  </div>
                 </div>
                 <ul className="btn__ldt">
                     <li className="text">
                         <p className="id">Tìm kiếm gần đây</p>
                         <span className="chinhsua">Chỉnh sửa</span>
                    </li>
                 </ul>
                 <ul className="btn__listaction">
                     <li>
                        
                        <img className="logo" src="https://i.pinimg.com/736x/cd/03/2c/cd032c928d18acfacdaa134c65823fda.jpg" alt="" />
                         <a href="!#">Pyy</a>
                         <button className="btn__listaction-icon">
                          <ClearIcon />  
                         </button>
                     </li>
                 </ul>
             </div>
            <div className={showUser ? "header_user_menu" : "user_menu"}>
                    <div className="user_menu_img">
                        <div className="head_img">
                            <img className="header__right-img" src={tuii}/>
                        </div>
                        <div className="user_menu_info">
                            <h4> Pyy</h4>
                            <p> Xem trang cá nhân của bạn</p>
                        </div>
                    </div>
                    <hr/>
                    <div className="user_menu_section">
                        <ul className="user_menu_section_icon-1">
                            <li><i> <AnnouncementIcon style={{fontSize:"30px"}} /> </i></li> 
                        </ul>
                        <ul className="user_menu_section_title-1">
                            <li><b> Đóng góp ý kiến </b></li>
                            <li><p> Góp phần cải thiện Facebook mới </p></li>
                        </ul>
                    </div>
                    <hr/>
                    <div className="user_menu_section">
                        <ul className="user_menu_section_icon-1">
                            <li><i> <SettingsIcon/> </i></li> 
                            <li><i> <HelpIcon/> </i></li>
                            <li><i> <Brightness3Icon/> </i></li>
                            <li><i> <ExitToAppIcon/> </i></li>
                            
                        </ul>
                        <ul className="user_menu_section_title-1">
                            <li><p> Cài đặt & quyền riêng tư </p></li>
                            <li><p> Troẹ giúp & hỗ trợ </p></li>
                            <li><p> Màn hình & trợ năng</p></li>
                            <li><p> Đăng xuất </p></li>
                        </ul>
                    </div>
                </div>

                <div className={showMess ? "header_user_menu" : "user_menu"}>
                    <div className="user_menu_title">
                        <div className="user_menu_title-1">
                            <b> MESSENGER</b>
                            <div className="user_menu_title-1-icon">
                                <MoreHorizIcon className="user_menu_title-1-icon-1"/>
                                <NearMeIcon className="user_menu_title-1-icon-1" />
                                <VideoCallIcon className="user_menu_title-1-icon-1"/>
                                <BorderColorIcon className="user_menu_title-1-icon-1"/>
                            </div>
                        </div>
                        <div className="user_menu_title-input">
                            <input placeholder="Search Messenger" type="search" />
                        </div>
                    </div>

                    <hr/>
                    <div className="user_menu_title">
                        <ul className="user_menu_title_img">
                            <li><i> <img className="user_menu_title_img-1" src="https://scontent.fsgn7-1.fna.fbcdn.net/v/t1.6435-9/147317563_185353929692504_1772836466397017752_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=174925&_nc_ohc=x0qjOjz8rocAX-PQjbh&_nc_ht=scontent.fsgn7-1.fna&oh=27b0e1f357f6dbdb88ab65bff65c3617&oe=61437DDC" />  </i> Nghiêm Tuấn </li>
                            <li><i> <img className="user_menu_title_img-1" src="https://scontent.fsgn7-1.fna.fbcdn.net/v/t1.6435-9/147317563_185353929692504_1772836466397017752_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=174925&_nc_ohc=x0qjOjz8rocAX-PQjbh&_nc_ht=scontent.fsgn7-1.fna&oh=27b0e1f357f6dbdb88ab65bff65c3617&oe=61437DDC"/> </i> Nghiêm Tuấn</li> 
                            <li><i> <img className="user_menu_title_img-1" src="https://scontent.fsgn7-1.fna.fbcdn.net/v/t1.6435-9/147317563_185353929692504_1772836466397017752_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=174925&_nc_ohc=x0qjOjz8rocAX-PQjbh&_nc_ht=scontent.fsgn7-1.fna&oh=27b0e1f357f6dbdb88ab65bff65c3617&oe=61437DDC"/> </i>Nghiêm Tuấn</li>
                              
                        </ul>
                    </div>
                    <hr/>

                    <div className="user_menu_title-2">
                        <p> Mở ứng dụng Messenger</p>
                    </div>
                </div>
                 

            
        </div>
    )
}
export default Header;
