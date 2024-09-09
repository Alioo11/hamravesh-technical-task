import { Layout as AntdLayout } from "antd";
import HeaderLayout from "./Header";
import type { HOCFunctionalComponent } from "@/types/component";

const { Content } = AntdLayout;

const Layout: HOCFunctionalComponent = ({ children }) => {
  return (
    <AntdLayout>
      <HeaderLayout />
      <Content
        style={{
          padding: "0 24px",
          marginTop: "10px",
          minHeight: "calc(100vh - 64px)",
          display: "flex",
          height: "100vh",
          justifyContent: "center",
        }}
      >
        <div style={{ width: "100%", maxWidth: "1500px", padding: "1rem" }}>{children}</div>
      </Content>
    </AntdLayout>
  );
};

export default Layout;
