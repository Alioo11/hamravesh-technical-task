import type { ThemeConfig } from "antd";

// Light theme configuration
export const lightTheme: ThemeConfig = {
  token: {
    colorPrimary: "#1890ff",        // Primary color
    colorText: "#000000",           // Text color
    colorLink: "#1890ff",           // Link color
    colorBgBase: "#ffffff",         // Base background color
    colorBgContainer: "#f0f2f5",    // Background color for containers
    colorBgLayout: "#ffffff",       // Background color for layout
    colorBorder: "#d9d9d9",         // Border color
    colorBorderSecondary: "#f0f0f0",// Secondary border color
    colorTextSecondary: "#595959",  // Secondary text color
    colorTextPlaceholder: "#bfbfbf" // Placeholder text color
  },
};

// Dark theme configuration
export const darkTheme: ThemeConfig = {
  token: {
    colorPrimary: "#1890ff",        // Primary color
    colorText: "#ffffff",           // Text color
    colorLink: "#1890ff",           // Link color
    colorBgBase: "#001529",         // Base background color
    colorBgContainer: "#002140",    // Background color for containers
    colorBgLayout: "#001529",       // Background color for layout
    colorBorder: "#434343",         // Border color
    colorBorderSecondary: "#2f2f2f",// Secondary border color
    colorTextSecondary: "#d9d9d9",  // Secondary text color
    colorTextPlaceholder: "#8c8c8c" // Placeholder text color
  },
};
