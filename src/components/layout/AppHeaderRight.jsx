import * as React from 'react';
import { Avatar, Menu, Dropdown } from 'antd';
import { BsFillBellFill, MdKeyboardArrowDown, MdKeyboardArrowUp, FiMail } from 'react-icons/all';
import { useAuth } from "../../contexts/authContext";
import './styles/app-header-right.scss';

const AppHeaderRight = (props) => {
  const [arrow, setArrow] = React.useState('down-arrow')
  const { logout } = useAuth()
  const showDropDown = () => {
    setArrow('up-arrow')
    console.log('hi')
  }

  const hideDropDown = () => {
    setArrow('down-arrow')
  }

  const menu = (
    <Menu>
      <Menu.Item key="0">
        <a href="/login" style={{ color: "#EB5933" }}>Add new Admin</a>
      </Menu.Item>
      <Menu.Item key="1">
        <a href="/login" style={{ color: "#EB5933" }} onClick={() => logout()}>Logout</a>
      </Menu.Item>
    </Menu>
  );


  return (
    <div className="app-header-right">

      <div className="header-right">
        <FiMail />
        <BsFillBellFill />
        <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" size={40} />
        <Dropdown overlay={menu} trigger={['click']}>
          {
            arrow === 'down-arrow' ? <MdKeyboardArrowDown onClick={showDropDown} /> : <MdKeyboardArrowUp onClick={hideDropDown} />
          }

        </Dropdown>
      </div>
    </div>
  );
}


export default AppHeaderRight;
