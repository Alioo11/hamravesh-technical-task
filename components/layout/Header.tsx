import { Layout, Space, Switch } from "antd";
import { useTheme } from "@/providers/theme";

const { Header } = Layout;

const HeaderLayout = () => {
  const { toggleTheme, isDarkMode } = useTheme();
  return (
    <Header style={{ display: "flex", alignItems: "center" }}>
      <Space direction="horizontal">
        <Switch checked={isDarkMode} onChange={toggleTheme} checkedChildren="Dark" unCheckedChildren="Light" />
      </Space>
    </Header>
  );
};

export default HeaderLayout;
