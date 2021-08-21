import React from "react";
import "./Sidebar.scss"
import SidebarRow from "./SidebarRow/SidebarRow";
import {Chat, EmojiFlags, ExpandMoreOutlined, People, Storefront, VideoLibrary} from "@material-ui/icons";
import BookmarkIcon from '@material-ui/icons/Bookmark';

const Sidebar = () => {

  return <div className="sidebar">
    <SidebarRow src='https://scontent.fsgn10-1.fna.fbcdn.net/v/t39.30808-6/228050144_120729063618623_864087923812792197_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=uHRiuKIxa5gAX-8QrgF&_nc_ht=scontent.fsgn10-1.fna&oh=789df00e3ffbf5c481091e828cbd5c78&oe=611EEAAD' title='Pyy'/>
    <SidebarRow Icon={EmojiFlags} title="Pages"/>
    <SidebarRow Icon={People} title="Friends"/>
    <SidebarRow Icon={BookmarkIcon} style = {{color:"gray"}} title="Saved"/>
    <SidebarRow Icon={Chat} title="Messenger"/>
    <SidebarRow Icon={VideoLibrary} title="Watch"/>
    <SidebarRow Icon={Storefront} title="Marketplace"/>
    <SidebarRow Icon={ExpandMoreOutlined} title="More"/>
  </div>
}

export default Sidebar
