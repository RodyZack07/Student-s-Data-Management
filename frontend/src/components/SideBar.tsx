import React from "react";
import {UploadOutlined, UserOutlined, VideoCameraOutlined} from "@ant-design/icons";
import {Layout, Menu, theme} from "antd";

const {Sider} = Layout;

type SideBarProps = {
    selectedKey: string;
    onNavigate?: (key: string) => void;
}

const items = [UploadOutlined, UserOutlined, VideoCameraOutlined].map(
    (icon, index) => ({
        key: String(index + 1),
        icon: React.createElement(icon),
        label: index === 0? 'Dashboard' : index === 1 ? 'Jadwal Kelas' : 'Siswa',
        style: {marginBottom : 20, fontSize: 20},

    }))
export default function SideBar({selectedKey = '1', onNavigate}:  SideBarProps) {
    const {
        token: {colorBgContainer},
    } = theme.useToken()

    return (
        <Sider
            breakpoint={ 'lg'}
            collapsedWidth={'0'}
            style = {{minHeight: '100vh'}}
            onBreakpoint={(broken) =>{
                console.log('broken', broken);
            }}
            onCollapse={(collapsed, type) => {
                console.log('collapsed', collapsed), type;
            }}
        >
        <div style = {{height: 64, display: 'flex', alignItems: 'center', padding: '0 16px' }}>
            <div style = {{
               width: 40,height: 40, borderRadius: 6,
                background: '#8B5E3C', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700

            }}>
                SI
            </div>

            <div style= {{ marginLeft: 20, fontWeight: 700 , color: colorBgContainer ? 'white': undefined }}>
                Islamadina
            </div>
        </div>

        <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKey={[selectedKey]}
            items={items}
            onClick={ ({key}) => onNavigate?.(key) }
            style={ {marginTop: 50 }}

       />
        </Sider>


    )
}