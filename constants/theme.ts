import type { ThemeConfig } from "antd";

export const lightTheme: ThemeConfig = {
  token: {
    colorPrimary: "#1890ff",
    colorText: "#000000",
    colorLink: "#1890ff",
    colorBgBase: "#ffffff",
    colorBgContainer: "#f0f2f5",
    colorBgLayout: "#ffffff",
    colorBorder: "#d9d9d9",
    colorBorderSecondary: "#f0f0f0",
    colorTextSecondary: "#595959",
    colorTextPlaceholder: "#bfbfbf",
  },
};

export const darkTheme: ThemeConfig = {
  token: {
    colorPrimary: "#1890ff",
    colorText: "#ffffff",
    colorLink: "#1890ff",
    colorBgBase: "#001529",
    colorBgContainer: "#002140",
    controlItemBgActive: "#1890dd",
    colorBgContainerDisabled: "#888888",
    colorBgLayout: "#001529",
    colorBorder: "#434343",
    colorBorderSecondary: "#2f2f2f",
    colorTextSecondary: "#d9d9d9",
    colorTextPlaceholder: "#8c8c8c",
  },
};
