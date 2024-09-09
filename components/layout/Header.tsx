import { Layout, Space, Switch } from "antd";
import { useTheme } from "@/providers/theme";

const { Header } = Layout;

const HeaderLayout = () => {
  const { toggleTheme, isDarkMode } = useTheme();
  return (
    <Header style={{ borderBottom: "solid 1px grey" }}>
      <Space direction="horizontal">
        <Switch checked={isDarkMode} onChange={toggleTheme} checkedChildren="Light" unCheckedChildren="Dark" />
      </Space>
    </Header>
  );
};

export default HeaderLayout;
