/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        mediumseagreen: {
          50: "#ECF9F2",
          100: "#D5F1E2",
          200: "#AFE4C7",
          300: "#85D6A9",
          400: "#5FC98F",
          500: "#3CB371",
          600: "#31915C",
          700: "#246B44",
          800: "#18492E",
          900: "#0C2216",
          950: "#06130C",
        },

        gold: {
          50: "#FFFBE5",
          100: "#FFF7CC",
          200: "#FFF099",
          300: "#FFE866",
          400: "#FFE033",
          500: "#FFD700",
          600: "#CCAD00",
          700: "#998200",
          800: "#665700",
          900: "#332B00",
          950: "#191600",
        },
        crimson: {
          50: "#FDE8EC",
          100: "#FACCD5",
          200: "#F69DAF",
          300: "#F16985",
          400: "#ED3B5E",
          500: "#DC143C",
          600: "#B21030",
          700: "#830C24",
          800: "#590818",
          900: "#2A040B",
          950: "#170206",
        },

        searchBoxBorder: {
          10: "rgba(234, 100, 217, 0.1)",
          20: "rgba(234, 100, 217, 0.2)",
          30: "rgba(234, 100, 217, 0.3)",
          40: "rgba(234, 100, 217, 0.4)",
          50: "rgba(234, 100, 217, 0.5)",
          100: "rgba(234, 100, 217, 1)",
        },

        projectBadge: {
          basic: "#6466ea",
        },

        featureBadge: {
          basic: "#64ea88",
        },
      },

      padding: {
        "75%": "75%", // 사진 일정 비율 유지하기 위한 padding-botto 60%
      },

      height: {
        "100vh-96px": "calc(100vh - 96px)", // 밑에 딱 맞춰주려면! | 커스텀 클래스 이름: 100vh-88 | chatBox의 높이
      },

      screens: {
        // break point 종단점 구성
        mobile: "320px", // tailwind 는 mobile 기반으로 min-width 를 기본으로 만듦
        tablet: "768px", // tailwind 와 겹칠 수도 있을거 같아서 따로 뺌
        desktop: "1024px",
      },

      fontFamily: {
        // SourceSansPro: ["source-sans-pro", "san-serif"],
        sans4: ['"Source Serif 4"', "cursive"],
        sansPro: ['"Source Sans Pro"'],
      },

      fontWeight: {
        semimedium: "600",
      },

      boxShadow: {
        searchBox: "0 0 0 4px rgba(234,100,217,0.1)",
        sortDropDownBox: "0 2px 2px 0 rgba(0,0,0,0.03)",
        sortDropDownList: "0 4px 4px 0 rgba(0,0,0,0.03)",
      },

      borderColor: {
        searchBoxBorder: "rgba(234, 100, 217, 0.4)",
      },

      stroke: {
        searchBoxBorder100: "rgba(234, 100, 217)",
      },
    },
  },
  plugins: [],
};
