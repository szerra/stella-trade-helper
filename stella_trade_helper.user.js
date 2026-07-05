// ==UserScript==
// @name         閒著上鉤-雲端同步跑商情報站（無VPN版）
// @namespace    https://github.com/szerra/stella-trade-helper
// @version      1.6.76-CN
// @description  修正共用商品跨港同步，下載雲端資料以港區錨點判定。
// @author       YourName
// @homepageURL  https://github.com/szerra/stella-trade-helper
// @match        *://fishingidle.com/*
// @match        *://www.fishingidle.com/*
// @match        *://*.fishingidle.com/*
// @grant        GM_xmlhttpRequest
// @grant        GM.xmlHttpRequest
// @connect      script.google.com
// @connect      script.googleusercontent.com
// @connect      luulyuan.cc
// @updateURL    https://tornflow.luulyuan.cc/scripts/stella_trade_helper_cn.meta.js
// @downloadURL  https://tornflow.luulyuan.cc/scripts/stella_trade_helper_cn.user.js
// @run-at       document-start
// ==/UserScript==

function a0_0x33cf() {
  const _0x176d7f = [
    "CMvKDwnL",
    "5l2o5BQR5A2yihTUFq",
    "phnWyw4Gy2XHC3m9iNn0zwXSys1TAw5PlwrVD24IpG",
    "mtC4mhnQyLLgtW",
    "ywrKrxzLBNrmAxn0zw5LCG",
    "BgfZDfjLC3rVy2TtB3vYy2u",
    "v2HHBgvZB25NieHHCMjVCG",
    "Bg9JywXLq29TCgfYzq",
    "txD2uJHJBxm",
    "B2jQzwn0",
    "zgv0ywLS",
    "cIaGicaGidXIDxr0B24Gy2XHC3m9iNn0zwXSys10ywiG",
    "pJe1jtWVB3b0Aw9UpGOGicaGicaGicaGica8B3b0Aw9UihzHBhvLpsiWlJiWiIa",
    "Dv91BMTUB3DUxW",
    "ue9tva",
    "iowpJEAoQa",
    "l3nPz25PBMCTA2v5p2rLDMLJzv9Pzd0",
    "zg9JDw1LBNrfBgvTzw50",
    "5R2U6zwC6lsD",
    "pc9KAxy+cIaGicaGicaGica8l2rPDJ4kicaGicaGicaGidXPBNb1Dcb0ExbLpsjJAgvJA2jVEciGzgf0ys1ZDgvSBgeTC2v0DgLUzZ0IC2HVD1rVyxn0iIa",
    "Aw5UzxjuzxH0",
    "DxbSB2fKrMfPBfrPDgXL",
    "55UU5yMn6loh5PAz5BEY6kIT54k65PAW55Qe5Q+u5Bcn5z+65RQw44cc",
    "y2vUDgvY",
    "B3bLBI1Wyw5LBa",
    "pJi1jtWVB3b0Aw9UpGOGicaGicaGicaGpc9ZzwXLy3q+cIaGicaGicaGpc9SywjLBd4kcIaGicaGicaGpgrPDIbJBgfZCZ0IC3rLBgXHlxnLDhrPBMCTCM93ihn0zwXSys1KAwfNBM9ZDgLJlxjVDYi+cIaGicaGicaGica8zgL2pGOGicaGicaGicaGica8zgL2ignSyxnZpsjZDgvSBgeTC2v0DgLUzY10AxrSzsi+",
    "C3vIDgXL",
    "uMvLzIbtDwDHCIbnywnJAgLHDg8",
    "ntmZmJK2ExbqAej5",
    "rw5NBgLZAa",
    "C2vSzwn0zwruywi",
    "DgfIC0XLzNq",
    "5RIS6kMM6zUY56UV6ycJ57EA",
    "tMv3ieL0zw0",
    "5BEY6k+75y+w5RIV5y+J5zwg5zob77Ym5BM26ycb5yE65lQr56UV5lIk5lYG44cc6iIQ6kgm54Q25Ocb5lUf5zYO5zco5y+W5zcm5Q2L44cc",
    "Bgf1BMnOzxi",
    "AxrLBunVDw50",
    "C3rLBgXHx3rYywrLx2XHC3rFC3LUy19LCNjVCG",
    "zgL2lcbZCgfUlcbWlcbSywjLBcWGyNv0Dg9Ulcb0zcWGDgG",
    "5Rks5PYj5O6d5yIW5RIV5y+J5Oof5AcX",
    "iJ4kicaGicaGica",
    "pgH0BwW",
    "sKfQBYS5v3n1BKjJs1j2D3HXu2nQzZ09",
    "Bg93u3rVy2S",
    "pc9VChrPB24+cIaGicaGicaGicaGicaGica8B3b0Aw9UihzHBhvLpsjUyw1LiIa",
    "mtbxDwrPwLG",
    "lNn0zwXSys1KzxrHAwWTz29Vzhm",
    "DhjHDMvSvgL0Bgu",
    "rgf0ysbPCYbZyxzLzcbSB2nHBgX5ig9UBhKUifjLyxnVBJOGE3jLyxnVBN0",
    "vxbKyxrL",
    "yxbWBgLLza",
    "5y6F5zUG77YAE3jLyxnVBN0",
    "Dg9tDhjPBMC",
    "5PIF56cc55o2",
    "C3LUy0zHAwXdB21Wywn0",
    "DhjPBq",
    "C3LUy0HPBNq",
    "w1n0zwXSyvrYywrLxsdOIkROOyZMLBdMJA7LT7lLKiZMRAu",
    "AxndB25Uzwn0zwq",
    "C2HVD0jHzgDL",
    "q2XVDwqGzgLHz25VC3rPy3m",
    "C3rHCMzHBgXFyMf5",
    "uhjVzMvZC2LVBG",
    "CMvZDg9JA0vZDgLTyxrLvgv4Da",
    "Aw5Zzxj0qMvMB3jL",
    "DxbKyxrL",
    "twLZDcbmyw50zxjUifDPy2S",
    "5PYa5B6m5zcm5Q2L",
    "6zU+54gV6iQV",
    "C2LNBMLUzY1RzxKGBMv0D29YAYbLCNjVCG",
    "6zUY56UV5zcm5Q2L77YA5Q2J5BI4",
    "l3zVEwfNzxm/xZ0",
    "zgvWyxj0DxjLqxq",
    "CgfKu3rHCNq",
    "yw5JAg9Yq291BNq",
    "DhLWzq",
    "C2vSzwn0lxbVCNq",
    "Aw1WB3j0s2v5",
    "C3rLBgXHlw92zxj2Awv3lwnOyw5Nzwq",
    "qxjYAxzPBMCGC29VBG",
    "pgrPDIbJBgfZCZ0IC3rLBgXHlxn5BMmTC3rHDhvZihn0zwXSys1ZEw5JlwzHAwWIpJXZCgfUpG",
    "DM95ywDL",
    "5AsX5Pwx5PMc5y+Z5lIk6kEs6lEZ5yE65O+q6yAs44cc",
    "AgvHza",
    "E259ignOyw5NzxmGC2LUy2uGBgfZDcbTyxjRzwqGyxmGCMvHzc4",
    "CxvPy2Tty2fUt2TnzxnZywDL",
    "Cg9YDe5HDKXLzNq",
    "Bwf0y2HLCW",
    "pc9ZCgfUpGOGicaGicaGia",
    "u3rHCMzHBgW",
    "C3rHCNrLzef0",
    "cIaGicaGidXKAxyGy2XHC3m9iNn0zwXSys1Zzxr0Aw5NCY1SAxn0iJ4kicaGicaGica8BgfIzwWGy2XHC3m9iNn0zwXSys1Zzxr0Aw5NlxjVDYi+cIaGicaGicaGica8zgL2pGOGicaGicaGicaGica8zgL2ignSyxnZpsjZDgvSBgeTC2v0DgLUzY10AxrSzsi+",
    "uMvZDg9JAW",
    "zgf0ys1Uyw1L",
    "Dgv4Da",
    "5PYa5B6m5AsX5Pwx",
    "pc9ZDhjVBMC+pc9KAxy+cIaGicaGicaGica8zgL2pJXZCgfUignSyxnZpsjZDgvSBgeTDhjHDMvSlwXHyMvSiJ4",
    "AxrLBxm",
    "pc9IDxr0B24+cIaGicaGicaGica8yNv0Dg9UignSyxnZpsjZDgvSBgeTC21HBgWTyNrUiIbKyxrHlxn0zwXSys1Hy3rPB249iM1HBNvHBc1ZEw5JiJ4",
    "tMLNAhqGu2fPBcbtAwXR",
    "CMvJDa",
    "cIaGicaGicaGicaGidXIDxr0B24Gy2XHC3m9iNn0zwXSys1VDMvYDMLLDY1JyxjKia",
    "BgvUz3rO",
    "i2zMzde2nG",
    "Dg9Nz2XL",
    "DgfIu2v0DgLUz3m",
    "C29YDa",
    "6zUY56UV6kI65PA3",
    "C3rLBgXHlwnOyw5Nzs1KB3DU",
    "DhjHDMvSqxjYAxzL",
    "C2TPBgXszwzYzxnOvgv4Da",
    "v2vIiefWCcbYzxnWB25KzwqGBM9YBwfSBhNVVzX7DgLTzx0",
    "BwfYA2v0rgf0yq",
    "t3zLCNzPzxC",
    "B3jPz2LUywW",
    "uMvZzxqGy2HHBMDLihjLy29Yza",
    "phnWyw4GC3r5Bgu9iMnVBg9YoNjNyIGXmdaSmtGWldi1nsK7zM9UDc1ZAxPLoJaUodvLBtTTyxjNAw4TBgvMDdO2ChG7iJ4",
    "5OMt6ig95BQR5A2y",
    "pc9ZDhjVBMC+pc9KAxy+cIaGicaGicaGpc9KAxy+cIaGicaGidWVzgL2pGOGicaG",
    "tM8GCMvHzgfIBguGAxrLBsbJyxjKihDHCYbMB3vUzc4Gt3bLBIbHihbVCNqGAw5MBYbVCIbPDgvTihbHz2uGzMLYC3qU",
    "6iEQ5lIk5QYH5QIz6kIy5BEY6k6a5B6m77Ym5ywXihTUFsdPOixORORLJjBJGii",
    "vgf2zxjUifj1Bw9YCW",
    "CMvZB2X2zwrpChrPB25Z",
    "pc9KAxy+cIaGicaGicaGicaGidWVzgL2pGOGicaGicaGicaGica8BgfIzwWGy2XHC3m9iNn0zwXSys1ZB3j0lwXHyMvSiJ4kicaGicaGicaGicaGica",
    "v2HHBgvZB25NiejVBMuGrMX1Dgu",
    "5BcA5PYQ5zsU572e",
    "y2XHC3noyw1L",
    "6Bk45Q2m6AQO56YB",
    "uxvHBNrPDhK",
    "w1n0zwXSyvrYywrLideUnI43ms1dtL0G6iwZ5PYS5BEY6lYj5ywL77YA5y2Z5Bch6z2G5Bk45lIn5QQI5RISk+ElGoAfI+woU+MhJq",
    "cIaGicaGicaGpgrPDIbJBgfZCZ0IC3rLBgXHlwvTChr5lxn0yxrLiJ4kicaGicaGicaGidXKAxyGy2XHC3m9iNn0zwXSys1LBxb0Es1Py29UiJ7INjm8l2rPDJ4kicaGicaGicaGidXKAxyGy2XHC3m9iNn0zwXSys1LBxb0Es10AxrSzsi+",
    "CMf3",
    "BwfW",
    "BgfUz1PO",
    "q2XVDwqGC3LUyZOGt0S",
    "l3zVEwfNzxm",
    "C3LUy0XHC3q",
    "C3bSAxq",
    "y2XVC2u",
    "z29PBMC",
    "zxn0Aw1HDgvtDgf0Dxm",
    "q3vYCMvUDcbKyxrHigLZig5VDYb0AguGy29TCgfYAxnVBIbIyxnLBgLUzs4",
    "zgvSDge",
    "iowaI+A4R+wnGooaGq",
    "y2XVBMvoB2rL",
    "CxvLCNLtzwXLy3rVCKfSBa",
    "nti2ogjWsgfmvq",
    "u3rHDhvZ",
    "BwfYAY1YzwfK",
    "zxn0Aw1HDgvKuMvZDg9JA0f0",
    "C3rLBgXHlwjHzgDLlxDHCM4",
    "q2HLy2TPBMC",
    "E259ig9SzgvYigXVy2fSihjLy29YzhmGD2vYzsbZA2LWCgvKoYbUB3qGyw4GzxjYB3j7C2HLzxr9",
    "C3rVCfbYB3bHz2f0Aw9U",
    "5lIa5QYH5OcN",
    "q29PBNm",
    "4PQG77IpienSB3vKigrHDgeGAxmGzw1WDhK",
    "CMfUzg9T",
    "pc9KAxy+cIaGicaGicaGicaGicaGpgrPDIbJBgfZCZ0IC3rLBgXHlw92zxj2Awv3lwXPBMuIpG",
    "DgfYz2v0",
    "C2L6zq",
    "BwfUDwfSlxn5BMm",
    "pc9VChrPB24+cIaGicaGicaGicaGidXVChrPB24GDMfSDwu9iNbVCNrZiIa",
    "6Bk45Q2m5RIV",
    "C3LUy05VDW",
    "sxDimZK5AtL2sfK9",
    "cIaGicaGicaGpgrPDIbJBgfZCZ0IC3rLBgXHlwnOyw5Nzs1YB3CIpGOGicaGicaGicaGphnWyw4Gy2XHC3m9iNn0zwXSys1JAgfUz2uTBMfTzsi+",
    "5lIk5PA56lEr5zwg5Oof5AcX5OYj6yIv6AgV56s66k6k5yYw5Pw45A2x44cc",
    "Dgv4DenVBNrLBNq",
    "C2nHBKn1CNjLBNq",
    "Aw5IB3vUza",
    "yxbP",
    "zMXVB3i",
    "C3DPDgnOlxrHyG",
    "lNn0zwXSys1Wyw5LBc1IB2r5",
    "pc9ZCgfUpGOGicaGicaGicaGicaGicaGica8C3bHBIbJBgfZCZ0IC3rLBgXHlwrLDgfPBc1ZDg9JAYiGC3r5Bgu9iMnVBg9YoG",
    "Dg9qB3j0",
    "Bg93u3rVy2TsyxrPB1n1yG",
    "54k55yE75OMR5O+p5BM25lIk5lYG5zwg5zob",
    "pc9VChrPB24+cIaGicaGicaGicaGidXVChrPB24GDMfSDwu9iMvUiIa",
    "ug9YDcbNB29KCYb3zxjLihf1zxvLzcbMB3iGy2XVDwqGDxbSB2fKlIbwB3LHz2uGC3rHDhvZihn5BMnZigLUihrOzsbIywnRz3jVDw5Kig9UBhKU",
    "z2v0twLUDxrLCW",
    "pJeWjtWVB3b0Aw9UpGOGicaGicaGicaGica8B3b0Aw9UihzHBhvLpsiWlJe1iIa",
    "yxjYAxzLqxruzxH0",
    "DgLTzq",
    "iJ4kicaGicaGicaGidXKAxyGy2XHC3m9iNn0zwXSys1Wyw5LBc1OzwfKzxiIpGOGicaGicaGicaGica8zgL2pGOGicaGicaGicaGicaGidXKAxyGy2XHC3m9iNn0zwXSys1Wyw5LBc10AxrSzsi+",
    "Bg9HzgLUzW",
    "C3LUy1DHAxq",
    "tgfZDcbszwzYzxnO",
    "4PIb77IpienSB3vKigrHDgeGAxmGBMv3zxi",
    "Bw91C2vVDMvY",
    "5zcm5Q2L5AsX5Pwx",
    "Cg9YDeLK",
    "phnWyw4Gy2XHC3m9iNn0zwXSys1TAw5Plw11DgvKiJ4Tpc9ZCgfUpG",
    "l3bPBMC/xZ0",
    "Dg9mB2nHBgvtDhjPBMC",
    "rgLZy29Yza",
    "DxbKyxrLzef0txm",
    "iJ7IHRS8l2j1DhrVBJ4kicaGicaGicaGicaGica8yNv0Dg9UignSyxnZpsjZDgvSBgeTAwnVBI1IDg4IigrHDgeTC3rLBgXHlwfJDgLVBJ0Iy2XVC2uTCgfUzwWIihrPDgXLpsi",
    "Aw5Zzxj0qwrQywnLBNrive1m",
    "phnWyw4Gy2XHC3m9iNn0zwXSys1JAgfUz2uTCgLSBcbZDgvSBgeTy2HHBMDLlxbYAwnLlwrPzMyIpG",
    "B2jZzxj2zwrbDe1Z",
    "5yY755Ax54MP5zob",
    "CgvYBwLZC2LVBG",
    "6zUY56UV5zUE5ykZ5Qc85BYp5lIn5PIV5PYj5PwiiePtt07JGilPOjdOPR3VVjO",
    "C2HVD0jHzgDLu3vI",
    "zw1WDhLdAgfUz2vZvgL0Bgu",
    "C3rLBgXHx2rLDMLJzv9Pza",
    "w1n0zwXSyvrYywrLxsdOIkROOyZKUiRKVkdLPlhOTku6",
    "DxnLCKLK",
    "5lIk5QYH5yI35PAW",
    "C2HVD1rYyxzLBfn1yG",
    "v2fZ",
    "y291BNq",
    "5ywX5lQR5lIk5ykZ57c95zcn6yEr6zgW5lIn5y+V55sO",
    "w1n0zwXSyvrYywrLxsdOIkROOyZKUiRKVkdLPlhOTku6ieHuvfa",
    "C2nYB2XSvg9W",
    "56k66kQn5lIT",
    "CMvZDg9JA0fUy2HVCKf0",
    "tgfZDcbZEw5J",
    "DM95ywDLq291BNq",
    "uhvSBcbdBg91zcbeyxrH",
    "i2zMnMi2yG",
    "q2XVDwqGC3LUyZOGrMfPBgvK",
    "ywnJzxb0zwq",
    "CgLUzW",
    "v2vIiefWCcdLM57MH4NMRApLUlJVVzX7DgLTzx0",
    "q2HHBMDLCW",
    "y2HLy2TPBMC",
    "y2XHC3nmAxn0",
    "twfYA2v0",
    "y29YywXFC2nYAxb0x3bVCNq",
    "CMvJB3jKCW",
    "u2HVDYb0CMf2zwWGzxn0Aw1HDgu",
    "zNjVBuvUDhjPzxm",
    "pc9ZCgfUpJXZCgfUpG",
    "lNn0zwXSys10ywiUywn0AxzL",
    "54Q25Ocb77Ym6lEZ6l+h5zwg5zob5OMR5O+p",
    "z2v0rgf0zq",
    "tKjezZzZnNi",
    "5R2U5Akd56sb",
    "C3rLBgXHlxrYywrLlw1VzgfSlwjHy2TKCM9W",
    "BM9tEw5Jrgf0yq",
    "twfUDwfSifbVCNqGvxbSB2fK",
    "DxnLCKfNzw50",
    "4PYfienSB3vKigrHDgeGzg93BMXVywrLza",
    "B3zLCNzPzxC",
    "sMHIEJK4mJL0r1K9",
    "E259igHLywrPBMC",
    "AxnbCNjHEq",
    "qxjYAxzLza",
    "tM8Gy2HHBMDL",
    "C2nYB2XSsw50B1zPzxC",
    "6zUY56UV5Ps25yIW6kUl5Rgc77Ym5l2g5Rks5PYj5A+R5ywL5zwg5zob44ccywnJzxb0zwq9mo+8JhnRAxbWzwq9",
    "zgvMyxvSDfbHz2u",
    "BgfUzW",
    "6AgV56s65zcm5Q2L5AsX5Pwx5O+q56s6",
    "yxbWBgLJyxrPB24VANnVBG",
    "CMvTB3zLza",
    "C2TPChbLza",
    "C3rLBgXHlxf1AwnRlxnJyw4TzMXVyxq",
    "AxrLBxntAg9YDa",
    "v2fPDgLUzYbMB3iGC2vSBg91DcaOyw5JAg9YihTHBMnOB3j9kq",
    "y2XVDwrqDwXSt2TnzxnZywDL",
    "zw50CMLLCW",
    "C2HHCMvKsxrLBvnJB3jL",
    "u2HVDYbJAgfUz2uGyMfKz2u",
    "4PQG77IpioMBSUERR+wqJoATPEwKSEAvLW",
    "v2fYzwHVDxnL",
    "4PYfioA4R+wpO+I1HoAwMEw3SUMaGEwhUG",
    "55UU5yMn5Rks5PYj5PAW55Qe6lkO54MP6k6k5yYw",
    "C291CMnL",
    "yM9KEq",
    "5B2t5yMn5PwW6yEp",
    "tM8GCg9YDcbPBMzVigzVDw5K",
    "tg93ihn0B2nRihTUFq",
    "w1n0zwXSyvrYywrLxsdOIkROOyZNIRBMGihMO4dMTyS6",
    "yNv0Dg9UlcbHlcbKAxySihnWyw4",
    "icbdAgvJAYbLCNjVCIbKzxrHAwXZigLUifnLDhrPBMDZ",
    "Bg93",
    "C3rLBgXHlxn5BMmTDg9HC3qTAgLKzq",
    "y2XPy2S",
    "5lIk5QYH6koC6lkO",
    "r0vu",
    "zgf0yq",
    "Axnoyu4",
    "u0Hblti1nG",
    "lNn0zwXSys1WB3j0lw5HDI1IDg4Uywn0AxzL",
    "zgLZCgXHEu5HBwu",
    "z29VzhnjBMzV",
    "pc9KAxy+cIaGicaGicaGpgrPDIbJBgfZCZ0IC3rLBgXHlwDVB2qTChjPy2uIpG",
    "6lEr5zwg5Oof5AcX",
    "tgfUz3vHz2u",
    "BMvHCMvZDa",
    "swDYAtDns29NwgrmqND6lW",
    "cIaGicaGicaGicaGia",
    "zNjVBq",
    "C2v0rgf0zq",
    "phnWyw4Gy2XHC3m9iNn0zwXSys1SyxvUy2HLCI1IywrNzsi+",
    "CMf3vgv4Da",
    "rgf0zvrPBwvgB3jTyxq",
    "zgvWyxj0Aw5N",
    "5zYO5RIV5y+J5lIl5PA557cH5yYw6loh6kIk5lIT6AgV56s66Acq6kIi5yIW6ygu6iIh6l+u6iIQ44cc",
    "4PYfioA4R+wpO+AdHEwGSEw3SUAoG+ApJW",
    "D2LKDgG",
    "w1n0zwXSyvrYywrLoLrVCM5gBg93xq",
    "zxHWzwn0zwrbCNjPDMfSqxq",
    "pc9VChrPB24+cIaGicaGicaGicaGidXVChrPB24GDMfSDwu9iM92zxj2Awv3iIa",
    "5y2Z5Bcg5yIW6l6+",
    "pc9KAxy+cIaGicaGicaGicaGidXKAxyGy2XHC3m9iNn0zwXSys1Zzxr0Aw5Nlxn1yIi+",
    "yxbWBgLJyxrPB24VANnVBIX0zxH0l3bSywLUlcOVkG",
    "5O6O5lYW6koC6lkO",
    "pc9ZCgfUpGOGicaGicaGicaGphnWyw4Gy2XHC3m9iNn0zwXSys1JAgfUz2uTC3rVy2SIpG",
    "CgfUzwXuAxrSzq",
    "5OQa6io95O6d5O+p6koC6lkO5PMc6zAt",
    "cIaGicaGidXKAxyGy2XHC3m9iNn0zwXSys1ZEw5JlxrVyxn0lxrPDgXLiJ4",
    "E259ios6UUwjJEw+Ga",
    "A2v5D29Yzhm",
    "BgfZDevYCM9Y",
    "w1n0zwXSyvrYywrLxsdNLAxPGy7OVipOIiRPM7lNQ6/OS4FMLPNVVjO",
    "tg93ihn0B2nR",
    "zgvJCNLWDa",
    "phnWyw4Gy2XHC3m9iNn0zwXSys1TAw5PlxvWiJ4R",
    "pcfet0nuwvbf",
    "vgHLihnLCNzLCIbYzxnWB25KzwqSigj1DcbUBYbZDxbWB3j0zwqGCg9YDcbPDgvTigrHDgeGy291BgqGyMuGyxbWBgLLzc4",
    "5y+w5B6x5ywX5lQR57c95zcn6yEr6zgW5AsX5Pwx77YAsfruuca",
    "CMvZDg9JA1rPBwu",
    "DgfIt3zLCNzPzxC",
    "i3n0zwXSys10CMfKzs1TB2rHBc1IywnRzhjVCcaUC3rLBgXHlxbVCNqTBMf2lwj0BI5Hy3rPDMu",
    "y2XPzw50t2jZzxj2zwrbDa",
    "CgLUz0nSB3vK",
    "vhjHDMvSievZDgLTyxrL",
    "AM9PBG",
    "BM9dAgfUz2u",
    "C2v0DgLUz3nmyw5NDwfNzvn1yG",
    "C2vSBgLUzW",
    "CgfUzwXtDwj0AxrSzq",
    "CgXHDgzVCM0",
    "DhjHDMvSrhvYyxrPB24",
    "w1n0zwXSyvrYywrLxsdMR48GnsdLIiBPKjJOH6RLI5xMJOpMJ4/KUkBLHAZLUipNM67LIy3MUk/LJ6pLLyBLK4hOS4FMLPK",
    "AxngAw5PDgu",
    "z2v0sg91CNm",
    "ntu1ody1Bejzv2Dr",
    "u29YDa",
    "C2nYB2XStgvMDa",
    "y2HHBMDL",
    "cIaGicaGidXKAxyGy2XHC3m9iNn0zwXSys1VDMvYDMLLDY1NCMLKiJ4kicaGicaGica",
    "qxv0BYdMNipLHkRLHyJKVP3PGyRMIllNLAVPNAlLIktMLRFVViZLHO3NNiVNGi/OPR3LMAJOQP7OQidJGii",
    "C3rLBgXHu2v0DgLUzW",
    "C3rLBgXHlxrYywrLlxbHBMvSlw9Wzw4",
    "iJ7dLZWVyNv0Dg9UpGOGicaGicaGicaGica8l2rPDJ4kicaGicaGicaGidWVzgL2pGOkicaGicaGicaGidXKAxyGy2XHC3m9iNn0zwXSys1Wyw5LBc1ZDgf0DxmTCM93iJ4kicaGicaGicaGicaG",
    "q2XVC2u",
    "rM9NyM91BMqGq29WCgvYifrHzW",
    "yxnZAwDU",
    "pJiWjtWVB3b0Aw9UpGOGicaGicaGicaGica8B3b0Aw9UihzHBhvLpsiWlJi1iIa",
    "z2v0qM91BMrPBMDdBgLLBNrszwn0",
    "4PIb77IpioMBSUERR+IZH+AwMEI8G+AwSa",
    "tMv3",
    "rxjYB3i",
    "ChvYy2HHC2u",
    "cIaGicaGicaGpc9Zzwn0Aw9UpGOGicaGica8l2rPDJ4kicaGia",
    "55UU5yMn55wR6z2I5Rks5PYj5y+V6k6a5y+w55Qe5zwg5zob5y2H77Ym6kUl5ywi6zAl5zwF5RIV5y+J5Oof5AcX5OIw5zwg5zob6Acb44cc",
    "Aw5ZDwzMAwnPzw50",
    "AgLKzgvU",
    "sxrLBsbszw1VDMvK",
    "C3rLBgXHx3f1AwnRx3nJyw5FzMXVyxrFC3rHDgu",
    "AxnjBNrLz2vY",
    "tM8GBMv3ignHCMDVignOyw5Nzxm",
    "6zUY56UV5zcm5Q2L77YA56k66kQn5lIT",
    "BM9ozxDdAgfUz2vZ",
    "Bg9N",
    "C2LNBMLUzY1RzxKGCMvZCg9UC2u",
    "jMfTCdS",
    "6Acq6kIi6l+u6iIQ",
    "55UU5yMn5Rks5PYj5zwg5zob6loh5PAz",
    "zxn0Aw1HDgvcyxnPCW",
    "tgfZDcbszxn0B2nR",
    "pc9VChrPB24+cIaGicaGicaGicaGidXVChrPB24GDMfSDwu9iNPOiIa",
    "jMX0oW",
    "pc9KAxy+",
    "5lIk5QYH6kgL6lsN",
    "oduZmZaWtu50CNbk",
    "5l2o5BQR5A2y5Q+u5l6l",
    "yM9KEvrVCa",
    "54cp6kA95zMO5lIn5PsV5O+05ywX5lQR57c95zcn6yEr6zgW6kEJ5A+g",
    "4PQG77IpienSB3vKihvWBg9HzcbMywLSzwq",
    "BMv4DfjLC3rVy2S",
    "C29YDeXVD1n0B2nR",
    "twfYAYbWB3j0CYbHBMqGAxrLBxmGyMvSB3CGDgHPCYbYyxrPBY4",
    "C2LNBMLUzY1RzxKGy2fJAguGAgL0",
    "CMvZDg9JA0nOyw5Nzwq",
    "z2v0t3DUuhjVCgvYDhLoyw1LCW",
    "54cp6kA95zMO5lIn5PsV5O+05ywX5lQR5lIk5ykZ57c95zcn",
    "y2HHBMDLCW",
    "BM9FDM95ywDL",
    "CMvWBgfJzufSBa",
    "tM8GAxrLBsbKyxrHihLLDa",
    "AgfZ",
    "pc9VChrPB24+cIaGicaGicaGicaGicaGica8B3b0Aw9UihzHBhvLpsjWCMLJzsiG",
    "Aw5Uzxjive1m",
    "pc9VChrPB24+cIaGicaGicaGicaGicaGica8B3b0Aw9UihzHBhvLpsj0Aw1LiIa",
    "5R2U6zwC56sb",
    "CMvZzxruB2fZDfrPDgXL",
    "y3jLyxrLrwXLBwvUDa",
    "4PYfifbVCNqGzgf0ysbZzw50",
    "cIaGicaGicaGpgrPDIbJBgfZCZ0IC3rLBgXHlxzVEwfNzs1Zzwn0Aw9UiJ4kicaGicaGicaGidXKAxyGy2XHC3m9iNn0zwXSys12B3LHz2uTDgL0BguIpVcFMQiG5B2t5yMn5yMn5B6apc9KAxy+cIaGicaGicaGica8zgL2ignSyxnZpsjZDgvSBgeTDM95ywDLlwDYAwqIpGOGicaGicaGicaGica8zgL2ignSyxnZpsjZDgvSBgeTDM95ywDLlwnHCMqGC3rLBgXHlxzVEwfNzs1LBxb0Esi+cIaGicaGicaGicaGicaGpgrPDIbJBgfZCZ0IC3rLBgXHlxzVEwfNzs1Pzci+5Rwl6k+vpc9KAxy+cIaGicaGicaGicaGicaGpgrPDIbJBgfZCZ0IC3rLBgXHlxzVEwfNzs10Aw1LiJ4WmEACIdaX5PELideYoJaWpc9KAxy+cIaGicaGicaGicaGidWVzgL2pGOGicaGicaGicaGpc9KAxy+cIaGicaGicaGpc9KAxy+cIaGicaGia",
    "5RIV5y+J5Oof5AcX",
    "pc9VChrPB24+cIaGicaGicaGicaGicaGpc9ZzwXLy3q+cIaGicaGicaGicaGidWVBgfIzwW+cIaGicaGicaGica8l2rPDJ4kicaGicaGicaGidXKAxyGy2XHC3m9iNn0zwXSys1NB29KCY10ywjSzsi+cIaGicaGicaGicaGia",
    "6koC5RU/5B6m5zsU572e",
    "y29SB3jezxb0Aa",
    "C3vJy2vZCW",
    "phnWyw4Gy2XHC3m9iNn0zwXSys1SyxvUy2HLCI1HBgvYDci+itWVC3bHBJ4",
    "q2XVDwqGC3LUyZOGq2HLy2TPBMC",
    "u2HVDYb0AguGBNvTyMvYig9MignOyw5NzxmGB24GDgHLifrYywrLieLUzM8GyNv0Dg9UlG",
    "BMfTzq",
    "tg93ihn0B2nRihrOCMvZAg9Sza",
    "5lIl6l295lQr56UV6lwe5PAz",
    "u29VDgHPBMCGu2HLBgWGrgv3",
    "phnWyw4+",
    "v2HHBguGu29UzYbiyxjIB3i",
    "z2v0",
    "BgfUz0vU",
    "44ca6kUl55Yl6kIT5A6A6Acb55Qe6yYV6kQK6kMZ5Oof",
    "icbcyxnPCZOGC2TPBgWGC2nHBG",
    "pc9KAxy+cIaGicaGicaGicaGidXKAxyGy2XHC3m9iNn0zwXSys1Zzxr0Aw5Nlxn1yIiGC3r5Bgu9iMnVBg9YoIm4nMvMywm7zM9UDc1ZAxPLoJeYChG7iJ7WN5kHioATPoEcUUEeOvzqtUwiHUs6Q+EjIo+8Jow3SUMGKoIOREMaO+E3MUMBSUs8UUACJEwzQooaGUEeOEMCGoMHJEwKLUIOREwUMU+8JowUIEIJNEwnS+wpR+s9V+EuQooaGJWVzgL2pGOGicaGicaGicaGica8zgL2ignSyxnZpsjZDgvSBgeTC2v0DgLUzY1ZDwiIpG",
    "5A6j56wE6lsD6zYY",
    "6yws6AsO5ykZ6igE",
    "C3r5Bgu",
    "pgrPDIbJBgfZCZ0IC3rLBgXHlwvTChr5lwXPBMuIpG",
    "C3rLBgXHlwXHDw5JAgvYlwj0BG",
    "se1bqW",
    "cIaGicaGidXKAxyGy2XHC3m9iNn0zwXSys12B3LHz2uTC2vJDgLVBIi+cIaGicaGicaGpgrPDIbJBgfZCZ0IC3rLBgXHlxzVEwfNzs10AxrSzsi+8j+AOIdLVzpLIy3LIy3LVOaG",
    "Aw5MBW",
    "4PQG77Ipios6KEERR+I1HoAwMEs4UUEPUG",
    "w1n0zwXSyvrYywrLxsdOIkROOyZNIRBMGihLT7lKUiRKVka6",
    "yxjYAxzLqxq",
    "yxjYAxzLza",
    "twLZDcbmyw50zxjUieLZBgvZ",
    "C2v0DgLUz3m",
    "A2v5CW",
    "CgfYzw50rwXLBwvUDa",
    "6AgV56s66k6k5yYw6kEs5QIz",
    "cIaGicaGicaGicaGicaGphnLBgvJDcbKyxrHlxn0zwXSys1Zzxr0Aw5NpsjZB3j0tw9KzsiGy2XHC3m9iNn0zwXSys1ZzwXLy3qIpGOGicaGicaGicaGicaGicaGpg9WDgLVBIb2ywX1zt0IBg93u3rVy2SIia",
    "zgLZyxbWzwfYzwq",
    "tufyx1nbrKvFsu5uruDfuG",
    "C3rLBgXHlxrYywrLlwXHDw5JAgvYlwzHBgXIywnR",
    "C3rLBgXHlxn5BMmTDg9HC3q",
    "zw1WDhLdAgfUz2vZu3vI",
    "5BM75R2U5yA36jcd",
    "5OQa6io95O6d5O+p",
    "mtm4otfnENfeEKi",
    "CxvPy2STC2nHBI11CgXVywq",
    "yw5JAg9Ytwf4",
    "CgfNzv9VyNnLCNzL",
    "BM9Uzq",
    "w1n0zwXSyvrYywrLxsdLT7lMM7tMLRaG",
    "uMvHC29UoIb7CMvHC29UFq",
    "w1n0zwXSyvrYywrLxsdPM7lNQ6/OS4FMLPNOVipMLRdVViZNLAxPGy7MNkZMQz/OIiROS4FMLPNVVjO",
    "ugfZC2vK",
    "zMLUza",
    "5BcA5PYQ5zsU572e77Yi6zYa6AUy5BQR5A2y6yYO6BUE5OIw5zsU572e77Yj",
    "twHMAZDqsZG",
    "txCZCYT3pt0",
    "BMv3sw5MBW",
    "zMLYC3rfBgvTzw50q2HPBgq",
    "ug9YDcbjBNrLBa",
    "6yws6AAg5lYG6zE7",
    "pc9ZCgfUpJXZDhjVBMC+",
    "pc9KAxy+cIaGicaGicaGpc9KAxy+cIaGicaGia",
    "CxvHBNrPDhK",
    "qxbWBgLLzcb7Cg9YDhn9ihbVCNrZigfUzcb7AxrLBxn9igL0zw0GCMvJB3jKCY4",
    "rxn0Aw1HDgvKihjLC3rVy2S",
    "w1n0zwXSyvrYywrLxsdOIkROOyZMLBdMJA7LKiZMRAxLPlhOTku6",
    "u2nHBIbJDxjYzw50ihnJCMvLBG",
    "5lQ6pc9KAxy+cIaGicaGicaGpgrPDIbJBgfZCZ0IC3rLBgXHlxzVEwfNzs1NCMLKiJ4kicaGicaGicaGia",
    "rxn0Aw1HDgu",
    "C2HVD1rVyxn0u3vI",
    "C3LUyW",
    "C3rVy2S",
    "cIaGicaGicaGpc9HC2LKzt4kicaGicaGica8C2vJDgLVBIbJBgfZCZ0IC3rLBgXHlxbVCNqTzgv0ywLSiJ4kicaGicaGicaGidXKAxyGy2XHC3m9iNn0zwXSys1WB3j0lwrLDgfPBc1OzwfKiJ4kicaGicaGicaGicaGpgrPDJ4kicaGicaGicaGicaGica8zgL2ignSyxnZpsjZDgvSBgeTCg9YDc1KzxrHAwWTDgL0BguIpG",
    "B3v0yM91BMq",
    "z29VzhnfBxb0Eq",
    "Dg9FAg9Tzq",
    "Dg9W",
    "w1n0zwXSyvrYywrLxsdKUiRLGRpLM57MH4NVVjO",
    "v2HHBgvZB25N",
    "C3rLBgXHx3rYywrLx3bHBMvSx3nLDhrPBMDZ",
    "CMvHzhLtDgf0zq",
    "C2X1zW",
    "y2XVDwrqDwXSt2TuAxrSzq",
    "5AsC5BIg5BIc",
    "zgL2lcbSAsWGDhiSihnLy3rPB24SigfYDgLJBguSigj1DhrVBG",
    "AgfZq2HHBMDLCW",
    "EMGTsgfUDa",
    "zNjVBvbVCNq",
    "BM9YBwfS",
    "C2LNBMLUzY1RzxKGCMvXDwvZDa",
    "tMLNAhqGu2fPBcbdAxr5",
    "DxjS",
    "E259ignOyw5Nzxm",
    "kcGPid0+ihSkicaGicaGicbPzIaOD2LUzg93lL9FC3rLBgXHvM95ywDLqxbPsg9VA0LUC3rHBgXLzcKGCMv0DxjUoWOGicaGicaGihDPBMrVDY5Fx3n0zwXSyvzVEwfNzufWAuHVB2TjBNn0ywXSzwqGpsb0CNvLoWOkicaGicaGicbJB25ZDcbPC1zVEwfNzufWAsa9icHPBNb1DcKGpt4GEWOGicaGicaGicaGDhj5ihSkicaGicaGicaGicaGy29UC3qGDMfSDwuGpsb0ExbLB2yGAw5WDxqGpt09icDZDhjPBMCNid8GAw5WDxqGoIbPBNb1Dd8UDxjSihX8icCNoWOGicaGicaGicaGicbJB25ZDcbWyxrOBMfTzsa9ig5LDYbvuKWODMfSDwuSigXVy2f0Aw9UlMHYzwyPlNbHDgHUyw1LoWOGicaGicaGicaGicbYzxr1CM4GCgf0Ag5HBwuGpt09icCVyxbPl3nOzwXSl3n0yxr1CYCGFhWGCgf0Ag5HBwuGpt09icCVyxbPl3nOzwXSl25HDI1ZDgf0DxmNoWOGicaGicaGicaGFsbJyxrJAcaOxYKGEWOGicaGicaGicaGicbYzxr1CM4GzMfSC2u7cIaGicaGicaGicb9cIaGicaGicaGFtSkcIaGicaGicaGy29UC3qGzw1PDca9icHWyxLSB2fKksa9pIb7cIaGicaGicaGicbPzIaOixbHEwXVywqGFhWGDhLWzw9MihbHEwXVywqGit09icDVyMPLy3qNksbYzxr1CM47cIaGicaGicaGicbKB2n1BwvUDc5KAxnWyxrJAev2zw50kg5LDYbdDxn0B21fDMvUDcGN",
    "y2HLy2TIB3G",
    "zgv0zwn0zwrbDa",
    "zgvJB2rL",
    "pc9KAxy+cIaGicaGicaGica8zgL2ignSyxnZpsjZDgvSBgeTzw1WDhKTC3vIiJ4",
    "tM8GB25LigHLywrPBMC",
    "CxvPy2Tty2fUt2TuAxrSzq",
    "6Acb6z2I6kEa5A+F",
    "C3rLBgXHlxzVEwfNzs1HCgK",
    "cIaGicaGidWVzgL2pGOGicaG",
    "C3rLBgXHlwnOyw5Nzs1Uzxv0CMfS",
    "C3rLBgXHx3rYywrLx3bHBMvSx3n0yxrL",
    "6zUY56UV5zUE5ykZieHutuZVViZKUi3MMk8GsLnptUoaGUIRI+AQOUAFPEMdQoE9SUASIUMzKoAiLUAyR+wqPUEzU+wfPEMPL+ITIEMGGEoaGUMGKoIMVE+8MG",
    "C3rLBgXHx2n1C3rVBv9HCgLFDxjS",
    "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B3j0yw50oWOGicaGicaGig1PBI13Awr0AdOGmtHWEcaHAw1WB3j0yw50oWOGicaGicaGigHLAwDODdOGmtHWEcaHAw1WB3j0yw50oWOGicaGicaGihbHzgrPBMC6idaGnxb4icfPBxbVCNrHBNq7cIaGicaGicaGyM9YzgvYlxjHzgL1CZOGotK5ChGGiwLTCg9YDgfUDdSkicaGicaGicbMB250lxnPEMu6ideXChGGiwLTCg9YDgfUDdSkicaGicaGicbMB250lxDLAwDODdOGotuWicfPBxbVCNrHBNq7cIaGicaGicaGy29SB3i6icmYmJmGiwLTCg9YDgfUDdSkicaGicaGicbIywnRz3jVDw5KoIaJzMzKmty2icfPBxbVCNrHBNq7cIaGicaGih0kcIaGicaGic5ZDgvSBgeTBgf1BMnOzxiTywXLCNqGEWOGicaGicaGignVBg9YoIaJzMzMicfPBxbVCNrHBNq7cIaGicaGicaGyMfJA2DYB3vUzdOGi2zMngq1zsaHAw1WB3j0yw50oWOGicaGicb9cGOGicaGicaJC3rLBgXHlxf1AwnRlxnJyw4TzMXVyxqGEWOGicaGicaGihbVC2L0Aw9UoIbMAxHLzcaHAw1WB3j0yw50oWOGicaGicaGigXLzNq6idmYnxb4icfPBxbVCNrHBNq7cIaGicaGicaGDg9WoIa1nhb4icfPBxbVCNrHBNq7cIaGicaGicaGCMLNAhq6igf1Dg8GiwLTCg9YDgfUDdSkicaGicaGicbIB3r0B206igf1Dg8GiwLTCg9YDgfUDdSkicaGicaGicb6lwLUzgv4oIaYmtq3ndGZmdaXicfPBxbVCNrHBNq7cIaGicaGicaGzgLZCgXHEtOGAw5SAw5LlwzSzxGGiwLTCg9YDgfUDdSkicaGicaGicbMBgv4lwrPCMvJDgLVBJOGy29SDw1UicfPBxbVCNrHBNq7cIaGicaGicaGywXPz24TAxrLBxm6ignLBNrLCIaHAw1WB3j0yw50oWOGicaGicaGigP1C3rPzNKTy29UDgvUDdOGy2vUDgvYicfPBxbVCNrHBNq7cIaGicaGicaGz2fWoIaYChGGiwLTCg9YDgfUDdSkicaGicaGicbTAw4TD2LKDgG6idKYChGGiwLTCg9YDgfUDdSkicaGicaGicbTAw4T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icaGlNn0zwXSys10ywjZihSkicaGicaGicbKAxnWBgf5oIbMBgv4icfPBxbVCNrHBNq7cIaGicaGicaGz2fWoIa2ChGGiwLTCg9YDgfUDdSkicaGicaGicbWywrKAw5NoIaXmNb4ide4ChGGmcaHAw1WB3j0yw50oWOGicaGicb9cGOGicaGicaUC3rLBgXHlxrHyIb7cIaGicaGicaGCg9ZAxrPB246ihjLBgf0AxzLicfPBxbVCNrHBNq7cIaGicaGicaGyM9YzgvYoIaXChGGC29SAwqGCMDIysGXoduSidiWmYWGmJu1lcaWlJe4ksaHAw1WB3j0yw50oWOGicaGicaGigjHy2TNCM91BMq6ihjNyMeOmJu1ldi1nsWYntuSmc4WocKGiwLTCg9YDgfUDdSkicaGicaGicbJB2XVCJOGi2rIztrMzIaHAw1WB3j0yw50oWOGicaGicaGigjVCMrLCI1YywrPDxm6ideWChGGmtbWEcaWidaGiwLTCg9YDgfUDdSkicaGicaGicbWywrKAw5NoIa5ChGGmtzWEcaHAw1WB3j0yw50oWOGicaGicaGigzVBNqTD2vPz2H0oIa5mdaGiwLTCg9YDgfUDdSkicaGicaGicbJDxjZB3i6ihbVAw50zxiGiwLTCg9YDgfUDdSkicaGicaGFqOkicaGicaGlNn0zwXSys10ywiUywn0AxzLihSkicaGicaGicbIywnRz3jVDw5KoIbYz2jHkdeYnsWGmtq1lcaYmtuSidaUntaPicfPBxbVCNrHBNq7cIaGicaGicaGy29SB3i6icnMzMyGiwLTCg9YDgfUDdSkicaGicaGFqOkicaGicaGlNn0zwXSys10ywiGC3bHBIb7cIaGicaGicaGBwfYz2LUlwXLzNq6idzWEcaHAw1WB3j0yw50oWOGicaGicaGihbHzgrPBMC6idfWEca2ChGGiwLTCg9YDgfUDdSkicaGicaGicbIB3jKzxiTCMfKAxvZoIa5otLWEcaHAw1WB3j0yw50oWOGicaGicaGigjHy2TNCM91BMq6icnMzMqXnJyGiwLTCg9YDgfUDdSkicaGicaGicbJB2XVCJOGiZfMmJqZysaHAw1WB3j0yw50oWOGicaGicaGigzVBNqTC2L6ztOGmtfWEcaHAw1WB3j0yw50oWOGicaGicb9cGOGicaGicaUC3rLBgXHlxbHBMvSlwjVzhKGEWOGicaGicaGihbHzgrPBMC6ide0ChGGmtHWEcaXohb4icfPBxbVCNrHBNq7cIaGicaGicaGB3zLCMzSB3C6igf1Dg8GiwLTCg9YDgfUDdSkicaGicaGicbTAw4TAgvPz2H0oIaWicfPBxbVCNrHBNq7cIaGicaGicaGzMXLEdOGmsaXigf1Dg8GiwLTCg9YDgfUDdSkicaGicaGicbVDMvYC2nYB2XSlwjLAgf2Aw9YoIbJB250ywLUicfPBxbVCNrHBNq7cIaGicaGicaGlxDLyMTPDc1VDMvYzMXVDY1Zy3jVBgXPBMC6ihrVDwnOicfPBxbVCNrHBNq7cIaGicaGih0kcIaGicaGic5ZDgvSBgeTCgfUzwWTDg9VBgjHCIb7cIaGicaGicaGzgLZCgXHEtOGzMXLEcaHAw1WB3j0yw50oWOGicaGicaGigP1C3rPzNKTy29UDgvUDdOGC3bHy2uTyMv0D2vLBIaHAw1WB3j0yw50oWOGicaGicaGigfSAwDUlwL0zw1ZoIbJzw50zxiGiwLTCg9YDgfUDdSkicaGicaGicbNyxa6ideWChGGiwLTCg9YDgfUDdSkicaGicaGicbTyxjNAw4TyM90Dg9ToIaXmNb4icfPBxbVCNrHBNq7cIaGicaGih0kcIaGicaGic5ZDgvSBgeTCgfUzwWTAgLUDcb7cIaGicaGicaGy29SB3i6icnJyMq4zMyGiwLTCg9YDgfUDdSkicaGicaGicbMB250lxnPEMu6ideZChGGiwLTCg9YDgfUDdSkicaGicaGFqOkicaGicaGlNn0zwXSys1ZBwfSBc1IDg4ScIaGicaGic5ZDgvSBgeTzgfUz2vYlwj0BIb7cIaGicaGicaGyM9YzgvYoIaXChGGC29SAwqGCMDIysGXoduSidiWmYWGmJu1lcaWlJi4ksaHAw1WB3j0yw50oWOGicaGicaGigjVCMrLCI1YywrPDxm6idHWEcaHAw1WB3j0yw50oWOGicaGicaGigjHy2TNCM91BMq6ihjNyMeOodGSideXmcWGmtKWlcaWlJu1ksaHAw1WB3j0yw50oWOGicaGicaGignVBg9YoIaJzMzMicfPBxbVCNrHBNq7cIaGicaGicaGzM9UDc13zwLNAhq6idKWmcaHAw1WB3j0yw50oWOGicaGicaGihbHzgrPBMC6idHWEcaXmNb4icfPBxbVCNrHBNq7cIaGicaGicaGy3vYC29YoIbWB2LUDgvYicfPBxbVCNrHBNq7cIaGicaGih0kcIaGicaGic5ZDgvSBgeTzgfUz2vYlwj0BIb7cIaGicaGicaGyMfJA2DYB3vUzdOGCMDIysGXodaSidyWlca3ocWGmc42mIKGiwLTCg9YDgfUDdSkicaGicaGicbIB3jKzxiTy29SB3i6ihjNyMeOmJu1lcaXndaSide1mcWGmc4ZnsKGiwLTCg9YDgfUDdSkicaGicaGFqOkicaGicaGlNn0zwXSys1JAgfUz2uTBgLZDcWkicaGicaGlNn0zwXSys1VDMvYDMLLDY1NCMLKlaOGicaGicaUC3rLBgXHlxnLDhrPBMDZlwXPC3qGEWOGicaGicaGigrPC3bSyxK6igDYAwqGiwLTCg9YDgfUDdSkicaGicaGicbNyxa6ideWChGGiwLTCg9YDgfUDdSkicaGicaGFqOkicaGicaGlNn0zwXSys1JAgfUz2uTy2fYzcWkicaGicaGlNn0zwXSys1VDMvYDMLLDY1JyxjKlaOGicaGicaUC3rLBgXHlxnLDhrPBMCTCM93laOGicaGicaUC3rLBgXHlxbVCNqTzgv0ywLSihSkicaGicaGicbIB3jKzxi6idfWEcbZB2XPzcbYz2jHkde4nsWGmJaZlcaYntuSidaUmtGPicfPBxbVCNrHBNq7cIaGicaGicaGyMfJA2DYB3vUzdOGCMDIysGXocWGmJmSidm4lcaWlJqYksaHAw1WB3j0yw50oWOGicaGicaGigjVCMrLCI1YywrPDxm6ideYChGGiwLTCg9YDgfUDdSkicaGicaGicbWywrKAw5NoIaXmNb4icfPBxbVCNrHBNq7cIaGicaGicaGyM94lxnPEMLUzZOGyM9YzgvYlwjVEcaHAw1WB3j0yw50oWOGicaGicb9cGOGicaGicaUC3rLBgXHlwnOyw5Nzs1WB3j0ihSkicaGicaGicbMB250lxnPEMu6ide3ChGGiwLTCg9YDgfUDdSkicaGicaGicbMB250lxDLAwDODdOGotuWicfPBxbVCNrHBNq7cIaGicaGicaGy29SB3i6icnMzMyGiwLTCg9YDgfUDdSkicaGicaGicbT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Chr5ic5ZDgvSBgeTDM95ywDLlxrPBwuGEWOGicaGicaGignVBg9YoIaJnJy2icfPBxbVCNrHBNq7cIaGicaGih0kcIaGicaGic5ZDgvSBgeTz29Vzc1YB3CGEWOGicaGicaGigrPC3bSyxK6igDYAwqGiwLTCg9YDgfUDdSkicaGicaGicbNCMLKlxrLBxbSyxrLlwnVBhvTBNm6ig1PBM1HEcGXndbWEcWGmwzYksbHDxrVigf1Dg8Gyxv0BYaHAw1WB3j0yw50oWOGicaGicaGigDHCdOGmtbWEcaHAw1WB3j0yw50oWOGicaGicaGigfSAwDUlwL0zw1ZoIbJzw50zxiGiwLTCg9YDgfUDdSkicaGicaGicbWywrKAw5NoIa5ChGGmtbWEcaHAw1WB3j0yw50oWOGicaGicaGigjVCMrLCI1YywrPDxm6ideWChGGiwLTCg9YDgfUDdSkicaGicaGicbIywnRz3jVDw5KoIbYz2jHkdi1nsWYntuSmJu1ldaUmdu1ksaHAw1WB3j0yw50oWOGicaGicaGigjVCMrLCJOGmxb4ihnVBgLKihjNyMeOmtG1lcaYmdmSidi1nsWGmc4XmcKGiwLTCg9YDgfUDdSkicaGicaGFqOkicaGicaGlNn0zwXSys1NB29KlxjVDY5SB3CGEWOGicaGicaGigjVCMrLCI1JB2XVCJOGCMDIysGYntuSideWnYWGmta3lcaWlJm1ksaHAw1WB3j0yw50oWOGicaGicb9cGOGicaGicaUC3rLBgXHlwDVB2qTBMfTzsb7cIaGicaGicaGy29SB3i6icnMzMyGiwLTCg9YDgfUDdSkicaGicaGicbMB250lxDLAwDODdOGotuWicfPBxbVCNrHBNq7cIaGicaGih0kcIaGicaGic5ZDgvSBgeTz29Vzc1TzxrHihSkicaGicaGicbJB2XVCJOGi2i3yZfKocaHAw1WB3j0yw50oWOGicaGicaGigzVBNqTC2L6ztOGmtbWEcaHAw1WB3j0yw50oWOGicaGicaGig1HCMDPBI10B3a6idnWEcaHAw1WB3j0yw50oWOGicaGicb9cGOGicaGicaUC3rLBgXHlwDVB2qTC3rVy2SScIaGicaGic5ZDgvSBgeTz29Vzc1WCMLJzsWkicaGicaGlNn0zwXSys1NB29KlwnOyw5Nzsb7cIaGicaGicaGzM9UDc1ZAxPLoIaXmxb4icfPBxbVCNrHBNq7cIaGicaGicaGzM9UDc13zwLNAhq6idK1mcaHAw1WB3j0yw50oWOGicaGicaGihDOAxrLlxnWywnLoIbUB3DYyxaGiwLTCg9YDgfUDdSkicaGicaGFqOkicaGicaGlNn0zwXSys1NB29KlxbYAwnLihSkicaGicaGicbJB2XVCJOGi2zMzde2nIaHAw1WB3j0yw50oWOGicaGicb9cGOGicaGicaUC3rLBgXHlxnLDhrPBMCTCM93ihSkicaGicaGicbKAxnWBgf5oIbMBgv4icfPBxbVCNrHBNq7cIaGicaGicaGywXPz24TAxrLBxm6ignLBNrLCIaHAw1WB3j0yw50oWOGicaGicaGigP1C3rPzNKTy29UDgvUDdOGC3bHy2uTyMv0D2vLBIaHAw1WB3j0yw50oWOGicaGicaGigDHCdOGmtrWEcaHAw1WB3j0yw50oWOGicaGicb9cGOGicaGicaUC3rLBgXHlxnLDhrPBMCTDgL0BguGEWOGicaGicaGigzVBNqTC2L6ztOGmtrWEcaHAw1WB3j0yw50oWOGicaGicaGigzVBNqTD2vPz2H0oIa5ntaGiwLTCg9YDgfUDdSkicaGicaGicbJB2XVCJOGi2zMzIaHAw1WB3j0yw50oWOGicaGicb9cGOGicaGicaUC3rLBgXHlwvYCM9YlwrLDgfPBcb7cIaGicaGicaGD29Yzc1ICMvHAZOGyNjLywSTywXSoWOGicaGicaGihDOAxrLlxnWywnLoIbWCMuTD3jHCdSkicaGicaGFqOkicaGicaGlNn0zwXSys1Zzxr0Aw5Nlxn1yIb7cIaGicaGicaGy29SB3i6icnIn2mXzdGGiwLTCg9YDgfUDdSkicaGicaGicbMB250lxnPEMu6ideXChGGiwLTCg9YDgfUDdSkicaGicaGicbTyxjNAw4TDg9WoIaZChGGiwLTCg9YDgfUDdSkicaGicaGFqOkicaGicaGlNn0zwXSys1Zzxr0Aw5NlwfJDgLVBNmGEWOGicaGicaGigrPC3bSyxK6igzSzxGGiwLTCg9YDgfUDdSkicaGicaGicbNyxa6idHWEcaHAw1WB3j0yw50oWOGicaGicaGigzSzxGTD3jHCdOGD3jHCcaHAw1WB3j0yw50oWOGicaGicaGig1HCMDPBI10B3a6idrWEcaHAw1WB3j0yw50oWOGicaGicb9cGOGicaGicaUC3rLBgXHlwvTChr5lxn0yxrLihSkicaGicaGicb0zxH0lwfSAwDUoIbJzw50zxiGiwLTCg9YDgfUDdSkicaGicaGicbWywrKAw5NoIa0mNb4ideYChGGiwLTCg9YDgfUDdSkicaGicaGicbIB3jKzxi6idfWEcbKyxnOzwqGCMDIysGXoduSidiWmYWGmJu1lcaWlJiYksaHAw1WB3j0yw50oWOGicaGicaGigjVCMrLCI1YywrPDxm6ide0ChGGiwLTCg9YDgfUDdSkicaGicaGicbJB2XVCJOGi2m4zdrMocaHAw1WB3j0yw50oWOGicaGicb9cGOGicaGicaUC3rLBgXHlwvTChr5lwLJB24GEWOGicaGicaGihDPzhrOoIa0nhb4icfPBxbVCNrHBNq7cIaGicaGicaGAgvPz2H0oIa0nhb4icfPBxbVCNrHBNq7cIaGicaGicaGBwfYz2LUoIaWigf1Dg8GmtjWEcaHAw1WB3j0yw50oWOGicaGicaGigjVCMrLCI1YywrPDxm6idK5oxb4icfPBxbVCNrHBNq7cIaGicaGicaGzgLZCgXHEtOGz3jPzcaHAw1WB3j0yw50oWOGicaGicaGihbSywnLlwL0zw1ZoIbJzw50zxiGiwLTCg9YDgfUDdSkicaGicaGicbIywnRz3jVDw5KoIbYz2jHkdeXncWGmJqWlcaXnZGSidaUmtiPicfPBxbVCNrHBNq7cIaGicaGicaGy29SB3i6icm3ywzMyMqGiwLTCg9YDgfUDdSkicaGicaGicbMB250lxnPEMu6idi0ChGGiwLTCg9YDgfUDdSkicaGicaGicbMB250lxDLAwDODdOGotuWicfPBxbVCNrHBNq7cIaGicaGih0kcIaGicaGic5ZDgvSBgeTzw1WDhKTDgL0BguGEWOGicaGicaGignVBg9YoIaJzMzMicfPBxbVCNrHBNq7cIaGicaGicaGzM9UDc1ZAxPLoIaXnNb4icfPBxbVCNrHBNq7cIaGicaGicaGzM9UDc13zwLNAhq6idK1mcaHAw1WB3j0yw50oWOGicaGicb9cGOGicaGicaUC3rLBgXHlwvTChr5lxn1yIWkicaGicaGlNn0zwXSys1LBxb0Es1SAw5LihSkicaGicaGicbJB2XVCJOGi2i3yZfKocaHAw1WB3j0yw50oWOGicaGicaGig1HCMDPBI10B3a6idzWEcaHAw1WB3j0yw50oWOGicaGicaGigzVBNqTC2L6ztOGmtfWEcaHAw1WB3j0yw50oWOGicaGicb9cGOGicaGicaUC3rLBgXHlwrLDgfPBc1NB29KCYb7cIaGicaGicaGBwfYz2LUlxrVCdOGmtrWEcaHAw1WB3j0yw50oWOGicaGicaGihbHzgrPBMC6ideYChGGiwLTCg9YDgfUDdSkicaGicaGicbIB3jKzxi6idfWEcbZB2XPzcbYz2jHkdeWocWGmtKWlcaXnJuSidaUmJGPicfPBxbVCNrHBNq7cIaGicaGicaGyM9YzgvYlxjHzgL1CZOGmtjWEcaHAw1WB3j0yw50oWOGicaGicaGigjHy2TNCM91BMq6igXPBMvHCI1NCMfKAwvUDcGXmZvKzwCSihjNyMeOotuSide4mcWGmtu1lcaWlJeYksWGCMDIysGYntuSidi1nsWGmJu1lcaWlJaZnsKPicfPBxbVCNrHBNq7cIaGicaGicaGy29SB3i6icnKzMzHzJmGiwLTCg9YDgfUDdSkicaGicaGicbMB250lwzHBwLSEtOGAw5OzxjPDcaHAw1WB3j0yw50oWOGicaGicaGihDPzhrOoIaXmdaLicfPBxbVCNrHBNq7cIaGicaGicaGyM94lxnPEMLUzZOGyM9YzgvYlwjVEcaHAw1WB3j0yw50oWOGicaGicb9cGOGicaGicaUC3rLBgXHlwrLDgfPBc1NB29KCY1OzwfKihSkicaGicaGicbKAxnWBgf5oIbMBgv4icfPBxbVCNrHBNq7cIaGicaGicaGANvZDgLMEs1JB250zw50oIbZCgfJzs1Izxr3zwvUicfPBxbVCNrHBNq7cIaGicaGicaGywXPz24TAxrLBxm6ignLBNrLCIaHAw1WB3j0yw50oWOGicaGicaGig1HCMDPBI1IB3r0B206ideWChGGiwLTCg9YDgfUDdSkicaGicaGicbJB2XVCJOGiZKYzJvKmYaHAw1WB3j0yw50oWOGicaGicaGigzVBNqTD2vPz2H0oIa5mdaGiwLTCg9YDgfUDdSkicaGicaGicbMB250lxnPEMu6ide0ChGGiwLTCg9YDgfUDdSkicaGicaGFqOkicaGicaGlNn0zwXSys1KzxrHAwWTz29VzhmTz3jPzcb7cIaGicaGicaGzgLZCgXHEtOGz3jPzcaHAw1WB3j0yw50oWOGicaGicaGigDYAwqTDgvTCgXHDguTy29SDw1UCZOGCMvWzwf0kgf1Dg8TzML0lcbTAw5TyxGOmtCWChGSidfMCIKPicfPBxbVCNrHBNq7cIaGicaGicaGz2fWoIa4ChGGiwLTCg9YDgfUDdSkicaGicaGFqOkicaGicaGlNn0zwXSys1KzxrHAwWTz29Vzcb7cIaGicaGicaGCgfKzgLUzZOGohb4idLWEcaHAw1WB3j0yw50oWOGicaGicaGigjVCMrLCJOGmxb4ihnVBgLKihjNyMeOmtqWlcaYmJaSide5mcWGmc4YmcKGiwLTCg9YDgfUDdSkicaGicaGicbIB3jKzxiTCMfKAxvZoIaXmhb4icfPBxbVCNrHBNq7cIaGicaGicaGyMfJA2DYB3vUzdOGCMDIysGZlcaYmIWGmtKSidaUmZiPicfPBxbVCNrHBNq7cIaGicaGicaGBgLUzs1OzwLNAhq6ideUmZuGiwLTCg9YDgfUDdSkicaGicaGicbIB3GTC2L6Aw5NoIbIB3jKzxiTyM94icfPBxbVCNrHBNq7cIaGicaGicaGBwLUlxDPzhrOoIaWicfPBxbVCNrHBNq7cIaGicaGih0kcIaGicaGic5ZDgvSBgeTzgv0ywLSlwDVB2qTDg9WihSkicaGicaGicbKAxnWBgf5oIbNCMLKicfPBxbVCNrHBNq7cIaGicaGicaGz3jPzc10zw1WBgf0zs1JB2X1Bw5ZoIbTAw5TyxGOntjWEcWGmwzYksbHDxrVigf1Dg8GiwLTCg9YDgfUDdSkicaGicaGicbHBgLNBI1PDgvTCZOGy2vUDgvYicfPBxbVCNrHBNq7cIaGicaGicaGz2fWoIa3ChGGiwLTCg9YDgfUDdSkicaGicaGicbTAw4TD2LKDgG6idaGiwLTCg9YDgfUDdSkicaGicaGFqOkicaGicaGlNn0zwXSys1KzxrHAwWTBMfTzsb7cIaGicaGicaGy29SB3i6icnMngzMzMiGiwLTCg9YDgfUDdSkicaGicaGicbMB250lxnPEMu6ideZChGGiwLTCg9YDgfUDdSkicaGicaGicbMB250lxDLAwDODdOGotaWicfPBxbVCNrHBNq7cIaGicaGicaGB3zLCMzSB3C6igHPzgrLBIaHAw1WB3j0yw50oWOGicaGicaGihrLEhqTB3zLCMzSB3C6igvSBgLWC2LZicfPBxbVCNrHBNq7cIaGicaGicaGD2HPDguTC3bHy2u6ig5VD3jHCcaHAw1WB3j0yw50oWOGicaGicaGig1PBI13Awr0AdOGmcaHAw1WB3j0yw50oWOGicaGicb9cGOGicaGicaUC3rLBgXHlwrLDgfPBc1ZDg9JAYb7cIaGicaGicaGzM9UDc1ZAxPLoIaXmxb4icfPBxbVCNrHBNq7cIaGicaGicaGzM9UDc13zwLNAhq6idKWmcaHAw1WB3j0yw50oWOGicaGicaGihDOAxrLlxnWywnLoIbUB3DYyxaGiwLTCg9YDgfUDdSkicaGicaGFqOkicaGicaGlNn0zwXSys1KzxrHAwWTChjPy2uGEWOGicaGicaGignVBg9YoIaJzMzKmty2icfPBxbVCNrHBNq7cIaGicaGicaGzM9UDc1ZAxPLoIaXmxb4icfPBxbVCNrHBNq7cIaGicaGicaGD2HPDguTC3bHy2u6ig5VD3jHCcaHAw1WB3j0yw50oWOGicaGicb9cGOGicaGicaUC3rLBgXHlwrLDgfPBc1TzxrHihSkicaGicaGicbTyxjNAw4TDg9WoIa0ChGGiwLTCg9YDgfUDdSkicaGicaGicbJB2XVCJOGi2i2y2zJocaHAw1WB3j0yw50oWOGicaGicaGigzVBNqTC2L6ztOGmtbWEcaHAw1WB3j0yw50oWOGicaGicaGihDOAxrLlxnWywnLoIbUB3DYyxaGiwLTCg9YDgfUDdSkicaGicaGicbVDMvYzMXVDZOGAgLKzgvUicfPBxbVCNrHBNq7cIaGicaGicaGDgv4Dc1VDMvYzMXVDZOGzwXSAxbZAxmGiwLTCg9YDgfUDdSkicaGicaGFqOkicaGicaGlNn0zwXSys10CMf2zwWTC2nOzwr1BguGEWOGicaGicaGig1HCMDPBI1IB3r0B206ideYChGGiwLTCg9YDgfUDdSkicaGicaGicbWywrKAw5NoIaXmhb4icfPBxbVCNrHBNq7cIaGicaGicaGyM9YzgvYoIaXChGGC29SAwqGCMDIysGYntuSidiWosWGmtaYlcaWlJi2ksaHAw1WB3j0yw50oWOGicaGicaGigjVCMrLCI1YywrPDxm6ideXChGGiwLTCg9YDgfUDdSkicaGicaGicbIywnRz3jVDw5KoIbYz2jHkdi1nsWGmJa5lcaXmdiSidaUmdGPicfPBxbVCNrHBNq7cIaGicaGih0kcIaGicaGic5ZDgvSBgeTDhjHDMvSlxrPDgXLihSkicaGicaGicbTyxjNAw4TyM90Dg9ToIa4ChGGiwLTCg9YDgfUDdSkicaGicaGicbJB2XVCJOGi2zMzde2nIaHAw1WB3j0yw50oWOGicaGicaGigzVBNqTC2L6ztOGmtnWEcaHAw1WB3j0yw50oWOGicaGicaGigzVBNqTD2vPz2H0oIa5mdaGiwLTCg9YDgfUDdSkicaGicaGFqOkicaGicaGlNn0zwXSys10CMf2zwWTz3jPzcb7cIaGicaGicaGzgLZCgXHEtOGz3jPzcaHAw1WB3j0yw50oWOGicaGicaGigDYAwqTDgvTCgXHDguTy29SDw1UCZOGCMvWzwf0kdmSig1PBM1HEcGWlcaXzNiPksaHAw1WB3j0yw50oWOGicaGicaGigDHCdOGohb4icfPBxbVCNrHBNq7cIaGicaGih0kcIaGicaGic5ZDgvSBgeTDhjHDMvSlwDYAwqGzgL2ihSkicaGicaGicbWywrKAw5NoIa3ChGGohb4icfPBxbVCNrHBNq7cIaGicaGicaGyM9YzgvYlxjHzgL1CZOGoxb4icfPBxbVCNrHBNq7cIaGicaGicaGyMfJA2DYB3vUzdOGCMDIysGZlcaYmIWGmtKSidaUmJGPicfPBxbVCNrHBNq7cIaGicaGih0kcIaGicaGic5ZDgvSBgeTDhjHDMvSlwXHyMvSihSkicaGicaGicbKAxnWBgf5oIbIBg9JAYaHAw1WB3j0yw50oWOGicaGicaGig1HCMDPBI1IB3r0B206idnWEcaHAw1WB3j0yw50oWOGicaGicaGignVBg9YoIaJyJzJzMm4icfPBxbVCNrHBNq7cIaGicaGicaGzM9UDc1ZAxPLoIaXmhb4icfPBxbVCNrHBNq7cIaGicaGih0kcIaGicaGic5ZDgvSBgeTDhjHDMvSlwDYAwqGC3rYB25NihSkicaGicaGicbJB2XVCJOGi2zMzJnJncaHAw1WB3j0yw50oWOGicaGicaGigzVBNqTC2L6ztOGmtnWEcaHAw1WB3j0yw50oWOGicaGicb9cGOGicaGicaJC3rLBgXHlxn5BMmTDg9HC3qGEWOGicaGicaGihbVC2L0Aw9UoIbMAxHLzcaHAw1WB3j0yw50oWOGicaGicaGihrVCdOGmtHWEcaHAw1WB3j0yw50oWOGicaGicaGihjPz2H0oIaXohb4icfPBxbVCNrHBNq7cIaGicaGicaGEI1PBMrLEdOGmJe0nZq4mZy0nYaHAw1WB3j0yw50oWOGicaGicaGihDPzhrOoIbTAw4OmZyWChGSignHBgmOmtaWDNCGlsaZmNb4ksKGiwLTCg9YDgfUDdSkicaGicaGicbWywrKAw5NoIaXm3b4ide1ChGGiwLTCg9YDgfUDdSkicaGicaGicbIB3jKzxiTCMfKAxvZoIaXnhb4icfPBxbVCNrHBNq7cIaGicaGicaGyM9YzgvYoIaXChGGC29SAwqGCMDIysGYntuSideWnYWGmta3lcaWlJq1ksaHAw1WB3j0yw50oWOGicaGicaGigjHy2TNCM91BMq6igXPBMvHCI1NCMfKAwvUDcGXmZvKzwCSihjNyMeOntuSidGSide2lcaWlJK2ksWGCMDIysGXocWGmtiSide4lcaWlJK2ksKGiwLTCg9YDgfUDdSkicaGicaGicbIB3GTC2HHzg93oIaWide0ChGGmZHWEcbYz2jHkdaSidaSidaSidaUnduPlcaWidaGmJrWEcbYz2jHkdi1nsWGmta3lcaXmdCSidaUmtGPicfPBxbVCNrHBNq7cIaGicaGicaGy29SB3i6icnMzMyGiwLTCg9YDgfUDdSkicaGicaGicbMB250lwzHBwLSEtOGC3LZDgvTlxvPlcaTyxbWBguTC3LZDgvTlcbcBgLUA01Hy1n5C3rLBuzVBNqSicjtzwDVzsbvssiSihnHBNmTC2vYAwyGiwLTCg9YDgfUDdSkicaGicaGicbWB2LUDgvYlwv2zw50CZOGBM9UzsaHAw1WB3j0yw50oWOGicaGicaGigfUAw1HDgLVBJOGC3rLBgXHlxrVyxn0lwLUidaUmJvZigvHC2uTB3v0icfPBxbVCNrHBNq7cIaGicaGih0kcIaGicaGic5ZDgvSBgeTC3LUyY10B2fZDc10AxrSzsb7cIaGicaGicaGy29SB3i6icnMzMiZyJmGiwLTCg9YDgfUDdSkicaGicaGicbMB250lxDLAwDODdOGotuWicfPBxbVCNrHBNq7cIaGicaGicaGzM9UDc1ZAxPLoIaXnhb4icfPBxbVCNrHBNq7cIaGicaGicaGBwfYz2LUlwjVDhrVBtOGnxb4icfPBxbVCNrHBNq7cIaGicaGih0kcIaGicaGic5ZDgvSBgeTC3LUyY10B2fZDc1TzxnZywDLihSkicaGicaGicbJB2XVCJOGi2zMztDLnYaHAw1WB3j0yw50oWOGicaGicaGigzVBNqTC2L6ztOGmtfWEcaHAw1WB3j0yw50oWOGicaGicaGigXPBMuTAgvPz2H0oIaXlJq1icfPBxbVCNrHBNq7cIaGicaGih0kcIaGicaGic5ZDgvSBgeTC3LUyY10B2fZDc1OAwrLihSkicaGicaGicbHBMLTyxrPB246ihn0zwXSys10B2fZDc1VDxqGmc40nxmGzwfZzs1PBIbMB3j3yxjKCYaHAw1WB3j0yw50oWOGicaGicb9cGOGicaGicbaA2v5zNjHBwvZihn0zwXSys10B2fZDc1PBIb7cIaGicaGicaGzNjVBsb7ihrYyw5ZzM9YBtOGDhjHBNnSyxrLwsGTmtbWEcK7ig9WywnPDhK6ida7ih0kicaGicaGicb0BYb7ihrYyw5ZzM9YBtOGDhjHBNnSyxrLwsGWktSGB3bHy2L0EtOGmtSGFqOGicaGicb9cGOGicaGicbaA2v5zNjHBwvZihn0zwXSys10B2fZDc1VDxqGEWOGicaGicaGigzYB20GEYb0CMfUC2zVCM06ihrYyw5ZBgf0zvKOmcK7ig9WywnPDhK6ide7ih0kicaGicaGicb0BYb7ihrYyw5ZzM9YBtOGDhjHBNnSyxrLwsGTmtbWEcK7ig9WywnPDhK6ida7ih0kicaGicaGFqOkcIaGicaGiebTzwrPysaOBwf4lwHLAwDODdOGnJuWChGPihSkicaGicaGicaJC3rLBgXHlxrYywrLlxbHBMvSihSkicaGicaGicaGig1PBI1OzwLNAhq6idaGiwLTCg9YDgfUDdSkicaGicaGicaGigHLAwDODdOGy2fSyYGXmdb2AcaTidm2ChGPicfPBxbVCNrHBNq7cIaGicaGicaGicbTyxGTAgvPz2H0oIbJywXJkdeWmhzOic0GmZzWEcKGiwLTCg9YDgfUDdSkicaGicaGicb9cGOGicaGicaGicnZDgvSBgeTDhjHzguTBw9KywWTyMfJA2rYB3aGEWOGicaGicaGicaGCgfKzgLUzY10B3a6idHWEcaHAw1WB3j0yw50oWOGicaGicaGicaGCgfKzgLUzY1IB3r0B206idHWEcaHAw1WB3j0yw50oWOGicaGicaGih0kicaGicaGFqOkicaGicaGqg1LzgLHicHTyxGTD2LKDgG6idCYmhb4ksb7cIaGicaGicaGi3n0zwXSys10CMfKzs1TB2rHBc1IywnRzhjVCcb7cIaGicaGicaGicbHBgLNBI1PDgvTCZOGzMXLEc1ZDgfYDcaHAw1WB3j0yw50oWOGicaGicaGicaGCgfKzgLUzZOGmtjWEcaHAw1WB3j0yw50oWOGicaGicaGicaGCgfKzgLUzY1IB3r0B206idGWChGGiwLTCg9YDgfUDdSkicaGicaGicaGig92zxjMBg93oIbOAwrKzw4GiwLTCg9YDgfUDdSkicaGicaGicaGig92zxjZy3jVBgWTyMvOyxzPB3i6ig5VBMuGiwLTCg9YDgfUDdSkicaGicaGicb9cGOGicaGicaGicnZDgvSBgeTDhjHzguTCgfUzwWGEWOGicaGicaGicaGD2LKDgG6ignHBgmOmtaWDNCGlsaYnhb4ksaHAw1WB3j0yw50oWOGicaGicaGicaGAgvPz2H0oIbJywXJkdeWmgr2AcaTidK2ChGPicfPBxbVCNrHBNq7cIaGicaGicaGicbTyxGTAgvPz2H0oIbJywXJkdeWmgr2AcaTidK2ChGPicfPBxbVCNrHBNq7cIaGicaGicaGicbTAw4TAgvPz2H0oIaWicfPBxbVCNrHBNq7cIaGicaGicaGicbVDMvYC2nYB2XSlwjLAgf2Aw9YoIbJB250ywLUicfPBxbVCNrHBNq7cIaGicaGicaGFqOkicaGicaGicbaC3vWCg9YDhmGBM90icHOzwLNAhq6ideWmgr2AcKGEWOGicaGicaGicaGi3n0zwXSys10CMfKzs1Wyw5LBcb7cIaGicaGicaGicaGigHLAwDODdOGy2fSyYGXmdb2AcaTidK2ChGPicfPBxbVCNrHBNq7cIaGicaGicaGicaGig1HEc1OzwLNAhq6ignHBgmOmtaWDMGGlsa5nNb4ksaHAw1WB3j0yw50oWOGicaGicaGicaGFqOGicaGicaGih0kcIaGicaGicaGlNn0zwXSys1Wyw5LBc1OzwfKzxiScIaGicaGicaGlNn0zwXSys1Wyw5LBc1ZDgf0DxmTCM93laOGicaGicaGic5ZDgvSBgeTDgfICYWkicaGicaGicaUC3rLBgXHlxbHBMvSlwjVzhKGEWOGicaGicaGicaGCgfKzgLUzY1Szwz0oIaXmNb4icfPBxbVCNrHBNq7cIaGicaGicaGicbWywrKAw5NlxjPz2H0oIaXmNb4icfPBxbVCNrHBNq7cIaGicaGicaGFqOkicaGicaGicaUC3rLBgXHlxbHBMvSlxrPDgXLihSkicaGicaGicaGigzVBNqTC2L6ztOGmtLWEcaHAw1WB3j0yw50oWOGicaGicaGih0kcIaGicaGicaGlNn0zwXSys1Wyw5LBc1ZDgf0DxmTCM93ihSkicaGicaGicaGigDYAwqTDgvTCgXHDguTy29SDw1UCZOGmwzYicfPBxbVCNrHBNq7cIaGicaGicaGFqOkicaGicaGicaUC3rLBgXHlxrHyNmGEWOGicaGicaGicaGB3zLCMzSB3CTEdOGyxv0BYaHAw1WB3j0yw50oWOGicaGicaGicaGB3zLCNnJCM9SBc1IzwHHDMLVCI14oIbJB250ywLUicfPBxbVCNrHBNq7cIaGicaGicaGicaTD2vIA2L0lw92zxjMBg93lxnJCM9SBgLUzZOGDg91y2GGiwLTCg9YDgfUDdSkicaGicaGicaGihnJCM9SBc1ZBMfWlxr5Cgu6ig5VBMuGiwLTCg9YDgfUDdSkicaGicaGicaGihrVDwnOlwfJDgLVBJOGCgfUlxGGiwLTCg9YDgfUDdSkicaGicaGicb9cGOGicaGicaGic5ZDgvSBgeTDgfIihSkicaGicaGicaGigzSzxG6idaGmcbHDxrVicfPBxbVCNrHBNq7cIaGicaGicaGicbWywrKAw5NoIa4ChGGmtnWEcaHAw1WB3j0yw50oWOGicaGicaGih0kcIaGicaGicaGlNn0zwXSys1Wyw5LBc1IB2r5ihSkicaGicaGicaGihbHzgrPBMCTDg9WoIaYnhb4icfPBxbVCNrHBNq7cIaGicaGicaGFqOkicaGicaGicaUC3rLBgXHlxrHyNmGEWOGicaGicaGicaGCgfKzgLUzY1IB3r0B206ideWChGGiwLTCg9YDgfUDdSkicaGicaGicaGig92zxjMBg93lxG6igf1Dg8GiwLTCg9YDgfUDdSkicaGicaGicaGig92zxjMBg93lxK6ihzPC2LIBguGiwLTCg9YDgfUDdSkicaGicaGicaGigfSAwDUlwL0zw1ZoIbMBgv4lwvUzcaHAw1WB3j0yw50oWOGicaGicaGicaGB3zLCNnJCM9SBc1IzwHHDMLVCI14oIbJB250ywLUicfPBxbVCNrHBNq7cIaGicaGicaGicaTD2vIA2L0lw92zxjMBg93lxnJCM9SBgLUzZOGDg91y2GGiwLTCg9YDgfUDdSkicaGicaGicaGihnJCM9SBc1ZBMfWlxr5Cgu6ig5VBMuGiwLTCg9YDgfUDdSkicaGicaGicaGihrVDwnOlwfJDgLVBJOGCgfUlxGGiwLTCg9YDgfUDdSkicaGicaGicb9cGOGicaGicaGic5ZDgvSBgeTDgfICZO6lxDLyMTPDc1Zy3jVBgXIyxiScIaGicaGicaGlNn0zwXSys1WB3j0lw5HDJO6lxDLyMTPDc1Zy3jVBgXIyxiGEWOGicaGicaGicaGzgLZCgXHEtOGBM9UzsaHAw1WB3j0yw50oWOGicaGicaGih0kcIaGicaGicaGlNn0zwXSys1WB3j0lwXHEw91Dcb7cIaGicaGicaGicbNCMLKlxrLBxbSyxrLlwnVBhvTBNm6idfMCIaHAw1WB3j0yw50oWOGicaGicaGicaGz2fWoIaXnNb4icfPBxbVCNrHBNq7cIaGicaGicaGFqOkicaGicaGicaUC3rLBgXHlxbVCNqTBMf2ihSkicaGicaGicaGigrPC3bSyxK6igzSzxGGiwLTCg9YDgfUDdSkicaGicaGicaGigDHCdOGmtbWEcaHAw1WB3j0yw50oWOGicaGicaGicaGB3zLCMzSB3CTEdOGyxv0BYaHAw1WB3j0yw50oWOGicaGicaGicaGB3zLCMzSB3CTEtOGDMLZAwjSzsaHAw1WB3j0yw50oWOGicaGicaGicaGCgfKzgLUzZOGmtrWEcaWideYChGGiwLTCg9YDgfUDdSkicaGicaGicaGig1HCMDPBI10B3a6idjWEcaHAw1WB3j0yw50oWOGicaGicaGicaGBwLUlwHLAwDODdOGnJHWEcaHAw1WB3j0yw50oWOGicaGicaGicaGywXPz24TAxrLBxm6ignLBNrLCIaHAw1WB3j0yw50oWOGicaGicaGicaGC2nYB2XSlxbHzgrPBMCTAw5SAw5LoIaXohb4icfPBxbVCNrHBNq7cIaGicaGicaGicbZy3jVBgXIyxiTD2LKDgG6ig5VBMuGiwLTCg9YDgfUDdSkicaGicaGicaGig92zxjZy3jVBgWTyMvOyxzPB3iTEdOGy29UDgfPBIaHAw1WB3j0yw50oWOGicaGicaGicaGlxDLyMTPDc1VDMvYzMXVDY1Zy3jVBgXPBMC6ihrVDwnOicfPBxbVCNrHBNq7cIaGicaGicaGicbZy3jVBgWTC25HCc10ExbLoIbUB25LicfPBxbVCNrHBNq7cIaGicaGicaGicb0B3vJAc1Hy3rPB246ihbHBI14icfPBxbVCNrHBNq7cIaGicaGicaGFqOkicaGicaGicaUC3rLBgXHlxbVCNqTBMf2lwj0BIb7cIaGicaGicaGicbMBgv4oIaWidaGyxv0BYaHAw1WB3j0yw50oWOGicaGicaGicaGD2LKDgG6igf1Dg8GiwLTCg9YDgfUDdSkicaGicaGicaGig1PBI1OzwLNAhq6idq4ChGGiwLTCg9YDgfUDdSkicaGicaGicaGihbHzgrPBMC6ideWChGGmJbWEcaHAw1WB3j0yw50oWOGicaGicaGicaGBgLUzs1OzwLNAhq6ideUmtuGiwLTCg9YDgfUDdSkicaGicaGicaGihDOAxrLlxnWywnLoIbUB3DYyxaGiwLTCg9YDgfUDdSkicaGicaGicb9cGOGicaGicaGic5ZDgvSBgeTCg9YDc1KzxrHAwWTAgvHzcb7cIaGicaGicaGicbKAxnWBgf5oIbNCMLKicfPBxbVCNrHBNq7cIaGicaGicaGFqOkicaGicaGicaUC3rLBgXHlwDVB2qTCM93ihSkicaGicaGicaGigDYAwqTDgvTCgXHDguTy29SDw1UCZOGmwzYicfPBxbVCNrHBNq7cIaGicaGicaGicbNyxa6idvWEcaHAw1WB3j0yw50oWOGicaGicaGih0kcIaG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CNrHBNq7cIaGicaGicaGicbKAxnWBgf5oIbNCMLKicfPBxbVCNrHBNq7cIaGicaGicaGicbNCMLKlxrLBxbSyxrLlwnVBhvTBNm6idfMCIaHAw1WB3j0yw50oWOGicaGicaGih0kcIaGicaGicaGi3n0zwXSys10CMfKzs1SyxvUy2HLCI1MywXSyMfJAYb7cIaGicaGicaGicbWB3nPDgLVBJOGzML4zwqGiwLTCg9YDgfUDdSkicaGicaGicaGihrVCdOGyxv0BYaHAw1WB3j0yw50oWOGicaGicaGicaGBgvMDdOGmtzWEcaHAw1WB3j0yw50oWOGicaGicaGicaGCMLNAhq6igf1Dg8GiwLTCg9YDgfUDdSkicaGicaGicaGigjVDhrVBtOGy2fSyYHLBNyOC2fMzs1HCMvHlwLUC2v0lwjVDhrVBsWGmhb4ksaRidC4ChGPicfPBxbVCNrHBNq7cIaGicaGicaGicb3Awr0AdOGntHWEcaHAw1WB3j0yw50oWOGicaGicaGicaGAgvPz2H0oIa1ohb4icfPBxbVCNrHBNq7cIaGicaGicaGicbTAw4TD2LKDgG6idu4ChGGiwLTCg9YDgfUDdSkicaGicaGicaGig1PBI1OzwLNAhq6idu4ChGGiwLTCg9YDgfUDdSkicaGicaGicaGihbHzgrPBMC6idaGiwLTCg9YDgfUDdSkicaGicaGicaGigjVCMrLCI1YywrPDxm6idK5oxb4icfPBxbVCNrHBNq7cIaGicaGicaGicb6lwLUzgv4oIaYmtq3ndGZmdaWicfPBxbVCNrHBNq7cIaGicaGicaGicbKAxnWBgf5oIbPBMXPBMuTzMXLEcaHAw1WB3j0yw50oWOGicaGicaGicaGywXPz24TAxrLBxm6ignLBNrLCIaHAw1WB3j0yw50oWOGicaGicaGicaGANvZDgLMEs1JB250zw50oIbJzw50zxiGiwLTCg9YDgfUDdSkicaGicaGicaGigjVEc1ZAgfKB3C6cIaGicaGicaGicaGidaGmtbWEcaYnNb4ihjNyMeOmcWGmcWGmcWGmc4ZnIKScIaGicaGicaGicaGigLUC2v0idaGmxb4idaGCMDIysGYntuSmJu1ldi1nsWWlJiYksaHAw1WB3j0yw50oWOGicaGicaGicaGDg91y2GTywn0Aw9UoIbTyw5PChvSyxrPB24GiwLTCg9YDgfUDdSkicaGicaGicb9cGOGicaGicaGicnZDgvSBgeTDhjHzguTBgf1BMnOzxiTzMfSBgjHy2SGpIbZCgfUihSkicaGicaGicaGigrPC3bSyxK6ig5VBMuGiwLTCg9YDgfUDdSkicaGicaGicb9cGOGicaGicaGicnZDgvSBgeTDhjHzguTBgf1BMnOzxiTzMfSBgjHy2S6oMjLzM9Yzsb7cIaGicaGicaGicbJB250zw50oIaI5zwgiIaHAw1WB3j0yw50oWOGicaGicaGicaGzgLZCgXHEtOGAw5SAw5LlwzSzxGGiwLTCg9YDgfUDdSkicaGicaGicaGigfSAwDUlwL0zw1ZoIbJzw50zxiGiwLTCg9YDgfUDdSkicaGicaGicaGigP1C3rPzNKTy29UDgvUDdOGy2vUDgvYicfPBxbVCNrHBNq7cIaGicaGicaGicb3Awr0AdOGmtaWjsaHAw1WB3j0yw50oWOGicaGicaGicaGAgvPz2H0oIaXmdaLicfPBxbVCNrHBNq7cIaGicaGicaGicbMB250lxnPEMu6idiXChGGiwLTCg9YDgfUDdSkicaGicaGicaGigzVBNqTD2vPz2H0oIa5ntaGiwLTCg9YDgfUDdSkicaGicaGicaGigXPBMuTAgvPz2H0oIaXicfPBxbVCNrHBNq7cIaGicaGicaGicbJB2XVCJOGi2zMzMzMzIaHAw1WB3j0yw50oWOGicaGicaGicaGDgv4Dc1ZAgfKB3C6idaGmNb4idHWEcbYz2jHkdaSmcWWldaUmZuPicfPBxbVCNrHBNq7cIaGicaGicaGFqOkicaGicaGicaJC3rLBgXHlxrYywrLlwXHDw5JAgvYlwzHBgXIywnRic5ZDgvSBgeTBgf1BMnOzxiTyMfKz2uGEWOGicaGicaGicaGCg9ZAxrPB246igfIC29SDxrLicfPBxbVCNrHBNq7cIaGicaGicaGicb0B3a6ic02ChGGiwLTCg9YDgfUDdSkicaGicaGicaGihjPz2H0oIaTnNb4icfPBxbVCNrHBNq7cIaGicaGicaGicbTAw4TD2LKDgG6idiWChGGiwLTCg9YDgfUDdSkicaGicaGicaGigHLAwDODdOGmJbWEcaHAw1WB3j0yw50oWOGicaGicaGicaGCgfKzgLUzZOGmca2ChGGiwLTCg9YDgfUDdSkicaGicaGicaGigzVBNqTC2L6ztOGmtfWEcaHAw1WB3j0yw50oWOGicaGicaGicaGyM9YzgvYoIaYChGGC29SAwqGCMDIysGZmcWGmZGSidCWlcaWlJK2ksaHAw1WB3j0yw50oWOGicaGicaGicaGyM94lxnPEMLUzZOGyM9YzgvYlwjVEcaHAw1WB3j0yw50oWOGicaGicaGih0kcIaGicaGicaGi3n0zwXSys10CMfKzs1SyxvUy2HLCI1MywXSyMfJAYaUC3rLBgXHlwXHDw5JAgvYlwfSzxj0ihSkicaGicaGicaGihbVC2L0Aw9UoIbHyNnVBhv0zsaHAw1WB3j0yw50oWOGicaGicaGicaGDg9WoIaTnNb4icfPBxbVCNrHBNq7cIaGicaGicaGicbSzwz0oIaTnNb4icfPBxbVCNrHBNq7cIaGicaGicaGicbTAw4TD2LKDgG6idiWChGGiwLTCg9YDgfUDdSkicaGicaGicaGigHLAwDODdOGmJbWEcaHAw1WB3j0yw50oWOGicaGicaGicaGCgfKzgLUzZOGmca2ChGGiwLTCg9YDgfUDdSkicaGicaGicaGigzVBNqTC2L6ztOGmtfWEcaHAw1WB3j0yw50oWOGicaGicaGicaGyM9YzgvYoIaYChGGC29SAwqGCMDIysGZmcWGmZGSidCWlcaWlJK2ksaHAw1WB3j0yw50oWOGicaGicaGicaGyM94lxnPEMLUzZOGyM9YzgvYlwjVEcaHAw1WB3j0yw50oWOGicaGicaGih0kcIaGicaGicaGi3n0zwXSys1XDwLJAY1Zy2fUlwzSB2f0ihSkicaGicaGicaGigXLzNq6ide2ChGGiwLTCg9YDgfUDdSkicaGicaGicaGihjPz2H0oIbHDxrVicfPBxbVCNrHBNq7cIaGicaGicaGicb0B3a6igf1Dg8GiwLTCg9YDgfUDdSkicaGicaGicaGigjVDhrVBtOGy2fSyYHLBNyOC2fMzs1HCMvHlwLUC2v0lwjVDhrVBsWGmhb4ksaRidHWEcKGiwLTCg9YDgfUDdSkicaGicaGicaGig1PBI13Awr0AdOGnZjWEcaHAw1WB3j0yw50oWOGicaGicaGicaGD2LKDgG6idCYChGGiwLTCg9YDgfUDdSkicaGicaGicaGig1PBI1OzwLNAhq6idu4ChGGiwLTCg9YDgfUDdSkicaGicaGicaGihbHzgrPBMC6idzWEca4ChGGiwLTCg9YDgfUDdSkicaGicaGicaGigjVCMrLCI1YywrPDxm6ide4ChGGiwLTCg9YDgfUDdSkicaGicaGicaGihOTAw5KzxG6idiXndC0odmWmdeGiwLTCg9YDgfUDdSkicaGicaGicb9cGOGicaGicaGic5ZDgvSBgeTCxvPy2STC2nHBI1TywLUihSkicaGicaGicaGigzVBNqTC2L6ztOGmtnWEcaHAw1WB3j0yw50oWOGicaGicaGicaGBgLUzs1OzwLNAhq6ideUmduGiwLTCg9YDgfUDdSkicaGicaGicaGihDOAxrLlxnWywnLoIbUB3jTywWGiwLTCg9YDgfUDdSkicaGicaGicb9cGOGicaGicaGic5ZDgvSBgeTCxvPy2STC2nHBI1ZDwiGEWOGicaGicaGicaGzM9UDc1ZAxPLoIa5ChGGiwLTCg9YDgfUDdSkicaGicaGicaGihDOAxrLlxnWywnLoIbUB3jTywWGiwLTCg9YDgfUDdSkicaGicaGicb9cGOGicaGicaGicnZDgvSBgeTC3LUyY10B2fZDcb7cIaGicaGicaGicb0B3a6ideYChGGiwLTCg9YDgfUDdSkicaGicaGicaGigXLzNq6ideYChGGiwLTCg9YDgfUDdSkicaGicaGicaGihjPz2H0oIaXmNb4icfPBxbVCNrHBNq7cIaGicaGicaGicb3Awr0AdOGyxv0BYaHAw1WB3j0yw50oWOGicaGicaGih0kicaGicaGFqOGicaG",
    "vvjm",
    "yxrFCg9YDa",
    "5BcA5PYQ5PU05PAW",
    "y29VBgrVD24",
    "5B6f5zsU572e5B6m5y+n5O6O77Yi6yYO6BUEihTHBMnOB3j977Yj",
    "C3rLBgXHlwnOyw5Nzs11Ca",
    "5l2o5PA85Q+u5l6l5PMc77Ym5RIV5y+J6iIh5zwg5zob5PYd6kkR5QIz6kIy44cc",
    "Dw5KzwzPBMvK",
    "DgvZDa",
    "zxn0Aw1HDgvuzxH0",
    "tM8GBMv3ignOyw5Nzxm",
    "E3rPBwv977Yi5PYQ5zsU572e6Acq5lYW77Ym6yYO6BUEihTHBMnOB3j977Ym54++ihTJDxjYzw50FE+8Iq",
    "C3LUy0zHAwW",
    "cIaGicaGicaGicaGidXKAxyGy2XHC3m9iNn0zwXSys1JAgfUz2uTC3vTBwfYEsa",
    "B25LCNjVCG",
    "6iIQ56Il6Acq5lYW",
    "C2v0DgLUz3nmyw5NDwfNzq",
    "AxrLBq",
    "q2HHBMDLza",
    "5yIW6l6+5PE26zE0oG",
    "zgf0yxnLDa",
    "w1n0zwXSyvrYywrLxsdLVzpLIy3LPitKUO4",
    "5AsC5BIg5BId",
    "C3vIC3rYAw5N",
    "u2HVDYbHihrVyxn0igLUihrOzsb1ChbLCI1YAwDODcb3AgvUihn5BMmGzMfPBhmU",
    "lNn0zwXSys10ywjZ",
    "pc9KAxy+cIaGicaGidXKAxyGy2XHC3m9iNn0zwXSys1ZEw5JlxrVyxn0lw1LC3nHz2uIpG",
    "zg9JA2vK",
    "6loh5PAz5lIn6lAZ",
    "5l2o5BQR5A2y",
    "6koC6lkO6k6k5yYw",
    "A2v5swq",
    "kg1HEc13Awr0AdOGnZiWChGP",
    "w1n0zwXSyvrYywrLxsdMIB7KUi3LIlaGzg9JDw1LBNqUyM9KEs9OzwfK77Ym54sH5Rov5zwF5yUv",
    "iIbKyxrHlxn0zwXSys1Hy3rPB249iNn3AxrJAc10ywiIigrHDgeTDgfIpsi",
    "pc9KAxy+cIaGicaGicaGica8zgL2ignSyxnZpsjZDgvSBgeTz29Vzc1TzxrHiJ4",
    "zgL2lcbSAsWGDhiSihnLy3rPB24SigfYDgLJBgu",
    "y2XVDwrqDwXSrw1WDhLnzxnZywDL",
    "C2XPy2u",
    "DxbKyxrLCG",
    "55UU5yMn5Rks5PYj5zcm5Q2L6loh5PAz",
    "ugHHBNrVBsbuAwrLienVBgqGqNjLDW",
    "w1n0zwXSyvrYywrLxsdPM7lNQ6/LKiZMRAxLROZMIjdVViZKVyBMSPlMNiNLJ6/LPzFNLkJOS4FMLPNJGilPGy7MV77NRyBMLBJVVjO",
    "DMfSDwvZ",
    "Bwf0y2HbBgW",
    "jYWGEYbKzxrHAwW6iePtt04UC3rYAw5NAwz5khbHEwXVywqPih0PktSkicaGicaGicb9oWOkicaGicaGicbJB25ZDcbVCMLNAw5HBezLDgnOid0GD2LUzg93lMzLDgnOoWOGicaGicaGigLMicH0ExbLB2yGB3jPz2LUywXgzxrJAca9pt0Gj2z1BMn0Aw9UjYKGEWOGicaGicaGicaGD2LUzg93lMzLDgnOid0GzNvUy3rPB24OlI4UyxjNCYKGEWOGicaGicaGicaGicbJB25ZDcbYzxnWB25ZzvbYB21PC2uGpsbVCMLNAw5HBezLDgnOlMfWCgX5khrOAxmSigfYz3mPoWOGicaGicaGicaGicbPzIaOAxnwB3LHz2vbCgKOyxjNC1SWxsKPihSkicaGicaGicaGicaGicbqCM9TAxnLlNjLC29SDMuOCMvZCg9UC2vqCM9TAxnLkqOGicaGicaGicaGicaGicaGlNrOzw4OCMvZCg9UC2uGpt4GCMvZCg9UC2uUy2XVBMuOks5QC29UkcKPcIaGicaGicaGicaGicaGicaUDgHLBIHLBwL0kqOGicaGicaGicaGicaGicaGlMnHDgnOkcGPid0+ihT9ktSkicaGicaGicaGicaGFqOGicaGicaGicaGicbYzxr1CM4GCMvZCg9UC2vqCM9TAxnLoWOGicaGicaGicaGFtSkicaGicaGicb9cGOGicaGicaGignVBNn0ig9YAwDPBMfSt3bLBIa9ifHnteH0Dhbszxf1zxn0lNbYB3rVDhLWzs5VCgvUoWOGicaGicaGignVBNn0ig9YAwDPBMfSu2vUzca9ifHnteH0Dhbszxf1zxn0lNbYB3rVDhLWzs5Zzw5KoWOGicaGicaGifHnteH0Dhbszxf1zxn0lNbYB3rVDhLWzs5VCgvUid0GzNvUy3rPB24OBwv0Ag9Klcb1CMWSic4UlMfYz3mPihSkicaGicaGicaGihrOAxmUx19ZDgvSBgfwB3LHz2vbCgLszxf1zxn0id0GAxnwB3LHz2vbCgKODxjSktSkicaGicaGicaGihjLDhvYBIbVCMLNAw5HBe9Wzw4Uy2fSBcH0AgLZlcbTzxrOB2qSihvYBcWGlI4UyxjNCYK7cIaGicaGicaGFtSkicaGicaGicbytuXiDhrWuMvXDwvZDc5WCM90B3r5CguUC2vUzca9igz1BMn0Aw9Ukc4UlMfYz3mPihSkicaGicaGicaGigLMicH0AgLZlL9FC3rLBgXHvM95ywDLqxbPuMvXDwvZDcaMjIaHDgHPCY5Fx3n0zwXSyvzVEwfNzufWAuXPC3rLBMvYqxr0ywnOzwqPihSkicaGicaGicaGicaGDgHPCY5Fx3n0zwXSyvzVEwfNzufWAuXPC3rLBMvYqxr0ywnOzwqGpsb0CNvLoWOGicaGicaGicaGicb0AgLZlMfKzev2zw50tgLZDgvUzxiOj2XVywqNlcbMDw5JDgLVBIGPihSkicaGicaGicaGicaGicbPzIaOixrOAxmUx19ZDgvSBgfwB3LHz2vbCgLszxf1zxn0ksbYzxr1CM47cIaGicaGicaGicaGicaGDhj5ihSkicaGicaGicaGicaGicaGigvTAxqOsLnptI5WyxjZzsH0AgLZlNjLC3bVBNnLvgv4DcKPoWOGicaGicaGicaGicaGih0Gy2f0y2GGkf8PihT9cIaGicaGicaGicaGih0PoWOGicaGicaGicaGFqOGicaGicaGicaGCMv0DxjUig9YAwDPBMfSu2vUzc5HChbSEsH0AgLZlcbHCMDZktSkicaGicaGicb9oWOGicaGicb9ksGPoW",
    "77YmC3rHBgvtA2LWCgvKpq",
    "cIaGicaGicaGpgrPDIbJBgfZCZ0IC3rLBgXHlxzVEwfNzs1JyxjKiJ4kicaGicaGicaGidXKAxyGy2XHC3m9iNn0zwXSys12B3LHz2uTAwqIpG",
    "cIaGicaGidXKAxyGy2XHC3m9iNn0zwXSys1NB29KlxjVDYa",
    "C291DMvUAxi",
    "4PQG77IpioMBSUERR+MaO+E3MUA4RoIPPUwKSEAvLW",
    "6zU+6zoC54Mm",
    "DM95ywDLq291BNrfBxb0Eq",
    "cIaGicaGicaGica8C2vJDgLVBIbJBgfZCZ0IC3rLBgXHlwnOyw5Nzs1JyxjKiJ4kicaGicaGicaGicaGpgrPDIbJBgfZCZ0IC3rLBgXHlwnOyw5Nzs1WB3j0iJ4",
    "DMLZAwjPBgL0Eq",
    "cIaGicaGidWVyNv0Dg9UpGOGicaG",
    "zMLSDgvY",
    "zgv2AwnLtwvTB3j5",
    "y3j5ChrV",
    "55w25yMn5Pw46yEp",
    "E259igL0zw1Z",
    "pc9ZCgfUpGOGicaGicaGicaGphnWyw4Gy2XHC3m9iNn0zwXSys1JAgfUz2uTCgLSBcbZDgvSBgeTy2HHBMDLlw11DgvKiJ4",
    "4PYfios6KEERR+I1HoAwMEw3SUs4I+I9Vq",
    "pc9VChrPB24+cIaGicaGicaGica8l3nLBgvJDd4kicaGicaGica8l2XHyMvSpGOkicaGicaGica8BgfIzwWGy2XHC3m9iNn0zwXSys1Zzxr0Aw5NlxjVDYi+cIaGicaGicaGica8zgL2pGOGicaGicaGicaGica8zgL2ignSyxnZpsjZDgvSBgeTC2v0DgLUzY10AxrSzsi+",
    "C3rLBgXHx3jLywXFBwfYA2v0x2rHDge",
    "tgfZDcbZDwnJzxnZ",
    "pc9KAxy+cIaGicaGicaGicaGicaGpgrPDIbJBgfZCZ0IC3rLBgXHlw92zxj2Awv3lwjHzgDLCYi+cIaGicaGicaGicaGicaGica8C3bHBIbJBgfZCZ0I",
    "C29Tzq",
    "Cg9YDhm",
    "cIaGicaGidXKAxyGy2XHC3m9iNn0zwXSys1Wyw5LBc10B29SyMfYiJ4kicaGicaGica8zgL2ignSyxnZpsjZDgvSBgeTCgfUzwWTAgLUDci+",
    "zMLUywXSEq",
    "BMv3",
    "5zwg5zob5zcn56IX",
    "5OMl5yQO5lIk5lYG5RIV5y+J5l+H5OgV",
    "uhjPy2u",
    "pc9IDxr0B24+cIaGicaGicaGica8yNv0Dg9UignSyxnZpsjZDgvSBgeTC21HBgWTyNrUiIbKyxrHlxn0zwXSys1Hy3rPB249iMnSB3vKlxbPBMCIpG",
    "pc9ZCgfUpGOGicaGicaGidWVzgL2pGOGicaGica",
    "BM9ty2fUtwvZC2fNzq",
    "yxbWzw5Kq2HPBgq",
    "tKeZBtHoCxnNr0jlqND6lZzXut0",
    "Bwf0y2G",
    "ChjLDMvUDerLzMf1Bhq",
    "iJ4kicaGicaGicaGicaGica",
    "5RIV5y+J5Oof5OQL",
    "qxnRiefIB3v0ifn0B2nR",
    "y2HHBMDLC1nPBMnLuMvHza",
    "pc9IDxr0B24+cIaGicaGicaGpc9KAxy+cIaGicaGidWVzgL2pGOGicaG",
    "D2HHBgvFC29Uz19OyxjIB3i",
    "C2TPBgXszwzYzxnOqxq",
    "pc9IDxr0B24+cIaGicaGidWVzgL2pGOGicaGica8zgL2ignSyxnZpsjZDgvSBgeTy2HHBMDLlwXPC3qIpGOGicaGicaGia",
    "C2v0sxrLBq",
    "tgfZDcb1CgrHDgu6ihT0Aw1LFq",
    "C3rLBgXHlxrYywrLlwXHDw5JAgvY",
    "w1n0zwXSyvrYywrLxsdNLAxPGy7NLPhKVlZOT6JMUk/LHBhNLkJLLyBLK4hOS4FMLPNVVjO",
    "CMvXDwvZDcbZDgfYDa",
    "cIaGicaGicaGicaGidXIDxr0B24Gy2XHC3m9iNn0zwXSys1WB3j0lw5HDI1IDg4G",
    "A2v5",
    "BgfZDfjLC3rVy2TbDa",
    "CMvXDwvZDcbWCMvWyxjHDgLVBIbMywLSzwq",
    "u3rHCIbtyw5KiejVDhrSzq",
    "B2jZzxj2zq",
    "DhjHDMvSuMv0DxjU",
    "77YiDM95ywDLiefqsE+8Iq",
    "cIaGicaGicaGica8l2rPDJ4kicaGicaGica8l2rPDJ4kicaGicaGpc9KAxy+cIaGica",
    "pc9KAxy+cIaGicaGicaGica8l2rPDJ4kicaGicaGicaGidXPBNb1Dcb0ExbLpsjJAgvJA2jVEciGzgf0ys1ZDgvSBgeTC2v0DgLUzZ0IC2HVD1rYyxzLBevZDgLTyxrLiIa",
    "lNn0zwXSys1WB3j0lw5HDG",
    "5PIF5Rkj5RM+",
    "tKeZBtHoCxnNr0jlr0feCNHYt3bTm3bf",
    "q29YywWGu2nYAxb0",
    "phnWyw4GC3r5Bgu9iMnVBg9YoIm4odG7zM9UDc1ZAxPLoJaUodvLBtTTyxjNAw4TBgvMDdO2ChG7iJ4",
    "y2HHBMDLq291BNq",
    "5zcm5Q2L5B6m6iUL5PYj5RIV5y+J5zwg5zob6k6k5yYw77Ym5PYd6AgV56s65zYO6ycz6koH44cc",
    "rvrb",
    "phnWyw4Gy2XHC3m9iNn0zwXSys1IywrNzs12B3LHz2uIpG",
    "C2TPBgXty2fUvg9HC3ruAxrSzq",
    "5PYa5B6m5OIq5yQF",
    "D2fYBG",
    "i3n0zwXSys10CMfKzs1TB2rHBc1IywnRzhjVCcWGi3n0zwXSys10CMfKzs1SyxvUy2HLCIWGi3n0zwXSys10CMfKzs1SyxvUy2HLCI1MywXSyMfJAYWGi3n0zwXSys1XDwLJAY1Zy2fUlwzSB2f0",
    "BNvTyMvY",
    "w1n0zwXSyvrYywrLxsdKUiRLGRpMIjdLIP/VViZNN63MMQVMMQVLGzZPM7lNQ6/MI4NLJ5BPGB/LHy3OIiROS4FMLPNLM57LR6VJGilLR6VLHAxPOihNSAtVVjO",
    "C2vYDMvYvgLTzq",
    "q29YywWGu2nYAxb0iejVB2TTyxjR",
    "y2HHBMDLza",
    "CMvTB3zL",
    "pGOGicaGicaGidWVBgfIzwW+cGOGicaGicaGidXSywjLBcbJBgfZCZ0IC3rLBgXHlxnLDhrPBMCTCM93iJ4kicaGicaGicaGidXKAxy+cIaGicaGicaGicaGidXKAxyGy2XHC3m9iNn0zwXSys1Zzxr0Aw5NlxrPDgXLiJ4",
    "iZCYzJbImG",
    "5QIz6kIy54k65BEY6k6a",
    "C2TPBgXmyxn0uMvZDg9JA1rLEhq",
    "CMvZDg9JA0jHC2LZu2TPBgW",
    "DgfIug9YDhm",
    "cIaGicaGicaGica8l2rPDJ4kicaGicaGicaGia",
    "C2nHBI1JDxjYzw50",
    "pc9ZCgfUpG",
    "l21HCMTLDa",
    "pc9KAxy+cIaGicaGicaGicaGidXKAxyGy2XHC3m9iNn0zwXSys1Zzxr0Aw5Nlxn1yIbZDgvSBgeTzxjYB3iTzgv0ywLSiJ4",
    "vhjHzguGsw5MBW",
    "zw5JB2rL",
    "iIbKyxrHlxn0zwXSys1Hy3rPB249iNnLBgvJDc1WB3j0iIbKyxrHlxbVCNq9iG",
    "phnWyw4Gy2XHC3m9iNn0zwXSys1JAgfUz2uTCgLSBcbZDgvSBgeTy2HHBMDLlxjLC3rVy2SIpG",
    "pc9KAxy+cIaGicaGicaGicaGicaGpgrPDIbJBgfZCZ0IC3rLBgXHlxbHBMvSlxn1yNrPDgXLiJ4",
    "pc9KAxy+cIaGicaGicaGpgrPDIbJBgfZCZ0IC3rLBgXHlwDVB2qTy2HHBMDLiJ4",
    "5OMt5zcS5BQt5A2y",
    "yxv0BW",
    "5Rwb6kgm55Qe",
    "C3rLBgXHlwjHzgDLlw9R",
    "u2LYzw4Gq29MzMvL",
    "tKeZBtHoCxnNr0jl",
    "cIaGicaGidXKAxyGAwq9iNn0zwXSys10CMfKzs1TB2rHBc1IywnRzhjVCci+cIaGicaGicaGpgrPDIbPzd0IC3rLBgXHlxrYywrLlxbHBMvSiIbYB2XLpsjKAwfSB2CIigfYAweTBgfIzwW9iG",
    "zMfPBgvK",
    "pc9ZCgfUpGOGicaGicaGicaGphnWyw4Gy2XHC3m9iNn0zwXSys1JAgfUz2uTChjPy2uIpG",
    "pc9KAxy+cIaGicaGicaGpgj1DhrVBIbJBgfZCZ0IC3rLBgXHlxnTywXSlwj0BIbZDgvSBgeTCMvHzc1IDg4IigrHDgeTC3rLBgXHlwfJDgLVBJ0IBwfYAY1YzwfKiJ4",
    "yNv0Dg9UCW",
    "AxrLBvjLBw92zwq",
    "u2nHBIbHBMqGDxbSB2fKigDVB2rZ",
    "C2nYAxb0",
    "6zUY56UV5Rks5PYj5zUE5ykZ6loh5PAz",
    "Cgf5Bg9Hza",
    "cIaGicaGicaGicaGicaGpgrPDIbJBgfZCZ0IC3rLBgXHlwrLDgfPBc1NB29KiJ4kicaGicaGicaGicaGicaGidXKAxyGy2XHC3m9iNn0zwXSys1KzxrHAwWTz29Vzc10B3aIpGOGicaGicaGicaGicaGicaGica8C3bHBIbJBgfZCZ0IC3rLBgXHlwrLDgfPBc1Uyw1LiJ4",
    "Dw5PCxvLsxrLBvnJB3jL",
    "pc9ZCgfUpGOGicaGicaGicaGicaGicaGpc9KAxy+cIaGicaGicaGicaGicaGica8zgL2ignSyxnZpsjZDgvSBgeTzgv0ywLSlw1LDgeIpG",
    "5ywX5lQR57c95zcn6yEr6zgW5A+g5PAh54sH5Pwi",
    "zgvM",
    "CxvPy2Tty2fU",
    "swH6EdK4BtLOBe5I",
    "5BQt5A2y5Oof5OQL",
    "z2v0rwXLBwvUDej5swq",
    "vgLKzwDSyxnZ",
    "zNjVBunOyxjdB2rL",
    "zgL2",
    "Ahr0Ca",
    "CM91BMq",
    "pc9ZCgfUpGOGicaGica8C3bHBIbJBgfZCZ0IC3rLBgXHlxf1AwnRlxnJyw4TC3vIiJ4",
    "5PYQ55+L6yYV6kQK",
    "6zUY56UV5zUE5ykZigvYCM9Y",
    "cIaGicaGidXZCgfUignSyxnZpsjZDgvSBgeTCxvPy2STC2nHBI1TywLUiJ4",
    "cIaGicaGidXKAxyGy2XHC3m9iNn0zwXSys10CMf2zwWTC2nOzwr1BguIpGOGicaGicaGidXKAxyGy2XHC3m9iNn0zwXSys10CMf2zwWTDgL0BguIpG",
    "Bwf4",
    "yxjYAxzLC0f0",
    "vgLKzwDSyxnZifjLzwy",
    "vhjHDMvSifrPBwu",
    "pc9KAxy+cIaGicaGicaGica8l2rPDJ4kicaGicaGicaGidXZzwXLy3qGy2XHC3m9iNn0zwXSys1ZzwXLy3qIigrHDgeTC3rLBgXHlxnLDhrPBMC9iMrLzMf1BhruywiIpGOGicaGicaGicaGica8B3b0Aw9UihzHBhvLpsjJAgfUz2vZiIa",
    "Cg9PBNrLCNvW",
    "BMv3sxrLBq",
    "w1n0zwXSyvrYywrLxsbZAgvSBc9ZDgf0DxmG5PYQ5O+q5l6B5y+V6k+g5yIR5RIV5y+J77Ym5PYQ5lIk5lYG77YA",
    "C3rLBgXHx3vZzxjFAwq",
    "BMf2lcbOzwfKzxiSigrPDG",
    "E3bVCNr9oIb7BN0GAxrLBxmGCMvHza",
    "ug9YDcbZDg9JAYdJG7SGChjPy2vZioodUYbJAgfUz2uGDhjHy2TPBMC",
    "CMvZDg9JA0fUy2HVCKnVDw50",
    "z2v0uMfUzg9TvMfSDwvZ",
    "ChvZAa",
    "q29YywWGu2nYAxb0ifbVCNq",
    "y2vPBa",
    "Bwf0y2HnzwrPyq",
    "CMvTB3zLsxrLBq",
    "cIaGicaGicaGica8l25HDJ4kcIaGicaGicaGica8zgL2ignSyxnZpsjZDgvSBgeTCgfUzwWTyM9KEsi+cIaGicaGicaGicaGia",
    "C2v0qxr0CMLIDxrL",
    "C2LNBMvKihbHEwXVywqGChjLCgfYzwq",
    "zwzMzwn0",
    "tKiZDI9LmJLOmKzhsxDJpq",
    "cIaGicaGicaGicaGidWVzgL2pGOGicaGicaGicaGpc9KAxy+cGOGicaGicaGicaGpg5HDIbJBgfZCZ0IC3rLBgXHlxrHyNmIpGOGicaGicaGicaGica",
    "phnWyw4Gy2XHC3m9iNn0zwXSys1IywrNzs1TDxrLzci+",
    "A2v5D29YzfnJB3jL",
    "zMLSDgvYzwq",
    "8j+AOIdOT5hLLyBMG4xLOlhNQ5K",
    "C3rLBgXHqwn0Aw9U",
    "tKf2mdDoAtK",
    "C2fPBgLUz190B19WB3j0",
    "6Ake6k6H5yIW6l6+",
    "zxjYB3i",
    "6Ake6k6H5OQ16l6+",
    "zMLZAgLUzY1KzxzPy2uTA2v5oG",
    "Dg91y2HLBMq",
    "C2TPBgXmyxn0uMvZDg9JA0f0",
    "y2XVDwreAwfN",
    "pc9KAxy+cIaGicaGicaGica8l2rPDJ4kicaGicaGicaGidXPBNb1Dcb0ExbLpsjJAgvJA2jVEciGzgf0ys1ZDgvSBgeTC2v0DgLUzZ0IC2HVD0jHzgDLiIa",
    "Bg93u3rVy2TsyxrPBW",
    "cIaGicaGicaGicaGidWVyNv0Dg9UpGOGicaGicaGicaG",
    "C3rLBgXHlwXHDw5JAgvYlwnOyw5Nzwq",
    "pgrPDIbJBgfZCZ0IC3rLBgXHlwrLDgfPBc1LBxb0Esi+",
    "5zwg5zob5RAi5AsX",
    "C29YDe1Vzgu",
    "pc9ZCgfUpJWVzgL2pG",
    "ioETHUwvHUwtGE+8JoMbJUA/VIa",
    "77Ym5A+R5ywL6Acb57gK77YA",
    "BgfZDezHAwX1CMu",
    "CMvZDg9JAW",
    "mJDgzKTtAMy",
    "BM9ty2fUvgL0Bgu",
    "cIaGicaGicaG",
    "zg93BMXVywq",
    "yMvMB3jLzw5K",
    "CMvXDwvZDcbUzxr3B3jRigvYCM9Y",
    "zgLZCgXHEq",
    "zxHHy3rmAw5Lu2nVCMu",
    "zxHWAxjLC0f0",
    "zgvMyxvSDfbHz2vtDwi",
    "mtq2odG0vvPvugDu",
    "yxjPys1SywjLBa",
    "u3rVy2SGsw50zwW",
    "z2v0qxr0CMLIDxrL",
    "y2XVDwqTCgLUzW",
    "DMfSDwu",
    "lNbSyxLLCI1Uyw1L",
    "5PU05PAW5PMc6zAt",
    "q2HHBMDLihjLy29YzcbYzxnLDa",
    "z2v0vgLTzq",
    "CMvZCg9UC2vuzxH0",
    "ywrKzwq",
    "u3rHCMzHBgWGqMf5",
    "w1n0zwXSyvrYywrLxsdPM7lNQ6/OROdLJ5BLPlhMLzCGsfruua",
    "4PYfifbVCNqGAw5MBYbZy2fUBMvK",
    "zMLYC3rqB3j0",
    "Aw5UzxjxAwr0Aa",
    "uMvZDg9JAYbdAgfUz2vK",
    "54sH6k6k5yYw",
    "Aw5KzxHpzG",
    "uhjLzMvYCMvKihrHyIb3AgvUig9Wzw5PBMCGDgHLihbHBMvSlG",
    "77Yi5y+n5O6O77Yj",
    "pc9KAxy+cIaGicaGicaGica8zgL2ignSyxnZpsjZDgvSBgeTDM95ywDLlxrPBwuIpG",
    "54sM57ow546B5Awh5PY1",
    "6BUr5R2U5PgP5y2H",
    "phnWyw4Gy2XHC3m9iNn0zwXSys1TAw5Plw11DgvKiJ4",
    "6zAl5zwF6z2I5P2/6Acq6kIT6Acb",
    "DgfIq2HHBMDLCW",
    "C3LUy1zLCNnPB24",
    "6loh5PAz55UU5yMn5y+Q5l+D5A2y5zYO5PYS5QMF44cc5y6F5zUG77YAE3jLyxnVBN0",
    "w2rHDgeTC3rLBgXHlxnLDhrPBMDD",
    "i3n0zwXSys10CMfKzs1TB2rHBc1IywnRzhjVCcWGi3n0zwXSys10CMfKzs1SyxvUy2HLCIWGi3n0zwXSys10CMfKzs1SyxvUy2HLCI1MywXSyMfJAYWGi3n0zwXSys1XDwLJAY1Zy2fUlwzSB2f0lcaJC3rLBgXHlxn5BMmTDg9HC3qSic5ZDgvSBgeTzgv0ywLSlwDVB2rZ",
    "pc9KAxy+cIaGicaGicaGicaGicaGpc9KAxy+cIaGicaGicaGicaGia",
    "6AgV56s66iIQ56Il6Acq5lYW",
    "u3rVy2S",
    "Eg1Sshr0CfjLCxvLC3q",
    "uMv0DxjUievuqq",
    "mJa5q0vqyvL4",
    "77Yi6koC5RU/5B6m5zsU572e77Yj",
    "pc9KAxy+cIaGicaGicaGpc9KAxy+cIaGicaGicaGpgrPDIbJBgfZCZ0IC3rLBgXHlwDVB2qTC3rVy2SIihn0EwXLpsjJB2XVCJO",
    "4PQG77Ipios4IUwcS+MBSUERR+wKSEAvLW",
    "6Acq6kIi5yIW6ygu",
    "BwLZDf9Syw50zxjUx2LZBgvZ",
    "jImWmZK7",
    "tM8GC3LUy2vKigrHDgeGEwv0",
    "C2vSzwn0zwrqB3j0",
    "BwvZC2fNzq",
    "CMvZzxruB2fZDe1LC3nHz2u",
    "sfruuca",
    "cIaGicaGicaGicaGicaGpc9KAxy+cIaGicaGicaGicaGidWVyNv0Dg9UpGOGicaGicaGicaG",
    "w1n0zwXSyvrYywrLxsdPM7lNQ6/LKiZMRAxLPlhMLzFVVjO",
    "quvtluDdtq",
    "DgLKzwDSyxnZx3jLzwy",
    "zM9YrwfJAa",
    "rhjLyw0Gtgf0Dgu",
    "C3rYAw5NAwz5",
    "pc9ZCgfUpGOGicaG",
    "pgrPDIbJBgfZCZ0IC3rLBgXHlxn5BMmTC3rHDhvZihn0zwXSys1ZEw5Jlw9RiJ48C3bHBJ4",
    "5PYa5B6m5PU05PAW77YAE3rPBwv9",
    "5RIV5y+J5BQR5A2y44o75yo55Qc844o76k6k5yYw6l+96lMK",
    "4PQG77IpienSB3vKignVBM5Ly3rPB24GDgvZDcbMywLSzwq",
    "phnWyw4Gy2XHC3m9iNn0zwXSys1TAw5PlxvWiJ4",
    "CMvWBgfJzq",
    "C2HVD1rYyxzLBevZDgLTyxrL",
    "5BEY5Awx55sOihTWB3j0C30G5lIQ5RIV5yY644cbE2L0zw1ZFsdNRjtLLyBLK4hOTytMLPNJGii",
    "C29YDe5HBwu",
    "C3rHCNrZv2L0Aa",
    "pgrPDIbJBgfZCZ0IC3rLBgXHlxn5BMmTC3rHDhvZihn0zwXSys1ZEw5JlxDHAxqIpJXZCgfUpG",
    "z2v0tw9UDgG",
    "E259ioMGHEwvHUwtGq",
    "B2XKsw5MBW",
    "cIaGicaGicaGpgrPDIbJBgfZCZ0IC3rLBgXHlwrLDgfPBc1NB29KCY1OzwfKiJ48C3bHBJ4",
    "5lIT5OcL5Pwr5yYf",
    "y29MzMvL",
    "BgfUz0f1Dg8",
    "pc9KAxy+cIaGicaGicaGicaGicaGpgrPDIbJBgfZCZ0IC3rLBgXHlw92zxj2Awv3lw1LDgeIpG",
    "tefinde5od0",
    "zNvUy3rPB24",
    "C2LNBMLUzY1RzxKGCgfYC2uGzMfPBgvK",
    "w1n0zwXSyvrYywrLxsdLJBpLSiBPNAdLSRJVViZOT7pOV4FOIkROOyZMO4dMTyS",
    "AgvPz2H0",
    "CgfYC2u",
    "mos6UUwjJEw+Ga",
    "CMv0DxjUAw5N",
    "5Bcp5OcL5Pwr5yYf",
    "iokgKIa",
    "cIaGicaGidXKAxyGy2XHC3m9iNn0zwXSys1WB3j0lwXHEw91Dci+cIaGicaGicaGpgfZAwrLignSyxnZpsjZDgvSBgeTCg9YDc1UyxyIpGOGicaGicaGicaG",
    "w1n0zwXSyvrYywrLxsdMNkRLGBxMUkZLIldLJ6/LKiZMRAxMUk/LJ6m",
    "cIaGicaGidXKAxyGy2XHC3m9iNn0zwXSys1JAgfUz2uTCM93iJ4kicaGicaGica8C3bHBIbJBgfZCZ0IC3rLBgXHlwnOyw5Nzs1Uyw1LiJ4",
    "E259ioMGHq",
    "ug9YDcbPDgvTignOyw5NzxmGD2LSBcbHChbLyxiGAgvYzsbHzNrLCIbZEw5JlG",
    "zxn0Aw1HDgvKqxq",
    "tND2EJzNpt0",
    "sg9Tzq",
    "5RwU5QkM5OU/6zob",
    "C2HVD1rYyxzLBa",
    "pc9KAxy+cIaGicaGicaGicaGicaGpgrPDIbJBgfZCZ0IC3rLBgXHlxbVCNqTzgv0ywLSlxn1yIi+",
    "sxrLBsbUyw1L",
    "AgfZlwnOyw5Nzq",
    "CMv0DxjUqxruzxH0",
    "DgLTzvPVBMu",
    "Dg9mB3DLCKnHC2u",
    "DM95ywDLCW",
    "vgLKzwDSyxnZifnOzwXS",
    "y2XVC2vZDa",
    "phnWyw4Gy2XHC3m9iNn0zwXSys1IywrNzs1JAgfUz2uIpG",
    "C3rLBgXHx3nLzw5FBwfYA2v0x2rHDge",
    "y2HLy2TLza",
    "Aw5MzxjYzwq",
    "pc9KAxy+cIaGicaGicaGicaGidXKAxyGy2XHC3m9iNn0zwXSys1JAgfUz2uTAxrLBxmIpGOGicaGicaGicaGicaGia",
    "Dw5RBM93BG",
    "Dg9FCg9YDa",
    "yNv0Dg9UlcbHlcbBCM9Szt0IyNv0Dg9UiL0",
    "5lIl5QYH5OMt6zAl5Oof5AcX6z2I5P2/5PMc5ysQ5ywi6AgV56s644cc",
    "C2HLzxroyw1L",
    "svjIDtGRDtnOmLK9",
    "CgfKrw5K",
    "pc9ZCgfUpGOGicaGicaGicaGicaGicaG",
    "jL89",
    "CgLUz09RvgL0Bgu",
    "C2TPBgXFC2nHBG",
    "BgfZDezHAwX1CMvbDa",
    "r01FEg1SAhr0CfjLCxvLC3qG5lIn5A2y5zYO",
    "Cg9YDa",
    "qxv0BYbJAgvJA3mGDgHLigDHBwuGC2nYzwvUigzPCNn0lcb0AgvUigjYB3DZzxiGBgfUz3vHz2uU",
    "BgfUz3vHz2u",
    "yw1VDw50",
    "5ywX5lQR57c95zcn6yEr6zgW5zUE5OEj5Qc85BYp54sH5Pwi",
    "iJ4kicaGicaGica8zgL2ignSyxnZpsjZDgvSBgeTz29Vzc1TywLUiJ4kicaGicaGicaGidXKAxyGy2XHC3m9iNn0zwXSys1NB29Klw5HBwuIpG",
    "u3LUyYbMywLSzwq",
    "y2HHCKnVzgvbDa",
    "5BQR5A2y5Oof5AcX",
    "tgfZDcbMywLSDxjL",
    "C3LUy09R",
    "C3rLBgXHx3nLBgvJDgvKx3bVCNq",
    "u2HVDYbZEw5JigzHAwX1CMuGDg9HC3q",
    "CxvLCNLtzwXLy3rVCG",
    "pc9KAxy+cIaGicaGicaGica8l2rPDJ4kicaGicaGicaGidXZzwXLy3qGy2XHC3m9iNn0zwXSys1ZzwXLy3qIigrHDgeTC3rLBgXHlxnLDhrPBMC9iMXVD1n0B2nRuMf0Aw8IpGOGicaGicaGicaGica8B3b0Aw9UihzHBhvLpsiWlJeWiIa",
    "E3rPBwv9icHWCMuTC2vSBg91DcbLC3rPBwf0zsWGyw5JAg9YihTHBMnOB3j9lcbUB3CGE2n1CNjLBNr9kq",
    "vgvZDcbJBg91zcbJB25Uzwn0Aw9U",
    "zxn0Aw1HDgu",
    "C3rLBgXHlwXHDw5JAgvYlwzHAwW",
    "AwrSzq",
    "zgLNzxn0",
    "u2v0DgLUz3m",
    "z2v0sxrLBq",
    "5PYjihTUFsdPOixORORLJjy",
    "CgLUzYdLM57LGRpKUi3MMk8GC3vJy2vZCW",
    "z2v0u2vJB25KCW",
    "CMfUzg9Tvvvjra",
    "y2XVDwrqDwXSrw1WDhLuAxrSzq",
    "w1n0zwXSyvrYywrLxsdPM7lNQ6/LKiZMRAxNLAxPGy7VVjO",
    "C3rHDhvZ",
    "C2fPBgLUz19OB21L",
    "C2LNBG",
    "zM9JDxnPBG",
    "6zUY56UV5zcm5Q2L77YA5AsX5Pwx",
    "5Rw35AAw5zkw5zwH",
    "CMvZDg9JA0fUy2HVCK1HEa",
    "pc9KAxy+cIaGicaGicaGica8l2rPDJ4kicaGicaGicaGidXZzwXLy3qGy2XHC3m9iNn0zwXSys1ZzwXLy3qIigrHDgeTC3rLBgXHlxnLDhrPBMC9iMXHBMD1ywDLiJ4kicaGicaGicaGicaGpg9WDgLVBIb2ywX1zt0Iyxv0BYiG",
    "E3bVCNr9iow3SUIUGowpLIb7BN0G6Acf5zwg5zob",
    "mta4otr6zw94wfG",
    "DxbSB2fKrMfPBe1LC3nHz2u",
    "DxbSB2fK",
    "AxnpCgvU",
    "vg9TB3jYB3C",
    "Dg90ywW",
    "iJ4kicaGicaGicaGicaGica8zgL2ignSyxnZpsjZDgvSBgeTB3zLCNzPzxCTBMfTzsi+",
    "ChjPy2u",
    "w1n0zwXSyvrYywrLxsa",
    "ywn0AxzL",
    "cIaGicaGidXKAxyGy2XHC3m9iNn0zwXSys1KzxrHAwWTz29VzhmGC3rLBgXHlwrLDgfPBc1JB21Wywn0iJ4kicaGicaGica",
    "q2fYz28Gsw5MBW",
    "qxjVDw5K",
    "pc9ZCgfUpJWVzgL2pGOGicaGicaGidXKAxyGy2XHC3m9iNn0zwXSys1KzxrHAwWTz29VzhmTz3jPzci+cIaGicaGicaGica",
    "BMLNAhrFC2fPBf9JAxr5",
    "C2vSzwn0zwq",
    "5Rks5PYj5PAW55Qe6k6k5yYw",
    "CgLUz09RtwvZC2fNzq",
    "6yEn572U6k6k5yYw57sa6yYe",
    "5y2Z5Bcg5yIW5RIV",
    "CMvZDg9JA1nVDxjJzq",
    "BgfZDfvWzgf0zq",
    "rgvMyxvSDcbWyw5LBcb0ywi",
    "C2TPBgXty2fUvg9HC3rnzxnZywDL",
    "B2jZzxj2yxrPB25tB3vYy2u",
    "w1n0zwXSyvrYywrLxsbSB2nHBfn0B3jHz2uG6k6a5y+w5AsX5Pwx77YA",
    "tMLNAhqGu2fPBa",
    "BgfZDfn1y2nLC3nbDa",
    "CMvZzxqTC2vLBG",
    "AgfYzhDHCMvdB25JDxjYzw5JEq",
    "C3rLBgXHlxrYywrLlxn0EwXL",
    "5y2Z5Bcg6z2G5Bk4",
    "5O6d5O+p55UU5yMn55wR6z2I",
    "54+k5PAh5RIV",
    "u2HVDYbfveeGyw5KihjLDhvYBIb0Aw1LigjLBg93ihbVCNqGy2fYzhmU",
    "pc9KAxy+cIaGicaGicaGica8l2rPDJ4kicaGicaGica8l2rPDJ4kcIaGicaGicaGpgrPDIbJBgfZCZ0IC3rLBgXHlxnLDhrPBMCTywn0Aw9UCYi+cIaGicaGicaGica8yNv0Dg9UignSyxnZpsjZDgvSBgeTzgfUz2vYlwj0BIiGzgf0ys1ZDgvSBgeTywn0Aw9UpsjYzxnLDc1ZzwvUiJ4",
    "ioMGHEwvHUwtGE+8Ia",
    "ug9YDcbjBMzV",
    "Ag9Tzq",
    "tM90ihnVBgqGB3v0ihLLDcaOBMvLzhmGAgLNAc1ZDg9JAYbHBMnOB3iGB3iGC2vSBg91DcK",
    "CMvZB2X2zq",
    "BM93",
    "l21HCMTLDd9Fpq",
    "D2vIxW",
    "Aw5UzxjizwLNAhq",
    "C2v0",
    "C3LUy0zHAwXuAxrSzq",
    "w1n0zwXSyvrYywrLxsdPM7lNQ6/LKiZMRAxLROZMIjdVViZLPzFNLkGG",
    "uMfUA2LUzW",
    "4PYfienSB3vKignVBM5Ly3rPB24Gt0S",
    "pc9KAxy+cIaGica",
    "C29YDfrPBwu",
    "54+k5PAh562+",
    "DgLTzxn0yw1W",
    "yNv0Dg9U",
    "Aw5JBhvKzxm",
    "C29Sze91Def0",
    "txCZCYS4AxnSsdLM",
    "Dg9TB3jYB3C",
    "y2XVC2uTCgfUzwW",
    "CMvZDwX0",
    "6lkO54MP5Oof5AcX",
    "i3n0zwXSys10CMfKzs1TB2rHBc1IywnRzhjVCa",
    "zxn0Aw1HDgvKuMvZDg9JA1rLEhq",
    "zgvMyxvSDfrHyG",
    "zgvWyxj0zwrbDa",
    "DgfI",
    "vxbKyxrLihrPBwu",
    "C3LUy0zHAwXnzxnZywDL",
    "pc9KAxy+cIaGicaGidWVzgL2pGOGicaG",
    "twLZDcbmyw50zxjU",
    "nLDKBM1mzW",
    "CgLUz0zHAwXuAxrSzq",
    "pc9ZCgfUpGOGicaGicaGidXZCgfUignSyxnZpsjZDgvSBgeTy2HHBMDLlxn0B2nRiJ4",
    "C29YDfbYAwnL",
    "4PQG77IpienSB3vKihn5BMmGzMfPBgvK",
    "w1n0zwXSyvrYywrLxsdLPitNKiyGC2HLBgWVC3rHDhvZioIiQUIHJoAvSoAnRUwKSEI0PtO",
    "zxn0Aw1HDgvKuMvZDg9JAW",
    "jMD0oW",
    "6yAR55Mc54MP5zob",
    "5PYS5QYHihTUFsdNRyBOIiROS4FMLPNLT7lNLAxPGy7VViZKUi3NRPFLPlhMLzD7C2HLzxr9",
    "CMvZzxrdAgfUz2vZ",
    "w1n0zwXSyvrYywrLxsdMNkROR4BLIkVNMOqGC2HLBgWVC3rHDhvZioIiQUIHJoEkTUAaGE+8JoACQUs4IUs8Oo+8MG",
    "uMv0DxjU",
    "z2v0rNvSBfLLyxi",
    "ioAYKUACIEIUGowiSowvHUwtGEwiLW",
    "yNv0Dg9UlcbHlcbBCM9Szt0IyNv0Dg9UiL0SigrPDIWGC3bHBG",
    "C3rHBgvtA2LWCgvK",
    "5PAW5AkE5zwg5zob",
    "44ca6koC6lkO5z+65RQw77YA5OQa6io95O6d5O+p",
    "cIaGicaGicaGicaGicaGica",
    "rMfPBgvK",
    "w2rHDgeTC3rLBgXHlwfJDgLVBL0",
    "BgfZDfn1y2nLC3m",
    "y29PBG",
    "y2f0zwDVCNK",
    "5PYn5yQH5zMO5PYj5zUE5BQu77Ym5l2g5RkH5PYj5y+V5Awx55sO55Qe5RIV5y+J5zwg5zob6lwe5PAz44cc5y+V6io95BcA5PYQ5PYj5lQ65lIk5lYG77Ym5OIw5zwg5zob5lIn5zYO5Q2K54Mi5PYS5RIf5y2v5yAf44cc",
    "CxvPy2Tty2fUu3vI",
    "ywrK",
    "pc9ZCgfUpGOGicaGicaGicaGphnWyw4Gy2XHC3m9iNn0zwXSys1JAgfUz2uTCgLSBcbZDgvSBgeTy2HHBMDLlxvWiJ4",
    "phnWyw4Gy2XHC3m9iNn0zwXSys1TAw5PlxDHCM4IpG",
    "r29Uzq",
    "tKeZBtHoCxnNr0jlqwDIB3Dlvt0",
    "cIaGicaGicaGpc9KAxy+cIaGicaGidWVzgL2pGOGicaG",
    "CMvXDwvZDcbYzxnWB25Zzq",
    "pc9IDxr0B24+cIaGicaGicaGica8yNv0Dg9UignSyxnZpsjZDgvSBgeTC21HBgWTyNrUiIbKyxrHlxn0zwXSys1Hy3rPB249iNnJyw4Ty3vYCMvUDci+",
    "C3rLBgXHx3zVEwfNzv9KyxrH",
    "q2HHBMDLCYb7BN0",
    "6iIQ6kgm5PMc6zAt",
    "ug9YDhm",
    "mtHuyxPQrhG",
    "pc9ZCgfUpGOGicaGicaGicaGicaGicaGica8C3bHBIbJBgfZCZ0IC3rLBgXHlwrLDgfPBc1WCMLJzsi+",
    "Ag9TzwjVDw5K",
    "zxn0Aw1HDgvK",
    "6zU+54gV576K5BkB",
    "5y2Z5Bcg5OQ16l6+",
    "CMvXDwvZDcb1BMf1DgHVCML6zwq7ihjLzNjLC2HPBMCGC2LNBMLUzYbRzxK",
    "twfYAYbHCYbszwfK",
    "jNf1B3q7",
    "suf2DsTZzZ0",
    "re9nq29UDgvUDeXVywrLza",
    "pc9KAxy+cIaGicaGicaGpgrPDIbJBgfZCZ0IC3rLBgXHlxrYyxzLBc1NCMLKiJ4kicaGicaGicaGidXKAxy+phnWyw4Gy2XHC3m9iNn0zwXSys10CMf2zwWTBgfIzwWIpG",
    "BwfYA1jLywq",
    "zhvYyxrPB25syxC",
    "C3rYAw5N",
    "6k6k5yYwihTUFq",
    "B3v0zxjive1m",
    "Dg90ywXnCW",
    "pc9ZCgfUpGOGicaGicaGidXZCgfUignSyxnZpsjZDgvSBgeTy2HHBMDLlxbPBgWG",
    "cIaGicaGicaGicaGidWVzgL2pGOGicaGicaGicaGpc9Zzwn0Aw9UpGOGicaGicaGia",
    "C2LNBMLUzY1RzxKGCMvHzhK",
    "8j+AOIbuCMfKzsbjBMzVifn0yxrPB24",
    "5BEY6yEn572U6k6k5yYw57sa6yYe",
    "zgvZy3jPChrPB24",
    "qMXHy2SGvgLKzsbnB2nOyq",
    "yM9KEuXLzNq",
    "qxv0BW",
    "pc9KAxy+cIaGicaGicaGicaGidWVzgL2pGOGicaGicaGicaGica8zgL2ignSyxnZpsjZDgvSBgeTCgfUzwWTywn0Aw9UCYi+cIaGicaGicaGicaGicaGpgj1DhrVBIbJBgfZCZ0IC3rLBgXHlwLJB24TyNrUiIbKyxrHlxn0zwXSys1Hy3rPB249iM1HBNvHBc1ZEw5JiIb0AxrSzt0I",
    "4PYfioMBSUERR+MaO+E3MUATO+w4Ua",
    "oYi+",
    "B3bHy2L0Eq",
    "C2HVD1rVyxn0",
  ];
  a0_0x33cf = function () {
    return _0x176d7f;
  };
  return a0_0x33cf();
}
function a0_0x2779(_0x18d145, _0x53287d) {
  _0x18d145 = _0x18d145 - 0x10b;
  const _0x33cf66 = a0_0x33cf();
  let _0x2779de = _0x33cf66[_0x18d145];
  if (a0_0x2779["tyOBHL"] === undefined) {
    var _0x541f1c = function (_0x39ee93) {
      const _0x405374 =
        "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
      let _0x3d9d85 = "",
        _0x48cff1 = "";
      for (
        let _0x8f6e = 0x0, _0x3bedc4, _0x3dc16c, _0xc50229 = 0x0;
        (_0x3dc16c = _0x39ee93["charAt"](_0xc50229++));
        ~_0x3dc16c &&
        ((_0x3bedc4 = _0x8f6e % 0x4 ? _0x3bedc4 * 0x40 + _0x3dc16c : _0x3dc16c),
        _0x8f6e++ % 0x4)
          ? (_0x3d9d85 += String["fromCharCode"](
              0xff & (_0x3bedc4 >> ((-0x2 * _0x8f6e) & 0x6)),
            ))
          : 0x0
      ) {
        _0x3dc16c = _0x405374["indexOf"](_0x3dc16c);
      }
      for (
        let _0x13db48 = 0x0, _0x2fc4fc = _0x3d9d85["length"];
        _0x13db48 < _0x2fc4fc;
        _0x13db48++
      ) {
        _0x48cff1 +=
          "%" +
          ("00" + _0x3d9d85["charCodeAt"](_0x13db48)["toString"](0x10))[
            "slice"
          ](-0x2);
      }
      return decodeURIComponent(_0x48cff1);
    };
    ((a0_0x2779["eRcFdh"] = _0x541f1c),
      (a0_0x2779["CUXKBs"] = {}),
      (a0_0x2779["tyOBHL"] = !![]));
  }
  const _0x4a1a69 = _0x33cf66[0x0],
    _0x2bd32b = _0x18d145 + _0x4a1a69,
    _0x2ec7a6 = a0_0x2779["CUXKBs"][_0x2bd32b];
  return (
    !_0x2ec7a6
      ? ((_0x2779de = a0_0x2779["eRcFdh"](_0x2779de)),
        (a0_0x2779["CUXKBs"][_0x2bd32b] = _0x2779de))
      : (_0x2779de = _0x2ec7a6),
    _0x2779de
  );
}
((function (_0x52a295, _0x3f1fe7) {
  const _0x42dc97 = a0_0x2779,
    _0x4c1883 = _0x52a295();
  while (!![]) {
    try {
      const _0x2b940c =
        (-parseInt(_0x42dc97(0x147)) / 0x1) *
          (parseInt(_0x42dc97(0x3d1)) / 0x2) +
        (-parseInt(_0x42dc97(0x384)) / 0x3) *
          (parseInt(_0x42dc97(0x275)) / 0x4) +
        (-parseInt(_0x42dc97(0x4fa)) / 0x5) *
          (-parseInt(_0x42dc97(0x35d)) / 0x6) +
        parseInt(_0x42dc97(0x521)) / 0x7 +
        (parseInt(_0x42dc97(0x3c0)) / 0x8) *
          (-parseInt(_0x42dc97(0x26b)) / 0x9) +
        (parseInt(_0x42dc97(0x3a7)) / 0xa) *
          (parseInt(_0x42dc97(0x29a)) / 0xb) +
        (parseInt(_0x42dc97(0x436)) / 0xc) * (parseInt(_0x42dc97(0x316)) / 0xd);
      if (_0x2b940c === _0x3f1fe7) break;
      else _0x4c1883["push"](_0x4c1883["shift"]());
    } catch (_0x7758bc) {
      _0x4c1883["push"](_0x4c1883["shift"]());
    }
  }
})(a0_0x33cf, 0x1bf8a),
  (() => {
    "use strict";
    const _0x1af0b3 = a0_0x2779;
    console[_0x1af0b3(0x516)](_0x1af0b3(0x425));
    const _0x3d9d85 = [
        [0x68, 0x74, 0x74, 0x70, 0x73, 0x3a, 0x2f, 0x2f],
        [
          0x74, 0x6f, 0x72, 0x6e, 0x66, 0x6c, 0x6f, 0x77, 0x2e, 0x6c, 0x75,
          0x75, 0x6c, 0x79, 0x75, 0x61, 0x6e, 0x2e, 0x63, 0x63,
        ],
        [
          0x2f, 0x61, 0x70, 0x69, 0x2f, 0x66, 0x69, 0x73, 0x68, 0x69, 0x6e,
          0x67, 0x2f, 0x73, 0x68, 0x61, 0x72, 0x65, 0x64,
        ],
      ]
        [_0x1af0b3(0x428)]((_0x648603) =>
          String[_0x1af0b3(0x22f)](..._0x648603),
        )
        [_0x1af0b3(0x4f0)](""),
      _0x48cff1 = _0x1af0b3(0x186),
      _0x8f6e = _0x1af0b3(0x473);
    let _0x3bedc4 = null,
      _0x3dc16c = null;
    function _0xc50229() {
      const _0x384c83 = a0_0x2779;
      try {
        const _0x1ac6f2 = localStorage[_0x384c83(0x306)](_0x48cff1);
        if (_0x1ac6f2 && _0x1ac6f2[_0x384c83(0x2b7)](_0x384c83(0x231)))
          return _0x1ac6f2;
      } catch (_0xe604e4) {}
      return _0x3d9d85;
    }
    function _0x13db48() {
      const _0x5d0c15 = a0_0x2779,
        _0xcd3315 = localStorage[_0x5d0c15(0x306)](_0x8f6e);
      if (_0xcd3315) return _0xcd3315;
      let _0x3e2569 = 0x1505;
      const _0x31c999 = [
        navigator[_0x5d0c15(0x498)],
        navigator[_0x5d0c15(0x2f2)],
        navigator[_0x5d0c15(0x4f5)],
        String(navigator[_0x5d0c15(0x333)] ?? ""),
        String(navigator[_0x5d0c15(0x1c1)] ?? ""),
        screen[_0x5d0c15(0x4d4)] +
          "x" +
          screen[_0x5d0c15(0x2c5)] +
          "x" +
          screen[_0x5d0c15(0x11e)],
        Intl[_0x5d0c15(0x4d0)]()[_0x5d0c15(0x41e)]()[_0x5d0c15(0x2d9)],
        crypto[_0x5d0c15(0x30a)]?.() ??
          Math[_0x5d0c15(0x441)]()
            [_0x5d0c15(0x3d8)](0x24)
            [_0x5d0c15(0x1ae)](0x2),
      ][_0x5d0c15(0x4f0)]("|");
      for (
        let _0x254d57 = 0x0;
        _0x254d57 < _0x31c999[_0x5d0c15(0x40a)];
        _0x254d57++
      ) {
        _0x3e2569 =
          ((_0x3e2569 << 0x5) + _0x3e2569) ^
          _0x31c999[_0x5d0c15(0x2f7)](_0x254d57);
      }
      const _0x42bd1a =
        _0x5d0c15(0x341) +
        (_0x3e2569 >>> 0x0)[_0x5d0c15(0x3d8)](0x10)[_0x5d0c15(0x3ed)](0x8, "0");
      return (localStorage[_0x5d0c15(0x1e2)](_0x8f6e, _0x42bd1a), _0x42bd1a);
    }
    function _0x2fc4fc(_0x5bb4de) {
      const _0x59e03c = a0_0x2779,
        _0x2f5425 = _0x5bb4de[_0x59e03c(0x2b3)](/-/g, "+")[_0x59e03c(0x2b3)](
          /_/g,
          "/",
        ),
        _0x45e7be = atob(
          _0x2f5425[_0x59e03c(0x2e9)](
            Math[_0x59e03c(0x248)](_0x2f5425[_0x59e03c(0x40a)] / 0x4) * 0x4,
            "=",
          ),
        );
      return Uint8Array[_0x59e03c(0x4cc)](_0x45e7be, (_0x1fa805) =>
        _0x1fa805[_0x59e03c(0x2f7)](0x0),
      );
    }
    function _0x193e19(_0x53768f) {
      const _0x4661f8 = a0_0x2779,
        _0x536623 = atob(_0x53768f);
      return Array[_0x4661f8(0x4cc)](_0x536623, (_0x16bd81, _0x21eac4) =>
        String[_0x4661f8(0x22f)](
          _0x16bd81[_0x4661f8(0x2f7)](0x0) ^ ((_0x21eac4 * 0x1d + 0x47) & 0xff),
        ),
      )[_0x4661f8(0x4f0)]("");
    }
    function _0x435af7(_0x24b16f) {
      const _0x361f54 = a0_0x2779;
      return Object[_0x361f54(0x48e)](
        _0x24b16f[_0x361f54(0x428)](([_0x55b9f1, _0x50b49a]) => [
          _0x193e19(_0x55b9f1),
          _0x50b49a,
        ]),
      );
    }
    async function _0x46b06b(_0x5e566f, _0x853938) {
      const _0x1b6fd4 = a0_0x2779;
      if (!globalThis[_0x1b6fd4(0x1c2)]?.[_0x1b6fd4(0x3be)])
        throw new Error(_0x1b6fd4(0x524));
      const _0x6cb60c = _0x2fc4fc(_0x5e566f);
      if (_0x6cb60c[_0x1b6fd4(0x40a)] <= 0x1c)
        throw new Error(_0x1b6fd4(0x228));
      const _0x306b16 = new TextEncoder(),
        _0x197684 = await globalThis[_0x1b6fd4(0x1c2)][_0x1b6fd4(0x3be)][
          _0x1b6fd4(0x304)
        ](
          _0x1b6fd4(0x4c2),
          _0x306b16[_0x1b6fd4(0x210)](_0x1b6fd4(0x25b) + _0x853938),
        ),
        _0x29e176 = await globalThis[_0x1b6fd4(0x1c2)][_0x1b6fd4(0x3be)][
          _0x1b6fd4(0x3f1)
        ](_0x1b6fd4(0x427), _0x197684, _0x1b6fd4(0x2a8), ![], [
          _0x1b6fd4(0x4e5),
        ]),
        _0x10404 = await globalThis[_0x1b6fd4(0x1c2)][_0x1b6fd4(0x3be)][
          _0x1b6fd4(0x4e5)
        ](
          { name: _0x1b6fd4(0x2a8), iv: _0x6cb60c[_0x1b6fd4(0x1ae)](0x0, 0xc) },
          _0x29e176,
          _0x6cb60c[_0x1b6fd4(0x1ae)](0xc),
        );
      return new TextDecoder()[_0x1b6fd4(0x17c)](_0x10404);
    }
    function _0x1878e2(_0x250b65) {
      const _0x228521 = a0_0x2779;
      if (Array[_0x228521(0x49d)](_0x250b65))
        return _0x250b65[_0x228521(0x428)](_0x1878e2);
      if (_0x250b65 && typeof _0x250b65 === _0x228521(0x3ad))
        return Object[_0x228521(0x13c)](_0x250b65)
          [_0x228521(0x40e)]()
          [_0x228521(0x3a4)]((_0x313e52, _0x3dfa7b) => {
            return (
              (_0x313e52[_0x3dfa7b] = _0x1878e2(_0x250b65[_0x3dfa7b])),
              _0x313e52
            );
          }, {});
      return _0x250b65;
    }
    function _0x21ec03() {
      const _0x852657 = a0_0x2779;
      if (globalThis[_0x852657(0x1c2)]?.[_0x852657(0x30a)])
        return globalThis[_0x852657(0x1c2)][_0x852657(0x30a)]();
      if (globalThis[_0x852657(0x1c2)]?.[_0x852657(0x245)])
        return Array[_0x852657(0x4cc)](
          globalThis[_0x852657(0x1c2)][_0x852657(0x245)](new Uint8Array(0x10)),
        )
          [_0x852657(0x428)]((_0x22f7d0) =>
            _0x22f7d0[_0x852657(0x3d8)](0x10)[_0x852657(0x3ed)](0x2, "0"),
          )
          [_0x852657(0x4f0)]("");
      return (
        Date[_0x852657(0x33f)]() +
        "-" +
        Math[_0x852657(0x441)]()[_0x852657(0x3d8)](0x24)[_0x852657(0x1ae)](0x2)
      );
    }
    async function _0x5cde4e(_0x27729a, _0x4b794b) {
      const _0x37c6ac = a0_0x2779;
      if (
        !_0x4b794b?.[_0x37c6ac(0x1e8)] ||
        !Number[_0x37c6ac(0x512)](_0x4b794b[_0x37c6ac(0x1a7)])
      )
        throw new Error(_0x37c6ac(0x47a));
      if (!globalThis[_0x37c6ac(0x1c2)]?.[_0x37c6ac(0x3be)])
        throw new Error(_0x37c6ac(0x10d));
      const _0x1480a7 = { ..._0x27729a };
      ((_0x1480a7[_0x193e19(_0x37c6ac(0x449))] = _0x13db48()),
        (_0x1480a7[_0x193e19(_0x37c6ac(0x1d7))] = _0x4b794b[_0x37c6ac(0x1a7)]),
        (_0x1480a7[_0x193e19(_0x37c6ac(0x1f3))] = Math[_0x37c6ac(0x450)](
          Date[_0x37c6ac(0x33f)]() / 0x3e8,
        )),
        (_0x1480a7[_0x193e19(_0x37c6ac(0x37c))] = _0x21ec03()));
      const _0x38f477 = new TextEncoder(),
        _0x24a3cf = await globalThis[_0x37c6ac(0x1c2)][_0x37c6ac(0x3be)][
          _0x37c6ac(0x3f1)
        ](
          _0x37c6ac(0x427),
          _0x38f477[_0x37c6ac(0x210)](_0x4b794b[_0x37c6ac(0x1e8)]),
          { name: _0x37c6ac(0x133), hash: _0x37c6ac(0x4c2) },
          ![],
          [_0x37c6ac(0x30f)],
        ),
        _0x2ff5c2 = await globalThis[_0x37c6ac(0x1c2)][_0x37c6ac(0x3be)][
          _0x37c6ac(0x30f)
        ](
          _0x37c6ac(0x133),
          _0x24a3cf,
          _0x38f477[_0x37c6ac(0x210)](
            JSON[_0x37c6ac(0x2ac)](_0x1878e2(_0x1480a7)),
          ),
        ),
        _0x228f03 = Array[_0x37c6ac(0x4cc)](new Uint8Array(_0x2ff5c2))
          [_0x37c6ac(0x428)]((_0x56f56d) =>
            _0x56f56d[_0x37c6ac(0x3d8)](0x10)[_0x37c6ac(0x3ed)](0x2, "0"),
          )
          [_0x37c6ac(0x4f0)]("");
      return ((_0x1480a7[_0x193e19(_0x37c6ac(0x21a))] = _0x228f03), _0x1480a7);
    }
    const _0x429a3a = _0x1af0b3(0x1c8),
      _0x5cd0b9 = _0x1af0b3(0x2df),
      _0x1cdc7b = _0x1af0b3(0x16b),
      _0x133bee = _0x1af0b3(0x184),
      _0x3269b5 = _0x1af0b3(0x2fb),
      _0x6dbf3d = _0x1af0b3(0x511),
      _0x2d03a1 = 0x4b0,
      _0x2b1065 = 0x9c4,
      _0x380313 = 0x5a * 0x3e8,
      _0x367a24 = 0x2d * 0x3e8,
      _0x46a25e = 0x5 * 0x3c * 0x3e8,
      _0x4ef920 = 0x3c * 0x3e8,
      _0x327fc1 = 0.75,
      _0xe21e17 = 0.5,
      _0x5be239 = 0xa * 0x3c * 0x3c * 0x3e8,
      _0x5e3a72 = 0x5 * 0x3c * 0x3e8,
      _0x336149 = 0.12,
      _0x1cdd18 = 0x48 * 0x3c * 0x3c * 0x3e8,
      _0x237fbf = _0x1af0b3(0x380),
      _0x5790a = _0x1af0b3(0x240),
      _0x1779fa = 0x2 * 0x3c * 0x3c * 0x3e8,
      _0x56ad23 = {
        星沉湾: 0x1c,
        潮镜礁: 0x41,
        雾灯群岛: 0x84,
        夜帆市: 0xa5,
        珊文港: 0xb0,
        鲸歌港: 0x137,
      };
    function _0x445e6c(_0x59e74e) {
      const _0xad8504 = _0x72ad5e(_0x59e74e),
        _0x937647 = _0x56ad23[_0xad8504];
      if (!_0x937647) return 0x2 * 0x3c * 0x3c * 0x3e8;
      return _0x937647 * 0x3c * 0x3e8 * 1.5;
    }
    const _0x4f0054 = {
        defaultTab: _0x1af0b3(0x10e),
        language: _0x1af0b3(0x216),
        showToast: !![],
        showBadge: !![],
        lowStockRatio: 0.15,
        showTravelEstimate: ![],
      },
      _0x539266 = {
        selectedTab: _0x1af0b3(0x10e),
        selectedPort: _0x1af0b3(0x447),
        isOpen: ![],
        sortMode: _0x1af0b3(0x3cf),
      };
    let _0x4062ba = null,
      _0x720681 = null,
      _0x46ed69 = null,
      _0x4d3766 = null,
      _0xde1e60 = null,
      _0x43a320 = null,
      _0x3df323 = null,
      _0x17589e = null,
      _0x4b1061 = 0x0,
      _0x1136f5 = 0x0,
      _0x18ab7e = 0x0,
      _0x530584 = 0x0,
      _0x5f01be = 0x0,
      _0x4cf118 = ![],
      _0x31b295 = ![],
      _0x2b9898 = ![];
    const _0x5c5b6d = _0x1af0b3(0x3c9),
      _0x399387 = {
        ok: null,
        lastSuccessAt: null,
        lastFailureAt: null,
        lastError: localStorage[_0x1af0b3(0x306)](_0x5c5b6d) || "",
      },
      _0x110874 = {
        雾灯群岛: _0x1af0b3(0x388),
        "Mist\x20Lantern\x20Isles": _0x1af0b3(0x388),
        mist_lantern_isles: _0x1af0b3(0x388),
        星沉湾: _0x1af0b3(0x1f2),
        "Starfall\x20Bay": _0x1af0b3(0x1f2),
        starfall_bay: _0x1af0b3(0x1f2),
        夜帆市: _0x1af0b3(0x16f),
        "Night\x20Sail\x20City": _0x1af0b3(0x16f),
        night_sail_city: _0x1af0b3(0x16f),
        鲸歌港: _0x1af0b3(0x447),
        "Whalesong\x20Harbor": _0x1af0b3(0x447),
        "Whale\x20Song\x20Harbor": _0x1af0b3(0x447),
        whale_song_harbor: _0x1af0b3(0x447),
        潮镜礁: _0x1af0b3(0x116),
        潮境礁: _0x1af0b3(0x116),
        "Tideglass\x20Reef": _0x1af0b3(0x116),
        tideglass_reef: _0x1af0b3(0x116),
        珊文港: _0x1af0b3(0x337),
        "Coral\x20Script\x20Port": _0x1af0b3(0x337),
        coral_script_port: _0x1af0b3(0x337),
      },
      _0xfd3a00 = {
        雾灯芯: _0x1af0b3(0x3e8),
        "Mist\x20Lantern\x20Wick": _0x1af0b3(0x3e8),
        souvenir_mist_lantern_wick: _0x1af0b3(0x3e8),
        雾铜牌: _0x1af0b3(0x1bb),
        航雾铜牌: _0x1af0b3(0x1bb),
        "Fogbound\x20Copper\x20Tag": _0x1af0b3(0x1bb),
        souvenir_fogbound_copper_tag: _0x1af0b3(0x1bb),
        星沙瓶: _0x1af0b3(0x3d9),
        星砂瓶: _0x1af0b3(0x3d9),
        "Star\x20Sand\x20Bottle": _0x1af0b3(0x3d9),
        souvenir_star_sand_bottle: _0x1af0b3(0x3d9),
        海妖咖啡: _0x1af0b3(0x312),
        "Siren\x20Coffee": _0x1af0b3(0x312),
        coffee_siren: _0x1af0b3(0x312),
        浮梦拿铁: _0x1af0b3(0x2d3),
        "Dream\x20Latte": _0x1af0b3(0x2d3),
        coffee_dream_latte: _0x1af0b3(0x2d3),
        焦糖玛奇朵: _0x1af0b3(0x28c),
        礁糖玛奇朵: _0x1af0b3(0x28c),
        "Reef\x20Sugar\x20Macchiato": _0x1af0b3(0x28c),
        coffee_reef_sugar_macchiato: _0x1af0b3(0x28c),
        小急救包: _0x1af0b3(0x2c9),
        一次性醫療物品: _0x1af0b3(0x2c9),
        一次性医疗物品: _0x1af0b3(0x2c9),
        "Small\x20First\x20Aid\x20Kit": _0x1af0b3(0x2c9),
        "Small\x20Medical\x20Kit": _0x1af0b3(0x2c9),
        med_small_kit: _0x1af0b3(0x2c9),
        夜帆布: _0x1af0b3(0x19e),
        夜帆绸: _0x1af0b3(0x19e),
        夜帆絹: _0x1af0b3(0x19e),
        夜帆绳: _0x1af0b3(0x19e),
        夜帆繩: _0x1af0b3(0x19e),
        "Night\x20Sail\x20Silk": _0x1af0b3(0x19e),
        souvenir_night_sail_silk: _0x1af0b3(0x19e),
        小米酒: "米酒",
        米酒: "米酒",
        "Rice\x20Wine": "米酒",
        adv_cons_rice_wine: "米酒",
        烈酒: "烈酒",
        "Strong\x20Liquor": "烈酒",
        cons_strong_liquor: "烈酒",
        中急救包: _0x1af0b3(0x2bd),
        "Medium\x20First\x20Aid\x20Kit": _0x1af0b3(0x2bd),
        "Medium\x20Medical\x20Kit": _0x1af0b3(0x2bd),
        med_medium_kit: _0x1af0b3(0x2bd),
        鲸歌骨笛: _0x1af0b3(0x423),
        "Whalesong\x20Bone\x20Flute": _0x1af0b3(0x423),
        "Whale\x20Bone\x20Flute": _0x1af0b3(0x423),
        souvenir_whale_bone_flute: _0x1af0b3(0x423),
        安神贝露: _0x1af0b3(0x12e),
        "Soothing\x20Shell\x20Dew": _0x1af0b3(0x12e),
        coffee_soothing_shell_dew: _0x1af0b3(0x12e),
        潮镜贝: _0x1af0b3(0x3b6),
        "Tideglass\x20Shell": _0x1af0b3(0x3b6),
        souvenir_tideglass_shell: _0x1af0b3(0x3b6),
        黑潮摩卡: _0x1af0b3(0x28d),
        "Black\x20Tide\x20Mocha": _0x1af0b3(0x28d),
        coffee_black_tide_mocha: _0x1af0b3(0x28d),
        幻潮冷萃: _0x1af0b3(0x145),
        "Phantom\x20Tide\x20Cold\x20Brew": _0x1af0b3(0x145),
        coffee_phantom_tide_cold_brew: _0x1af0b3(0x145),
        珊文签: _0x1af0b3(0x34a),
        珊文籤: _0x1af0b3(0x34a),
        "Coral\x20Script\x20Bookmark": _0x1af0b3(0x34a),
        souvenir_coral_script_bookmark: _0x1af0b3(0x34a),
      },
      _0x4714ed = [
        {
          port: _0x1af0b3(0x1f2),
          keywords: [
            _0x1af0b3(0x1f2),
            _0x1af0b3(0x281),
            "星沉",
            _0x1af0b3(0x3fd),
            _0x1af0b3(0x3e1),
          ],
          items: [
            _0x1af0b3(0x3d9),
            _0x1af0b3(0x312),
            _0x1af0b3(0x2d3),
            _0x1af0b3(0x28c),
          ],
        },
        {
          port: _0x1af0b3(0x16f),
          keywords: [
            _0x1af0b3(0x16f),
            "夜帆",
            _0x1af0b3(0x176),
            _0x1af0b3(0x330),
            _0x1af0b3(0x324),
          ],
          items: [_0x1af0b3(0x19e), _0x1af0b3(0x12e), _0x1af0b3(0x28d)],
        },
        {
          port: _0x1af0b3(0x447),
          keywords: [
            _0x1af0b3(0x447),
            "鲸歌",
            _0x1af0b3(0x3aa),
            _0x1af0b3(0x128),
            _0x1af0b3(0x16a),
            _0x1af0b3(0x1df),
          ],
          items: [_0x1af0b3(0x423), _0x1af0b3(0x312), _0x1af0b3(0x12e)],
        },
        {
          port: _0x1af0b3(0x116),
          keywords: [
            _0x1af0b3(0x116),
            _0x1af0b3(0x494),
            "潮镜",
            "潮境",
            _0x1af0b3(0x23a),
            _0x1af0b3(0x22e),
            _0x1af0b3(0x2a9),
          ],
          items: [_0x1af0b3(0x3b6), _0x1af0b3(0x28c), _0x1af0b3(0x28d)],
        },
        {
          port: _0x1af0b3(0x388),
          keywords: [
            _0x1af0b3(0x388),
            "雾灯",
            "摆灯",
            _0x1af0b3(0x13a),
            _0x1af0b3(0x35c),
            _0x1af0b3(0x29f),
          ],
          items: [
            _0x1af0b3(0x3e8),
            _0x1af0b3(0x1bb),
            _0x1af0b3(0x2d3),
            _0x1af0b3(0x28d),
            _0x1af0b3(0x145),
          ],
        },
        {
          port: _0x1af0b3(0x337),
          keywords: [
            _0x1af0b3(0x337),
            "珊文",
            _0x1af0b3(0x247),
            _0x1af0b3(0x1f4),
            _0x1af0b3(0x48b),
          ],
          items: [_0x1af0b3(0x34a), _0x1af0b3(0x2d3), _0x1af0b3(0x145)],
        },
      ],
      _0x490c89 = (() => {
        const _0x3b0444 = a0_0x2779,
          _0x233791 = new Map();
        for (const _0x3fe70b of _0x4714ed) {
          for (const _0x2abe63 of _0x3fe70b[_0x3b0444(0x405)]) {
            const _0x269770 = _0x1d8a1e(_0x2abe63);
            if (!_0x233791[_0x3b0444(0x112)](_0x269770))
              _0x233791[_0x3b0444(0x343)](_0x269770, new Set());
            _0x233791[_0x3b0444(0x129)](_0x269770)[_0x3b0444(0x378)](
              _0x3fe70b[_0x3b0444(0x2f0)],
            );
          }
        }
        return _0x233791;
      })();
    function _0x2e70c2(_0x121d82) {
      const _0x494c6f = a0_0x2779;
      return _0x490c89[_0x494c6f(0x129)](_0x1d8a1e(_0x121d82)) || new Set();
    }
    function _0x35f4fb(_0x1dd280) {
      const _0x5df7be = a0_0x2779;
      return _0x2e70c2(_0x1dd280)[_0x5df7be(0x444)] > 0x1;
    }
    function _0x34b4bb(_0x548fb9, _0x49834d) {
      const _0x167570 = a0_0x2779,
        _0x452436 = _0x2e70c2(_0x49834d);
      return (
        _0x452436[_0x167570(0x444)] === 0x1 &&
        _0x452436[_0x167570(0x112)](_0x72ad5e(_0x548fb9))
      );
    }
    function _0x5d44fb(_0x1af4fd) {
      const _0x4abd7c = a0_0x2779;
      if (!_0x1af4fd || typeof _0x1af4fd !== _0x4abd7c(0x3ad)) return ![];
      const _0xa02f6a = _0x452e3a(
        _0x1af4fd[_0x4abd7c(0x479)] ??
          _0x1af4fd[_0x4abd7c(0x15a)] ??
          _0x1af4fd[_0x4abd7c(0x163)] ??
          _0x1af4fd[_0x4abd7c(0x2f3)],
      );
      if (_0xa02f6a === null) return ![];
      const _0x3b0696 = String(_0x1af4fd[_0x4abd7c(0x45c)] || "")[
          _0x4abd7c(0x3db)
        ](),
        _0x51eae2 =
          !!_0x3b0696 &&
          _0x3b0696 !== "-" &&
          _0x3b0696 !== _0x4abd7c(0x18a) &&
          _0x3b0696 !== "未知";
      return !!(
        _0x51eae2 ||
        _0x1af4fd[_0x4abd7c(0x4ed)] ||
        _0x1af4fd[_0x4abd7c(0x291)] ||
        _0x1af4fd[_0x4abd7c(0x4b3)] ||
        _0x1af4fd[_0x4abd7c(0x32e)] ||
        _0x1af4fd[_0x4abd7c(0x1e9)] ||
        _0x1af4fd[_0x4abd7c(0x439)]
      );
    }
    function _0x2d72a5(_0x43ea00, _0x579260) {
      const _0x3298fb = a0_0x2779;
      if (!_0x579260 || typeof _0x579260 !== _0x3298fb(0x3ad)) return ![];
      for (const [_0x5a1af6, _0x563095] of Object[_0x3298fb(0x4ac)](
        _0x579260,
      )) {
        const _0x306dda = _0x1d8a1e(_0x5a1af6);
        if (!_0x2e8d9a(_0x43ea00, _0x306dda)) continue;
        if (!_0x34b4bb(_0x43ea00, _0x306dda)) continue;
        if (_0x5d44fb(_0x563095)) return !![];
      }
      return ![];
    }
    const _0x4c221e = {
        zh: {
          星沉湾: _0x1af0b3(0x1f2),
          夜帆市: _0x1af0b3(0x16f),
          鲸歌港: _0x1af0b3(0x447),
          潮镜礁: _0x1af0b3(0x116),
          雾灯群岛: _0x1af0b3(0x388),
          珊文港: _0x1af0b3(0x337),
        },
        en: {
          星沉湾: _0x1af0b3(0x281),
          夜帆市: _0x1af0b3(0x176),
          鲸歌港: _0x1af0b3(0x3aa),
          潮镜礁: _0x1af0b3(0x23a),
          雾灯群岛: _0x1af0b3(0x13a),
          珊文港: _0x1af0b3(0x247),
        },
      },
      _0xa0229d = {
        zh: {
          星砂瓶: _0x1af0b3(0x3d9),
          浮梦拿铁: _0x1af0b3(0x2d3),
          海妖咖啡: _0x1af0b3(0x312),
          焦糖玛奇朵: _0x1af0b3(0x28c),
          夜帆布: _0x1af0b3(0x19e),
          黑潮摩卡: _0x1af0b3(0x28d),
          安神贝露: _0x1af0b3(0x12e),
          鲸歌骨笛: _0x1af0b3(0x423),
          潮镜贝: _0x1af0b3(0x3b6),
          雾铜牌: _0x1af0b3(0x1bb),
          雾灯芯: _0x1af0b3(0x3e8),
          幻潮冷萃: _0x1af0b3(0x145),
          珊文签: _0x1af0b3(0x34a),
        },
        en: {
          星砂瓶: _0x1af0b3(0x1eb),
          浮梦拿铁: _0x1af0b3(0x2ab),
          海妖咖啡: _0x1af0b3(0x219),
          焦糖玛奇朵: _0x1af0b3(0x3bf),
          夜帆布: _0x1af0b3(0x407),
          黑潮摩卡: _0x1af0b3(0x39c),
          安神贝露: _0x1af0b3(0x126),
          鲸歌骨笛: _0x1af0b3(0x420),
          潮镜贝: _0x1af0b3(0x2dc),
          雾铜牌: _0x1af0b3(0x504),
          雾灯芯: _0x1af0b3(0x3e6),
          幻潮冷萃: _0x1af0b3(0x1b1),
          珊文签: _0x1af0b3(0x201),
        },
      },
      _0x305e32 = {
        zh: {
          syncLast: _0x1af0b3(0x3e7),
          syncOk: _0x1af0b3(0x3ea),
          syncFail: _0x1af0b3(0x311),
          syncFailCompact: _0x1af0b3(0x463),
          syncHint: _0x1af0b3(0x12b),
          syncWait: _0x1af0b3(0x514),
          emptyChangesTitle: _0x1af0b3(0x4b2),
          emptyChangesSub: _0x1af0b3(0x1f7),
          changesSinceRead: _0x1af0b3(0x41c),
          markRead: _0x1af0b3(0x206),
          newItem: _0x1af0b3(0x36e),
          itemRemoved: _0x1af0b3(0x264),
          original: "原",
          coin: "魚幣",
          restockChanged: _0x1af0b3(0x1a6),
          itemCount: _0x1af0b3(0x2ba),
          lastUpdate: _0x1af0b3(0x2af),
          lowStock: _0x1af0b3(0x3a5),
          changeCount: _0x1af0b3(0x393),
          noChange: _0x1af0b3(0x287),
          sort: "排序",
          sortLowStock: _0x1af0b3(0x1a5),
          sortTime: _0x1af0b3(0x27c),
          sortPrice: "價格",
          sortName: _0x1af0b3(0x1d0),
          goodsEmpty: _0x1af0b3(0x51a),
          update: "更新",
          restock: "補貨",
          estimatedRestock: _0x1af0b3(0x4db),
          restockBasisSkill: _0x1af0b3(0x36f),
          added: "新增",
          disappeared: "消失",
          changed: "變更",
          settingsLanguage: "語言",
          settingsLanguageSub: _0x1af0b3(0x4ff),
          langAuto: _0x1af0b3(0x39e),
          langZh: "中文",
          langEn: _0x1af0b3(0x3c1),
          quickScan: _0x1af0b3(0x1d1),
          quickScanSub: _0x1af0b3(0x456),
          quickScanOkTitle: _0x1af0b3(0x4b1),
          quickScanOkMessage: _0x1af0b3(0x3c6),
          cloudPullOkTitle: _0x1af0b3(0x1c6),
          cloudPullOkMessage: _0x1af0b3(0x2b5),
          cloudPullEmptyTitle: _0x1af0b3(0x136),
          cloudPullEmptyMessage: _0x1af0b3(0x376),
          showToast: _0x1af0b3(0x4a4),
          showToastSub: _0x1af0b3(0x3f6),
          showBadge: _0x1af0b3(0x13e),
          showBadgeSub: _0x1af0b3(0x44b),
          showTravel: _0x1af0b3(0x296),
          showTravelSub: _0x1af0b3(0x4d2),
          defaultPage: _0x1af0b3(0x28f),
          defaultPageSub: _0x1af0b3(0x2e6),
          lowStockRatio: _0x1af0b3(0x522),
          lowStockRatioSub: _0x1af0b3(0x18e),
          cloudDiag: _0x1af0b3(0x40f),
          url: "網址",
          status: "狀態",
          normal: "正常",
          failed: "失敗",
          checking: _0x1af0b3(0x47d),
          lastSuccess: _0x1af0b3(0x1fb),
          lastFailure: _0x1af0b3(0x403),
          error: "錯誤",
          resetChanges: _0x1af0b3(0x328),
          scanCurrent: _0x1af0b3(0x336),
          syncNow: _0x1af0b3(0x125),
          pingCloud: _0x1af0b3(0x3c4),
          panelTitle: _0x1af0b3(0x254),
          panelSubtitle: _0x1af0b3(0x2b0),
          close: "關閉",
          hasChanges: _0x1af0b3(0x307),
          noNewChanges: _0x1af0b3(0x326),
          tabChanges: "變化",
          tabOverview: "概覽",
          tabPorts: "港口",
          tabSettings: "設定",
          launcher: _0x1af0b3(0x4c7),
          travelTitle: _0x1af0b3(0x197),
          travelDuration: _0x1af0b3(0x382),
          travelArrive: _0x1af0b3(0x29e),
          travelReturn: _0x1af0b3(0x519),
          tomorrow: "明天",
          goodsInfo: _0x1af0b3(0x353),
          itemsShort: _0x1af0b3(0x2ce),
          estimate: "推估",
          noSyncData: _0x1af0b3(0x1b0),
          resetToastTitle: _0x1af0b3(0x39a),
          resetToastMessage: _0x1af0b3(0x3ba),
          noScanTitle: _0x1af0b3(0x3cb),
          noScanMessage: _0x1af0b3(0x50d),
          skillScanToastTitle: _0x1af0b3(0x4d3),
          skillScanToastMessage: _0x1af0b3(0x315),
          cloudNewerTitle: _0x1af0b3(0x508),
          cloudNewerMessage: _0x1af0b3(0x366),
          uploadFailTitle: _0x1af0b3(0x29d),
          uploadFailMessage: _0x1af0b3(0x292),
          syncFailTitle: _0x1af0b3(0x4af),
          syncFailMessage: _0x1af0b3(0x3d7),
          pingFailTitle: _0x1af0b3(0x1ba),
          pingOkTitle: _0x1af0b3(0x3a0),
          pingOkMessage: _0x1af0b3(0x486),
          voyageCount: _0x1af0b3(0x4e0),
          voyageCountEmpty: _0x1af0b3(0x2c7),
          voyageArriving: _0x1af0b3(0x329),
          voyageStatusDeparting: "前往",
          voyageStatusReturning: "返航",
          voyageStatusArrived: "到港",
        },
        en: {
          syncLast: _0x1af0b3(0x47f),
          syncOk: _0x1af0b3(0x42a),
          syncFail: _0x1af0b3(0x483),
          syncFailCompact: _0x1af0b3(0x2f6),
          syncHint: _0x1af0b3(0x4ba),
          syncWait: _0x1af0b3(0x121),
          emptyChangesTitle: _0x1af0b3(0x513),
          emptyChangesSub: _0x1af0b3(0x2cf),
          changesSinceRead: _0x1af0b3(0x3f8),
          markRead: _0x1af0b3(0x38b),
          newItem: _0x1af0b3(0x3c5),
          itemRemoved: _0x1af0b3(0x510),
          original: _0x1af0b3(0x478),
          coin: _0x1af0b3(0x43f),
          restockChanged: _0x1af0b3(0x286),
          itemCount: _0x1af0b3(0x1c4),
          lastUpdate: _0x1af0b3(0x1e3),
          lowStock: _0x1af0b3(0x4b7),
          changeCount: _0x1af0b3(0x381),
          noChange: _0x1af0b3(0x49f),
          sort: _0x1af0b3(0x4fb),
          sortLowStock: _0x1af0b3(0x4e4),
          sortTime: _0x1af0b3(0x359),
          sortPrice: _0x1af0b3(0x1d2),
          sortName: _0x1af0b3(0x2d6),
          goodsEmpty: _0x1af0b3(0x111),
          update: _0x1af0b3(0x3d5),
          restock: _0x1af0b3(0x400),
          estimatedRestock: _0x1af0b3(0x15c),
          restockBasisSkill: _0x1af0b3(0x12c),
          added: _0x1af0b3(0x509),
          disappeared: _0x1af0b3(0x37b),
          changed: _0x1af0b3(0x19a),
          settingsLanguage: _0x1af0b3(0x4c8),
          settingsLanguageSub: _0x1af0b3(0x2f1),
          langAuto: _0x1af0b3(0x39e),
          langZh: "中文",
          langEn: _0x1af0b3(0x3c1),
          quickScan: _0x1af0b3(0x497),
          quickScanSub: _0x1af0b3(0x221),
          quickScanOkTitle: _0x1af0b3(0x119),
          quickScanOkMessage: _0x1af0b3(0x458),
          cloudPullOkTitle: _0x1af0b3(0x499),
          cloudPullOkMessage: _0x1af0b3(0x15b),
          cloudPullEmptyTitle: _0x1af0b3(0x440),
          cloudPullEmptyMessage: _0x1af0b3(0x4e8),
          showToast: _0x1af0b3(0x2fc),
          showToastSub: _0x1af0b3(0x1a0),
          showBadge: _0x1af0b3(0x4ae),
          showBadgeSub: _0x1af0b3(0x122),
          showTravel: _0x1af0b3(0x48d),
          showTravelSub: _0x1af0b3(0x338),
          defaultPage: _0x1af0b3(0x32c),
          defaultPageSub: _0x1af0b3(0x289),
          lowStockRatio: _0x1af0b3(0x124),
          lowStockRatioSub: _0x1af0b3(0x528),
          cloudDiag: _0x1af0b3(0x3e0),
          url: _0x1af0b3(0x188),
          status: _0x1af0b3(0x437),
          normal: "OK",
          failed: _0x1af0b3(0x371),
          checking: _0x1af0b3(0x43b),
          lastSuccess: _0x1af0b3(0x1c9),
          lastFailure: _0x1af0b3(0x2f9),
          error: _0x1af0b3(0x50a),
          resetChanges: _0x1af0b3(0x417),
          scanCurrent: _0x1af0b3(0x15e),
          syncNow: _0x1af0b3(0x481),
          pingCloud: _0x1af0b3(0x300),
          panelTitle: _0x1af0b3(0x399),
          panelSubtitle: _0x1af0b3(0x243),
          close: _0x1af0b3(0x503),
          hasChanges: _0x1af0b3(0x178),
          noNewChanges: _0x1af0b3(0x192),
          tabChanges: _0x1af0b3(0x487),
          tabOverview: _0x1af0b3(0x415),
          tabPorts: _0x1af0b3(0x383),
          tabSettings: _0x1af0b3(0x305),
          launcher: _0x1af0b3(0x20f),
          travelTitle: _0x1af0b3(0x4ef),
          travelDuration: _0x1af0b3(0x23b),
          travelArrive: _0x1af0b3(0x1f8),
          travelReturn: _0x1af0b3(0x299),
          tomorrow: _0x1af0b3(0x31a),
          goodsInfo: _0x1af0b3(0x321),
          itemsShort: _0x1af0b3(0x1c4),
          estimate: _0x1af0b3(0x160),
          noSyncData: _0x1af0b3(0x2a1),
          resetToastTitle: _0x1af0b3(0x27d),
          resetToastMessage: _0x1af0b3(0x431),
          noScanTitle: _0x1af0b3(0x4b6),
          noScanMessage: _0x1af0b3(0x41b),
          skillScanToastTitle: _0x1af0b3(0x283),
          skillScanToastMessage: _0x1af0b3(0x242),
          cloudNewerTitle: _0x1af0b3(0x461),
          cloudNewerMessage: _0x1af0b3(0x43c),
          uploadFailTitle: _0x1af0b3(0x525),
          uploadFailMessage: _0x1af0b3(0x3d4),
          syncFailTitle: _0x1af0b3(0x361),
          syncFailMessage: _0x1af0b3(0x14d),
          pingFailTitle: _0x1af0b3(0x2b1),
          pingOkTitle: _0x1af0b3(0x347),
          pingOkMessage: _0x1af0b3(0x413),
          voyageCount: _0x1af0b3(0x49c),
          voyageCountEmpty: _0x1af0b3(0x17e),
          voyageArriving: _0x1af0b3(0x3f3),
          voyageStatusDeparting: "To",
          voyageStatusReturning: _0x1af0b3(0x369),
          voyageStatusArrived: _0x1af0b3(0x49e),
        },
      };
    function _0x892a2a() {
      const _0x1fbb31 = a0_0x2779,
        _0x2c9599 = String(
          document[_0x1fbb31(0x3b5)]?.[_0x1fbb31(0x4a3)] || "",
        )[_0x1fbb31(0x2da)]();
      if (_0x2c9599[_0x1fbb31(0x2b7)]("en")) return "en";
      if (_0x2c9599[_0x1fbb31(0x2b7)]("zh")) return "zh";
      const _0xb51c71 = String(
          document[_0x1fbb31(0x4b4)]?.[_0x1fbb31(0x3b8)] || "",
        )[_0x1fbb31(0x1ae)](0x0, 0x1f40),
        _0x261337 = (_0xb51c71[_0x1fbb31(0x1d8)](
          /\b(Quantity|Details|Language|Stock|Price|Restock|Depart|Return|Market|Warehouse|Trade Info|Coins)\b/g,
        ) || [])[_0x1fbb31(0x40a)],
        _0x5a45ae = (_0xb51c71[_0x1fbb31(0x1d8)](
          /(數量|数量|詳情|详情|語言|语言|庫存|库存|價格|价格|補貨|补货|出發|出发|返回|返航|市場|市场|倉庫|仓库)/g,
        ) || [])[_0x1fbb31(0x40a)];
      if (_0x261337 > _0x5a45ae && _0x261337 >= 0x2) return "en";
      if (_0x5a45ae > 0x0) return "zh";
      return navigator[_0x1fbb31(0x2f2)] &&
        navigator[_0x1fbb31(0x2f2)][_0x1fbb31(0x2da)]()[_0x1fbb31(0x2b7)]("en")
        ? "en"
        : "zh";
    }
    function _0x5e2019() {
      const _0x338879 = a0_0x2779,
        _0x41974a = _0x1d5e31()[_0x338879(0x2f2)] || _0x338879(0x216);
      if (_0x41974a === "en" || _0x41974a === "zh") return _0x41974a;
      return _0x892a2a();
    }
    function _0x1c7c17(_0x4e88a9, _0x17b67a = {}) {
      const _0x17c618 = a0_0x2779,
        _0x2f30fa = _0x5e2019();
      let _0x550175 =
        (_0x305e32[_0x2f30fa] && _0x305e32[_0x2f30fa][_0x4e88a9]) ||
        _0x305e32["zh"][_0x4e88a9] ||
        _0x4e88a9;
      for (const [_0x57ef04, _0x10fc8f] of Object[_0x17c618(0x4ac)](
        _0x17b67a || {},
      )) {
        _0x550175 = _0x550175[_0x17c618(0x110)](
          "{" + _0x57ef04 + "}",
          String(_0x10fc8f),
        );
      }
      return _0x550175;
    }
    function _0x3e8d59(_0x46d78f) {
      const _0x38d8fa = _0x72ad5e(_0x46d78f);
      return (
        (_0x4c221e[_0x5e2019()] && _0x4c221e[_0x5e2019()][_0x38d8fa]) ||
        _0x4c221e["zh"][_0x38d8fa] ||
        _0x38d8fa
      );
    }
    function _0x2024de(_0x3f6a50) {
      const _0xbfcb1c = _0x1d8a1e(_0x3f6a50);
      return (
        (_0xa0229d[_0x5e2019()] && _0xa0229d[_0x5e2019()][_0xbfcb1c]) ||
        _0xa0229d["zh"][_0xbfcb1c] ||
        _0xbfcb1c
      );
    }
    function _0x4f356d(_0x13555f) {
      const _0x405eb0 = a0_0x2779;
      if (
        _0x13555f === null ||
        _0x13555f === undefined ||
        _0x13555f === "" ||
        _0x13555f === "-"
      )
        return "-";
      return _0x13555f + "\x20" + _0x1c7c17(_0x405eb0(0x374));
    }
    function _0x72ad5e(_0x5511c4) {
      const _0x476619 = a0_0x2779,
        _0x505acd = String(_0x5511c4 || "")[_0x476619(0x3db)]();
      return _0x110874[_0x505acd] || _0x505acd;
    }
    function _0x1d8a1e(_0x1327df) {
      const _0x548f46 = a0_0x2779,
        _0x34a6f4 = String(_0x1327df || "")[_0x548f46(0x3db)]();
      return _0xfd3a00[_0x34a6f4] || _0x34a6f4;
    }
    function _0x452e3a(_0x3d01c2) {
      const _0x260388 = a0_0x2779;
      if (_0x3d01c2 === null || _0x3d01c2 === undefined || _0x3d01c2 === "")
        return null;
      const _0x3b4d02 = Number(
        String(_0x3d01c2)[_0x260388(0x2b3)](/,/g, "")[_0x260388(0x3db)](),
      );
      return Number[_0x260388(0x4f8)](_0x3b4d02) ? _0x3b4d02 : null;
    }
    function _0x32abaa(_0x3a9f39) {
      const _0x9b7f1 = a0_0x2779;
      return String(_0x3a9f39 ?? "")
        [_0x9b7f1(0x2b3)](/&/g, _0x9b7f1(0x518))
        [_0x9b7f1(0x2b3)](/</g, _0x9b7f1(0x51e))
        [_0x9b7f1(0x2b3)](/>/g, _0x9b7f1(0x364))
        [_0x9b7f1(0x2b3)](/"/g, _0x9b7f1(0x38c))
        [_0x9b7f1(0x2b3)](/'/g, _0x9b7f1(0x2a0));
    }
    function _0x3d8818(_0x470576) {
      const _0x15c1cb = a0_0x2779;
      return JSON[_0x15c1cb(0x2c6)](JSON[_0x15c1cb(0x2ac)](_0x470576 || {}));
    }
    function _0x56ec62(_0x4dede8, _0x17155b) {
      const _0x53619d = a0_0x2779;
      try {
        const _0x1c81dd = localStorage[_0x53619d(0x306)](_0x4dede8);
        if (!_0x1c81dd) return _0x3d8818(_0x17155b);
        const _0x828e32 = JSON[_0x53619d(0x2c6)](_0x1c81dd);
        return _0x828e32 && typeof _0x828e32 === _0x53619d(0x3ad)
          ? _0x828e32
          : _0x3d8818(_0x17155b);
      } catch (_0x13ed8e) {
        return (
          console[_0x53619d(0x1fc)](_0x53619d(0x32f), _0x4dede8, _0x13ed8e),
          _0x3d8818(_0x17155b)
        );
      }
    }
    function _0x3c2272(_0x484786, _0x136c90) {
      const _0x4dffc4 = a0_0x2779;
      localStorage[_0x4dffc4(0x1e2)](
        _0x484786,
        JSON[_0x4dffc4(0x2ac)](_0x136c90),
      );
    }
    function _0x10db8e() {
      const _0x3a0f6b = a0_0x2779,
        _0x3d3fea = new Date();
      return (
        _0x3d3fea[_0x3a0f6b(0x36a)]() +
        "/" +
        String(_0x3d3fea[_0x3a0f6b(0x2b9)]() + 0x1)[_0x3a0f6b(0x3ed)](
          0x2,
          "0",
        ) +
        "/" +
        String(_0x3d3fea[_0x3a0f6b(0x492)]())[_0x3a0f6b(0x3ed)](0x2, "0") +
        "\x20" +
        String(_0x3d3fea[_0x3a0f6b(0x4f9)]())[_0x3a0f6b(0x3ed)](0x2, "0") +
        ":" +
        String(_0x3d3fea[_0x3a0f6b(0x459)]())[_0x3a0f6b(0x3ed)](0x2, "0")
      );
    }
    function _0x578ca3(_0x28ae82) {
      const _0x57cdab = a0_0x2779;
      if (!_0x28ae82) return "-";
      const _0x33f9b2 = new Date(_0x28ae82);
      if (Number[_0x57cdab(0x4c1)](_0x33f9b2[_0x57cdab(0x27e)]())) return "-";
      return (
        String(_0x33f9b2[_0x57cdab(0x4f9)]())[_0x57cdab(0x3ed)](0x2, "0") +
        ":" +
        String(_0x33f9b2[_0x57cdab(0x459)]())[_0x57cdab(0x3ed)](0x2, "0")
      );
    }
    function _0x44ff3d() {
      const _0x122cae = a0_0x2779;
      return {
        count: 0x0,
        max: null,
        time: _0x122cae(0x18a),
        price: "-",
        restock: "-",
        lastRestockAt: "",
        soldOutAt: "",
        estimatedRestockAt: "",
        estimateStatus: _0x122cae(0x2e3),
        restockAnchorAt: "",
        restockAnchorCount: "",
        restockAnchorMax: "",
        estimateBasis: "",
        estimateText: "",
        lastRestockSource: "",
        observationSource: "",
        clientObservedAt: "",
        syncVersion: "",
      };
    }
    function _0x2782fd() {
      const _0x2ba417 = a0_0x2779,
        _0x1283c3 = {};
      for (const _0x8f997b of _0x4714ed) {
        _0x1283c3[_0x8f997b[_0x2ba417(0x2f0)]] = {};
        for (const _0x3b0780 of _0x8f997b[_0x2ba417(0x405)])
          _0x1283c3[_0x8f997b[_0x2ba417(0x2f0)]][_0x3b0780] = _0x44ff3d();
      }
      return _0x1283c3;
    }
    function _0x1795ad() {
      return _0x56ec62(_0x429a3a, null);
    }
    function _0x553361(_0x9cc873) {
      _0x3c2272(_0x429a3a, _0x9cc873);
    }
    function _0x598ea4() {
      return _0x56ec62(_0x5cd0b9, null);
    }
    function _0x3c6c7d(_0x223b85) {
      _0x3c2272(_0x5cd0b9, _0x413f88(_0x223b85));
    }
    function _0x1d5e31() {
      const _0x12d1e3 = a0_0x2779;
      return Object[_0x12d1e3(0x505)](
        {},
        _0x4f0054,
        _0x56ec62(_0x1cdc7b, _0x4f0054),
      );
    }
    function _0x225fe6(_0x1218cc) {
      const _0x5b5a89 = a0_0x2779;
      _0x3c2272(
        _0x1cdc7b,
        Object[_0x5b5a89(0x505)]({}, _0x4f0054, _0x1218cc || {}),
      );
    }
    function _0x243cb9() {
      const _0x1e3d6a = a0_0x2779;
      return Object[_0x1e3d6a(0x505)](
        {},
        _0x539266,
        _0x56ec62(_0x133bee, _0x539266),
      );
    }
    function _0x5c0dc8(_0x493b73) {
      const _0x26a2fd = a0_0x2779;
      _0x3c2272(
        _0x133bee,
        Object[_0x26a2fd(0x505)]({}, _0x539266, _0x493b73 || {}),
      );
    }
    function _0x50bc96(_0x3f1adb) {
      const _0x4e6b34 = a0_0x2779,
        _0x3fda29 = String(_0x3f1adb || "")[_0x4e6b34(0x3db)](),
        _0x2b74cd = _0x3fda29[_0x4e6b34(0x2da)]();
      if (!_0x3fda29 || _0x3fda29[_0x4e6b34(0x40a)] > 0x12) return !![];
      if (/[。！？!?，,；;：:]/[_0x4e6b34(0x190)](_0x3fda29)) return !![];
      if (
        _0x3fda29[_0x4e6b34(0x34d)](_0x4e6b34(0x43e)) ||
        _0x3fda29[_0x4e6b34(0x34d)](_0x4e6b34(0x365)) ||
        _0x3fda29[_0x4e6b34(0x34d)](_0x4e6b34(0x46e)) ||
        _0x3fda29[_0x4e6b34(0x34d)](_0x4e6b34(0x217)) ||
        _0x3fda29[_0x4e6b34(0x34d)]("描述") ||
        _0x3fda29[_0x4e6b34(0x34d)]("說明") ||
        _0x3fda29[_0x4e6b34(0x34d)]("说明")
      )
        return !![];
      return (
        _0x3fda29[_0x4e6b34(0x34d)]("類別") ||
        _0x3fda29[_0x4e6b34(0x34d)]("类别") ||
        _0x2b74cd[_0x4e6b34(0x34d)](_0x4e6b34(0x375)) ||
        _0x2b74cd === _0x4e6b34(0x2be) ||
        _0x2b74cd === _0x4e6b34(0x1b9) ||
        _0x3fda29[_0x4e6b34(0x34d)]("效果") ||
        _0x3fda29[_0x4e6b34(0x34d)]("冷卻") ||
        _0x3fda29[_0x4e6b34(0x34d)]("冷却") ||
        _0x3fda29[_0x4e6b34(0x34d)]("價格") ||
        _0x3fda29[_0x4e6b34(0x34d)]("价格") ||
        _0x3fda29[_0x4e6b34(0x34d)]("售價") ||
        _0x3fda29[_0x4e6b34(0x34d)]("售价") ||
        _0x3fda29[_0x4e6b34(0x34d)]("單價") ||
        _0x3fda29[_0x4e6b34(0x34d)]("单价") ||
        _0x3fda29[_0x4e6b34(0x34d)]("庫存") ||
        _0x3fda29[_0x4e6b34(0x34d)]("库存") ||
        _0x3fda29[_0x4e6b34(0x34d)]("補貨") ||
        _0x3fda29[_0x4e6b34(0x34d)]("补货") ||
        _0x3fda29[_0x4e6b34(0x34d)]("數量") ||
        _0x3fda29[_0x4e6b34(0x34d)]("数量") ||
        _0x3fda29[_0x4e6b34(0x34d)]("合計") ||
        _0x3fda29[_0x4e6b34(0x34d)]("总计") ||
        _0x3fda29[_0x4e6b34(0x34d)]("購買") ||
        _0x3fda29[_0x4e6b34(0x34d)]("购买") ||
        _0x2b74cd[_0x4e6b34(0x34d)](_0x4e6b34(0x39b)) ||
        _0x2b74cd[_0x4e6b34(0x34d)](_0x4e6b34(0x24e)) ||
        _0x2b74cd[_0x4e6b34(0x34d)](_0x4e6b34(0x18b)) ||
        _0x2b74cd[_0x4e6b34(0x34d)](_0x4e6b34(0x31d)) ||
        _0x2b74cd[_0x4e6b34(0x34d)](_0x4e6b34(0x163)) ||
        _0x2b74cd[_0x4e6b34(0x34d)](_0x4e6b34(0x15a)) ||
        _0x2b74cd[_0x4e6b34(0x34d)](_0x4e6b34(0x50b))
      );
    }
    function _0x22fb0f(_0x434d30) {
      const _0x4bdec0 = a0_0x2779,
        _0x29beb2 = String(_0x434d30 || "");
      return (
        _0x29beb2[_0x4bdec0(0x34d)]("類別") ||
        _0x29beb2[_0x4bdec0(0x34d)]("类别") ||
        _0x29beb2[_0x4bdec0(0x2da)]()[_0x4bdec0(0x34d)](_0x4bdec0(0x375)) ||
        _0x29beb2[_0x4bdec0(0x2da)]()[_0x4bdec0(0x34d)](_0x4bdec0(0x39b)) ||
        _0x29beb2[_0x4bdec0(0x2da)]()[_0x4bdec0(0x34d)](_0x4bdec0(0x24e)) ||
        _0x29beb2[_0x4bdec0(0x2da)]()[_0x4bdec0(0x34d)](_0x4bdec0(0x18b)) ||
        _0x29beb2[_0x4bdec0(0x2da)]()[_0x4bdec0(0x34d)](_0x4bdec0(0x31d)) ||
        _0x29beb2[_0x4bdec0(0x2da)]()[_0x4bdec0(0x34d)](_0x4bdec0(0x163)) ||
        _0x29beb2[_0x4bdec0(0x2da)]()[_0x4bdec0(0x34d)](_0x4bdec0(0x15a)) ||
        _0x29beb2[_0x4bdec0(0x34d)]("效果") ||
        _0x29beb2[_0x4bdec0(0x34d)]("冷卻") ||
        _0x29beb2[_0x4bdec0(0x34d)]("冷却") ||
        _0x29beb2[_0x4bdec0(0x34d)]("單價") ||
        _0x29beb2[_0x4bdec0(0x34d)]("单价") ||
        _0x29beb2[_0x4bdec0(0x34d)](_0x4bdec0(0x1c3)) ||
        _0x29beb2[_0x4bdec0(0x34d)](_0x4bdec0(0x4b5)) ||
        _0x29beb2[_0x4bdec0(0x34d)]("合計") ||
        _0x29beb2[_0x4bdec0(0x34d)]("总计")
      );
    }
    function _0x2cb9e6(_0x3d43da) {
      const _0x33d353 = a0_0x2779,
        _0x2248b4 = _0x72ad5e(_0x3d43da);
      return (
        _0x4714ed[_0x33d353(0x150)](
          (_0x456554) => _0x456554[_0x33d353(0x2f0)] === _0x2248b4,
        ) || null
      );
    }
    function _0x2e8d9a(_0x4482bf, _0x30177a) {
      const _0x15bf9c = a0_0x2779,
        _0x481b15 = _0x2cb9e6(_0x4482bf),
        _0x575f07 = _0x1d8a1e(_0x30177a);
      return (
        !!_0x481b15 && _0x481b15[_0x15bf9c(0x405)][_0x15bf9c(0x34d)](_0x575f07)
      );
    }
    function _0x413f88(_0x4e2a28) {
      const _0x4b4249 = a0_0x2779,
        _0x15c145 = {},
        _0x54cd50 =
          _0x4e2a28 && typeof _0x4e2a28 === _0x4b4249(0x3ad) ? _0x4e2a28 : {};
      for (const [_0x4d872e, _0x40cc53] of Object[_0x4b4249(0x4ac)](
        _0x54cd50,
      )) {
        const _0x2dfcd8 = _0x72ad5e(_0x4d872e);
        if (!_0x40cc53 || typeof _0x40cc53 !== _0x4b4249(0x3ad)) continue;
        if (!_0x15c145[_0x2dfcd8]) _0x15c145[_0x2dfcd8] = {};
        for (const [_0x5c0e62, _0xddcf1c] of Object[_0x4b4249(0x4ac)](
          _0x40cc53,
        )) {
          const _0x56919e = _0x1d8a1e(_0x5c0e62);
          if (_0x50bc96(_0x56919e)) continue;
          if (!_0x2e8d9a(_0x2dfcd8, _0x56919e)) continue;
          const _0x4ac8b1 =
              _0xddcf1c && typeof _0xddcf1c === _0x4b4249(0x3ad)
                ? _0xddcf1c
                : {},
            _0xacc78c = _0x452e3a(
              _0x4ac8b1[_0x4b4249(0x479)] ??
                _0x4ac8b1[_0x4b4249(0x15a)] ??
                _0x4ac8b1[_0x4b4249(0x163)] ??
                _0x4ac8b1[_0x4b4249(0x2f3)],
            );
          _0x15c145[_0x2dfcd8][_0x56919e] = {
            count: _0xacc78c ?? 0x0,
            max: _0x452e3a(_0x4ac8b1[_0x4b4249(0x238)]),
            price: _0x4ac8b1[_0x4b4249(0x31d)] || "-",
            restock:
              _0x4ac8b1[_0x4b4249(0x4ea)] ||
              _0x4ac8b1[_0x4b4249(0x526)] ||
              _0x4ac8b1[_0x4b4249(0x26a)] ||
              "-",
            time: _0x4ac8b1[_0x4b4249(0x45c)] || "未知",
            lastRestockAt: _0x4ac8b1[_0x4b4249(0x1e9)] || "",
            soldOutAt: _0x4ac8b1[_0x4b4249(0x34e)] || "",
            estimatedRestockAt: _0x4ac8b1[_0x4b4249(0x439)] || "",
            estimateStatus: _0x4ac8b1[_0x4b4249(0x430)] || _0x4b4249(0x2e3),
            restockAnchorAt: _0x4ac8b1[_0x4b4249(0x47e)] || "",
            restockAnchorCount: _0x4ac8b1[_0x4b4249(0x244)] || "",
            restockAnchorMax: _0x4ac8b1[_0x4b4249(0x313)] || "",
            estimateBasis: _0x4ac8b1[_0x4b4249(0x51b)] || "",
            estimateText:
              _0x4ac8b1[_0x4b4249(0x191)] ||
              _0x4ac8b1[_0x4b4249(0x3e3)] ||
              _0x4ac8b1[_0x4b4249(0x355)] ||
              "",
            lastRestockSource:
              _0x4ac8b1[_0x4b4249(0x3a9)] || _0x4ac8b1[_0x4b4249(0x32a)] || "",
            observationSource:
              _0x4ac8b1[_0x4b4249(0x32e)] || _0x4ac8b1[_0x4b4249(0x4b3)] || "",
            clientObservedAt:
              _0x4ac8b1[_0x4b4249(0x4ed)] || _0x4ac8b1[_0x4b4249(0x291)] || "",
            syncVersion:
              _0x4ac8b1[_0x4b4249(0x291)] || _0x4ac8b1[_0x4b4249(0x4ed)] || "",
          };
        }
      }
      return _0x15c145;
    }
    function _0x4082e4() {
      const _0x46760e = a0_0x2779;
      let _0x58f2cc = _0x1795ad();
      if (!_0x58f2cc || typeof _0x58f2cc !== _0x46760e(0x3ad))
        return ((_0x58f2cc = _0x2782fd()), _0x553361(_0x58f2cc), _0x58f2cc);
      const _0x5564ff = _0x2782fd();
      let _0x2a517e = ![];
      for (const [_0x1236bc, _0x47fb88] of Object[_0x46760e(0x4ac)]({
        ..._0x58f2cc,
      })) {
        const _0x2df961 = _0x72ad5e(_0x1236bc);
        _0x2df961 !== _0x1236bc &&
          ((_0x58f2cc[_0x2df961] = Object[_0x46760e(0x505)](
            _0x58f2cc[_0x2df961] || {},
            _0x47fb88,
          )),
          delete _0x58f2cc[_0x1236bc],
          (_0x2a517e = !![]));
      }
      for (const [_0x46f013, _0x2f22b6] of Object[_0x46760e(0x4ac)](
        _0x58f2cc,
      )) {
        if (!_0x2f22b6 || typeof _0x2f22b6 !== _0x46760e(0x3ad)) continue;
        for (const [_0x40c773, _0x32f5a7] of Object[_0x46760e(0x4ac)]({
          ..._0x2f22b6,
        })) {
          if (_0x50bc96(_0x40c773)) {
            (delete _0x2f22b6[_0x40c773], (_0x2a517e = !![]));
            continue;
          }
          const _0x335483 = _0x1d8a1e(_0x40c773);
          _0x335483 !== _0x40c773 &&
            ((_0x2f22b6[_0x335483] = Object[_0x46760e(0x505)](
              _0x2f22b6[_0x335483] || {},
              _0x32f5a7,
            )),
            delete _0x2f22b6[_0x40c773],
            (_0x2a517e = !![]));
          if (!_0x2e8d9a(_0x46f013, _0x335483)) {
            (delete _0x2f22b6[_0x335483], (_0x2a517e = !![]));
            continue;
          }
          const _0x4f6524 = _0x2f22b6[_0x335483];
          _0x4f6524 &&
            typeof _0x4f6524 === _0x46760e(0x3ad) &&
            _0x46760e(0x1af) in _0x4f6524 &&
            (delete _0x4f6524[_0x46760e(0x1af)], (_0x2a517e = !![]));
        }
      }
      for (const [_0x1d4a74, _0xf0da2f] of Object[_0x46760e(0x4ac)](
        _0x5564ff,
      )) {
        !_0x58f2cc[_0x1d4a74] &&
          ((_0x58f2cc[_0x1d4a74] = {}), (_0x2a517e = !![]));
        for (const [_0x5d1dff, _0x499f91] of Object[_0x46760e(0x4ac)](
          _0xf0da2f,
        )) {
          if (!_0x58f2cc[_0x1d4a74][_0x5d1dff]) {
            ((_0x58f2cc[_0x1d4a74][_0x5d1dff] = { ..._0x499f91 }),
              (_0x2a517e = !![]));
            continue;
          }
          const _0x71ebaf = _0x58f2cc[_0x1d4a74][_0x5d1dff];
          for (const [_0x44b595, _0x2add8c] of Object[_0x46760e(0x4ac)](
            _0x499f91,
          )) {
            !(_0x44b595 in _0x71ebaf) &&
              ((_0x71ebaf[_0x44b595] = _0x2add8c), (_0x2a517e = !![]));
          }
        }
      }
      if (_0x2a517e) _0x553361(_0x58f2cc);
      return _0x58f2cc;
    }
    function _0x3094d0() {
      const _0x310328 = a0_0x2779,
        _0x8de488 = _0x598ea4();
      if (_0x8de488 && Object[_0x310328(0x13c)](_0x8de488)[_0x310328(0x40a)])
        return;
      _0x3c6c7d(_0x4082e4());
    }
    function _0x151739() {
      const _0x170d45 = a0_0x2779;
      if (!document[_0x170d45(0x4b4)]) return "";
      const _0x5ae321 = document[_0x170d45(0x4b4)][_0x170d45(0x434)](!![]);
      return (
        _0x5ae321[_0x170d45(0x435)](_0x170d45(0x294))[_0x170d45(0x2aa)](
          (_0x2f2702) => _0x2f2702[_0x170d45(0x203)](),
        ),
        _0x5ae321[_0x170d45(0x3b8)] || ""
      );
    }
    function _0x2b2907(_0x507184, _0x4a4123) {
      const _0x3e5593 = a0_0x2779,
        _0x50308b = String(_0x507184 || ""),
        _0x260fc7 = String(_0x4a4123 || "");
      if (!_0x50308b || !_0x260fc7) return 0x0;
      let _0x48d33b = 0x0,
        _0x1eb634 = 0x0;
      while (
        (_0x1eb634 = _0x50308b[_0x3e5593(0x288)](_0x260fc7, _0x1eb634)) !== -0x1
      ) {
        (_0x48d33b++,
          (_0x1eb634 += Math[_0x3e5593(0x238)](
            0x1,
            _0x260fc7[_0x3e5593(0x40a)],
          )));
      }
      return _0x48d33b;
    }
    function _0x14f89e(_0x4cb9c3) {
      const _0x15db3f = a0_0x2779,
        _0x4c2f16 = String(_0x4cb9c3 || ""),
        _0x97b590 = new Set();
      for (const _0x35181e of _0x178f56()) {
        const _0x4f4113 = _0x1d8a1e(_0x35181e);
        if (!_0x4f4113 || _0x50bc96(_0x4f4113)) continue;
        if (
          _0x29708b(_0x4f4113)[_0x15db3f(0x1cb)](
            (_0x817b76) => _0x817b76 && _0x4c2f16[_0x15db3f(0x34d)](_0x817b76),
          )
        )
          _0x97b590[_0x15db3f(0x378)](_0x4f4113);
      }
      return [..._0x97b590];
    }
    function _0x34e6f4() {
      const _0x2d851d = a0_0x2779,
        _0x4a1af6 = [],
        _0x237b05 = [...document[_0x2d851d(0x435)](_0x2d851d(0x170))];
      for (const _0xadacc0 of _0x237b05) {
        if (!_0x320977(_0xadacc0)) continue;
        if (_0xadacc0[_0x2d851d(0x2dd)](_0x2d851d(0x294))) continue;
        const _0x5c37d2 = _0xadacc0[_0x2d851d(0x3b8)]?.[_0x2d851d(0x3db)]();
        if (!_0x5c37d2 || _0x5c37d2[_0x2d851d(0x40a)] > 0x384) continue;
        const _0x565124 =
          _0x5c37d2[_0x2d851d(0x1d8)](
            /(?:库存|庫存|Stock|Quantity|Qty)\s*[:：]?\s*[0-9,]+\s*\/\s*[0-9,]+/gi,
          ) || [];
        if (_0x565124[_0x2d851d(0x40a)] !== 0x1) continue;
        _0x4a1af6[_0x2d851d(0x246)](_0x5c37d2);
      }
      return _0x4a1af6;
    }
    function _0x22f47a(_0x3cfe4b) {
      const _0x1e7c8d = a0_0x2779,
        _0x379b3a = _0x1d8a1e(_0x3cfe4b);
      return _0x4714ed[_0x1e7c8d(0x1c0)]((_0x137d51) =>
        _0x137d51[_0x1e7c8d(0x405)][_0x1e7c8d(0x34d)](_0x379b3a),
      )[_0x1e7c8d(0x40a)];
    }
    function _0x3db0ce(_0x167b3c) {
      const _0x10fc82 = a0_0x2779,
        _0x17ac14 = String(_0x167b3c || ""),
        _0x51482b = _0x17ac14[_0x10fc82(0x42d)]("\x0a")
          [_0x10fc82(0x428)]((_0x32fa5e) => _0x32fa5e[_0x10fc82(0x3db)]())
          [_0x10fc82(0x1c0)](Boolean),
        _0x5a45f4 = _0x34e6f4(),
        _0x563e5a = _0x4714ed[_0x10fc82(0x428)]((_0x7a130) => ({
          def: _0x7a130,
          exactLineScore: 0x0,
          keywordScore: 0x0,
          uniqueItemScore: 0x0,
          sharedItemScore: 0x0,
          total: 0x0,
        }));
      for (const _0x5548aa of _0x563e5a) {
        const _0x4350e5 = _0x5548aa[_0x10fc82(0x229)];
        for (const _0x1ea4e1 of _0x51482b) {
          if (_0x72ad5e(_0x1ea4e1) === _0x4350e5[_0x10fc82(0x2f0)])
            _0x5548aa[_0x10fc82(0x272)] += 0x1f40;
        }
        for (const _0x399433 of _0x4350e5[_0x10fc82(0x4e1)]) {
          const _0x4b9b57 = _0x2b2907(_0x17ac14, _0x399433);
          if (!_0x4b9b57) continue;
          _0x5548aa[_0x10fc82(0x252)] +=
            _0x4b9b57 *
            (_0x399433 === _0x4350e5[_0x10fc82(0x2f0)]
              ? 0xbb8
              : Math[_0x10fc82(0x238)](
                  0xf0,
                  _0x399433[_0x10fc82(0x40a)] * 0x3c,
                ));
        }
        for (const _0x51cb53 of _0x5a45f4) {
          const _0x1586dc = _0x14f89e(_0x51cb53);
          for (const _0x587f65 of _0x1586dc) {
            if (!_0x4350e5[_0x10fc82(0x405)][_0x10fc82(0x34d)](_0x587f65))
              continue;
            const _0x37f578 = _0x22f47a(_0x587f65);
            if (_0x37f578 <= 0x1) _0x5548aa[_0x10fc82(0x226)] += 0x578;
            else _0x5548aa[_0x10fc82(0x4ad)] += 0x50;
          }
        }
        _0x5548aa[_0x10fc82(0x31b)] =
          _0x5548aa[_0x10fc82(0x272)] +
          _0x5548aa[_0x10fc82(0x252)] +
          _0x5548aa[_0x10fc82(0x226)] +
          _0x5548aa[_0x10fc82(0x4ad)];
      }
      _0x563e5a[_0x10fc82(0x40e)](
        (_0x3a5419, _0xa10740) =>
          _0xa10740[_0x10fc82(0x31b)] - _0x3a5419[_0x10fc82(0x31b)],
      );
      const _0x3c92df = _0x563e5a[0x0],
        _0x372892 = _0x563e5a[0x1];
      if (!_0x3c92df || _0x3c92df[_0x10fc82(0x31b)] <= 0x0) return null;
      if (
        _0x3c92df[_0x10fc82(0x272)] > 0x0 ||
        _0x3c92df[_0x10fc82(0x252)] > 0x0
      ) {
        if (
          !_0x372892 ||
          _0x3c92df[_0x10fc82(0x31b)] >= _0x372892[_0x10fc82(0x31b)] + 0xfa ||
          _0x3c92df[_0x10fc82(0x272)] > _0x372892[_0x10fc82(0x272)]
        )
          return _0x3c92df[_0x10fc82(0x229)];
        if (_0x3c92df[_0x10fc82(0x226)] > _0x372892[_0x10fc82(0x226)])
          return _0x3c92df[_0x10fc82(0x229)];
        return null;
      }
      if (
        _0x3c92df[_0x10fc82(0x226)] > 0x0 &&
        (!_0x372892 ||
          _0x3c92df[_0x10fc82(0x226)] >= _0x372892[_0x10fc82(0x226)] + 0x2bc)
      )
        return _0x3c92df[_0x10fc82(0x229)];
      return null;
    }
    function _0x44be15(_0x58eeb0) {
      const _0x21faab = a0_0x2779;
      return (
        _0x58eeb0[_0x21faab(0x34d)](_0x21faab(0x12f)) ||
        _0x58eeb0[_0x21faab(0x34d)](_0x21faab(0x157)) ||
        _0x58eeb0[_0x21faab(0x34d)](_0x21faab(0x2f8)) ||
        _0x58eeb0[_0x21faab(0x34d)](_0x21faab(0x22c)) ||
        _0x58eeb0[_0x21faab(0x34d)](_0x21faab(0x419)) ||
        _0x58eeb0[_0x21faab(0x34d)](_0x21faab(0x215)) ||
        _0x58eeb0[_0x21faab(0x34d)](_0x21faab(0x41d)) ||
        _0x58eeb0[_0x21faab(0x34d)](_0x21faab(0x277)) ||
        _0x58eeb0[_0x21faab(0x34d)](_0x21faab(0x1dc))
      );
    }
    function _0x178f56() {
      const _0x45d35b = a0_0x2779,
        _0x542624 = new Set();
      for (const _0x500bf7 of _0x4714ed)
        for (const _0x1fe095 of _0x500bf7[_0x45d35b(0x405)])
          _0x542624[_0x45d35b(0x378)](_0x1fe095);
      for (const _0x3801f8 of Object[_0x45d35b(0x13c)](_0xfd3a00))
        _0x542624[_0x45d35b(0x378)](_0x3801f8);
      for (const _0x47b6d9 of Object[_0x45d35b(0x1b3)](_0xfd3a00))
        _0x542624[_0x45d35b(0x378)](_0x47b6d9);
      return [..._0x542624][_0x45d35b(0x1c0)](Boolean);
    }
    function _0x29708b(_0x2fc1a0) {
      const _0x250967 = a0_0x2779,
        _0x5e88ed = _0x1d8a1e(_0x2fc1a0),
        _0xef8862 = new Set([_0x2fc1a0, _0x5e88ed]);
      for (const [_0x3302fb, _0x5488b7] of Object[_0x250967(0x4ac)](
        _0xfd3a00,
      )) {
        if (_0x5488b7 === _0x5e88ed) _0xef8862[_0x250967(0x378)](_0x3302fb);
      }
      return [..._0xef8862][_0x250967(0x1c0)](Boolean);
    }
    function _0x320977(_0xcd6523) {
      const _0x131ff2 = a0_0x2779;
      if (!_0xcd6523 || !_0xcd6523[_0x131ff2(0x3de)]) return ![];
      const _0x6efb0f = getComputedStyle(_0xcd6523);
      if (
        _0x6efb0f[_0x131ff2(0x271)] === _0x131ff2(0x14b) ||
        _0x6efb0f[_0x131ff2(0x1be)] === _0x131ff2(0x50f) ||
        _0x6efb0f[_0x131ff2(0x3a2)] === "0"
      )
        return ![];
      const _0x4f3386 = _0xcd6523[_0x131ff2(0x507)]();
      return (
        _0x4f3386[_0x131ff2(0x4d4)] > 0x0 && _0x4f3386[_0x131ff2(0x2c5)] > 0x0
      );
    }
    function _0x43a1ef() {
      const _0x83f5e7 = a0_0x2779;
      return (
        window[_0x83f5e7(0x249)] &&
        window[_0x83f5e7(0x249)](_0x83f5e7(0x1a8))[_0x83f5e7(0x3fb)]
      );
    }
    function _0x49a7b2(_0x2be50c) {
      const _0x264a56 = a0_0x2779,
        _0x1c6d16 = _0x2be50c[_0x264a56(0x1d8)](
          /(?:库存|庫存|Stock|Quantity|Qty)\s*[:：]?\s*([0-9,]+)\s*\/\s*([0-9,]+)/i,
        );
      if (!_0x1c6d16) return null;
      const _0x2ead41 = _0x452e3a(_0x1c6d16[0x1]),
        _0x525d1d = _0x452e3a(_0x1c6d16[0x2]);
      if (_0x2ead41 === null || _0x525d1d === null) return null;
      return { count: _0x2ead41, max: _0x525d1d };
    }
    function _0x220a4f(_0x3f101e) {
      const _0x38b578 = a0_0x2779,
        _0x110e37 = _0x3f101e[_0x38b578(0x1d8)](
          /(?:價格|价格|售价|售價|單價|单价|Price|Sale Price|Unit Price)[:：]?\s*([0-9,]+)/i,
        );
      if (_0x110e37) return String(_0x452e3a(_0x110e37[0x1]) ?? _0x110e37[0x1]);
      const _0x353a19 = _0x3f101e[_0x38b578(0x1d8)](
        /([0-9,]+)\s*(?:金币|金幣|鱼币|魚幣|幣|币|Coins?|Gold)/i,
      );
      if (_0x353a19) return String(_0x452e3a(_0x353a19[0x1]) ?? _0x353a19[0x1]);
      return "-";
    }
    function _0x3ebd2b(_0x1df87d) {
      const _0xb90f2d = a0_0x2779,
        _0x126138 = _0x1df87d[_0xb90f2d(0x1d8)](
          /(?:補貨|补货|補貨時間|补货时间|Restock|Restock Time|Next Restock)[:：]?\s*([0-9/:.\-\s]+(?:上午|下午|AM|PM)?\s*[0-9/:.\-\s]*)/i,
        );
      return _0x126138 ? _0x126138[0x1][_0xb90f2d(0x3db)]() : "-";
    }
    function _0x28864a(_0x54cf27, _0x212efc) {
      const _0x2a4bf2 = a0_0x2779,
        _0x2992f5 = [...new Set(_0x212efc[_0x2a4bf2(0x405)])];
      for (const _0xcb9904 of _0x2992f5) {
        if (
          _0x29708b(_0xcb9904)[_0x2a4bf2(0x1cb)]((_0x1a5496) =>
            _0x54cf27[_0x2a4bf2(0x34d)](_0x1a5496),
          )
        )
          return _0x1d8a1e(_0xcb9904);
      }
      return null;
    }
    function _0x43eed0(_0x4bcef8) {
      const _0x1de77a = a0_0x2779;
      if (_0x22fb0f(_0x4bcef8)) return null;
      const _0x2c816f = _0x4bcef8[_0x1de77a(0x42d)]("\x0a")
        [_0x1de77a(0x428)]((_0x3a622d) => _0x3a622d[_0x1de77a(0x3db)]())
        [_0x1de77a(0x1c0)](Boolean);
      for (const _0x32e918 of _0x2c816f) {
        if (_0x50bc96(_0x32e918)) continue;
        if (/^[0-9,]+$/[_0x1de77a(0x190)](_0x32e918)) continue;
        if (
          _0x32e918[_0x1de77a(0x40a)] >= 0x2 &&
          _0x32e918[_0x1de77a(0x40a)] <= 0x10
        )
          return _0x1d8a1e(_0x32e918);
      }
      const _0x21a2bc = _0x4bcef8[_0x1de77a(0x42d)](
          /(?:價格|价格|售價|售价|單價|单价|[0-9,]+\s*(?:金币|金幣|鱼币|魚幣|幣|币))/,
        )[0x0],
        _0x33c60e = _0x21a2bc[_0x1de77a(0x2b3)](/[\n\r\t]/g, "\x20")
          [_0x1de77a(0x2b3)](/\s+/g, "\x20")
          [_0x1de77a(0x3db)]();
      if (
        _0x33c60e[_0x1de77a(0x40a)] >= 0x2 &&
        _0x33c60e[_0x1de77a(0x40a)] <= 0x10 &&
        !_0x50bc96(_0x33c60e)
      )
        return _0x1d8a1e(_0x33c60e);
      return null;
    }
    function _0x47dc1f(_0x464c60) {
      const _0x17755f = a0_0x2779,
        _0x2e6e2f = {},
        _0x3d8ae5 = [...document[_0x17755f(0x435)](_0x17755f(0x170))];
      for (const _0x38e559 of _0x3d8ae5) {
        if (!_0x320977(_0x38e559)) continue;
        if (_0x38e559[_0x17755f(0x2dd)](_0x17755f(0x294))) continue;
        const _0x3eede1 = _0x38e559[_0x17755f(0x3b8)]?.[_0x17755f(0x3db)]();
        if (!_0x3eede1 || _0x3eede1[_0x17755f(0x40a)] > 0x384) continue;
        const _0x332baa =
          _0x3eede1[_0x17755f(0x1d8)](
            /(?:库存|庫存|Stock|Quantity|Qty)\s*[:：]?\s*[0-9,]+\s*\/\s*[0-9,]+/gi,
          ) || [];
        if (_0x332baa[_0x17755f(0x40a)] !== 0x1) continue;
        const _0x34c696 = _0x49a7b2(_0x3eede1);
        if (!_0x34c696) continue;
        let _0x430262 = _0x28864a(_0x3eede1, _0x464c60);
        if (!_0x430262 && _0x22fb0f(_0x3eede1)) continue;
        if (!_0x430262) _0x430262 = _0x43eed0(_0x3eede1);
        _0x430262 = _0x1d8a1e(_0x430262);
        if (!_0x430262 || _0x50bc96(_0x430262)) continue;
        if (!_0x464c60[_0x17755f(0x405)][_0x17755f(0x34d)](_0x430262)) continue;
        const _0x1c5fcc = {
            name: _0x430262,
            count: _0x34c696[_0x17755f(0x479)],
            max: _0x34c696[_0x17755f(0x238)],
            price: _0x220a4f(_0x3eede1),
            restock: _0x3ebd2b(_0x3eede1),
            rawText: _0x3eede1,
          },
          _0x52f600 = _0x2e6e2f[_0x430262];
        if (
          !_0x52f600 ||
          _0x3eede1[_0x17755f(0x40a)] <
            _0x52f600[_0x17755f(0x4cf)][_0x17755f(0x40a)]
        )
          _0x2e6e2f[_0x430262] = _0x1c5fcc;
      }
      return Object[_0x17755f(0x1b3)](_0x2e6e2f);
    }
    function _0x1efb6b(_0xfbce56) {
      const _0x26adf5 = a0_0x2779,
        _0x448de4 = String(_0xfbce56 || "");
      return (
        (_0x448de4[_0x26adf5(0x34d)](_0x26adf5(0x11b)) ||
          _0x448de4[_0x26adf5(0x34d)](_0x26adf5(0x1db)) ||
          _0x448de4[_0x26adf5(0x34d)](_0x26adf5(0x33b)) ||
          _0x448de4[_0x26adf5(0x34d)](_0x26adf5(0x156))) &&
        (_0x448de4[_0x26adf5(0x34d)](_0x26adf5(0x476)) ||
          _0x448de4[_0x26adf5(0x34d)](_0x26adf5(0x4be)) ||
          _0x448de4[_0x26adf5(0x34d)](_0x26adf5(0x520)) ||
          _0x448de4[_0x26adf5(0x34d)](_0x26adf5(0x460)) ||
          _0x448de4[_0x26adf5(0x34d)](_0x26adf5(0x51c))) &&
        (_0x448de4[_0x26adf5(0x34d)]("庫存") ||
          _0x448de4[_0x26adf5(0x34d)]("库存") ||
          _0x448de4[_0x26adf5(0x34d)](_0x26adf5(0x297)) ||
          _0x448de4[_0x26adf5(0x34d)](_0x26adf5(0x424)))
      );
    }
    function _0x38e4c5(_0x2d5790, _0xbffb4d = !![]) {
      const _0x22f500 = a0_0x2779,
        _0x4280ef = new Date(_0x2d5790);
      if (Number[_0x22f500(0x4c1)](_0x4280ef[_0x22f500(0x27e)]())) return "";
      const _0x1867c7 = _0x4280ef[_0x22f500(0x36a)](),
        _0x47b27f = String(_0x4280ef[_0x22f500(0x2b9)]() + 0x1)[
          _0x22f500(0x3ed)
        ](0x2, "0"),
        _0x41ffc7 = String(_0x4280ef[_0x22f500(0x492)]())[_0x22f500(0x3ed)](
          0x2,
          "0",
        ),
        _0x2d1882 = String(_0x4280ef[_0x22f500(0x4f9)]())[_0x22f500(0x3ed)](
          0x2,
          "0",
        ),
        _0x3de4e5 = String(_0x4280ef[_0x22f500(0x459)]())[_0x22f500(0x3ed)](
          0x2,
          "0",
        ),
        _0x16e4c7 = String(_0x4280ef[_0x22f500(0x309)]())[_0x22f500(0x3ed)](
          0x2,
          "0",
        );
      return _0xbffb4d
        ? _0x1867c7 +
            "/" +
            _0x47b27f +
            "/" +
            _0x41ffc7 +
            "\x20" +
            _0x2d1882 +
            ":" +
            _0x3de4e5 +
            ":" +
            _0x16e4c7
        : _0x1867c7 +
            "/" +
            _0x47b27f +
            "/" +
            _0x41ffc7 +
            "\x20" +
            _0x2d1882 +
            ":" +
            _0x3de4e5;
    }
    function _0x3db8b3(_0x249159, _0x266cc1 = new Date()) {
      const _0x50232c = a0_0x2779,
        _0x1e7527 = String(_0x249159 || "");
      let _0x1c4623 = _0x1e7527[_0x50232c(0x1d8)](
        /(?:上次刷新|上次補貨|上次补货|Last\s+Refresh|Last\s+Restock)\s*(\d{4})[\/\-](\d{1,2})[\/\-](\d{1,2})\s+(\d{1,2}):(\d{2})(?::(\d{2}))?/,
      );
      if (_0x1c4623) {
        const [
            ,
            _0x53143e,
            _0x39a206,
            _0x5aeaea,
            _0x1a5328,
            _0x40bc95,
            _0x8e3b67,
          ] = _0x1c4623,
          _0x5b2556 = new Date(
            Number(_0x53143e),
            Number(_0x39a206) - 0x1,
            Number(_0x5aeaea),
            Number(_0x1a5328),
            Number(_0x40bc95),
            Number(_0x8e3b67 || 0x0),
          )[_0x50232c(0x27e)]();
        return Number[_0x50232c(0x4f8)](_0x5b2556) ? _0x5b2556 : null;
      }
      _0x1c4623 = _0x1e7527[_0x50232c(0x1d8)](
        /(?:上次刷新|上次補貨|上次补货|Last\s+Refresh|Last\s+Restock)\s*(\d{1,2})[\/\-](\d{1,2})\s+(\d{1,2}):(\d{2})(?::(\d{2}))?/,
      );
      if (!_0x1c4623) return null;
      const [, _0x218fd9, _0x3515d9, _0x4b03ff, _0x4512f8, _0x49a851] =
        _0x1c4623;
      let _0x2f9f90 = _0x266cc1[_0x50232c(0x36a)](),
        _0x3d875e = new Date(
          _0x2f9f90,
          Number(_0x218fd9) - 0x1,
          Number(_0x3515d9),
          Number(_0x4b03ff),
          Number(_0x4512f8),
          Number(_0x49a851 || 0x0),
        )[_0x50232c(0x27e)]();
      return (
        Number[_0x50232c(0x4f8)](_0x3d875e) &&
          _0x3d875e >
            _0x266cc1[_0x50232c(0x27e)]() + 0x18 * 0x3c * 0x3c * 0x3e8 &&
          (_0x3d875e = new Date(
            _0x2f9f90 - 0x1,
            Number(_0x218fd9) - 0x1,
            Number(_0x3515d9),
            Number(_0x4b03ff),
            Number(_0x4512f8),
            Number(_0x49a851 || 0x0),
          )[_0x50232c(0x27e)]()),
        Number[_0x50232c(0x4f8)](_0x3d875e) ? _0x3d875e : null
      );
    }
    function _0xcb6670(_0x45c362) {
      const _0x5ce299 = a0_0x2779,
        _0x4f50bd = {},
        _0x1c0b30 = [...document[_0x5ce299(0x435)](_0x5ce299(0x170))],
        _0x1ee777 = new Date();
      for (const _0x11279d of _0x1c0b30) {
        if (!_0x320977(_0x11279d)) continue;
        if (_0x11279d[_0x5ce299(0x2dd)](_0x5ce299(0x294))) continue;
        const _0x4ca714 = _0x11279d[_0x5ce299(0x3b8)]?.[_0x5ce299(0x3db)]();
        if (!_0x4ca714 || _0x4ca714[_0x5ce299(0x40a)] > 0x4b0) continue;
        if (
          !/(上次(?:刷新|補貨|补货)|Last\s+(?:Refresh|Restock))/i[
            _0x5ce299(0x190)
          ](_0x4ca714)
        )
          continue;
        const _0xfd1ac1 =
          _0x4ca714[_0x5ce299(0x1d8)](
            /(?:库存|庫存|Stock|Quantity|Qty)\s*[:：]?\s*[0-9,]+\s*\/\s*[0-9,]+/gi,
          ) || [];
        if (_0xfd1ac1[_0x5ce299(0x40a)] !== 0x1) continue;
        const _0x3293c9 = _0x49a7b2(_0x4ca714);
        if (!_0x3293c9) continue;
        let _0x47ea3f = _0x28864a(_0x4ca714, _0x45c362);
        if (!_0x47ea3f && _0x22fb0f(_0x4ca714)) continue;
        if (!_0x47ea3f) _0x47ea3f = _0x43eed0(_0x4ca714);
        _0x47ea3f = _0x1d8a1e(_0x47ea3f);
        if (!_0x47ea3f || _0x50bc96(_0x47ea3f)) continue;
        if (!_0x45c362[_0x5ce299(0x405)][_0x5ce299(0x34d)](_0x47ea3f)) continue;
        const _0x263159 = _0x3db8b3(_0x4ca714, _0x1ee777),
          _0x1f2ab6 = _0x263159 ? _0x38e4c5(_0x263159, !![]) : "",
          _0x38edd7 = {
            name: _0x47ea3f,
            count: _0x3293c9[_0x5ce299(0x479)],
            max: _0x3293c9[_0x5ce299(0x238)],
            price: _0x220a4f(_0x4ca714),
            restock: "-",
            source: _0x5ce299(0x2ed),
            skillRefreshAt: _0x263159 || "",
            skillRefreshText: _0x1f2ab6,
            skillLastRestockAt:
              _0x3293c9[_0x5ce299(0x479)] <= 0x0 && _0x263159 ? _0x263159 : "",
            skillLastRestockText:
              _0x3293c9[_0x5ce299(0x479)] <= 0x0 && _0x1f2ab6 ? _0x1f2ab6 : "",
            rawText: _0x4ca714,
          },
          _0x170a7e = _0x4f50bd[_0x47ea3f];
        if (
          !_0x170a7e ||
          _0x4ca714[_0x5ce299(0x40a)] <
            _0x170a7e[_0x5ce299(0x4cf)][_0x5ce299(0x40a)]
        )
          _0x4f50bd[_0x47ea3f] = _0x38edd7;
      }
      return Object[_0x5ce299(0x1b3)](_0x4f50bd);
    }
    function _0x5716b4(_0x4ba3fa, _0x2c920a) {
      const _0x1a83e6 = a0_0x2779;
      if (!_0x4ba3fa) return !![];
      return (
        Number(_0x4ba3fa[_0x1a83e6(0x479)] ?? -0x1) !==
          Number(_0x2c920a[_0x1a83e6(0x479)] ?? -0x1) ||
        Number(_0x4ba3fa[_0x1a83e6(0x238)] ?? -0x1) !==
          Number(_0x2c920a[_0x1a83e6(0x238)] ?? -0x1) ||
        String(_0x4ba3fa[_0x1a83e6(0x31d)] ?? "-") !==
          String(_0x2c920a[_0x1a83e6(0x31d)] ?? "-") ||
        String(_0x4ba3fa[_0x1a83e6(0x26a)] ?? "-") !==
          String(_0x2c920a[_0x1a83e6(0x26a)] ?? "-") ||
        String(_0x4ba3fa[_0x1a83e6(0x1e9)] ?? "") !==
          String(_0x2c920a[_0x1a83e6(0x1e9)] ?? "") ||
        String(_0x4ba3fa[_0x1a83e6(0x3a9)] ?? "") !==
          String(_0x2c920a[_0x1a83e6(0x3a9)] ?? "")
      );
    }
    function _0x5dff65({ upload: upload = !![], silent: silent = !![] } = {}) {
      const _0x2bf3bf = a0_0x2779,
        _0x31bd6e = _0x151739(),
        _0x4fade6 = _0x1efb6b(_0x31bd6e);
      if (_0x44be15(_0x31bd6e) && !_0x4fade6) return ![];
      const _0x546c5c = _0x29428e();
      if (
        _0x546c5c[_0x2bf3bf(0x30d)] === _0x2bf3bf(0x4d1) ||
        _0x546c5c[_0x2bf3bf(0x30d)] === _0x2bf3bf(0x2c8)
      ) {
        if (!silent)
          console[_0x2bf3bf(0x516)](
            _0x2bf3bf(0x19d) +
              (_0x546c5c[_0x2bf3bf(0x30d)] === _0x2bf3bf(0x4d1)
                ? "前往"
                : "返航") +
              _0x2bf3bf(0x491),
          );
        return ![];
      }
      const _0x397568 = _0x3db0ce(_0x31bd6e);
      if (!_0x397568) {
        if (!silent) console[_0x2bf3bf(0x516)](_0x2bf3bf(0x2cc));
        return ![];
      }
      const _0x2fddeb = _0x4fade6 ? _0xcb6670(_0x397568) : _0x47dc1f(_0x397568);
      if (!_0x2fddeb[_0x2bf3bf(0x40a)]) {
        if (!silent)
          console[_0x2bf3bf(0x516)](
            _0x2bf3bf(0x31e) + _0x397568[_0x2bf3bf(0x2f0)] + _0x2bf3bf(0x36b),
          );
        return ![];
      }
      const _0xd1cbac = _0x4082e4();
      if (!_0xd1cbac[_0x397568[_0x2bf3bf(0x2f0)]])
        _0xd1cbac[_0x397568[_0x2bf3bf(0x2f0)]] = {};
      const _0x5e79fa = _0x10db8e(),
        _0x3244ee = Date[_0x2bf3bf(0x33f)](),
        _0x1f960a = [];
      let _0x43a601 = 0x0;
      for (const _0x138f63 of _0x2fddeb) {
        const _0x29a269 = _0x1d8a1e(_0x138f63[_0x2bf3bf(0x123)]);
        if (!_0x397568[_0x2bf3bf(0x405)][_0x2bf3bf(0x34d)](_0x29a269)) continue;
        const _0xf1f694 =
            _0xd1cbac[_0x397568[_0x2bf3bf(0x2f0)]][_0x29a269] || {},
          _0x538f53 = _0x138f63[_0x2bf3bf(0x4b3)] === _0x2bf3bf(0x2ed),
          _0x38dd1c = _0x138f63[_0x2bf3bf(0x25d)] || "",
          _0x2ff1ea = _0x138f63[_0x2bf3bf(0x207)] || "",
          _0x2b5d6a =
            _0x138f63[_0x2bf3bf(0x31d)] && _0x138f63[_0x2bf3bf(0x31d)] !== "-"
              ? _0x138f63[_0x2bf3bf(0x31d)]
              : _0xf1f694[_0x2bf3bf(0x31d)] || "-",
          _0x2bd9c9 =
            _0x138f63[_0x2bf3bf(0x26a)] && _0x138f63[_0x2bf3bf(0x26a)] !== "-"
              ? _0x138f63[_0x2bf3bf(0x26a)]
              : _0xf1f694[_0x2bf3bf(0x26a)] || "-",
          _0x48e36e = {
            count: _0x138f63[_0x2bf3bf(0x479)],
            max: _0x138f63[_0x2bf3bf(0x238)],
            time: _0x5e79fa,
            price: _0x2b5d6a,
            restock: _0x2bd9c9,
            lastRestockAt: _0x38dd1c || _0xf1f694[_0x2bf3bf(0x1e9)] || "",
            lastRestockSource: _0x38dd1c
              ? _0x2bf3bf(0x2ed)
              : _0xf1f694[_0x2bf3bf(0x3a9)] || "",
            observationSource: _0x538f53 ? _0x2bf3bf(0x2ed) : _0x2bf3bf(0x14a),
            estimateBasis: _0x38dd1c
              ? _0x2bf3bf(0x4de)
              : _0xf1f694[_0x2bf3bf(0x51b)] || "",
            clientObservedAt: _0x3244ee,
            syncVersion: _0x3244ee,
          },
          _0x2ac70e = _0x5975cc(_0xf1f694, _0x48e36e, _0x3244ee);
        (_0x38dd1c &&
          ((_0x2ac70e[_0x2bf3bf(0x1e9)] = _0x38dd1c),
          (_0x2ac70e[_0x2bf3bf(0x3a9)] = _0x2bf3bf(0x2ed)),
          (_0x2ac70e[_0x2bf3bf(0x51b)] = _0x2bf3bf(0x4de))),
          !_0xd1cbac[_0x397568[_0x2bf3bf(0x2f0)]][_0x29a269] ||
          _0x5716b4(_0xf1f694, _0x2ac70e)
            ? ((_0xd1cbac[_0x397568[_0x2bf3bf(0x2f0)]][_0x29a269] = _0x2ac70e),
              _0x43a601++)
            : (_0xd1cbac[_0x397568[_0x2bf3bf(0x2f0)]][_0x29a269] = Object[
                _0x2bf3bf(0x505)
              ]({}, _0xf1f694, _0x2ac70e)),
          _0x1f960a[_0x2bf3bf(0x246)]({
            name: _0x29a269,
            count: _0x2ac70e[_0x2bf3bf(0x479)],
            quantity: _0x2ac70e[_0x2bf3bf(0x479)],
            stock: _0x2ac70e[_0x2bf3bf(0x479)],
            amount: _0x2ac70e[_0x2bf3bf(0x479)],
            max: _0x2ac70e[_0x2bf3bf(0x238)],
            price: _0x2ac70e[_0x2bf3bf(0x31d)],
            restock: _0x2ac70e[_0x2bf3bf(0x26a)],
            restockTime: _0x2ac70e[_0x2bf3bf(0x26a)],
            nextRestock: _0x2ac70e[_0x2bf3bf(0x26a)],
            lastRestockAt: _0x2ac70e[_0x2bf3bf(0x1e9)] || "",
            lastRestockSource: _0x2ac70e[_0x2bf3bf(0x3a9)] || "",
            observationSource: _0x2ac70e[_0x2bf3bf(0x32e)] || "",
            soldOutAt: _0x2ac70e[_0x2bf3bf(0x34e)] || "",
            estimatedRestockAt: _0x2ac70e[_0x2bf3bf(0x439)] || "",
            estimateStatus: _0x2ac70e[_0x2bf3bf(0x430)] || _0x2bf3bf(0x2e3),
            restockAnchorAt: _0x2ac70e[_0x2bf3bf(0x47e)] || "",
            restockAnchorCount: _0x2ac70e[_0x2bf3bf(0x244)] || "",
            restockAnchorMax: _0x2ac70e[_0x2bf3bf(0x313)] || "",
            estimateBasis: _0x2ac70e[_0x2bf3bf(0x51b)] || "",
            estimateText: _0x2ac70e[_0x2bf3bf(0x191)] || "",
            skillRefreshAt:
              _0x138f63[_0x2bf3bf(0x412)] || _0x138f63[_0x2bf3bf(0x1e0)] || "",
            source: _0x538f53 ? _0x2bf3bf(0x2ed) : _0x2bf3bf(0x14a),
            clientObservedAt: _0x2ac70e[_0x2bf3bf(0x4ed)] || _0x3244ee,
            syncVersion:
              _0x2ac70e[_0x2bf3bf(0x291)] ||
              _0x2ac70e[_0x2bf3bf(0x4ed)] ||
              _0x3244ee,
          }));
      }
      (_0x553361(_0xd1cbac),
        localStorage[_0x2bf3bf(0x1e2)](_0x3269b5, _0x397568[_0x2bf3bf(0x2f0)]),
        _0xa9d376(),
        _0xef6fd5(),
        _0x1d8198());
      if (upload && _0x1f960a[_0x2bf3bf(0x40a)])
        _0x3d2dba(_0x397568[_0x2bf3bf(0x2f0)], _0x5e79fa, _0x1f960a, {
          source: _0x4fade6 ? _0x2bf3bf(0x2ed) : _0x2bf3bf(0x14a),
        });
      if (_0x43a601 > 0x0) {
        const _0x5774a6 = _0x4fade6 ? _0x2bf3bf(0x146) : _0x2bf3bf(0x180);
        console[_0x2bf3bf(0x516)](
          _0x2bf3bf(0x14c) +
            _0x397568[_0x2bf3bf(0x2f0)] +
            "：" +
            _0x43a601 +
            _0x2bf3bf(0x33a) +
            _0x5774a6 +
            "）",
        );
        if (_0x4fade6 && _0x1d5e31()[_0x2bf3bf(0x3a3)])
          _0x27b4b3(
            _0x1c7c17(_0x2bf3bf(0x1fa)),
            _0x1c7c17(_0x2bf3bf(0x32d), {
              port: _0x3e8d59(_0x397568[_0x2bf3bf(0x2f0)]),
              n: _0x1f960a[_0x2bf3bf(0x40a)],
            }),
          );
      }
      return !![];
    }
    function _0x4744d5(_0x10b203) {
      const _0x39ebe5 = a0_0x2779;
      if (_0x10b203 === null || _0x10b203 === undefined || _0x10b203 === "")
        return "";
      if (typeof _0x10b203 === _0x39ebe5(0x392)) return _0x10b203;
      if (_0x10b203 instanceof Error)
        return _0x10b203[_0x39ebe5(0x2a3)] || String(_0x10b203);
      try {
        return JSON[_0x39ebe5(0x2ac)](
          _0x10b203,
          Object[_0x39ebe5(0x10c)](_0x10b203),
        )[_0x39ebe5(0x1ae)](0x0, 0x1f4);
      } catch (_0x1ca668) {
        return String(_0x10b203);
      }
    }
    function _0x4c0f36() {
      const _0x11dd31 = a0_0x2779;
      ((_0x399387["ok"] = !![]),
        (_0x399387[_0x11dd31(0x331)] = Date[_0x11dd31(0x33f)]()),
        (_0x399387[_0x11dd31(0x4e2)] = ""),
        localStorage[_0x11dd31(0x24a)](_0x5c5b6d),
        _0xa9d376(),
        _0xef6fd5(),
        _0x1d8198());
    }
    function _0x584169(_0x496052 = _0x1af0b3(0x162), _0x56b82c = "") {
      const _0x8b4391 = a0_0x2779,
        _0x4afe4b = _0x4744d5(_0x56b82c);
      ((_0x399387["ok"] = ![]),
        (_0x399387[_0x8b4391(0x2ee)] = Date[_0x8b4391(0x33f)]()),
        (_0x399387[_0x8b4391(0x4e2)] = _0x4afe4b
          ? _0x496052 + ":\x20" + _0x4afe4b
          : _0x496052),
        localStorage[_0x8b4391(0x1e2)](_0x5c5b6d, _0x399387[_0x8b4391(0x4e2)]),
        console[_0x8b4391(0x1fc)](
          _0x8b4391(0x2a7),
          _0x496052,
          _0x56b82c || "",
        ));
      const _0x47b6fd = _0x1d5e31(),
        _0x96ef22 = Date[_0x8b4391(0x33f)]();
      (_0x47b6fd[_0x8b4391(0x3a3)] &&
        _0x96ef22 - _0x530584 >= _0x4ef920 &&
        ((_0x530584 = _0x96ef22),
        _0x496052 === _0x8b4391(0x318)
          ? _0x27b4b3(
              _0x1c7c17(_0x8b4391(0x3b9)),
              _0x1c7c17(_0x8b4391(0x317), {
                reason: _0x399387[_0x8b4391(0x4e2)] || _0x8b4391(0x234),
              }),
            )
          : _0x27b4b3(
              _0x1c7c17(_0x8b4391(0x344)),
              _0x1c7c17(_0x8b4391(0x35a), {
                reason: _0x399387[_0x8b4391(0x4e2)] || _0x8b4391(0x234),
              }),
            )),
        _0xa9d376(),
        _0xef6fd5(),
        _0x1d8198());
    }
    function _0xb361f8(_0x1b22ba) {
      const _0x197f6a = a0_0x2779,
        _0x201e6f = String(_0x1b22ba?.[_0x197f6a(0x27f)] || "")[
          _0x197f6a(0x3db)
        ]();
      if (!_0x201e6f) return { ok: ![], message: _0x197f6a(0x223) };
      if (
        _0x201e6f[_0x197f6a(0x2b7)](_0x197f6a(0x4e7)) ||
        _0x201e6f[_0x197f6a(0x2b7)](_0x197f6a(0x3cd)) ||
        _0x201e6f[_0x197f6a(0x2b7)]("<")
      )
        return {
          ok: ![],
          message: _0x197f6a(0x185) + _0x201e6f[_0x197f6a(0x1ae)](0x0, 0x78),
          preview: _0x201e6f[_0x197f6a(0x1ae)](0x0, 0x12c),
        };
      try {
        return { ok: !![], data: JSON[_0x197f6a(0x2c6)](_0x201e6f) };
      } catch (_0x25ceb7) {
        return {
          ok: ![],
          message: _0x197f6a(0x470) + _0x201e6f[_0x197f6a(0x1ae)](0x0, 0x78),
          preview: _0x201e6f[_0x197f6a(0x1ae)](0x0, 0x12c),
          error: _0x25ceb7,
        };
      }
    }
    function _0x3d2dba(_0xb6f5c4, _0x46e679, _0x1884a9, _0x1c0a85 = {}) {
      const _0x568836 = a0_0x2779;
      _0x23cc96({
        method: _0x568836(0x3b2),
        path: _0x568836(0x20d),
        payload: _0x435af7([
          [_0x568836(0x152), _0x2386c0()],
          [_0x568836(0x2d1), _0x72ad5e(_0xb6f5c4)],
          [_0x568836(0x153), _0x46e679],
          [_0x568836(0x38d), _0x1884a9],
          [_0x568836(0x256), _0x1c0a85[_0x568836(0x4b3)] || ""],
          [_0x568836(0x3ce), Date[_0x568836(0x33f)]()],
          [_0x568836(0x24f), Date[_0x568836(0x33f)]()],
        ]),
        signed: !![],
        headers: { "Content-Type": _0x568836(0x4a5) },
        onload(_0x2d9f60) {
          const _0x624d33 = a0_0x2779;
          if (_0x2d9f60[_0x624d33(0x30d)] !== 0xc8) {
            _0x584169(
              _0x624d33(0x318),
              _0x624d33(0x2a5) +
                _0x2d9f60[_0x624d33(0x30d)] +
                "\x20" +
                String(_0x2d9f60[_0x624d33(0x27f)] || "")[_0x624d33(0x1ae)](
                  0x0,
                  0xa0,
                ),
            );
            return;
          }
          const _0x461672 = _0xb361f8(_0x2d9f60);
          if (!_0x461672["ok"]) {
            _0x584169(_0x624d33(0x318), _0x461672[_0x624d33(0x2a3)]);
            return;
          }
          if (
            _0x461672[_0x624d33(0x4c0)] &&
            _0x461672[_0x624d33(0x4c0)][_0x624d33(0x30d)] === _0x624d33(0x259)
          ) {
            _0x584169(
              _0x624d33(0x318),
              _0x461672[_0x624d33(0x4c0)][_0x624d33(0x2a3)] || _0x624d33(0x235),
            );
            return;
          }
          console[_0x624d33(0x516)](
            _0x624d33(0x169),
            _0x461672[_0x624d33(0x4c0)],
          );
          if (
            _0x461672[_0x624d33(0x4c0)] &&
            _0x461672[_0x624d33(0x4c0)][_0x624d33(0x30d)] ===
              _0x624d33(0x11f) &&
            Number(_0x461672[_0x624d33(0x4c0)][_0x624d33(0x484)] || 0x0) === 0x0
          ) {
            const _0x9a05de = Number(
                _0x461672[_0x624d33(0x4c0)][_0x624d33(0x4a7)] || 0x0,
              ),
              _0x4f4b77 = Number(
                _0x461672[_0x624d33(0x4c0)][_0x624d33(0x36d)] || 0x0,
              ),
              _0x194861 = _0x461672[_0x624d33(0x4c0)][_0x624d33(0x2e7)]
                ? _0x624d33(0x268) +
                  _0x461672[_0x624d33(0x4c0)][_0x624d33(0x2e7)]
                : "";
            if (_0x4f4b77 > 0x0 && _0x9a05de === 0x0) {
              (_0x4c0f36(),
                console[_0x624d33(0x516)](
                  _0x624d33(0x14e),
                  _0x4f4b77,
                  _0x194861,
                ));
              return;
            }
            _0x584169(
              _0x624d33(0x318),
              _0x624d33(0x4a1) +
                _0x9a05de +
                _0x624d33(0x1b6) +
                _0x4f4b77 +
                _0x194861,
            );
            return;
          }
          (_0x4c0f36(),
            (_0x1136f5 = Date[_0x624d33(0x33f)]()),
            (_0x5f01be = Date[_0x624d33(0x33f)]() + _0x367a24),
            console[_0x624d33(0x516)](
              _0x624d33(0x1ff),
              _0x461672[_0x624d33(0x4c0)] &&
                _0x461672[_0x624d33(0x4c0)][_0x624d33(0x2e7)],
            ));
        },
        onerror(_0x194f3a) {
          const _0x3f03e2 = a0_0x2779;
          _0x584169(_0x3f03e2(0x318), _0x194f3a);
        },
      });
    }
    function _0x192a7b(_0x268f1b) {
      const _0x1776f6 = a0_0x2779;
      if (!_0x268f1b || typeof _0x268f1b !== _0x1776f6(0x3ad)) return {};
      const _0x56c5dc = [
        _0x1776f6(0x4c0),
        _0x1776f6(0x414),
        _0x1776f6(0x48c),
        _0x1776f6(0x352),
        _0x1776f6(0x224),
      ];
      if (_0x268f1b[_0x1776f6(0x30d)] === _0x1776f6(0x11f))
        for (const _0x51041f of _0x56c5dc) {
          if (
            _0x268f1b[_0x51041f] &&
            typeof _0x268f1b[_0x51041f] === _0x1776f6(0x3ad)
          )
            return _0x268f1b[_0x51041f];
        }
      for (const _0x1e8db1 of _0x56c5dc) {
        if (
          _0x268f1b[_0x1e8db1] &&
          typeof _0x268f1b[_0x1e8db1] === _0x1776f6(0x3ad)
        ) {
          const _0x2eb607 = _0x268f1b[_0x1e8db1],
            _0x1aa361 = Object[_0x1776f6(0x13c)](_0x2eb607)[_0x1776f6(0x1cb)](
              (_0x15e493) => !!_0x2cb9e6(_0x72ad5e(_0x15e493)),
            );
          if (_0x1aa361) return _0x2eb607;
        }
      }
      return _0x268f1b;
    }
    function _0x4d3e3a(_0x3dad82, { preferCloud: preferCloud = ![] } = {}) {
      const _0x52d2af = a0_0x2779,
        _0x53174d = preferCloud ? _0x2782fd() : _0x4082e4(),
        _0x53f7ca = {
          applied: 0x0,
          filtered: 0x0,
          ports: new Set(),
          firstPort: "",
        };
      for (const [_0x5f1e32, _0x2f59fa] of Object[_0x52d2af(0x4ac)](
        _0x3dad82 || {},
      )) {
        const _0x56493c = _0x72ad5e(_0x5f1e32);
        if (!_0x2cb9e6(_0x56493c)) {
          _0x53f7ca[_0x52d2af(0x253)]++;
          continue;
        }
        if (!_0x2f59fa || typeof _0x2f59fa !== _0x52d2af(0x3ad)) {
          _0x53f7ca[_0x52d2af(0x253)]++;
          continue;
        }
        const _0x56b641 = _0x2d72a5(_0x56493c, _0x2f59fa);
        if (!_0x53174d[_0x56493c]) _0x53174d[_0x56493c] = {};
        for (const [_0x2d1d89, _0x5009ae] of Object[_0x52d2af(0x4ac)](
          _0x2f59fa || {},
        )) {
          const _0x5ddfd5 = _0x1d8a1e(_0x2d1d89);
          if (_0x50bc96(_0x5ddfd5) || !_0x2e8d9a(_0x56493c, _0x5ddfd5)) {
            _0x53f7ca[_0x52d2af(0x253)]++;
            continue;
          }
          if (!_0x5009ae || typeof _0x5009ae !== _0x52d2af(0x3ad)) {
            _0x53f7ca[_0x52d2af(0x253)]++;
            continue;
          }
          const _0x4cc91d = _0x452e3a(
            _0x5009ae[_0x52d2af(0x479)] ??
              _0x5009ae[_0x52d2af(0x15a)] ??
              _0x5009ae[_0x52d2af(0x163)] ??
              _0x5009ae[_0x52d2af(0x2f3)],
          );
          if (_0x4cc91d === null) {
            _0x53f7ca[_0x52d2af(0x253)]++;
            continue;
          }
          if (_0x35f4fb(_0x5ddfd5) && !_0x56b641) {
            (console[_0x52d2af(0x516)](_0x52d2af(0x1e5), _0x56493c, _0x5ddfd5),
              _0x53f7ca[_0x52d2af(0x253)]++);
            continue;
          }
          const _0x4ceec3 = _0x53174d[_0x56493c][_0x5ddfd5] || {},
            _0x5ba8bc = {
              count: _0x4cc91d,
              max:
                _0x452e3a(_0x5009ae[_0x52d2af(0x238)]) ??
                _0x4ceec3[_0x52d2af(0x238)] ??
                null,
              time: _0x5009ae[_0x52d2af(0x45c)] || "未知",
              price: _0x5009ae[_0x52d2af(0x31d)] || "-",
              restock:
                _0x5009ae[_0x52d2af(0x4ea)] ||
                _0x5009ae[_0x52d2af(0x526)] ||
                _0x5009ae[_0x52d2af(0x26a)] ||
                "-",
              lastRestockAt:
                _0x5009ae[_0x52d2af(0x1e9)] ||
                _0x4ceec3[_0x52d2af(0x1e9)] ||
                "",
              soldOutAt:
                _0x5009ae[_0x52d2af(0x34e)] ||
                _0x4ceec3[_0x52d2af(0x34e)] ||
                "",
              estimatedRestockAt:
                _0x5009ae[_0x52d2af(0x439)] ||
                _0x4ceec3[_0x52d2af(0x439)] ||
                "",
              estimateStatus:
                _0x5009ae[_0x52d2af(0x430)] ||
                _0x4ceec3[_0x52d2af(0x430)] ||
                _0x52d2af(0x2e3),
              restockAnchorAt:
                _0x5009ae[_0x52d2af(0x47e)] ||
                _0x4ceec3[_0x52d2af(0x47e)] ||
                "",
              restockAnchorCount:
                _0x5009ae[_0x52d2af(0x244)] ||
                _0x4ceec3[_0x52d2af(0x244)] ||
                "",
              restockAnchorMax:
                _0x5009ae[_0x52d2af(0x313)] ||
                _0x4ceec3[_0x52d2af(0x313)] ||
                "",
              estimateBasis:
                _0x5009ae[_0x52d2af(0x51b)] ||
                _0x4ceec3[_0x52d2af(0x51b)] ||
                "",
              estimateText:
                _0x5009ae[_0x52d2af(0x191)] ||
                _0x5009ae[_0x52d2af(0x3e3)] ||
                _0x5009ae[_0x52d2af(0x355)] ||
                _0x4ceec3[_0x52d2af(0x191)] ||
                "",
              lastRestockSource:
                _0x5009ae[_0x52d2af(0x3a9)] ||
                _0x5009ae[_0x52d2af(0x32a)] ||
                _0x4ceec3[_0x52d2af(0x3a9)] ||
                "",
              observationSource:
                _0x5009ae[_0x52d2af(0x32e)] ||
                _0x5009ae[_0x52d2af(0x4b3)] ||
                _0x4ceec3[_0x52d2af(0x32e)] ||
                "",
              clientObservedAt:
                _0x5009ae[_0x52d2af(0x4ed)] ||
                _0x5009ae[_0x52d2af(0x291)] ||
                "",
              syncVersion:
                _0x5009ae[_0x52d2af(0x291)] ||
                _0x5009ae[_0x52d2af(0x4ed)] ||
                "",
            };
          if (!preferCloud && !_0x2c181c(_0x4ceec3, _0x5ba8bc)) {
            (console[_0x52d2af(0x516)](_0x52d2af(0x4e3), _0x56493c, _0x5ddfd5),
              _0x53f7ca[_0x52d2af(0x253)]++);
            continue;
          }
          const _0x4e8a3b = preferCloud
            ? Object[_0x52d2af(0x505)]({}, _0x44ff3d(), _0x5ba8bc)
            : _0x5975cc(_0x4ceec3, _0x5ba8bc, Date[_0x52d2af(0x33f)]());
          if (_0x5009ae[_0x52d2af(0x439)]) {
            const _0x5eaa95 = _0x1b1d8c(_0x5009ae[_0x52d2af(0x439)]);
            if (_0x5eaa95) _0x4e8a3b[_0x52d2af(0x439)] = _0x5eaa95;
          }
          if (_0x5009ae[_0x52d2af(0x430)])
            _0x4e8a3b[_0x52d2af(0x430)] = String(
              _0x5009ae[_0x52d2af(0x430)] || _0x52d2af(0x2e3),
            );
          if (_0x5009ae[_0x52d2af(0x51b)])
            _0x4e8a3b[_0x52d2af(0x51b)] = String(
              _0x5009ae[_0x52d2af(0x51b)] || "",
            );
          const _0x1f69d1 = String(
            _0x5009ae[_0x52d2af(0x191)] ||
              _0x5009ae[_0x52d2af(0x3e3)] ||
              _0x5009ae[_0x52d2af(0x355)] ||
              "",
          )[_0x52d2af(0x3db)]();
          _0x1f69d1 &&
            _0x1f69d1 !== "-" &&
            _0x1f69d1 !== _0x52d2af(0x1a4) &&
            (_0x4e8a3b[_0x52d2af(0x191)] = _0x1f69d1);
          if (_0x5009ae[_0x52d2af(0x34e)]) {
            const _0x48351a = _0x1b1d8c(_0x5009ae[_0x52d2af(0x34e)]);
            if (_0x48351a) _0x4e8a3b[_0x52d2af(0x34e)] = _0x48351a;
          }
          if (_0x5009ae[_0x52d2af(0x1e9)]) {
            const _0x508491 = _0x1b1d8c(_0x5009ae[_0x52d2af(0x1e9)]);
            if (_0x508491) _0x4e8a3b[_0x52d2af(0x1e9)] = _0x508491;
          }
          (_0x5009ae[_0x52d2af(0x3a9)] || _0x5009ae[_0x52d2af(0x32a)]) &&
            (_0x4e8a3b[_0x52d2af(0x3a9)] = String(
              _0x5009ae[_0x52d2af(0x3a9)] || _0x5009ae[_0x52d2af(0x32a)] || "",
            ));
          (_0x5009ae[_0x52d2af(0x32e)] || _0x5009ae[_0x52d2af(0x4b3)]) &&
            (_0x4e8a3b[_0x52d2af(0x32e)] = String(
              _0x5009ae[_0x52d2af(0x32e)] || _0x5009ae[_0x52d2af(0x4b3)] || "",
            ));
          if (_0x5009ae[_0x52d2af(0x47e)]) {
            const _0x139343 = _0x1b1d8c(_0x5009ae[_0x52d2af(0x47e)]);
            if (_0x139343) _0x4e8a3b[_0x52d2af(0x47e)] = _0x139343;
          }
          _0x5009ae[_0x52d2af(0x244)] !== undefined &&
            _0x5009ae[_0x52d2af(0x244)] !== "" &&
            (_0x4e8a3b[_0x52d2af(0x244)] =
              _0x452e3a(_0x5009ae[_0x52d2af(0x244)]) ??
              _0x4e8a3b[_0x52d2af(0x244)]);
          _0x5009ae[_0x52d2af(0x313)] !== undefined &&
            _0x5009ae[_0x52d2af(0x313)] !== "" &&
            (_0x4e8a3b[_0x52d2af(0x313)] =
              _0x452e3a(_0x5009ae[_0x52d2af(0x313)]) ??
              _0x4e8a3b[_0x52d2af(0x313)]);
          ((_0x4e8a3b[_0x52d2af(0x4ed)] =
            _0x5ba8bc[_0x52d2af(0x4ed)] ||
            _0x5ba8bc[_0x52d2af(0x291)] ||
            _0x4e8a3b[_0x52d2af(0x4ed)] ||
            ""),
            (_0x4e8a3b[_0x52d2af(0x291)] =
              _0x5ba8bc[_0x52d2af(0x291)] ||
              _0x5ba8bc[_0x52d2af(0x4ed)] ||
              _0x4e8a3b[_0x52d2af(0x291)] ||
              ""),
            (_0x53174d[_0x56493c][_0x5ddfd5] = _0x4e8a3b),
            _0x53f7ca[_0x52d2af(0x3d6)]++,
            _0x53f7ca[_0x52d2af(0x1cc)][_0x52d2af(0x378)](_0x56493c));
          if (!_0x53f7ca[_0x52d2af(0x284)])
            _0x53f7ca[_0x52d2af(0x284)] = _0x56493c;
        }
      }
      if (_0x53f7ca[_0x52d2af(0x3d6)] > 0x0) {
        _0x553361(_0x53174d);
        if (preferCloud && _0x53f7ca[_0x52d2af(0x284)]) {
          localStorage[_0x52d2af(0x1e2)](
            _0x3269b5,
            _0x53f7ca[_0x52d2af(0x284)],
          );
          const _0x2171ec = _0x243cb9();
          ((_0x2171ec[_0x52d2af(0x3c2)] = _0x52d2af(0x1cc)),
            (_0x2171ec[_0x52d2af(0x2a2)] = _0x53f7ca[_0x52d2af(0x284)]),
            _0x5c0dc8(_0x2171ec));
        }
      }
      return _0x53f7ca;
    }
    function _0x16d92a({
      silent: silent = !![],
      force: force = ![],
      preferCloud: preferCloud = ![],
    } = {}) {
      const _0x5c33d7 = a0_0x2779,
        _0x5131f9 = Date[_0x5c33d7(0x33f)]();
      if (!force && _0x5131f9 < _0x5f01be) {
        _0x1136f5 = _0x5131f9;
        return;
      }
      ((_0x1136f5 = _0x5131f9),
        _0x23cc96({
          method: _0x5c33d7(0x4bf),
          path: _0x5c33d7(0x340) + Date[_0x5c33d7(0x33f)](),
          headers: { Accept: _0x5c33d7(0x4da) },
          onload(_0x5ec0da) {
            const _0x32e123 = a0_0x2779;
            if (_0x5ec0da[_0x32e123(0x30d)] !== 0xc8) {
              if (!silent)
                console[_0x32e123(0x1fc)](
                  _0x32e123(0x282),
                  _0x5ec0da[_0x32e123(0x30d)],
                );
              _0x584169(
                _0x32e123(0x26e),
                _0x32e123(0x2a5) +
                  _0x5ec0da[_0x32e123(0x30d)] +
                  "\x20" +
                  String(_0x5ec0da[_0x32e123(0x27f)] || "")[_0x32e123(0x1ae)](
                    0x0,
                    0xa0,
                  ),
              );
              return;
            }
            const _0x149e7c = _0xb361f8(_0x5ec0da);
            if (!_0x149e7c["ok"]) {
              if (!silent)
                console[_0x32e123(0x1fc)](
                  _0x32e123(0x30c),
                  _0x149e7c[_0x32e123(0x2a3)],
                );
              _0x584169(_0x32e123(0x26e), _0x149e7c[_0x32e123(0x2a3)]);
              return;
            }
            if (
              _0x149e7c[_0x32e123(0x4c0)] &&
              _0x149e7c[_0x32e123(0x4c0)][_0x32e123(0x30d)] === _0x32e123(0x259)
            ) {
              _0x584169(
                _0x32e123(0x26e),
                _0x149e7c[_0x32e123(0x4c0)][_0x32e123(0x2a3)] ||
                  _0x32e123(0x235),
              );
              return;
            }
            try {
              const _0x1fc4d8 = _0x192a7b(_0x149e7c[_0x32e123(0x4c0)]),
                _0x517421 = _0x4d3e3a(_0x1fc4d8, { preferCloud: preferCloud });
              _0x4c0f36();
              if (_0x517421[_0x32e123(0x3d6)] > 0x0) {
                console[_0x32e123(0x516)](
                  _0x32e123(0x345) +
                    _0x517421[_0x32e123(0x1cc)][_0x32e123(0x444)] +
                    _0x32e123(0x433) +
                    _0x517421[_0x32e123(0x3d6)] +
                    _0x32e123(0x267) +
                    _0x517421[_0x32e123(0x253)] +
                    "\x20筆",
                );
                if (!silent)
                  _0x27b4b3(
                    _0x1c7c17(_0x32e123(0x16e)),
                    _0x1c7c17(_0x32e123(0x4ab), {
                      ports: _0x517421[_0x32e123(0x1cc)][_0x32e123(0x444)],
                      items: _0x517421[_0x32e123(0x3d6)],
                    }),
                  );
              } else {
                console[_0x32e123(0x516)](
                  _0x32e123(0x1b2),
                  _0x517421[_0x32e123(0x253)],
                );
                if (!silent)
                  _0x27b4b3(
                    _0x1c7c17(_0x32e123(0x30b)),
                    _0x1c7c17(_0x32e123(0x1ad)),
                  );
              }
              (_0xa9d376(), _0x4365c4(), _0xef6fd5(), _0x1d8198(), _0x5f3d29());
            } catch (_0x539fb1) {
              _0x584169(_0x32e123(0x26e), _0x539fb1);
            }
          },
          onerror(_0x45216c) {
            const _0x256592 = a0_0x2779;
            _0x584169(_0x256592(0x26e), _0x45216c);
          },
        }));
    }
    function _0x3d9ee1() {
      const _0x31945a = a0_0x2779;
      _0x23cc96({
        method: _0x31945a(0x4bf),
        path: _0x31945a(0x466) + Date[_0x31945a(0x33f)](),
        headers: { Accept: _0x31945a(0x4da) },
        onload(_0x2b7fe4) {
          const _0x2463e3 = a0_0x2779;
          if (_0x2b7fe4[_0x2463e3(0x30d)] !== 0xc8) {
            (_0x584169(
              _0x2463e3(0x485),
              _0x2463e3(0x2a5) +
                _0x2b7fe4[_0x2463e3(0x30d)] +
                "\x20" +
                String(_0x2b7fe4[_0x2463e3(0x27f)] || "")[_0x2463e3(0x1ae)](
                  0x0,
                  0xa0,
                ),
            ),
              _0x27b4b3(
                _0x1c7c17(_0x2463e3(0x35e)),
                _0x399387[_0x2463e3(0x4e2)] || _0x2463e3(0x234),
              ),
              _0x4365c4());
            return;
          }
          const _0x145ee0 = _0xb361f8(_0x2b7fe4);
          if (
            !_0x145ee0["ok"] ||
            !_0x145ee0[_0x2463e3(0x4c0)] ||
            _0x145ee0[_0x2463e3(0x4c0)][_0x2463e3(0x30d)] !== _0x2463e3(0x11f)
          ) {
            (_0x584169(
              _0x2463e3(0x485),
              _0x145ee0[_0x2463e3(0x2a3)] || _0x2463e3(0x308),
            ),
              _0x27b4b3(
                _0x1c7c17(_0x2463e3(0x35e)),
                _0x399387[_0x2463e3(0x4e2)] || _0x2463e3(0x234),
              ),
              _0x4365c4());
            return;
          }
          (_0x4c0f36(),
            _0x27b4b3(
              _0x1c7c17(_0x2463e3(0x2ec)),
              _0x1c7c17(_0x2463e3(0x327), {
                time: _0x145ee0[_0x2463e3(0x4c0)][_0x2463e3(0x45c)] || "",
              }),
            ),
            _0x4365c4());
        },
        onerror(_0x55ba37) {
          const _0x483b06 = a0_0x2779;
          (_0x584169(_0x483b06(0x485), _0x55ba37),
            _0x27b4b3(
              _0x1c7c17(_0x483b06(0x35e)),
              _0x399387[_0x483b06(0x4e2)] || _0x483b06(0x234),
            ),
            _0x4365c4());
        },
      });
    }
    function _0x5bf3e7(_0x18eb2f) {
      const _0x39269c = a0_0x2779;
      if (typeof GM_xmlhttpRequest === _0x39269c(0x2c2)) {
        GM_xmlhttpRequest(_0x18eb2f);
        return;
      }
      if (
        typeof GM !== _0x39269c(0x18f) &&
        typeof GM[_0x39269c(0x298)] === _0x39269c(0x2c2)
      ) {
        GM[_0x39269c(0x298)](_0x18eb2f);
        return;
      }
      (_0x584169(_0x39269c(0x46f), _0x39269c(0x2ef)),
        _0x18eb2f[_0x39269c(0x196)]?.(new Error(_0x39269c(0x2ef))));
    }
    function _0xb916f7(_0x25c875) {
      const _0x1c3c9e = a0_0x2779;
      return (
        "" +
        _0xc50229() +
        (_0x25c875[_0x1c3c9e(0x2b7)]("/") ? _0x25c875 : "/" + _0x25c875)
      );
    }
    function _0x472af6(_0x5ddc03, _0x3fb347 = {}) {
      const _0x3634f4 = a0_0x2779;
      console[_0x3634f4(0x135)](_0x3634f4(0x4d5), _0x5ddc03, _0x3fb347);
    }
    function _0x28b4a2(_0x5eebd5, _0x2fb872 = {}) {
      const _0x515fa9 = a0_0x2779;
      console[_0x515fa9(0x1fc)](_0x515fa9(0x4d5), _0x5eebd5, _0x2fb872);
    }
    function _0x59347b(_0x4500b7 = ![]) {
      const _0x1ac749 = a0_0x2779,
        _0x54a167 = Date[_0x1ac749(0x33f)](),
        _0x3747e6 = _0x13db48();
      if (
        !_0x4500b7 &&
        _0x3bedc4 &&
        _0x3bedc4[_0x1ac749(0x273)] > _0x54a167 + 0x3e8
      )
        return (
          _0x472af6(_0x1ac749(0x529), {
            keyId: _0x3bedc4[_0x1ac749(0x1a7)],
            expiresInMs: _0x3bedc4[_0x1ac749(0x273)] - _0x54a167,
          }),
          Promise[_0x1ac749(0x33e)](_0x3bedc4)
        );
      if (!_0x4500b7 && _0x3dc16c) return _0x3dc16c;
      const _0x4d081f = new Promise((_0x2d360b, _0x891bc7) => {
        const _0x245bf3 = a0_0x2779;
        (_0x472af6(_0x245bf3(0x175), { forceRefresh: _0x4500b7 }),
          _0x5bf3e7({
            method: _0x245bf3(0x4bf),
            url: _0xb916f7(
              _0x245bf3(0x3b4) +
                encodeURIComponent(_0x3747e6) +
                _0x245bf3(0x2eb) +
                _0x54a167,
            ),
            headers: { Accept: _0x245bf3(0x4a5) },
            async onload(_0x5b3139) {
              const _0x3b8752 = a0_0x2779;
              _0x472af6(_0x3b8752(0x517), {
                status: _0x5b3139[_0x3b8752(0x30d)],
              });
              if (_0x5b3139[_0x3b8752(0x30d)] !== 0xc8) {
                _0x891bc7(
                  new Error(_0x3b8752(0x4e9) + _0x5b3139[_0x3b8752(0x30d)]),
                );
                return;
              }
              try {
                const _0x358338 = JSON[_0x3b8752(0x2c6)](
                    _0x5b3139[_0x3b8752(0x27f)],
                  ),
                  _0x57992d = _0x358338?.[_0x193e19(_0x3b8752(0x4ca))],
                  _0x2287a9 = _0x358338?.[_0x193e19(_0x3b8752(0x2c1))],
                  _0x13541d = _0x358338?.[_0x193e19(_0x3b8752(0x22b))];
                if (
                  !_0x57992d ||
                  !Number[_0x3b8752(0x512)](_0x2287a9) ||
                  Number(_0x13541d) <= Date[_0x3b8752(0x33f)]()
                )
                  throw new Error(_0x3b8752(0x2f4));
                ((_0x3bedc4 = {
                  key: await _0x46b06b(String(_0x57992d), _0x3747e6),
                  keyId: _0x2287a9,
                  expiresAt: Number(_0x13541d),
                }),
                  _0x472af6(_0x3b8752(0x398), {
                    keyId: _0x2287a9,
                    expiresInMs:
                      _0x3bedc4[_0x3b8752(0x273)] - Date[_0x3b8752(0x33f)](),
                  }),
                  _0x2d360b(_0x3bedc4));
              } catch (_0x383381) {
                (_0x28b4a2(_0x3b8752(0x2c3), { error: _0x4744d5(_0x383381) }),
                  _0x891bc7(_0x383381));
              }
            },
            onerror(_0x2a84a3) {
              const _0x33c863 = a0_0x2779;
              (_0x28b4a2(_0x33c863(0x3e9), { error: _0x4744d5(_0x2a84a3) }),
                _0x891bc7(
                  _0x2a84a3 instanceof Error
                    ? _0x2a84a3
                    : new Error(String(_0x2a84a3)),
                ));
            },
          }));
      });
      return (
        (_0x3dc16c = _0x4d081f),
        _0x4d081f[_0x1ac749(0x1ce)](() => {
          if (_0x3dc16c === _0x4d081f) _0x3dc16c = null;
        })
      );
    }
    function _0x23cc96({
      method: method = _0x1af0b3(0x4bf),
      path: _0x4e88db,
      payload: _0x306b53,
      signed: signed = ![],
      headers: headers = {},
      onload: _0x5e2564,
      onerror: _0x426303,
    }) {
      const _0x18d492 = async (_0x354007 = ![]) => {
        const _0x42a734 = a0_0x2779;
        try {
          _0x472af6(_0x42a734(0x1e6), {
            method: method,
            path: String(_0x4e88db)[_0x42a734(0x42d)]("?")[0x0],
            signed: signed,
            retryAfter401: _0x354007,
            hasPayload: _0x306b53 !== undefined,
          });
          let _0x110386 = _0x306b53;
          if (signed) {
            const _0x636479 = await _0x59347b(_0x354007);
            ((_0x110386 = await _0x5cde4e(_0x306b53 || {}, _0x636479)),
              _0x472af6(_0x42a734(0x24d), {
                path: String(_0x4e88db)[_0x42a734(0x42d)]("?")[0x0],
                keyId: _0x636479[_0x42a734(0x1a7)],
              }));
          }
          _0x5bf3e7({
            method: method,
            url: _0xb916f7(_0x4e88db),
            data:
              _0x110386 === undefined
                ? undefined
                : JSON[_0x42a734(0x2ac)](_0x110386),
            headers: headers,
            onload(_0x2bb3d4) {
              const _0x444252 = a0_0x2779;
              _0x472af6(_0x444252(0x37e), {
                method: method,
                path: String(_0x4e88db)[_0x444252(0x42d)]("?")[0x0],
                status: _0x2bb3d4[_0x444252(0x30d)],
              });
              if (
                signed &&
                _0x2bb3d4[_0x444252(0x30d)] === 0x191 &&
                !_0x354007
              ) {
                (_0x28b4a2(_0x444252(0x38a), {
                  path: String(_0x4e88db)[_0x444252(0x42d)]("?")[0x0],
                }),
                  (_0x3bedc4 = null),
                  _0x18d492(!![]));
                return;
              }
              _0x5e2564?.(_0x2bb3d4);
            },
            onerror(_0x16d6f6) {
              const _0x2e8051 = a0_0x2779;
              (_0x28b4a2(_0x2e8051(0x270), {
                method: method,
                path: String(_0x4e88db)[_0x2e8051(0x42d)]("?")[0x0],
                error: _0x4744d5(_0x16d6f6),
              }),
                _0x426303?.(_0x16d6f6));
            },
          });
        } catch (_0x159f76) {
          (_0x28b4a2(_0x42a734(0x1ea), {
            method: method,
            path: String(_0x4e88db)[_0x42a734(0x42d)]("?")[0x0],
            error: _0x4744d5(_0x159f76),
          }),
            _0x426303?.(_0x159f76));
        }
      };
      _0x18d492();
    }
    function _0x27b4b3(_0x3dc264, _0x3980b3) {
      const _0x19f96f = a0_0x2779;
      document[_0x19f96f(0x22d)](_0x19f96f(0x143))?.[_0x19f96f(0x203)]();
      const _0x11a528 = document[_0x19f96f(0x118)](_0x19f96f(0x230));
      ((_0x11a528["id"] = _0x19f96f(0x143)),
        (_0x11a528[_0x19f96f(0x114)] =
          _0x19f96f(0x4df) +
          _0x32abaa(_0x3dc264) +
          _0x19f96f(0x1a2) +
          _0x32abaa(_0x3980b3) +
          _0x19f96f(0x348)),
        document[_0x19f96f(0x4b4)][_0x19f96f(0x1d6)](_0x11a528),
        clearTimeout(_0x3df323),
        (_0x3df323 = setTimeout(() => {
          const _0x1fb429 = a0_0x2779;
          (_0x11a528[_0x1fb429(0x489)][_0x1fb429(0x378)](_0x1fb429(0x4bc)),
            setTimeout(() => _0x11a528[_0x1fb429(0x203)](), 0x1c2));
        }, 0x2710)));
    }
    function _0x1576b2() {
      const _0x2486c8 = a0_0x2779,
        _0x29e085 = _0x413f88(_0x4082e4());
      let _0x3db477 = _0x598ea4();
      return (
        !_0x3db477 || !Object[_0x2486c8(0x13c)](_0x3db477)[_0x2486c8(0x40a)]
          ? ((_0x3db477 = _0x3d8818(_0x29e085)), _0x3c6c7d(_0x3db477))
          : (_0x3db477 = _0x413f88(_0x3db477)),
        { current: _0x29e085, seen: _0x3db477 }
      );
    }
    function _0x1a1812(_0x30eea5, _0x51e081) {
      const _0x3427ad = a0_0x2779,
        _0x4708e1 = [],
        _0x9b430 = new Set([
          ...Object[_0x3427ad(0x13c)](_0x30eea5 || {}),
          ...Object[_0x3427ad(0x13c)](_0x51e081 || {}),
        ]);
      for (const _0x436561 of _0x9b430) {
        const _0x5262ce = _0x30eea5[_0x436561] || {},
          _0x3e6e71 = _0x51e081[_0x436561] || {},
          _0x5c11b8 = new Set([
            ...Object[_0x3427ad(0x13c)](_0x5262ce),
            ...Object[_0x3427ad(0x13c)](_0x3e6e71),
          ]),
          _0x2b0118 = [];
        for (const _0x2fc6da of _0x5c11b8) {
          const _0x234995 = _0x5262ce[_0x2fc6da],
            _0x3b3c09 = _0x3e6e71[_0x2fc6da];
          if (!_0x3b3c09 && _0x234995) {
            _0x2b0118[_0x3427ad(0x246)]({
              type: _0x3427ad(0x1cf),
              item: _0x2fc6da,
              oldInfo: null,
              newInfo: _0x234995,
            });
            continue;
          }
          if (_0x3b3c09 && !_0x234995) {
            _0x2b0118[_0x3427ad(0x246)]({
              type: _0x3427ad(0x4a6),
              item: _0x2fc6da,
              oldInfo: _0x3b3c09,
              newInfo: null,
            });
            continue;
          }
          const _0x5815ea = Number(_0x3b3c09[_0x3427ad(0x479)] ?? 0x0),
            _0x408e92 = Number(_0x234995[_0x3427ad(0x479)] ?? 0x0),
            _0x4b58b3 = _0x3b3c09[_0x3427ad(0x238)] ?? null,
            _0xe9295a = _0x234995[_0x3427ad(0x238)] ?? null,
            _0x19f5fc = String(_0x3b3c09[_0x3427ad(0x31d)] ?? "-"),
            _0x1d8868 = String(_0x234995[_0x3427ad(0x31d)] ?? "-"),
            _0x4fb53a = String(_0x3b3c09[_0x3427ad(0x26a)] ?? "-"),
            _0x203263 = String(_0x234995[_0x3427ad(0x26a)] ?? "-");
          (_0x5815ea !== _0x408e92 ||
            _0x4b58b3 !== _0xe9295a ||
            _0x19f5fc !== _0x1d8868 ||
            _0x4fb53a !== _0x203263) &&
            _0x2b0118[_0x3427ad(0x246)]({
              type: _0x3427ad(0x202),
              item: _0x2fc6da,
              oldInfo: _0x3b3c09,
              newInfo: _0x234995,
              delta: _0x408e92 - _0x5815ea,
            });
        }
        if (_0x2b0118[_0x3427ad(0x40a)])
          _0x4708e1[_0x3427ad(0x246)]({ port: _0x436561, items: _0x2b0118 });
      }
      return _0x4708e1;
    }
    function _0x3ba685(_0x368dcb) {
      const _0x484f0a = a0_0x2779;
      return _0x368dcb[_0x484f0a(0x3a4)](
        (_0x741834, _0x393b43) =>
          _0x741834 + _0x393b43[_0x484f0a(0x405)][_0x484f0a(0x40a)],
        0x0,
      );
    }
    function _0x2afc4a(_0x3ad89f, _0x14a97f = _0x1d5e31()) {
      const _0x3f648b = a0_0x2779,
        _0x519b3e = Number(_0x3ad89f?.[_0x3f648b(0x479)] ?? 0x0),
        _0x479d83 = Number(_0x3ad89f?.[_0x3f648b(0x238)] ?? 0x0);
      if (_0x479d83 > 0x0)
        return (
          _0x519b3e / _0x479d83 <= Number(_0x14a97f[_0x3f648b(0x260)] || 0.15)
        );
      return _0x519b3e <= 0x5;
    }
    function _0x244769(_0x16907c) {
      const _0x319ce0 = a0_0x2779,
        _0x5a2846 = Object[_0x319ce0(0x1b3)](_0x16907c || {})
          [_0x319ce0(0x428)]((_0x53e665) =>
            String(_0x53e665[_0x319ce0(0x45c)] || "")[_0x319ce0(0x3db)](),
          )
          [_0x319ce0(0x1c0)](
            (_0x45de3d) =>
              _0x45de3d &&
              _0x45de3d !== "-" &&
              _0x45de3d !== _0x319ce0(0x18a) &&
              _0x45de3d !== "未知",
          );
      if (!_0x5a2846[_0x319ce0(0x40a)]) return _0x319ce0(0x18a);
      return (
        _0x5a2846[_0x319ce0(0x40e)](),
        _0x5a2846[_0x5a2846[_0x319ce0(0x40a)] - 0x1]
      );
    }
    function _0x5dc50a(_0x438482) {
      const _0x1631ca = a0_0x2779,
        _0x4c5b33 = Number(_0x438482?.[_0x1631ca(0x479)] || 0x0),
        _0x549e3b = Number(_0x438482?.[_0x1631ca(0x238)] || 0x0);
      return _0x549e3b > 0x0 ? _0x4c5b33 + "/" + _0x549e3b : "" + _0x4c5b33;
    }
    function _0x1b1d8c(_0x2a859d) {
      const _0x10f130 = a0_0x2779;
      if (_0x2a859d === null || _0x2a859d === undefined || _0x2a859d === "")
        return null;
      if (
        typeof _0x2a859d === _0x10f130(0x1fe) &&
        Number[_0x10f130(0x4f8)](_0x2a859d)
      )
        return _0x2a859d > 0x174876e800 ? _0x2a859d : _0x2a859d * 0x3e8;
      const _0x574d7f = String(_0x2a859d)[_0x10f130(0x3db)]();
      if (
        !_0x574d7f ||
        _0x574d7f === "-" ||
        _0x574d7f === _0x10f130(0x18a) ||
        _0x574d7f === "未知" ||
        _0x574d7f === _0x10f130(0x1a4)
      )
        return null;
      if (/^\d+$/[_0x10f130(0x190)](_0x574d7f)) {
        const _0x155087 = Number(_0x574d7f);
        return _0x155087 > 0x174876e800 ? _0x155087 : _0x155087 * 0x3e8;
      }
      let _0x3f4c5f = _0x574d7f[_0x10f130(0x1d8)](
        /^(\d{4})\/(\d{1,2})\/(\d{1,2})\s+(\d{1,2}):(\d{2})(?::(\d{2}))?/,
      );
      if (_0x3f4c5f) {
        const [
            ,
            _0x2942a6,
            _0x2328df,
            _0x5add2b,
            _0x215b50,
            _0x2d5b06,
            _0x3a33ea,
          ] = _0x3f4c5f,
          _0x3b101a = new Date(
            Number(_0x2942a6),
            Number(_0x2328df) - 0x1,
            Number(_0x5add2b),
            Number(_0x215b50),
            Number(_0x2d5b06),
            Number(_0x3a33ea || 0x0),
          )[_0x10f130(0x27e)]();
        return Number[_0x10f130(0x4f8)](_0x3b101a) ? _0x3b101a : null;
      }
      _0x3f4c5f = _0x574d7f[_0x10f130(0x1d8)](
        /^(\d{4})-(\d{1,2})-(\d{1,2})\s+(\d{1,2}):(\d{2})(?::(\d{2}))?/,
      );
      if (_0x3f4c5f) {
        const [
            ,
            _0x35e243,
            _0x31bccb,
            _0x371bd8,
            _0x50435b,
            _0x270bee,
            _0x4d1f22,
          ] = _0x3f4c5f,
          _0x50629a = new Date(
            Number(_0x35e243),
            Number(_0x31bccb) - 0x1,
            Number(_0x371bd8),
            Number(_0x50435b),
            Number(_0x270bee),
            Number(_0x4d1f22 || 0x0),
          )[_0x10f130(0x27e)]();
        return Number[_0x10f130(0x4f8)](_0x50629a) ? _0x50629a : null;
      }
      const _0x58d716 = Date[_0x10f130(0x2c6)](_0x574d7f);
      return Number[_0x10f130(0x4f8)](_0x58d716) ? _0x58d716 : null;
    }
    function _0x2a9349(_0xf12b8f) {
      const _0x1d33cc = a0_0x2779;
      if (!_0xf12b8f || typeof _0xf12b8f !== _0x1d33cc(0x3ad)) return 0x0;
      return (
        _0x1b1d8c(
          _0xf12b8f[_0x1d33cc(0x4ed)] ||
            _0xf12b8f[_0x1d33cc(0x291)] ||
            _0xf12b8f[_0x1d33cc(0x469)] ||
            _0xf12b8f[_0x1d33cc(0x46d)],
        ) || 0x0
      );
    }
    function _0xa075f4(_0x127beb) {
      const _0x42512a = a0_0x2779;
      if (!_0x127beb || typeof _0x127beb !== _0x42512a(0x3ad)) return 0x0;
      return _0x1b1d8c(_0x127beb[_0x42512a(0x45c)]) || 0x0;
    }
    function _0x2c181c(_0x590001, _0x3a098e) {
      const _0x1e7e12 = _0x2a9349(_0x590001),
        _0x474326 = _0x2a9349(_0x3a098e);
      if (_0x1e7e12 && _0x474326) return _0x474326 >= _0x1e7e12;
      const _0xa885f2 = _0xa075f4(_0x590001),
        _0xe5d99b = _0xa075f4(_0x3a098e);
      if (_0x1e7e12 && !_0x474326) {
        if (!_0xe5d99b) return ![];
        if (_0xa885f2 && _0xe5d99b <= _0xa885f2) return ![];
        return !![];
      }
      if (!_0x1e7e12 && _0x474326) {
        if (!_0xa885f2) return !![];
        return _0x474326 >= _0xa885f2;
      }
      if (!_0xa885f2) return !![];
      if (!_0xe5d99b) return ![];
      return _0xe5d99b >= _0xa885f2;
    }
    function _0x157477(_0x4ed8b5, _0x51ac87, _0x3c8426 = {}) {
      const _0x27ee27 = a0_0x2779;
      let _0x214d7f = _0x5e2019() === "en" ? _0x51ac87 : _0x4ed8b5;
      for (const [_0x54f6fd, _0x112b69] of Object[_0x27ee27(0x4ac)](
        _0x3c8426 || {},
      )) {
        _0x214d7f = _0x214d7f[_0x27ee27(0x110)](
          "{" + _0x54f6fd + "}",
          String(_0x112b69),
        );
      }
      return _0x214d7f;
    }
    function _0x45fcdf(_0x3aa554) {
      const _0x2e4e9f = a0_0x2779,
        _0x140ca1 = _0x1b1d8c(_0x3aa554);
      if (!_0x140ca1) return "";
      const _0x52717d = _0xb05d7e(new Date(_0x140ca1), new Date());
      return (
        (_0x140ca1 < Date[_0x2e4e9f(0x33f)]()
          ? _0x157477("已過", _0x2e4e9f(0x14f))
          : _0x157477("約", _0x2e4e9f(0x322))) +
        "\x20" +
        _0x52717d
      );
    }
    function _0x27198a(_0x6c0b59) {
      const _0x39d45c = a0_0x2779;
      if (!_0x6c0b59 || typeof _0x6c0b59 !== _0x39d45c(0x3ad)) return null;
      const _0x265b88 = Number(_0x6c0b59[_0x39d45c(0x479)] || 0x0),
        _0x419371 = Number(
          _0x6c0b59[_0x39d45c(0x238)] || _0x6c0b59[_0x39d45c(0x313)] || 0x0,
        ),
        _0x51772c = _0x1b1d8c(_0x6c0b59[_0x39d45c(0x47e)]),
        _0x536608 = _0x452e3a(_0x6c0b59[_0x39d45c(0x244)]),
        _0x2b4385 = _0x452e3a(_0x6c0b59[_0x39d45c(0x313)]) || _0x419371,
        _0x3361c7 =
          _0x2a9349(_0x6c0b59) ||
          _0xa075f4(_0x6c0b59) ||
          Date[_0x39d45c(0x33f)]();
      if (
        _0x265b88 <= 0x0 ||
        _0x419371 <= 0x0 ||
        !_0x51772c ||
        !_0x536608 ||
        !_0x2b4385
      )
        return null;
      if (_0x536608 <= _0x265b88) return null;
      if (_0x536608 / _0x2b4385 < _0x327fc1) return null;
      if (_0x3361c7 <= _0x51772c) return null;
      if (_0x3361c7 - _0x51772c > _0x5be239) return null;
      const _0x29771b = _0x536608 - _0x265b88,
        _0xd5a279 = Math[_0x39d45c(0x238)](
          0x3,
          Math[_0x39d45c(0x248)](_0x2b4385 * _0x336149),
        );
      if (_0x29771b < _0xd5a279) return null;
      const _0x44c029 = _0x3361c7 - _0x51772c;
      if (_0x44c029 < _0x5e3a72) return null;
      const _0x74e195 = _0x44c029 / _0x29771b,
        _0x4d5e1a = _0x3361c7 + Math[_0x39d45c(0x232)](_0x265b88 * _0x74e195),
        _0x44bf31 = Math[_0x39d45c(0x232)](_0x2b4385 * _0x74e195),
        _0x166e01 = _0x4d5e1a + Math[_0x39d45c(0x232)](_0x44bf31 * _0xe21e17);
      if (!Number[_0x39d45c(0x4f8)](_0x166e01) || _0x166e01 <= _0x3361c7)
        return null;
      if (_0x166e01 - _0x3361c7 > _0x1cdd18) return null;
      return {
        estimatedAt: _0x166e01,
        projectedSoldOutAt: _0x4d5e1a,
        anchorCount: _0x536608,
        anchorMax: _0x2b4385,
        count: _0x265b88,
        max: _0x419371,
      };
    }
    function _0x1a805d(_0x377cd5) {
      const _0x1bc680 = a0_0x2779,
        _0xb80d49 = Number(_0x377cd5?.[_0x1bc680(0x479)] || 0x0),
        _0xf1469d = _0x1b1d8c(_0x377cd5?.[_0x1bc680(0x439)]),
        _0x475c69 = String(_0x377cd5?.[_0x1bc680(0x430)] || ""),
        _0x4ace81 = String(_0x377cd5?.[_0x1bc680(0x51b)] || "")[
          _0x1bc680(0x3db)
        ](),
        _0x3cb5c9 = String(
          _0x377cd5?.[_0x1bc680(0x191)] ||
            _0x377cd5?.[_0x1bc680(0x3e3)] ||
            _0x377cd5?.[_0x1bc680(0x355)] ||
            "",
        )[_0x1bc680(0x3db)]();
      if (
        _0x3cb5c9 &&
        _0x3cb5c9 !== "-" &&
        _0x3cb5c9 !== _0x1bc680(0x1a4) &&
        _0x3cb5c9 !== _0x1bc680(0x421)
      )
        return _0x3cb5c9;
      const _0x342601 =
        !!_0xf1469d &&
        (_0x475c69 === _0x1bc680(0x44f) ||
          _0x475c69 === _0x1bc680(0x387) ||
          _0x475c69 === _0x1bc680(0x2e1) ||
          _0xb80d49 <= 0x0 ||
          !!_0x4ace81);
      if (_0x342601) {
        const _0x406234 = _0x45fcdf(_0xf1469d),
          _0x4f673b =
            _0x475c69 === _0x1bc680(0x2e1) ||
            /反推/[_0x1bc680(0x190)](_0x4ace81);
        if (_0x475c69 === _0x1bc680(0x44f))
          return _0x4ace81
            ? _0x406234 + "（" + _0x4ace81 + "）"
            : _0x406234 + _0x1bc680(0x1ee);
        if (_0x4f673b)
          return _0x4ace81
            ? _0x406234 + "（" + _0x4ace81 + "）"
            : _0x406234 + _0x1bc680(0x28a);
        return _0x4ace81
          ? _0x406234 + "（" + _0x4ace81 + "）"
          : _0x406234 + _0x1bc680(0x29b);
      }
      if (_0xb80d49 <= 0x0) return _0x1bc680(0x1a4);
      const _0x483168 = _0x27198a(_0x377cd5);
      if (_0x483168)
        return _0x157477(_0x1bc680(0x193), _0x1bc680(0x2ff), {
          time: _0x45fcdf(_0x483168[_0x1bc680(0x2d0)]),
          anchor:
            _0x483168[_0x1bc680(0x3ee)] + "/" + _0x483168[_0x1bc680(0x149)],
          current:
            _0x483168[_0x1bc680(0x479)] + "/" + _0x483168[_0x1bc680(0x238)],
        });
      const _0x5aef2d = _0x1b1d8c(_0x377cd5?.[_0x1bc680(0x47e)]),
        _0x2bb2c5 = _0x452e3a(_0x377cd5?.[_0x1bc680(0x244)]),
        _0x1849b4 =
          _0x452e3a(_0x377cd5?.[_0x1bc680(0x313)]) ||
          Number(_0x377cd5?.[_0x1bc680(0x238)] || 0x0);
      if (
        _0x5aef2d &&
        _0x2bb2c5 &&
        _0x1849b4 &&
        _0x2bb2c5 / _0x1849b4 >= _0x327fc1
      )
        return _0x157477(_0x1bc680(0x18c), _0x1bc680(0x4aa), {
          anchor: _0x2bb2c5 + "/" + _0x1849b4,
        });
      return _0x157477(_0x1bc680(0x151), _0x1bc680(0x33d));
    }
    function _0x55064b(_0x26f5ac) {
      const _0x17800b = a0_0x2779,
        _0x81082c = Object[_0x17800b(0x505)]({}, _0x26f5ac || {});
      return (
        (_0x81082c[_0x17800b(0x1e9)] =
          _0x1b1d8c(_0x81082c[_0x17800b(0x1e9)]) || ""),
        (_0x81082c[_0x17800b(0x34e)] =
          _0x1b1d8c(_0x81082c[_0x17800b(0x34e)]) || ""),
        (_0x81082c[_0x17800b(0x439)] =
          _0x1b1d8c(_0x81082c[_0x17800b(0x439)]) || ""),
        (_0x81082c[_0x17800b(0x430)] =
          _0x81082c[_0x17800b(0x430)] || _0x17800b(0x2e3)),
        (_0x81082c[_0x17800b(0x47e)] =
          _0x1b1d8c(_0x81082c[_0x17800b(0x47e)]) || ""),
        (_0x81082c[_0x17800b(0x244)] =
          _0x452e3a(_0x81082c[_0x17800b(0x244)]) ?? ""),
        (_0x81082c[_0x17800b(0x313)] =
          _0x452e3a(_0x81082c[_0x17800b(0x313)]) ?? ""),
        (_0x81082c[_0x17800b(0x51b)] = _0x81082c[_0x17800b(0x51b)] || ""),
        (_0x81082c[_0x17800b(0x191)] = _0x81082c[_0x17800b(0x191)] || ""),
        (_0x81082c[_0x17800b(0x3a9)] =
          _0x81082c[_0x17800b(0x3a9)] || _0x81082c[_0x17800b(0x32a)] || ""),
        (_0x81082c[_0x17800b(0x32e)] =
          _0x81082c[_0x17800b(0x32e)] || _0x81082c[_0x17800b(0x4b3)] || ""),
        _0x81082c
      );
    }
    function _0x2386c0() {
      const _0x2e77a1 = a0_0x2779;
      try {
        const _0x55f888 = document[_0x2e77a1(0x2fd)](_0x2e77a1(0x27b)),
          _0x5dfb9b =
            _0x55f888?.[_0x2e77a1(0x278)](_0x2e77a1(0x401))?.[
              _0x2e77a1(0x3db)
            ]() || _0x55f888?.[_0x2e77a1(0x44c)]?.[_0x2e77a1(0x3db)]();
        if (
          _0x5dfb9b &&
          _0x5dfb9b[_0x2e77a1(0x40a)] > 0x0 &&
          _0x5dfb9b[_0x2e77a1(0x40a)] < 0x32
        ) {
          const _0x28c63a = localStorage[_0x2e77a1(0x306)](_0x5790a);
          return (
            _0x28c63a !== _0x5dfb9b &&
              localStorage[_0x2e77a1(0x1e2)](_0x5790a, _0x5dfb9b),
            _0x5dfb9b
          );
        }
        let _0x1116b7 = localStorage[_0x2e77a1(0x306)](_0x5790a);
        return (
          !_0x1116b7 &&
            ((_0x1116b7 =
              "u_" +
              Math[_0x2e77a1(0x441)]()
                [_0x2e77a1(0x3d8)](0x24)
                [_0x2e77a1(0x1ae)](0x2, 0xa) +
              "_" +
              Date[_0x2e77a1(0x33f)]()
                [_0x2e77a1(0x3d8)](0x24)
                [_0x2e77a1(0x1ae)](-0x4)),
            localStorage[_0x2e77a1(0x1e2)](_0x5790a, _0x1116b7)),
          _0x1116b7
        );
      } catch (_0x109d80) {
        return _0x2e77a1(0x3b1) + Date[_0x2e77a1(0x33f)]();
      }
    }
    function _0x1596d8() {
      const _0x504e0c = a0_0x2779,
        _0x47b2cc = String(
          document[_0x504e0c(0x4b4)]?.[_0x504e0c(0x3b8)] || "",
        ),
        _0x4819ec = {
          fromPort: null,
          toPort: null,
          status: null,
          detectedAt: Date[_0x504e0c(0x33f)](),
          arriveAt: null,
        };
      function _0xc802f9(_0x56a14a) {
        const _0x15b102 = a0_0x2779;
        for (const _0x282433 of _0x4714ed) {
          for (const _0x4d9cba of _0x282433[_0x15b102(0x4e1)]) {
            if (_0x56a14a[_0x15b102(0x34d)](_0x4d9cba))
              return _0x282433[_0x15b102(0x2f0)];
          }
        }
        return null;
      }
      function _0x108ec2() {
        const _0x35aa7b = a0_0x2779;
        return [...document[_0x35aa7b(0x435)](_0x35aa7b(0x1ac))][
          _0x35aa7b(0x1c0)
        ]((_0xc9edeb) => {
          const _0x40a365 = a0_0x2779,
            _0x5a07b6 = _0xc9edeb[_0x40a365(0x3b8)]?.[_0x40a365(0x3db)]() || "";
          return /(?:库存|庫存|Stock|Quantity|Qty)\s*[:：]?\s*[0-9,]+\s*\/\s*[0-9,]+/i[
            _0x40a365(0x190)
          ](_0x5a07b6);
        })[_0x35aa7b(0x40a)];
      }
      if (
        _0x47b2cc[_0x504e0c(0x34d)](_0x504e0c(0x335)) ||
        _0x47b2cc[_0x504e0c(0x34d)](_0x504e0c(0x4d8)) ||
        _0x47b2cc[_0x504e0c(0x34d)](_0x504e0c(0x389))
      )
        return (console[_0x504e0c(0x516)](_0x504e0c(0x2c4)), _0x4819ec);
      for (const _0xcb271a of _0x4714ed) {
        const _0x259d98 = _0xcb271a[_0x504e0c(0x2f0)];
        if (
          _0x47b2cc[_0x504e0c(0x34d)]("前往") &&
          _0x47b2cc[_0x504e0c(0x34d)](_0x259d98)
        ) {
          const _0x50ee7c = _0x47b2cc[_0x504e0c(0x288)]("前往"),
            _0x4a591f = _0x47b2cc[_0x504e0c(0x19f)](_0x50ee7c, _0x50ee7c + 0xf);
          if (_0x4a591f[_0x504e0c(0x34d)](_0x259d98)) {
            const _0x8ae2db = /预计|抵达|到达|航行|途中|剩余|还需/[
              _0x504e0c(0x190)
            ](_0x47b2cc);
            if (_0x8ae2db) {
              ((_0x4819ec[_0x504e0c(0x454)] = _0x259d98),
                (_0x4819ec[_0x504e0c(0x30d)] = _0x504e0c(0x4d1)));
              break;
            }
          }
        }
      }
      if (!_0x4819ec[_0x504e0c(0x30d)]) {
        for (const _0x40600c of _0x4714ed) {
          const _0x3d1ef6 = _0x40600c[_0x504e0c(0x2f0)];
          if (
            _0x47b2cc[_0x504e0c(0x34d)]("从") &&
            _0x47b2cc[_0x504e0c(0x34d)](_0x3d1ef6) &&
            (_0x47b2cc[_0x504e0c(0x34d)]("返航") ||
              _0x47b2cc[_0x504e0c(0x34d)]("返回"))
          ) {
            const _0x1363fa = _0x47b2cc[_0x504e0c(0x288)]("从"),
              _0x593d47 = _0x47b2cc[_0x504e0c(0x19f)](
                _0x1363fa,
                _0x1363fa + 0x3c,
              );
            if (
              _0x593d47[_0x504e0c(0x34d)](_0x3d1ef6) &&
              (_0x593d47[_0x504e0c(0x34d)]("返航") ||
                _0x593d47[_0x504e0c(0x34d)]("返回"))
            ) {
              ((_0x4819ec[_0x504e0c(0x173)] = _0x3d1ef6),
                (_0x4819ec[_0x504e0c(0x30d)] = _0x504e0c(0x2c8)));
              break;
            }
          }
        }
        if (!_0x4819ec[_0x504e0c(0x30d)])
          for (const _0x30e537 of _0x4714ed) {
            const _0x427983 = _0x30e537[_0x504e0c(0x2f0)];
            if (
              (_0x47b2cc[_0x504e0c(0x34d)]("返航") ||
                _0x47b2cc[_0x504e0c(0x34d)]("返回")) &&
              _0x47b2cc[_0x504e0c(0x34d)](_0x427983)
            ) {
              const _0x16044a = _0x47b2cc[_0x504e0c(0x34d)]("返航")
                  ? "返航"
                  : "返回",
                _0x3cbf38 = _0x47b2cc[_0x504e0c(0x288)](_0x16044a),
                _0x379c49 = _0x47b2cc[_0x504e0c(0x19f)](
                  Math[_0x504e0c(0x238)](0x0, _0x3cbf38 - 0x28),
                  _0x3cbf38 + 0x50,
                );
              if (_0x379c49[_0x504e0c(0x34d)](_0x427983)) {
                ((_0x4819ec[_0x504e0c(0x173)] = _0x427983),
                  (_0x4819ec[_0x504e0c(0x30d)] = _0x504e0c(0x2c8)));
                break;
              }
            }
          }
        !_0x4819ec[_0x504e0c(0x30d)] &&
          (_0x47b2cc[_0x504e0c(0x34d)]("返航") ||
            _0x47b2cc[_0x504e0c(0x34d)]("返回")) &&
          !_0x47b2cc[_0x504e0c(0x34d)]("前往") &&
          ((_0x4819ec[_0x504e0c(0x173)] = _0xc802f9(_0x47b2cc)),
          (_0x4819ec[_0x504e0c(0x30d)] = _0x504e0c(0x2c8)));
      }
      if (!_0x4819ec[_0x504e0c(0x30d)]) {
        const _0x5e3519 = _0x3db0ce(_0x47b2cc),
          _0x3cb8f9 = _0x108ec2();
        if (_0x5e3519 && _0x3cb8f9 >= 0x2) {
          const _0x56fdb1 = /预计|前往|途中|返航|返回|预计抵达|预计到达/[
            _0x504e0c(0x190)
          ](_0x47b2cc);
          !_0x56fdb1 &&
            ((_0x4819ec[_0x504e0c(0x454)] = _0x5e3519[_0x504e0c(0x2f0)]),
            (_0x4819ec[_0x504e0c(0x30d)] = _0x504e0c(0x139)));
        }
      }
      _0x4819ec[_0x504e0c(0x30d)] &&
        console[_0x504e0c(0x516)](
          _0x504e0c(0x4b8),
          _0x4819ec[_0x504e0c(0x30d)],
          _0x4819ec[_0x504e0c(0x454)] ? "->" + _0x4819ec[_0x504e0c(0x454)] : "",
          _0x4819ec[_0x504e0c(0x173)] ? "<-" + _0x4819ec[_0x504e0c(0x173)] : "",
        );
      if (_0x4819ec[_0x504e0c(0x30d)] === _0x504e0c(0x4d1)) {
        let _0x35c225 = null;
        const _0x190842 = _0x47b2cc[_0x504e0c(0x1d8)](
          /(?:预计抵达|预计到达).*?(\d{2}\/\d{2}\s+\d{2}:\d{2}:\d{2})/,
        );
        _0x190842 && (_0x35c225 = _0x190842[0x1]);
        if (!_0x35c225) {
          const _0x45b55f = document[_0x504e0c(0x435)](_0x504e0c(0x3ca));
          for (const _0x3021b6 of _0x45b55f) {
            const _0xb1821e = _0x3021b6[_0x504e0c(0x44c)] || "";
            if (
              _0xb1821e[_0x504e0c(0x34d)](_0x504e0c(0x25a)) ||
              _0xb1821e[_0x504e0c(0x34d)](_0x504e0c(0x258))
            ) {
              const _0x23eaca = _0xb1821e[_0x504e0c(0x1d8)](
                /(\d{2}\/\d{2}\s+\d{2}:\d{2}:\d{2})/,
              );
              if (_0x23eaca) {
                _0x35c225 = _0x23eaca[0x1];
                break;
              }
            }
          }
        }
        if (_0x35c225) {
          const _0x1347d3 = _0x35c225[_0x504e0c(0x1d8)](
            /(\d{2})\/(\d{2})\s+(\d{2}):(\d{2}):\d{2}/,
          );
          _0x1347d3
            ? (_0x4819ec[_0x504e0c(0x138)] =
                _0x1347d3[0x1] +
                "月" +
                _0x1347d3[0x2] +
                "日\x20" +
                _0x1347d3[0x3] +
                ":" +
                _0x1347d3[0x4])
            : (_0x4819ec[_0x504e0c(0x138)] = _0x35c225);
        }
      }
      return _0x4819ec;
    }
    function _0x45ffc4() {
      const _0x8291c0 = a0_0x2779;
      try {
        const _0x42d83c = localStorage[_0x8291c0(0x306)](_0x237fbf);
        if (!_0x42d83c) return {};
        return JSON[_0x8291c0(0x2c6)](_0x42d83c);
      } catch (_0x2abf4c) {
        return {};
      }
    }
    function _0x11b136(_0x4b79c7) {
      const _0x2419b = a0_0x2779;
      try {
        localStorage[_0x2419b(0x1e2)](
          _0x237fbf,
          JSON[_0x2419b(0x2ac)](_0x4b79c7),
        );
      } catch (_0x1e7bd2) {}
    }
    function _0x18426f(_0x50b171) {
      const _0x39a36c = a0_0x2779,
        _0x56ff2c = Date[_0x39a36c(0x33f)](),
        _0x1e745c = {};
      for (const [_0x1e545c, _0x143d75] of Object[_0x39a36c(0x4ac)](
        _0x50b171 || {},
      )) {
        const _0x509abb = _0x445e6c(_0x1e545c),
          _0x54544e = (_0x143d75 || [])[_0x39a36c(0x1c0)](
            (_0x2bf6dd) =>
              _0x2bf6dd &&
              _0x2bf6dd[_0x39a36c(0x34b)] &&
              _0x56ff2c - _0x2bf6dd[_0x39a36c(0x34b)] < _0x509abb,
          );
        if (_0x54544e[_0x39a36c(0x40a)]) _0x1e745c[_0x1e545c] = _0x54544e;
      }
      return _0x1e745c;
    }
    function _0x3bdc20(_0x430255, _0x153ba6) {
      const _0x1d1364 = a0_0x2779,
        _0x201c2c = _0x72ad5e(_0x430255),
        _0x3766d0 = _0x18426f(_0x153ba6 || {}),
        _0x6d018c = _0x3766d0[_0x201c2c] || [];
      return _0x6d018c[_0x1d1364(0x1c0)](
        (_0x348cd3) =>
          _0x348cd3[_0x1d1364(0x30d)] === _0x1d1364(0x4d1) ||
          _0x348cd3[_0x1d1364(0x30d)] === _0x1d1364(0x2c8),
      )[_0x1d1364(0x40a)];
    }
    function _0x13dbf6(_0x18b566, _0x274125) {
      const _0x8e306f = a0_0x2779,
        _0x4a7a9f = _0x72ad5e(_0x18b566),
        _0x20a250 = _0x18426f(_0x274125 || {}),
        _0x307d58 = _0x20a250[_0x4a7a9f] || [];
      return _0x307d58[_0x8e306f(0x1c0)](
        (_0x4e828d) =>
          _0x4e828d[_0x8e306f(0x30d)] === _0x8e306f(0x4d1) ||
          _0x4e828d[_0x8e306f(0x30d)] === _0x8e306f(0x2c8),
      );
    }
    function _0x4a3660(_0x1d651e) {
      const _0x354e27 = a0_0x2779,
        _0x3a60b4 = new Date(_0x1d651e),
        _0x4fefb2 = String(_0x3a60b4[_0x354e27(0x2b9)]() + 0x1)[
          _0x354e27(0x3ed)
        ](0x2, "0"),
        _0x11ca17 = String(_0x3a60b4[_0x354e27(0x492)]())[_0x354e27(0x3ed)](
          0x2,
          "0",
        ),
        _0x2fa252 = String(_0x3a60b4[_0x354e27(0x4f9)]())[_0x354e27(0x3ed)](
          0x2,
          "0",
        ),
        _0x325141 = String(_0x3a60b4[_0x354e27(0x459)]())[_0x354e27(0x3ed)](
          0x2,
          "0",
        );
      return (
        _0x4fefb2 + "月" + _0x11ca17 + "日\x20" + _0x2fa252 + ":" + _0x325141
      );
    }
    function _0x3779bc(_0x169cd2, _0x28f1be) {
      const _0x1f8641 = a0_0x2779,
        _0x5b08fa = _0x13dbf6(_0x169cd2, _0x28f1be);
      if (_0x5b08fa[_0x1f8641(0x40a)] === 0x0) return _0x1f8641(0x11a);
      const _0x3ab697 = _0x5b08fa[_0x1f8641(0x428)]((_0x2a6835) => {
        const _0x1bc6a7 = a0_0x2779,
          _0x5e08f8 = _0x2a6835[_0x1bc6a7(0x138)]
            ? _0x2a6835[_0x1bc6a7(0x138)]
            : _0x4a3660(_0x2a6835[_0x1bc6a7(0x34b)]);
        return (
          _0x1bc6a7(0x1b7) +
          _0x32abaa(_0x2a6835[_0x1bc6a7(0x475)]) +
          _0x1bc6a7(0x28b) +
          _0x32abaa(_0x5e08f8) +
          _0x1bc6a7(0x159)
        );
      })[_0x1f8641(0x4f0)]("");
      return (
        _0x1f8641(0x134) +
        _0x5b08fa[_0x1f8641(0x40a)] +
        _0x1f8641(0x15f) +
        _0x3ab697 +
        _0x1f8641(0x37d)
      );
    }
    function _0x503605(_0x459156) {
      const _0x410008 = a0_0x2779,
        _0x35519d = _0x459156?.[_0x410008(0x2f0)],
        _0x2c5abb = [
          typeof _0x35519d === _0x410008(0x392) ? _0x35519d : "",
          _0x35519d?.[_0x410008(0x123)],
          _0x35519d?.[_0x410008(0x4c4)],
          _0x35519d?.["id"],
          _0x35519d?.[_0x410008(0x16d)],
          _0x459156?.[_0x410008(0x464)],
        ];
      for (const _0x5c995c of _0x2c5abb) {
        const _0x25eb6f = String(_0x5c995c || "")[_0x410008(0x3db)]();
        for (const _0x3af6ce of [
          _0x25eb6f,
          _0x25eb6f[_0x410008(0x2b3)](/^(?:port|voyage)_/i, ""),
        ]) {
          const _0x326d46 = _0x72ad5e(_0x3af6ce);
          if (
            _0x4714ed[_0x410008(0x1cb)](
              (_0x5a450a) => _0x5a450a[_0x410008(0x2f0)] === _0x326d46,
            )
          )
            return _0x326d46;
        }
      }
      return "";
    }
    function _0x3bea21(_0x4ba686) {
      const _0x16a6b3 = a0_0x2779,
        _0x23e17b = String(_0x4ba686 || "")
          [_0x16a6b3(0x3db)]()
          [_0x16a6b3(0x2da)]();
      if (!_0x23e17b) return "";
      if (
        [
          _0x16a6b3(0x33c),
          _0x16a6b3(0x303),
          _0x16a6b3(0x14b),
          _0x16a6b3(0x10f),
        ][_0x16a6b3(0x34d)](_0x23e17b)
      )
        return _0x16a6b3(0x33c);
      if (
        [
          _0x16a6b3(0x4d1),
          _0x16a6b3(0x165),
          _0x16a6b3(0x2e4),
          _0x16a6b3(0x257),
          _0x16a6b3(0x42f),
        ][_0x16a6b3(0x34d)](_0x23e17b)
      )
        return _0x16a6b3(0x4d1);
      if (
        [
          _0x16a6b3(0x2c8),
          _0x16a6b3(0x386),
          _0x16a6b3(0x167),
          _0x16a6b3(0x30e),
          _0x16a6b3(0x44e),
        ][_0x16a6b3(0x34d)](_0x23e17b)
      )
        return _0x16a6b3(0x2c8);
      if (
        [
          _0x16a6b3(0x139),
          _0x16a6b3(0x189),
          _0x16a6b3(0x1a3),
          _0x16a6b3(0x2f0),
        ][_0x16a6b3(0x34d)](_0x23e17b)
      )
        return _0x16a6b3(0x139);
      return "";
    }
    function _0xb332e3(_0x2b12fc) {
      const _0xdb3bb9 = a0_0x2779,
        _0x504d7f =
          _0x2b12fc?.[_0xdb3bb9(0x30d)] &&
          typeof _0x2b12fc[_0xdb3bb9(0x30d)] === _0xdb3bb9(0x3ad)
            ? _0x2b12fc[_0xdb3bb9(0x30d)]
            : _0x2b12fc?.[_0xdb3bb9(0x3f5)];
      if (!_0x504d7f || typeof _0x504d7f !== _0xdb3bb9(0x3ad)) return null;
      const _0xcf1e8f = _0x3bea21(_0x504d7f[_0xdb3bb9(0x30d)]);
      if (!_0xcf1e8f)
        return (
          console[_0xdb3bb9(0x1fc)](
            _0xdb3bb9(0x368),
            _0x504d7f[_0xdb3bb9(0x30d)],
          ),
          null
        );
      const _0x162a0d = _0x503605(_0x504d7f);
      if (_0xcf1e8f !== _0xdb3bb9(0x33c) && !_0x162a0d)
        return (
          console[_0xdb3bb9(0x1fc)](
            _0xdb3bb9(0x23f),
            _0x504d7f[_0xdb3bb9(0x2f0)] || _0x504d7f[_0xdb3bb9(0x464)] || "",
          ),
          null
        );
      const _0x402ff8 = Date[_0xdb3bb9(0x2c6)](
          _0x504d7f[_0xdb3bb9(0x3fe)] ||
            _0x504d7f[_0xdb3bb9(0x357)] ||
            _0x504d7f[_0xdb3bb9(0x3ec)] ||
            _0x2b12fc[_0xdb3bb9(0x200)] ||
            "",
        ),
        _0x367285 = Date[_0xdb3bb9(0x2c6)](
          _0x504d7f[_0xdb3bb9(0x239)] ||
            _0x504d7f[_0xdb3bb9(0x138)] ||
            _0x504d7f[_0xdb3bb9(0x4d6)] ||
            "",
        );
      return {
        status: _0xcf1e8f,
        fromPort: _0xcf1e8f === _0xdb3bb9(0x2c8) ? _0x162a0d : "",
        toPort:
          _0xcf1e8f === _0xdb3bb9(0x4d1) || _0xcf1e8f === _0xdb3bb9(0x139)
            ? _0x162a0d
            : "",
        detectedAt: Number[_0xdb3bb9(0x4f8)](_0x402ff8)
          ? _0x402ff8
          : Date[_0xdb3bb9(0x33f)](),
        arriveAt: Number[_0xdb3bb9(0x4f8)](_0x367285)
          ? _0x4a3660(_0x367285)
          : "",
        source: _0xdb3bb9(0x44f),
      };
    }
    const _0x2ce2c6 = 0x2 * 0x3c * 0x3e8;
    let _0x40cf16 = null,
      _0x4b80e5 = 0x0;
    function _0x29428e() {
      const _0x1b95c9 = a0_0x2779;
      if (_0x40cf16 && Date[_0x1b95c9(0x33f)]() - _0x4b80e5 <= _0x2ce2c6)
        return _0x40cf16;
      return _0x1596d8();
    }
    function _0x4960b1(_0xf1b968) {
      const _0xdaf53a = a0_0x2779;
      return [
        _0xf1b968[_0xdaf53a(0x30d)],
        _0xf1b968[_0xdaf53a(0x173)] || "",
        _0xf1b968[_0xdaf53a(0x454)] || "",
        _0xf1b968[_0xdaf53a(0x17b)] || "",
        _0xf1b968[_0xdaf53a(0x138)] || "",
      ][_0xdaf53a(0x4f0)](":");
    }
    let _0x3ddb6b = "",
      _0x3d7fa4 = "",
      _0x3f65f6 = null;
    function _0x3475b9(_0x3f6822) {
      const _0x3bc874 = a0_0x2779;
      if (!_0x3f6822?.[_0x3bc874(0x30d)]) return;
      const _0x2175a4 = _0x4960b1(_0x3f6822);
      if (_0x2175a4 === _0x3ddb6b || _0x2175a4 === _0x3d7fa4) return;
      ((_0x3f65f6 = _0x3f6822), _0x5ad52c());
    }
    function _0x5ad52c() {
      const _0x3c8a65 = a0_0x2779;
      if (_0x3d7fa4 || !_0x3f65f6) return;
      const _0x31942e = _0x3f65f6;
      _0x3f65f6 = null;
      const _0x57bb3a = _0x4960b1(_0x31942e);
      if (_0x57bb3a === _0x3ddb6b) return;
      _0x3d7fa4 = _0x57bb3a;
      const _0x1c0f1a = (_0x469019) => {
        const _0x461fa2 = a0_0x2779;
        ((_0x3d7fa4 = ""),
          _0x469019 &&
            ((_0x3ddb6b = _0x57bb3a),
            console[_0x461fa2(0x516)](
              _0x461fa2(0x137),
              _0x31942e[_0x461fa2(0x30d)],
              _0x31942e[_0x461fa2(0x454)] ||
                _0x31942e[_0x461fa2(0x173)] ||
                _0x461fa2(0x33c),
              _0x461fa2(0x19b),
              _0x31942e[_0x461fa2(0x138)] || "无",
            ),
            _0x5f3d29()),
          _0x5ad52c());
      };
      _0x23cc96({
        method: _0x3c8a65(0x3b2),
        path: _0x3c8a65(0x42b),
        payload: _0x435af7([
          [_0x3c8a65(0x152), _0x2386c0()],
          [_0x3c8a65(0x2e8), _0x31942e[_0x3c8a65(0x173)] || ""],
          [_0x3c8a65(0x3ac), _0x31942e[_0x3c8a65(0x454)] || ""],
          [_0x3c8a65(0x493), _0x31942e[_0x3c8a65(0x30d)]],
          [_0x3c8a65(0x34f), _0x31942e[_0x3c8a65(0x17b)]],
          [_0x3c8a65(0x49b), _0x31942e[_0x3c8a65(0x138)] || ""],
        ]),
        signed: !![],
        headers: { "Content-Type": _0x3c8a65(0x4a5) },
        onload(_0x59baf6) {
          const _0x4cb8a5 = a0_0x2779;
          if (_0x59baf6[_0x4cb8a5(0x30d)] === 0xc8) {
            _0x1c0f1a(!![]);
            return;
          }
          (console[_0x4cb8a5(0x1fc)](
            _0x4cb8a5(0x47b),
            _0x59baf6[_0x4cb8a5(0x30d)],
          ),
            _0x1c0f1a(![]));
        },
        onerror(_0x2238b8) {
          const _0x6b32d5 = a0_0x2779;
          (console[_0x6b32d5(0x1fc)](_0x6b32d5(0x474), _0x2238b8),
            _0x1c0f1a(![]));
        },
      });
    }
    function _0x12b5da(_0x8f8649) {
      const _0xdce21f = a0_0x2779,
        _0x489a31 = _0xb332e3(_0x8f8649);
      if (!_0x489a31) return;
      ((_0x40cf16 = _0x489a31), (_0x4b80e5 = Date[_0xdce21f(0x33f)]()));
      if (_0x489a31[_0xdce21f(0x30d)] !== _0xdce21f(0x33c))
        _0x3475b9(_0x489a31);
    }
    function _0x5f3d29() {
      const _0xc540b5 = a0_0x2779;
      _0x23cc96({
        method: _0xc540b5(0x4bf),
        path: _0xc540b5(0x3eb) + Date[_0xc540b5(0x33f)](),
        headers: { Accept: _0xc540b5(0x4da) },
        onload(_0x3eb7c6) {
          const _0x41e3a7 = a0_0x2779;
          if (_0x3eb7c6[_0x41e3a7(0x30d)] !== 0xc8) return;
          try {
            const _0x2d2d9e = JSON[_0x41e3a7(0x2c6)](
              _0x3eb7c6[_0x41e3a7(0x27f)],
            );
            _0x2d2d9e &&
              _0x2d2d9e[_0x41e3a7(0x2db)] &&
              (_0x11b136(_0x2d2d9e[_0x41e3a7(0x2db)]),
              console[_0x41e3a7(0x516)](_0x41e3a7(0x3dd)),
              _0xef6fd5(),
              _0x1d8198());
          } catch (_0x19582c) {}
        },
        onerror(_0x37e8f1) {
          const _0x59580e = a0_0x2779;
          console[_0x59580e(0x1fc)](_0x59580e(0x15d), _0x37e8f1);
        },
      });
    }
    function _0x43335a(_0x5e217f, _0x305f11, _0x27bcf0, _0x36bdb6) {
      if (!_0x5e217f || !_0x305f11 || !_0x27bcf0 || !_0x36bdb6) return ![];
      if (_0x5e217f >= _0x36bdb6) return ![];
      if (_0x305f11 <= 0x0 || _0x27bcf0 <= 0x0) return ![];
      const _0x1edcb6 = _0x305f11 / _0x27bcf0;
      return _0x1edcb6 >= _0x327fc1;
    }
    function _0x68641c(_0x5f33e4, _0xbd8297, _0x1d1048, _0x471d55) {
      const _0x4e1c97 = a0_0x2779;
      if (!_0x43335a(_0x5f33e4, _0xbd8297, _0x1d1048, _0x471d55)) return "";
      const _0x4b5a1b = _0x471d55 - _0x5f33e4;
      if (_0x4b5a1b <= 0x0) return "";
      const _0x102ffd = _0x4b5a1b * (_0x1d1048 / _0xbd8297);
      return _0x471d55 + Math[_0x4e1c97(0x232)](_0x102ffd * _0xe21e17);
    }
    function _0x5975cc(
      _0x5353c5,
      _0x644045,
      _0x5355d8 = Date[_0x1af0b3(0x33f)](),
    ) {
      const _0x3d04ad = a0_0x2779,
        _0x1bb3b7 = _0x55064b(_0x5353c5 || {}),
        _0x534605 = _0x55064b(_0x644045 || {}),
        _0x4660c0 = Object[_0x3d04ad(0x505)]({}, _0x644045),
        _0x416861 = Number(_0x4660c0[_0x3d04ad(0x479)] || 0x0),
        _0xdcbf23 = Number(
          _0x4660c0[_0x3d04ad(0x238)] ||
            _0x1bb3b7[_0x3d04ad(0x238)] ||
            _0x534605[_0x3d04ad(0x313)] ||
            0x0,
        ),
        _0x5e9bbd =
          _0x5353c5 && _0x5353c5[_0x3d04ad(0x479)] !== undefined
            ? Number(_0x5353c5[_0x3d04ad(0x479)])
            : null;
      let _0x5b2871 =
          _0x534605[_0x3d04ad(0x1e9)] || _0x1bb3b7[_0x3d04ad(0x1e9)] || "",
        _0x1d0e0c =
          _0x534605[_0x3d04ad(0x34e)] || _0x1bb3b7[_0x3d04ad(0x34e)] || "",
        _0x55ec28 =
          _0x534605[_0x3d04ad(0x439)] || _0x1bb3b7[_0x3d04ad(0x439)] || "",
        _0x5b5ebb =
          _0x534605[_0x3d04ad(0x430)] ||
          _0x1bb3b7[_0x3d04ad(0x430)] ||
          _0x3d04ad(0x2e3),
        _0x53532d =
          _0x534605[_0x3d04ad(0x47e)] || _0x1bb3b7[_0x3d04ad(0x47e)] || "",
        _0x6635 =
          _0x534605[_0x3d04ad(0x244)] || _0x1bb3b7[_0x3d04ad(0x244)] || "",
        _0x37d6f3 =
          _0x534605[_0x3d04ad(0x313)] || _0x1bb3b7[_0x3d04ad(0x313)] || "",
        _0x59a415 =
          _0x534605[_0x3d04ad(0x51b)] || _0x1bb3b7[_0x3d04ad(0x51b)] || "",
        _0x4f7084 =
          _0x534605[_0x3d04ad(0x3a9)] || _0x1bb3b7[_0x3d04ad(0x3a9)] || "",
        _0x2efdd9 =
          _0x534605[_0x3d04ad(0x32e)] || _0x1bb3b7[_0x3d04ad(0x32e)] || "";
      const _0x508169 =
        _0x1bb3b7[_0x3d04ad(0x3a9)] === _0x3d04ad(0x2ed) &&
        _0x534605[_0x3d04ad(0x3a9)] !== _0x3d04ad(0x2ed) &&
        !!_0x1bb3b7[_0x3d04ad(0x1e9)];
      if (_0xdcbf23 > 0x0) {
        const _0xecfa6c = _0x416861 >= _0xdcbf23,
          _0x175a91 =
            _0x416861 > 0x0 &&
            _0x416861 >= Math[_0x3d04ad(0x248)](_0xdcbf23 * _0x327fc1),
          _0x400545 = _0x5e9bbd !== null && _0x5e9bbd <= 0x0 && _0x416861 > 0x0,
          _0x111879 = _0x5e9bbd !== null && _0x416861 > _0x5e9bbd;
        if (_0x416861 > 0x0) {
          if (_0xecfa6c)
            (!_0x508169 &&
              ((_0x5b2871 = _0x5355d8),
              (_0x4f7084 = _0x534605[_0x3d04ad(0x3a9)] || _0x3d04ad(0x14a))),
              (_0x53532d = _0x5355d8),
              (_0x6635 = _0xdcbf23),
              (_0x37d6f3 = _0xdcbf23),
              (_0x59a415 = _0x508169
                ? _0x59a415 || _0x3d04ad(0x4de)
                : _0x3d04ad(0x11d)));
          else {
            if (_0x175a91) {
              const _0x16e281 =
                !_0x53532d ||
                !_0x6635 ||
                _0x416861 > Number(_0x6635 || 0x0) ||
                _0x400545 ||
                _0x111879;
              _0x16e281 &&
                ((_0x53532d = _0x5355d8),
                (_0x6635 = _0x416861),
                (_0x37d6f3 = _0xdcbf23),
                (_0x59a415 = _0x416861 + "/" + _0xdcbf23 + _0x3d04ad(0x3b3)));
            }
          }
          ((_0x1d0e0c = ""),
            (_0x55ec28 = ""),
            (_0x5b5ebb === _0x3d04ad(0x387) ||
              _0x5b5ebb === _0x3d04ad(0x2e1) ||
              _0x5b5ebb === _0x3d04ad(0x50e) ||
              _0x5b5ebb === _0x3d04ad(0x2e3)) &&
              (_0x5b5ebb = _0x3d04ad(0x4f3)));
        }
        if (_0x416861 <= 0x0) {
          ((_0x5e9bbd !== null && _0x5e9bbd > 0x0) || !_0x1d0e0c) &&
            (_0x1d0e0c = _0x5355d8);
          if (_0x5b2871 && _0x5b2871 < _0x1d0e0c)
            ((_0x55ec28 =
              _0x1d0e0c +
              Math[_0x3d04ad(0x232)]((_0x1d0e0c - _0x5b2871) / 0x2)),
              (_0x5b5ebb = _0x3d04ad(0x387)),
              (_0x59a415 = _0x3d04ad(0x11d)));
          else {
            if (_0x43335a(_0x53532d, _0x6635, _0xdcbf23, _0x1d0e0c))
              ((_0x55ec28 = _0x68641c(
                _0x53532d,
                _0x6635,
                _0xdcbf23,
                _0x1d0e0c,
              )),
                (_0x5b5ebb = _0x55ec28 ? _0x3d04ad(0x2e1) : _0x3d04ad(0x50e)),
                (_0x59a415 = _0x55ec28
                  ? _0x6635 + "/" + _0xdcbf23 + _0x3d04ad(0x3b3)
                  : ""));
            else
              _0x55ec28
                ? (_0x5b5ebb =
                    _0x5b5ebb === _0x3d04ad(0x2e1)
                      ? _0x3d04ad(0x2e1)
                      : _0x3d04ad(0x387))
                : ((_0x55ec28 = ""),
                  (_0x5b5ebb = _0x3d04ad(0x50e)),
                  (_0x59a415 = ""));
          }
        }
      } else {
        if (_0x416861 <= 0x0) {
          _0x5b5ebb = _0x55ec28
            ? _0x5b5ebb || _0x3d04ad(0x387)
            : _0x3d04ad(0x50e);
          if (!_0x1d0e0c) _0x1d0e0c = _0x5355d8;
        } else
          ((_0x5b5ebb = _0x3d04ad(0x4f3)), (_0x1d0e0c = ""), (_0x55ec28 = ""));
      }
      return (
        (_0x4660c0[_0x3d04ad(0x1e9)] = _0x5b2871 || ""),
        (_0x4660c0[_0x3d04ad(0x34e)] = _0x1d0e0c || ""),
        (_0x4660c0[_0x3d04ad(0x439)] = _0x55ec28 || ""),
        (_0x4660c0[_0x3d04ad(0x430)] = _0x5b5ebb || _0x3d04ad(0x2e3)),
        (_0x4660c0[_0x3d04ad(0x47e)] = _0x53532d || ""),
        (_0x4660c0[_0x3d04ad(0x244)] = _0x6635 || ""),
        (_0x4660c0[_0x3d04ad(0x313)] = _0x37d6f3 || ""),
        (_0x4660c0[_0x3d04ad(0x51b)] = _0x59a415 || ""),
        (_0x4660c0[_0x3d04ad(0x191)] = _0x4660c0[_0x3d04ad(0x191)] || ""),
        (_0x4660c0[_0x3d04ad(0x3a9)] = _0x4f7084 || ""),
        (_0x4660c0[_0x3d04ad(0x32e)] = _0x2efdd9 || ""),
        _0x4660c0
      );
    }
    function _0x91f5a1(_0x400744, _0x5423c0) {
      const _0x360800 = a0_0x2779;
      if (_0x5423c0 && _0x5423c0 > 0x0) {
        const _0x111267 = _0x400744 / _0x5423c0;
        if (_0x111267 <= 0.15) return _0x360800(0x482);
        if (_0x111267 <= 0.45) return _0x360800(0x40b);
        return _0x360800(0x205);
      }
      if (_0x400744 <= 0x5) return _0x360800(0x482);
      if (_0x400744 <= 0xa) return _0x360800(0x40b);
      return _0x360800(0x205);
    }
    function _0x4639be(_0x5c7ee7 = ![]) {
      const _0x52684e = a0_0x2779;
      if (_0x399387["ok"] === !![]) {
        const _0x3a5a61 = _0x399387[_0x52684e(0x331)]
          ? "\u3000" +
            _0x1c7c17(_0x52684e(0x42c)) +
            "\x20" +
            _0x578ca3(_0x399387[_0x52684e(0x331)])
          : "";
        return (
          _0x52684e(0x2ae) +
          _0x32abaa(_0x1c7c17(_0x52684e(0x2fa))) +
          _0x32abaa(_0x3a5a61) +
          _0x52684e(0x266)
        );
      }
      if (_0x399387["ok"] === ![]) {
        const _0xd7fc0 = _0x399387[_0x52684e(0x2ee)]
            ? "\u3000" + _0x578ca3(_0x399387[_0x52684e(0x2ee)])
            : "",
          _0x438c26 = _0x5c7ee7
            ? _0x1c7c17(_0x52684e(0x3da))
            : _0x1c7c17(_0x52684e(0x194)),
          _0xdebc1f = _0x399387[_0x52684e(0x4e2)]
            ? "｜" + _0x399387[_0x52684e(0x4e2)]
            : "",
          _0x59e990 = _0x5c7ee7 ? "" : _0x1c7c17(_0x52684e(0x3dc));
        return (
          _0x52684e(0x3f4) +
          _0x32abaa(_0x438c26) +
          _0x32abaa(_0xd7fc0) +
          _0x32abaa(_0xdebc1f) +
          _0x32abaa(_0x59e990) +
          _0x52684e(0x266)
        );
      }
      return (
        _0x52684e(0x2b8) +
        _0x32abaa(_0x1c7c17(_0x52684e(0x45f))) +
        _0x52684e(0x266)
      );
    }
    function _0x405c3a(_0x5b1551) {
      const _0x434a0f = a0_0x2779;
      if (!_0x5b1551[_0x434a0f(0x40a)])
        return (
          _0x434a0f(0x426) +
          _0x32abaa(_0x1c7c17(_0x434a0f(0x472))) +
          _0x434a0f(0x17d) +
          _0x32abaa(_0x1c7c17(_0x434a0f(0x144))) +
          _0x434a0f(0x159)
        );
      return (
        _0x434a0f(0x1cd) +
        _0x32abaa(_0x1c7c17(_0x434a0f(0x1dd), { n: _0x3ba685(_0x5b1551) })) +
        _0x434a0f(0x21e) +
        _0x32abaa(_0x1c7c17(_0x434a0f(0x390))) +
        _0x434a0f(0x1e1) +
        _0x5b1551[_0x434a0f(0x428)](
          (_0x20fbf5) =>
            _0x434a0f(0x1bd) +
            _0x32abaa(_0x3e8d59(_0x20fbf5[_0x434a0f(0x2f0)])) +
            _0x434a0f(0x2e2) +
            _0x20fbf5[_0x434a0f(0x405)]
              [_0x434a0f(0x428)]((_0x4b5d69) => _0x5b2b98(_0x4b5d69))
              [_0x434a0f(0x4f0)]("") +
            _0x434a0f(0x397),
        )[_0x434a0f(0x4f0)]("") +
        _0x434a0f(0x182)
      );
    }
    function _0x5b2b98(_0x51c196) {
      const _0xb68b27 = a0_0x2779,
        _0x326b2d = _0x32abaa(_0x2024de(_0x51c196[_0xb68b27(0x199)]));
      if (_0x51c196[_0xb68b27(0x3ef)] === _0xb68b27(0x1cf)) {
        const _0xbd5d6 = _0x51c196[_0xb68b27(0x154)];
        return (
          _0xb68b27(0x44a) +
          _0x326b2d +
          _0xb68b27(0x379) +
          _0x32abaa(_0x1c7c17(_0xb68b27(0x23e))) +
          _0xb68b27(0x4dc) +
          _0x32abaa(_0x5dc50a(_0xbd5d6)) +
          _0xb68b27(0x21d) +
          _0x32abaa(_0x4f356d(_0xbd5d6[_0xb68b27(0x31d)] || "-")) +
          _0xb68b27(0x1d4)
        );
      }
      if (_0x51c196[_0xb68b27(0x3ef)] === _0xb68b27(0x4a6)) {
        const _0x13267e = _0x51c196[_0xb68b27(0x2bb)];
        return (
          _0xb68b27(0x44a) +
          _0x326b2d +
          _0xb68b27(0x1c5) +
          _0x32abaa(_0x1c7c17(_0xb68b27(0x220))) +
          _0xb68b27(0x4dc) +
          _0x32abaa(_0x1c7c17(_0xb68b27(0x416))) +
          "\x20" +
          _0x32abaa(_0x5dc50a(_0x13267e)) +
          _0xb68b27(0x21d) +
          _0x32abaa(_0x4f356d(_0x13267e[_0xb68b27(0x31d)] || "-")) +
          _0xb68b27(0x1d4)
        );
      }
      const _0x57af81 = _0x51c196[_0xb68b27(0x2bb)],
        _0x16772d = _0x51c196[_0xb68b27(0x154)],
        _0x523fa0 = Number(_0x51c196[_0xb68b27(0x432)] || 0x0),
        _0x20d20b =
          _0x523fa0 > 0x0
            ? _0xb68b27(0x18d)
            : _0x523fa0 < 0x0
              ? _0xb68b27(0x410)
              : _0xb68b27(0x183),
        _0x5c04f4 = _0x523fa0 > 0x0 ? "+" + _0x523fa0 : String(_0x523fa0),
        _0x35dcbe =
          String(_0x57af81[_0xb68b27(0x31d)] ?? "-") !==
          String(_0x16772d[_0xb68b27(0x31d)] ?? "-"),
        _0x16ffd3 =
          String(_0x57af81[_0xb68b27(0x26a)] ?? "-") !==
          String(_0x16772d[_0xb68b27(0x26a)] ?? "-");
      return (
        _0xb68b27(0x2cd) +
        _0x326b2d +
        _0xb68b27(0x35f) +
        _0x32abaa(_0x5dc50a(_0x57af81)) +
        _0xb68b27(0x2ca) +
        _0x32abaa(_0x5dc50a(_0x16772d)) +
        _0xb68b27(0x396) +
        _0x20d20b +
        "\x22>" +
        _0x32abaa(_0x5c04f4) +
        _0xb68b27(0x3fc) +
        (_0x35dcbe
          ? _0xb68b27(0x46c) +
            _0x32abaa(_0x57af81[_0xb68b27(0x31d)] || "-") +
            _0xb68b27(0x2ca) +
            _0x32abaa(_0x16772d[_0xb68b27(0x31d)] || "-") +
            _0xb68b27(0x20c)
          : "") +
        _0xb68b27(0x26d) +
        (_0x16ffd3
          ? _0xb68b27(0x212) +
            _0x32abaa(_0x1c7c17(_0xb68b27(0x10b))) +
            _0xb68b27(0x20c)
          : "") +
        _0xb68b27(0x182)
      );
    }
    function _0x4e15f1(_0x2bab85, _0x20dcef) {
      const _0x388f8d = a0_0x2779,
        _0x3fecd9 = _0x1d5e31(),
        _0x100b22 = new Map(
          _0x20dcef[_0x388f8d(0x428)]((_0x5f371a) => [
            _0x5f371a[_0x388f8d(0x2f0)],
            _0x5f371a[_0x388f8d(0x405)][_0x388f8d(0x40a)],
          ]),
        );
      return (
        _0x388f8d(0x4fe) +
        _0x4714ed[_0x388f8d(0x428)]((_0x59aa31) => {
          const _0x3b0d7f = a0_0x2779,
            _0x4ecf05 = _0x2bab85[_0x59aa31[_0x3b0d7f(0x2f0)]] || {},
            _0xccbb48 = Object[_0x3b0d7f(0x4ac)](_0x4ecf05)[_0x3b0d7f(0x1c0)](
              ([_0x2628b2]) => !_0x50bc96(_0x2628b2),
            ),
            _0x2a2322 = _0xccbb48[_0x3b0d7f(0x1c0)](([, _0x5f515f]) =>
              _0x2afc4a(_0x5f515f, _0x3fecd9),
            )[_0x3b0d7f(0x40a)],
            _0x42602a =
              _0x100b22[_0x3b0d7f(0x129)](_0x59aa31[_0x3b0d7f(0x2f0)]) || 0x0,
            _0x521e98 = _0x244769(_0x4ecf05),
            _0x159a8f = _0x3bdc20(_0x59aa31[_0x3b0d7f(0x2f0)], _0x45ffc4());
          return (
            _0x3b0d7f(0x409) +
            (_0x42602a ? _0x3b0d7f(0x3f2) : "") +
            _0x3b0d7f(0x211) +
            _0x32abaa(_0x59aa31[_0x3b0d7f(0x2f0)]) +
            _0x3b0d7f(0x31c) +
            _0x32abaa(_0x3e8d59(_0x59aa31[_0x3b0d7f(0x2f0)])) +
            "\x20" +
            (_0x159a8f > 0x0
              ? _0x3b0d7f(0x418) +
                _0x32abaa(_0x1c7c17(_0x3b0d7f(0x480), { n: _0x159a8f })) +
                _0x3b0d7f(0x20c)
              : _0x3b0d7f(0x1f5) +
                _0x32abaa(_0x1c7c17(_0x3b0d7f(0x1bc))) +
                _0x3b0d7f(0x20c)) +
            _0x3b0d7f(0x2c0) +
            _0x32abaa(
              _0x1c7c17(_0x3b0d7f(0x3c8), { n: _0xccbb48[_0x3b0d7f(0x40a)] }),
            ) +
            _0x3b0d7f(0x442) +
            _0x32abaa(_0x1c7c17(_0x3b0d7f(0x32b), { time: _0x521e98 })) +
            _0x3b0d7f(0x1ca) +
            (_0x2a2322 ? _0x3b0d7f(0x43a) : _0x3b0d7f(0x218)) +
            "\x22>" +
            _0x32abaa(_0x1c7c17(_0x3b0d7f(0x3cf), { n: _0x2a2322 })) +
            _0x3b0d7f(0x2ea) +
            (_0x42602a
              ? _0x3b0d7f(0x2de) +
                _0x32abaa(_0x1c7c17(_0x3b0d7f(0x1f6), { n: _0x42602a })) +
                _0x3b0d7f(0x20c)
              : _0x3b0d7f(0x251) +
                _0x32abaa(_0x1c7c17(_0x3b0d7f(0x4f1))) +
                _0x3b0d7f(0x20c)) +
            _0x3b0d7f(0x370) +
            (_0x159a8f > 0x0
              ? _0x3b0d7f(0x1f9) +
                _0x32abaa(_0x1c7c17(_0x3b0d7f(0x480), { n: _0x159a8f })) +
                _0x3b0d7f(0x20c)
              : _0x3b0d7f(0x251) +
                _0x32abaa(_0x1c7c17(_0x3b0d7f(0x1bc))) +
                _0x3b0d7f(0x20c)) +
            _0x3b0d7f(0x2a6)
          );
        })[_0x388f8d(0x4f0)]("") +
        _0x388f8d(0x182)
      );
    }
    function _0x2ea2e5(_0x286912, _0x4adb02, _0xbc4071) {
      const _0x158c14 = a0_0x2779,
        _0x31c4d7 = Object[_0x158c14(0x4ac)](_0x286912 || {})[_0x158c14(0x1c0)](
          ([_0x59dfe0]) => !_0x50bc96(_0x59dfe0),
        );
      return _0x31c4d7[_0x158c14(0x40e)]((_0x7babb2, _0x24c7ab) => {
        const _0x3bb9e2 = a0_0x2779,
          [_0x9d91c7, _0x33872b] = _0x7babb2,
          [_0x5f2ae4, _0x317de9] = _0x24c7ab;
        if (_0x4adb02 === _0x3bb9e2(0x123))
          return _0x2024de(_0x9d91c7)[_0x3bb9e2(0x3ab)](
            _0x2024de(_0x5f2ae4),
            _0x5e2019() === "en" ? "en" : _0x3bb9e2(0x172),
          );
        if (_0x4adb02 === _0x3bb9e2(0x31d)) {
          const _0x19a775 =
              _0x452e3a(_0x33872b[_0x3bb9e2(0x31d)]) ??
              Number[_0x3bb9e2(0x141)],
            _0x534f94 =
              _0x452e3a(_0x317de9[_0x3bb9e2(0x31d)]) ??
              Number[_0x3bb9e2(0x141)];
          return (
            _0x19a775 - _0x534f94 ||
            _0x2024de(_0x9d91c7)[_0x3bb9e2(0x3ab)](
              _0x2024de(_0x5f2ae4),
              _0x5e2019() === "en" ? "en" : _0x3bb9e2(0x172),
            )
          );
        }
        if (_0x4adb02 === _0x3bb9e2(0x45c))
          return (
            String(_0x317de9[_0x3bb9e2(0x45c)] || "")[_0x3bb9e2(0x3ab)](
              String(_0x33872b[_0x3bb9e2(0x45c)] || ""),
            ) ||
            _0x2024de(_0x9d91c7)[_0x3bb9e2(0x3ab)](
              _0x2024de(_0x5f2ae4),
              _0x5e2019() === "en" ? "en" : _0x3bb9e2(0x172),
            )
          );
        const _0x40f98a = _0x2afc4a(_0x33872b, _0xbc4071) ? 0x0 : 0x1,
          _0x578029 = _0x2afc4a(_0x317de9, _0xbc4071) ? 0x0 : 0x1,
          _0x243d53 = Number(_0x33872b[_0x3bb9e2(0x238)] || 0x0),
          _0xb86a5 = Number(_0x317de9[_0x3bb9e2(0x238)] || 0x0),
          _0x352c8c =
            _0x243d53 > 0x0
              ? Number(_0x33872b[_0x3bb9e2(0x479)] || 0x0) / _0x243d53
              : Number(_0x33872b[_0x3bb9e2(0x479)] || 0x0) / 0x270f,
          _0x534354 =
            _0xb86a5 > 0x0
              ? Number(_0x317de9[_0x3bb9e2(0x479)] || 0x0) / _0xb86a5
              : Number(_0x317de9[_0x3bb9e2(0x479)] || 0x0) / 0x270f;
        return (
          _0x40f98a - _0x578029 ||
          _0x352c8c - _0x534354 ||
          _0x2024de(_0x9d91c7)[_0x3bb9e2(0x3ab)](
            _0x2024de(_0x5f2ae4),
            _0x5e2019() === "en" ? "en" : _0x3bb9e2(0x172),
          )
        );
      });
    }
    function _0x31ea67(_0x4f7b18, _0x305ff9) {
      const _0x26ab2a = a0_0x2779,
        _0x5e9f81 = _0x243cb9(),
        _0x39cacc = _0x1d5e31(),
        _0x39ec50 = _0x4714ed[_0x26ab2a(0x1cb)](
          (_0x16a1c9) =>
            _0x16a1c9[_0x26ab2a(0x2f0)] === _0x5e9f81[_0x26ab2a(0x2a2)],
        )
          ? _0x5e9f81[_0x26ab2a(0x2a2)]
          : _0x4714ed[0x0][_0x26ab2a(0x2f0)],
        _0xc792ff = _0x4f7b18[_0x39ec50] || {},
        _0x48a4f0 = _0x2ea2e5(
          _0xc792ff,
          _0x5e9f81[_0x26ab2a(0x265)] || _0x26ab2a(0x3cf),
          _0x39cacc,
        ),
        _0x442805 = _0x305ff9[_0x26ab2a(0x150)](
          (_0x69fea) => _0x69fea[_0x26ab2a(0x2f0)] === _0x39ec50,
        ),
        _0xfae140 = new Map(
          (_0x442805?.[_0x26ab2a(0x405)] || [])[_0x26ab2a(0x428)](
            (_0x187fb0) => [_0x187fb0[_0x26ab2a(0x199)], _0x187fb0],
          ),
        );
      return (
        _0x26ab2a(0x2cb) +
        _0x4714ed[_0x26ab2a(0x428)]((_0x3b9fe5) => {
          const _0x12d170 = a0_0x2779,
            _0x17b567 = _0x3bdc20(_0x3b9fe5[_0x12d170(0x2f0)], _0x45ffc4());
          return (
            _0x12d170(0x1e7) +
            (_0x3b9fe5[_0x12d170(0x2f0)] === _0x39ec50
              ? _0x12d170(0x31f)
              : "") +
            _0x12d170(0x211) +
            _0x32abaa(_0x3b9fe5[_0x12d170(0x2f0)]) +
            _0x12d170(0x1da) +
            _0x32abaa(_0x3e8d59(_0x3b9fe5[_0x12d170(0x2f0)])) +
            "-" +
            (_0x17b567 > 0x0
              ? _0x32abaa(_0x1c7c17(_0x12d170(0x480), { n: _0x17b567 }))
              : _0x32abaa(_0x1c7c17(_0x12d170(0x1bc)))) +
            _0x12d170(0x261)
          );
        })[_0x26ab2a(0x4f0)]("") +
        _0x26ab2a(0x164) +
        _0x32abaa(_0x3e8d59(_0x39ec50)) +
        _0x26ab2a(0x2d5) +
        _0x32abaa(
          _0x1c7c17(_0x26ab2a(0x3c8), { n: _0x48a4f0[_0x26ab2a(0x40a)] }),
        ) +
        "，" +
        _0x32abaa(_0x1c7c17(_0x26ab2a(0x32b), { time: _0x244769(_0xc792ff) })) +
        (() => {
          const _0x152ac0 = a0_0x2779,
            _0xa4d79e = _0x3bdc20(_0x39ec50, _0x45ffc4());
          return (
            "\u3000" +
            _0x32abaa(
              _0xa4d79e > 0x0
                ? _0x1c7c17(_0x152ac0(0x480), { n: _0xa4d79e })
                : _0x1c7c17(_0x152ac0(0x1bc)),
            )
          );
        })() +
        _0x26ab2a(0x41f) +
        _0x32abaa(_0x1c7c17(_0x26ab2a(0x40e))) +
        _0x26ab2a(0x13f) +
        (_0x5e9f81[_0x26ab2a(0x265)] === _0x26ab2a(0x3cf)
          ? _0x26ab2a(0x325)
          : "") +
        ">" +
        _0x32abaa(_0x1c7c17(_0x26ab2a(0x527))) +
        _0x26ab2a(0x115) +
        (_0x5e9f81[_0x26ab2a(0x265)] === _0x26ab2a(0x45c)
          ? _0x26ab2a(0x325)
          : "") +
        ">" +
        _0x32abaa(_0x1c7c17(_0x26ab2a(0x349))) +
        _0x26ab2a(0x113) +
        (_0x5e9f81[_0x26ab2a(0x265)] === _0x26ab2a(0x31d)
          ? _0x26ab2a(0x325)
          : "") +
        ">" +
        _0x32abaa(_0x1c7c17(_0x26ab2a(0x360))) +
        _0x26ab2a(0x3d0) +
        (_0x5e9f81[_0x26ab2a(0x265)] === _0x26ab2a(0x123)
          ? _0x26ab2a(0x325)
          : "") +
        ">" +
        _0x32abaa(_0x1c7c17(_0x26ab2a(0x2b6))) +
        _0x26ab2a(0x11c) +
        (_0x48a4f0[_0x26ab2a(0x428)](([_0x2cfe95, _0xc22bf0]) =>
          _0x39a557(
            _0x2cfe95,
            _0xc22bf0,
            _0xfae140[_0x26ab2a(0x129)](_0x2cfe95),
            _0x39cacc,
          ),
        )[_0x26ab2a(0x4f0)]("") ||
          _0x26ab2a(0x131) +
            _0x32abaa(_0x1c7c17(_0x26ab2a(0x166))) +
            _0x26ab2a(0x51f)) +
        _0x26ab2a(0x20a) +
        _0x3779bc(_0x39ec50, _0x45ffc4()) +
        _0x26ab2a(0x50c)
      );
    }
    function _0x39a557(_0x3031b5, _0x354604, _0x34a74d, _0x2483d3) {
      const _0x6e0c0f = a0_0x2779,
        _0x594be8 = Number(_0x354604[_0x6e0c0f(0x479)] || 0x0),
        _0xc95adb = Number(_0x354604[_0x6e0c0f(0x238)] || 0x0),
        _0x25ed1c =
          _0x354604[_0x6e0c0f(0x31d)] && _0x354604[_0x6e0c0f(0x31d)] !== "-"
            ? _0x4f356d(_0x354604[_0x6e0c0f(0x31d)])
            : "-",
        _0xba256c = _0x2afc4a(_0x354604, _0x2483d3),
        _0x3c2200 = _0x34a74d ? _0x1058a1(_0x34a74d) : _0x6e0c0f(0x465),
        _0x3087e5 =
          _0x354604[_0x6e0c0f(0x3a9)] === _0x6e0c0f(0x2ed) &&
          _0x354604[_0x6e0c0f(0x1e9)]
            ? _0x1c7c17(_0x6e0c0f(0x208))
            : "";
      return (
        _0x6e0c0f(0x1b8) +
        (_0xba256c ? _0x6e0c0f(0x4bb) : "") +
        _0x6e0c0f(0x2f5) +
        _0x32abaa(_0x2024de(_0x3031b5)) +
        _0x6e0c0f(0x1ab) +
        _0x32abaa(_0x1c7c17(_0x6e0c0f(0x3e5))) +
        "：" +
        _0x32abaa(_0x354604[_0x6e0c0f(0x45c)] || _0x6e0c0f(0x18a)) +
        "\u3000" +
        _0x32abaa(_0x1c7c17(_0x6e0c0f(0x26a))) +
        "：" +
        _0x32abaa(_0x354604[_0x6e0c0f(0x26a)] || "-") +
        "\u3000" +
        _0x32abaa(_0x1c7c17(_0x6e0c0f(0x363))) +
        "：" +
        _0x32abaa(_0x1a805d(_0x354604)) +
        _0x32abaa(_0x3087e5) +
        _0x6e0c0f(0x29c) +
        _0x91f5a1(_0x594be8, _0xc95adb) +
        _0x6e0c0f(0x3a1) +
        _0x32abaa(_0x5dc50a(_0x354604)) +
        _0x6e0c0f(0x4c6) +
        _0x32abaa(_0x25ed1c) +
        _0x6e0c0f(0x214) +
        _0x3c2200 +
        _0x6e0c0f(0x35b)
      );
    }
    function _0x1058a1(_0x11c80c) {
      const _0x102a0f = a0_0x2779;
      if (_0x11c80c[_0x102a0f(0x3ef)] === _0x102a0f(0x1cf))
        return (
          _0x102a0f(0x2b2) +
          _0x32abaa(_0x1c7c17(_0x102a0f(0x280))) +
          _0x102a0f(0x20c)
        );
      if (_0x11c80c[_0x102a0f(0x3ef)] === _0x102a0f(0x4a6))
        return (
          _0x102a0f(0x28e) +
          _0x32abaa(_0x1c7c17(_0x102a0f(0x140))) +
          _0x102a0f(0x20c)
        );
      const _0x10d440 = Number(_0x11c80c[_0x102a0f(0x432)] || 0x0);
      if (_0x10d440 > 0x0)
        return _0x102a0f(0x4e6) + _0x10d440 + _0x102a0f(0x20c);
      if (_0x10d440 < 0x0)
        return _0x102a0f(0x3a6) + _0x10d440 + _0x102a0f(0x20c);
      return (
        _0x102a0f(0x37a) +
        _0x32abaa(_0x1c7c17(_0x102a0f(0x202))) +
        _0x102a0f(0x20c)
      );
    }
    function _0x2f02e3() {
      const _0x1cb210 = a0_0x2779,
        _0x46064f = _0x1d5e31();
      return (
        _0x1cb210(0x3ff) +
        _0x32abaa(_0x1c7c17(_0x1cb210(0x198))) +
        _0x1cb210(0x4d9) +
        _0x32abaa(_0x1c7c17(_0x1cb210(0x4f2))) +
        _0x1cb210(0x314) +
        (_0x46064f[_0x1cb210(0x2f2)] === _0x1cb210(0x216)
          ? _0x1cb210(0x325)
          : "") +
        ">" +
        _0x32abaa(_0x1c7c17(_0x1cb210(0x2bf))) +
        _0x1cb210(0x51d) +
        (_0x46064f[_0x1cb210(0x2f2)] === "zh" ? _0x1cb210(0x325) : "") +
        ">" +
        _0x32abaa(_0x1c7c17(_0x1cb210(0x429))) +
        _0x1cb210(0x457) +
        (_0x46064f[_0x1cb210(0x2f2)] === "en" ? _0x1cb210(0x325) : "") +
        ">" +
        _0x32abaa(_0x1c7c17(_0x1cb210(0x12a))) +
        _0x1cb210(0x1c7) +
        _0x32abaa(_0x1c7c17(_0x1cb210(0x3a3))) +
        _0x1cb210(0x4d9) +
        _0x32abaa(_0x1c7c17(_0x1cb210(0x161))) +
        _0x1cb210(0x3b7) +
        (_0x46064f[_0x1cb210(0x3a3)] ? _0x1cb210(0x2e0) : "") +
        _0x1cb210(0x204) +
        _0x32abaa(_0x1c7c17(_0x1cb210(0x3df))) +
        _0x1cb210(0x4d9) +
        _0x32abaa(_0x1c7c17(_0x1cb210(0x471))) +
        _0x1cb210(0x25f) +
        (_0x46064f[_0x1cb210(0x3df)] ? _0x1cb210(0x2e0) : "") +
        _0x1cb210(0x204) +
        _0x32abaa(_0x1c7c17(_0x1cb210(0x2d4))) +
        _0x1cb210(0x4d9) +
        _0x32abaa(_0x1c7c17(_0x1cb210(0x477))) +
        _0x1cb210(0x1f0) +
        (_0x46064f[_0x1cb210(0x2b4)] ? _0x1cb210(0x2e0) : "") +
        _0x1cb210(0x204) +
        _0x32abaa(_0x1c7c17(_0x1cb210(0x4a2))) +
        _0x1cb210(0x4d9) +
        _0x32abaa(_0x1c7c17(_0x1cb210(0x274))) +
        _0x1cb210(0x23c) +
        (_0x46064f[_0x1cb210(0x356)] === _0x1cb210(0x10e)
          ? _0x1cb210(0x325)
          : "") +
        ">" +
        _0x32abaa(_0x1c7c17(_0x1cb210(0x290))) +
        _0x1cb210(0x4d7) +
        (_0x46064f[_0x1cb210(0x356)] === _0x1cb210(0x49a)
          ? _0x1cb210(0x325)
          : "") +
        ">" +
        _0x32abaa(_0x1c7c17(_0x1cb210(0x4eb))) +
        _0x1cb210(0x446) +
        (_0x46064f[_0x1cb210(0x356)] === _0x1cb210(0x1cc)
          ? _0x1cb210(0x325)
          : "") +
        ">" +
        _0x32abaa(_0x1c7c17(_0x1cb210(0x209))) +
        _0x1cb210(0x1c7) +
        _0x32abaa(_0x1c7c17(_0x1cb210(0x260))) +
        _0x1cb210(0x4d9) +
        _0x32abaa(_0x1c7c17(_0x1cb210(0x455))) +
        _0x1cb210(0x2fe) +
        (Number(_0x46064f[_0x1cb210(0x260)]) === 0.1 ? _0x1cb210(0x325) : "") +
        _0x1cb210(0x45a) +
        (Number(_0x46064f[_0x1cb210(0x260)]) === 0.15 ? _0x1cb210(0x325) : "") +
        _0x1cb210(0x3b0) +
        (Number(_0x46064f[_0x1cb210(0x260)]) === 0.2 ? _0x1cb210(0x325) : "") +
        _0x1cb210(0x506) +
        (Number(_0x46064f[_0x1cb210(0x260)]) === 0.25 ? _0x1cb210(0x325) : "") +
        _0x1cb210(0x3bd) +
        _0x32abaa(_0x1c7c17(_0x1cb210(0x25e))) +
        _0x1cb210(0x4d9) +
        _0x32abaa(_0x1c7c17(_0x1cb210(0x177))) +
        "：" +
        _0x32abaa(_0xc50229()) +
        _0x1cb210(0x12d) +
        _0x32abaa(_0x1c7c17(_0x1cb210(0x30d))) +
        "：" +
        (_0x399387["ok"] === !![]
          ? _0x32abaa(_0x1c7c17(_0x1cb210(0x174)))
          : _0x399387["ok"] === ![]
            ? _0x32abaa(_0x1c7c17(_0x1cb210(0x21c)))
            : _0x32abaa(_0x1c7c17(_0x1cb210(0x488)))) +
        _0x1cb210(0x4d9) +
        _0x32abaa(_0x1c7c17(_0x1cb210(0x373))) +
        "：" +
        (_0x399387[_0x1cb210(0x331)]
          ? _0x32abaa(new Date(_0x399387[_0x1cb210(0x331)])[_0x1cb210(0x467)]())
          : "-") +
        _0x1cb210(0x4d9) +
        _0x32abaa(_0x1c7c17(_0x1cb210(0x269))) +
        "：" +
        (_0x399387[_0x1cb210(0x2ee)]
          ? _0x32abaa(new Date(_0x399387[_0x1cb210(0x2ee)])[_0x1cb210(0x467)]())
          : "-") +
        _0x1cb210(0x20e) +
        _0x32abaa(_0x1c7c17(_0x1cb210(0x259))) +
        "：" +
        _0x32abaa(_0x399387[_0x1cb210(0x4e2)] || "-") +
        _0x1cb210(0x339) +
        _0x32abaa(_0x1c7c17(_0x1cb210(0x367))) +
        _0x1cb210(0x37f) +
        _0x32abaa(_0x1c7c17(_0x1cb210(0x44d))) +
        _0x1cb210(0x406) +
        _0x32abaa(_0x1c7c17(_0x1cb210(0x448))) +
        _0x1cb210(0x1d3) +
        _0x32abaa(_0x1c7c17(_0x1cb210(0x4ee))) +
        _0x1cb210(0x1de)
      );
    }
    function _0x30693a() {
      const _0x58c13a = a0_0x2779,
        _0x1783c6 = document[_0x58c13a(0x22d)](_0x58c13a(0x495));
      if (!_0x1783c6) return null;
      const _0x1bd2d0 = _0x1783c6[_0x58c13a(0x2fd)](_0x58c13a(0x452)),
        _0x1c399c = _0x1783c6[_0x58c13a(0x2fd)](_0x58c13a(0x1a1)),
        _0x36a213 = _0x1783c6[_0x58c13a(0x2fd)](_0x58c13a(0x1f1)),
        _0x3ee1d1 = _0x1783c6[_0x58c13a(0x2fd)](_0x58c13a(0x490)),
        _0x1ab38f = _0x1783c6[_0x58c13a(0x2fd)](_0x58c13a(0x4c3));
      return {
        selectedTab: _0x3ee1d1?.[_0x58c13a(0x19c)]?.[_0x58c13a(0x358)] || "",
        selectedPort: _0x1ab38f?.[_0x58c13a(0x19c)]?.[_0x58c13a(0x2f0)] || "",
        bodyTop: _0x1bd2d0 ? _0x1bd2d0[_0x58c13a(0x47c)] : 0x0,
        bodyLeft: _0x1bd2d0 ? _0x1bd2d0[_0x58c13a(0x4fc)] : 0x0,
        tabsLeft: _0x1c399c ? _0x1c399c[_0x58c13a(0x4fc)] : 0x0,
        portNavLeft: _0x36a213 ? _0x36a213[_0x58c13a(0x4fc)] : 0x0,
      };
    }
    function _0x36affa(_0x2dd218) {
      const _0x258f4c = a0_0x2779;
      if (!_0x2dd218) return ![];
      const _0x5b2f21 = document[_0x258f4c(0x22d)](_0x258f4c(0x495));
      if (!_0x5b2f21) return ![];
      const _0x414b13 = _0x5b2f21[_0x258f4c(0x2fd)](_0x258f4c(0x452)),
        _0x1aa4c0 = _0x5b2f21[_0x258f4c(0x2fd)](_0x258f4c(0x1a1)),
        _0x386da5 = _0x5b2f21[_0x258f4c(0x2fd)](_0x258f4c(0x1f1));
      _0x414b13 &&
        ((_0x414b13[_0x258f4c(0x47c)] = _0x2dd218[_0x258f4c(0x523)] || 0x0),
        (_0x414b13[_0x258f4c(0x4fc)] = _0x2dd218[_0x258f4c(0x39d)] || 0x0));
      if (_0x1aa4c0)
        _0x1aa4c0[_0x258f4c(0x4fc)] = _0x2dd218[_0x258f4c(0x3c3)] || 0x0;
      if (_0x386da5)
        _0x386da5[_0x258f4c(0x4fc)] = _0x2dd218[_0x258f4c(0x3fa)] || 0x0;
      return !![];
    }
    function _0x4021a7(_0x52c55b) {
      const _0x1f780d = a0_0x2779;
      (document[_0x1f780d(0x3b5)]?.[_0x1f780d(0x489)][_0x1f780d(0x40c)](
        _0x1f780d(0x501),
        !!_0x52c55b,
      ),
        document[_0x1f780d(0x4b4)]?.[_0x1f780d(0x489)][_0x1f780d(0x40c)](
          _0x1f780d(0x501),
          !!_0x52c55b,
        ));
    }
    function _0x4365c4() {
      const _0x12ef58 = a0_0x2779,
        _0x172e29 = _0x243cb9();
      _0x4021a7(!!_0x172e29[_0x12ef58(0x319)]);
      if (!_0x172e29[_0x12ef58(0x319)]) {
        document[_0x12ef58(0x22d)](_0x12ef58(0x495))?.[_0x12ef58(0x203)]();
        return;
      }
      const _0x4bba5a = _0x30693a(),
        _0x4085d7 = _0x1d5e31(),
        { current: _0x52863b, seen: _0x3b1fef } = _0x1576b2(),
        _0x816f59 = _0x1a1812(_0x52863b, _0x3b1fef),
        _0x43262e = _0x3ba685(_0x816f59),
        _0x2b5607 = [
          _0x12ef58(0x10e),
          _0x12ef58(0x49a),
          _0x12ef58(0x1cc),
          _0x12ef58(0x13b),
        ][_0x12ef58(0x34d)](_0x172e29[_0x12ef58(0x3c2)])
          ? _0x172e29[_0x12ef58(0x3c2)]
          : _0x4085d7[_0x12ef58(0x356)];
      let _0x1ca35d = "";
      if (_0x2b5607 === _0x12ef58(0x49a))
        _0x1ca35d = _0x4e15f1(_0x52863b, _0x816f59);
      else {
        if (_0x2b5607 === _0x12ef58(0x1cc))
          _0x1ca35d = _0x31ea67(_0x52863b, _0x816f59);
        else {
          if (_0x2b5607 === _0x12ef58(0x13b)) _0x1ca35d = _0x2f02e3();
          else _0x1ca35d = _0x405c3a(_0x816f59);
        }
      }
      const _0x2b7438 =
          _0x12ef58(0x21b) +
          _0x32abaa(_0x1c7c17(_0x12ef58(0x4dd))) +
          _0x12ef58(0x45d) +
          _0x32abaa(_0x1c7c17(_0x12ef58(0x4dd))) +
          _0x12ef58(0x213) +
          _0x32abaa(_0x1c7c17(_0x12ef58(0x4f4))) +
          _0x12ef58(0x39f) +
          _0x32abaa(_0x1c7c17(_0x12ef58(0x448))) +
          _0x12ef58(0x46a) +
          _0x32abaa(_0x1c7c17(_0x12ef58(0x42e))) +
          _0x12ef58(0x502) +
          _0x4639be() +
          _0x12ef58(0x195) +
          (_0x43262e ? _0x12ef58(0x2d7) : "") +
          _0x12ef58(0x1da) +
          _0x32abaa(
            _0x43262e
              ? _0x1c7c17(_0x12ef58(0x171), { n: _0x43262e })
              : _0x1c7c17(_0x12ef58(0x515)),
          ) +
          _0x12ef58(0x250) +
          _0x1d34b0(
            _0x12ef58(0x10e),
            _0x1c7c17(_0x12ef58(0x290)),
            _0x2b5607,
            _0x43262e,
          ) +
          _0x12ef58(0x4cb) +
          _0x1d34b0(_0x12ef58(0x49a), _0x1c7c17(_0x12ef58(0x4eb)), _0x2b5607) +
          _0x12ef58(0x4cb) +
          _0x1d34b0(_0x12ef58(0x1cc), _0x1c7c17(_0x12ef58(0x209)), _0x2b5607) +
          _0x12ef58(0x4cb) +
          _0x1d34b0(_0x12ef58(0x13b), _0x1c7c17(_0x12ef58(0x40d)), _0x2b5607) +
          _0x12ef58(0x24b) +
          _0x1ca35d +
          _0x12ef58(0x1ef),
        _0x3c2c31 = document[_0x12ef58(0x22d)](_0x12ef58(0x495)),
        _0x5a6ca2 = _0x4bba5a && _0x4bba5a[_0x12ef58(0x3c2)] === _0x2b5607;
      if (_0x3c2c31) _0x3c2c31[_0x12ef58(0x394)] = _0x2b7438;
      else
        document[_0x12ef58(0x4b4)][_0x12ef58(0x46b)](
          _0x12ef58(0x26f),
          _0x2b7438,
        );
      requestAnimationFrame(() => {
        if (_0x5a6ca2) _0x36affa(_0x4bba5a);
        else _0x19c612();
      });
    }
    function _0x19c612() {
      const _0x142b14 = a0_0x2779,
        _0x5eadcc = document[_0x142b14(0x2fd)](_0x142b14(0x4ec));
      if (!_0x5eadcc || typeof _0x5eadcc[_0x142b14(0x4a0)] !== _0x142b14(0x2c2))
        return;
      _0x5eadcc[_0x142b14(0x4a0)]({
        block: _0x142b14(0x4c9),
        inline: _0x142b14(0x3bb),
        behavior: _0x142b14(0x216),
      });
    }
    function _0x1d34b0(_0x1e9c26, _0x46f0f0, _0xd64b08, _0x5dca59 = 0x0) {
      const _0x3419f5 = a0_0x2779;
      return (
        _0x3419f5(0x3af) +
        (_0xd64b08 === _0x1e9c26 ? _0x3419f5(0x31f) : "") +
        _0x3419f5(0x1aa) +
        _0x1e9c26 +
        _0x3419f5(0x3cc) +
        _0x32abaa(_0x46f0f0) +
        (_0x5dca59 ? _0x3419f5(0x127) + _0x5dca59 + _0x3419f5(0x20c) : "") +
        _0x3419f5(0x1bf)
      );
    }
    function _0x4316ac() {
      const _0xf09aff = a0_0x2779,
        _0x2c498f = _0x1d5e31(),
        _0x40c02e = _0x243cb9();
      _0x40c02e[_0xf09aff(0x319)] = !![];
      if (
        !_0x40c02e[_0xf09aff(0x3c2)] ||
        _0x40c02e[_0xf09aff(0x3c2)] === _0xf09aff(0x13b)
      )
        _0x40c02e[_0xf09aff(0x3c2)] =
          _0x2c498f[_0xf09aff(0x356)] || _0xf09aff(0x10e);
      (_0x5c0dc8(_0x40c02e), _0x4365c4());
    }
    function _0x3499d0() {
      const _0x1f7155 = a0_0x2779,
        _0x43f6fe = _0x243cb9();
      ((_0x43f6fe[_0x1f7155(0x319)] = ![]), _0x5c0dc8(_0x43f6fe), _0x4365c4());
    }
    function _0xef6fd5() {
      (clearTimeout(_0x4d3766),
        (_0x4d3766 = setTimeout(() => {
          const _0x28b365 = a0_0x2779,
            _0x59ae3a = _0x243cb9();
          if (_0x59ae3a[_0x28b365(0x319)]) _0x4365c4();
        }, 0x64)));
    }
    function _0x4b6813() {
      const _0x1b1063 = a0_0x2779,
        _0x4e8b7e = [...document[_0x1b1063(0x435)](_0x1b1063(0x241))]
          [_0x1b1063(0x1c0)](
            (_0x1542e0) =>
              _0x320977(_0x1542e0) &&
              !_0x1542e0[_0x1b1063(0x2dd)](_0x1b1063(0x1fd)),
          )
          [_0x1b1063(0x428)]((_0x13cd63) => {
            const _0x33d91c = a0_0x2779,
              _0x3c0dd8 = _0x13cd63[_0x33d91c(0x507)](),
              _0x1a296f = [..._0x13cd63[_0x33d91c(0x435)](_0x33d91c(0x2e5))][
                _0x33d91c(0x1c0)
              ](_0x320977),
              _0x150d3b = String(_0x13cd63[_0x33d91c(0x3b8)] || "");
            return {
              el: _0x13cd63,
              rect: _0x3c0dd8,
              buttons: _0x1a296f,
              text: _0x150d3b,
            };
          })
          [_0x1b1063(0x1c0)]((_0x2cf111) => {
            const _0x55d757 = a0_0x2779;
            if (_0x2cf111[_0x55d757(0x21f)][_0x55d757(0x40a)] < 0x2) return ![];
            if (_0x2cf111[_0x55d757(0x408)][_0x55d757(0x168)] > 0x8c)
              return ![];
            if (_0x2cf111[_0x55d757(0x408)][_0x55d757(0x2c5)] > 0x60)
              return ![];
            if (_0x2cf111[_0x55d757(0x408)][_0x55d757(0x4d4)] < 0xdc)
              return ![];
            if (_0x2cf111[_0x55d757(0x402)][_0x55d757(0x40a)] > 0x1f4)
              return ![];
            return /出營|分莊|統計|我的隊伍|交戰|首頁|出海|市場|交易|Discord|Home|Market|Trade|Warehouse|Adventure|Profile|Stats|Crew|Battle/[
              _0x55d757(0x190)
            ](_0x2cf111[_0x55d757(0x402)]);
          })
          [_0x1b1063(0x40e)](
            (_0x107067, _0x34d4ba) =>
              _0x107067[_0x1b1063(0x408)][_0x1b1063(0x168)] -
                _0x34d4ba[_0x1b1063(0x408)][_0x1b1063(0x168)] ||
              _0x34d4ba[_0x1b1063(0x21f)][_0x1b1063(0x40a)] -
                _0x107067[_0x1b1063(0x21f)][_0x1b1063(0x40a)],
          );
      return _0x4e8b7e[0x0]?.["el"] || null;
    }
    function _0x3cf230() {
      const _0xdc3d2e = a0_0x2779;
      if (
        document[_0xdc3d2e(0x22d)](_0xdc3d2e(0x1e4)) ||
        document[_0xdc3d2e(0x22d)](_0xdc3d2e(0x142))
      ) {
        _0xdbf266();
        return;
      }
      const _0x560c40 = document[_0xdc3d2e(0x118)](_0xdc3d2e(0x34c));
      ((_0x560c40["id"] = _0xdc3d2e(0x1e4)),
        (_0x560c40[_0xdc3d2e(0x3ef)] = _0xdc3d2e(0x34c)),
        (_0x560c40[_0xdc3d2e(0x19c)][_0xdc3d2e(0x255)] = _0xdc3d2e(0x3bc)),
        (_0x560c40[_0xdc3d2e(0x422)] = _0xdc3d2e(0x132)));
      const _0x58cfd2 = _0x43a1ef() ? null : _0x4b6813();
      (_0x58cfd2
        ? _0x58cfd2[_0xdc3d2e(0x3e4)](
            _0x560c40,
            _0x58cfd2[_0xdc3d2e(0x155)] || null,
          )
        : ((_0x560c40["id"] = _0xdc3d2e(0x142)),
          document[_0xdc3d2e(0x4b4)][_0xdc3d2e(0x1d6)](_0x560c40)),
        _0xdbf266());
    }
    function _0xdbf266() {
      const _0x322244 = a0_0x2779,
        _0x20adfe =
          document[_0x322244(0x22d)](_0x322244(0x1e4)) ||
          document[_0x322244(0x22d)](_0x322244(0x142));
      if (!_0x20adfe) return;
      const _0x509f35 = _0x1d5e31(),
        { current: _0x3364c2, seen: _0x212e1a } = _0x1576b2(),
        _0x53e2f0 = _0x1a1812(_0x3364c2, _0x212e1a),
        _0x5044ba = _0x3ba685(_0x53e2f0),
        _0x127e41 = _0x399387["ok"] === ![];
      (_0x20adfe[_0x322244(0x489)][_0x322244(0x40c)](
        _0x322244(0x302),
        _0x127e41,
      ),
        _0x20adfe[_0x322244(0x489)][_0x322244(0x40c)](
          _0x322244(0x262),
          _0x5044ba > 0x0,
        ));
      const _0x3f3ff5 =
          _0x509f35[_0x322244(0x3df)] && _0x5044ba > 0x0
            ? _0x322244(0x4ce) + _0x5044ba + _0x322244(0x20c)
            : "",
        _0x2bf65f = _0x127e41 ? _0x322244(0x120) : "";
      _0x20adfe[_0x322244(0x114)] =
        _0x322244(0x127) +
        _0x32abaa(_0x1c7c17(_0x322244(0x3c7))) +
        _0x322244(0x20c) +
        _0x2bf65f +
        _0x3f3ff5;
    }
    function _0x1d8198() {
      (clearTimeout(_0xde1e60),
        (_0xde1e60 = setTimeout(() => {
          (_0x3cf230(), _0xdbf266());
        }, 0x78)));
    }
    function _0x1075cd() {
      const _0x24b624 = a0_0x2779;
      return (
        _0x24b624(0x236) +
        _0x32abaa(_0x1c7c17(_0x24b624(0x22a))) +
        _0x24b624(0x233) +
        _0x32abaa(_0x1c7c17(_0x24b624(0x377))) +
        _0x24b624(0x2ad)
      );
    }
    function _0x4a5c48() {
      const _0x4a92cc = a0_0x2779;
      let _0x28aaba = document[_0x4a92cc(0x22d)](_0x4a92cc(0x4a8));
      (!_0x28aaba &&
        ((_0x28aaba = document[_0x4a92cc(0x118)](_0x4a92cc(0x34c))),
        (_0x28aaba["id"] = _0x4a92cc(0x4a8)),
        (_0x28aaba[_0x4a92cc(0x3ef)] = _0x4a92cc(0x34c)),
        (_0x28aaba[_0x4a92cc(0x19c)][_0x4a92cc(0x255)] = _0x4a92cc(0x148)),
        _0x28aaba[_0x4a92cc(0x24c)](
          _0x4a92cc(0x276),
          _0x1c7c17(_0x4a92cc(0x22a)),
        ),
        document[_0x4a92cc(0x4b4)][_0x4a92cc(0x1d6)](_0x28aaba)),
        (_0x28aaba[_0x4a92cc(0x114)] = _0x1075cd()));
    }
    function _0x5d148f() {
      (clearTimeout(_0x43a320),
        (_0x43a320 = setTimeout(() => {
          _0x4a5c48();
        }, 0x78)));
    }
    function _0x44ee7a() {
      const _0x3ae3a1 = a0_0x2779,
        _0x3d0d21 = _0x5dff65({ upload: !![], silent: ![] });
      if (_0x3d0d21)
        return (
          _0x27b4b3(_0x1c7c17(_0x3ae3a1(0x17f)), _0x1c7c17(_0x3ae3a1(0x3f9))),
          _0xa9d376(),
          _0xef6fd5(),
          _0x1d8198(),
          _0x5d148f(),
          !![]
        );
      return (
        _0x27b4b3(_0x1c7c17(_0x3ae3a1(0x26c)), _0x1c7c17(_0x3ae3a1(0x1d5))),
        ![]
      );
    }
    function _0x425e37() {
      (_0x3c6c7d(_0x4082e4()), _0xef6fd5(), _0x1d8198());
    }
    function _0x5e7cf9(_0x26a93a) {
      const _0x36a558 = a0_0x2779,
        _0x45a579 = [
          ...String(_0x26a93a || "")[_0x36a558(0x1b4)](
            /\b(\d{1,3}):(\d{2})(?::(\d{2}))?\b/g,
          ),
        ];
      if (!_0x45a579[_0x36a558(0x40a)]) return null;
      for (const _0x4f57f7 of _0x45a579) {
        const _0x152d87 = _0x4f57f7[0x0],
          _0x26c44f = Number(_0x4f57f7[0x1]),
          _0x2604c6 = Number(_0x4f57f7[0x2]),
          _0xcab95c =
            _0x4f57f7[0x3] === undefined ? null : Number(_0x4f57f7[0x3]);
        if (
          !Number[_0x36a558(0x4f8)](_0x26c44f) ||
          !Number[_0x36a558(0x4f8)](_0x2604c6) ||
          _0x2604c6 > 0x3b
        )
          continue;
        let _0x16c3b1 = 0x0,
          _0x277efc = 0x0,
          _0x292194 = 0x0;
        if (_0xcab95c === null)
          ((_0x277efc = _0x26c44f), (_0x292194 = _0x2604c6));
        else {
          if (!Number[_0x36a558(0x4f8)](_0xcab95c) || _0xcab95c > 0x3b)
            continue;
          ((_0x16c3b1 = _0x26c44f),
            (_0x277efc = _0x2604c6),
            (_0x292194 = _0xcab95c));
        }
        const _0x214451 =
          (_0x16c3b1 * 0xe10 + _0x277efc * 0x3c + _0x292194) * 0x3e8;
        if (_0x214451 <= 0x0) continue;
        return { raw: _0x152d87, totalMs: _0x214451 };
      }
      return null;
    }
    function _0x28139c(_0x5bd410, _0x3443e4) {
      const _0x4459f4 = a0_0x2779;
      return (
        _0x5bd410[_0x4459f4(0x36a)]() === _0x3443e4[_0x4459f4(0x36a)]() &&
        _0x5bd410[_0x4459f4(0x2b9)]() === _0x3443e4[_0x4459f4(0x2b9)]() &&
        _0x5bd410[_0x4459f4(0x492)]() === _0x3443e4[_0x4459f4(0x492)]()
      );
    }
    function _0x557273(_0x5d7eb4, _0x2d56f8) {
      const _0x4620cd = a0_0x2779,
        _0x127ef5 = new Date(_0x2d56f8);
      return (
        _0x127ef5[_0x4620cd(0x4cd)](_0x2d56f8[_0x4620cd(0x492)]() + 0x1),
        _0x28139c(_0x5d7eb4, _0x127ef5)
      );
    }
    function _0xb05d7e(_0x4643e9, _0xf46ad = new Date()) {
      const _0x10133b = a0_0x2779,
        _0x54dcb2 = String(_0x4643e9[_0x10133b(0x4f9)]())[_0x10133b(0x3ed)](
          0x2,
          "0",
        ),
        _0x474b36 = String(_0x4643e9[_0x10133b(0x459)]())[_0x10133b(0x3ed)](
          0x2,
          "0",
        );
      if (_0x28139c(_0x4643e9, _0xf46ad)) return _0x54dcb2 + ":" + _0x474b36;
      if (_0x557273(_0x4643e9, _0xf46ad))
        return (
          _0x1c7c17(_0x10133b(0x350)) + "\x20" + _0x54dcb2 + ":" + _0x474b36
        );
      return (
        String(_0x4643e9[_0x10133b(0x2b9)]() + 0x1)[_0x10133b(0x3ed)](
          0x2,
          "0",
        ) +
        "/" +
        String(_0x4643e9[_0x10133b(0x492)]())[_0x10133b(0x3ed)](0x2, "0") +
        "\x20" +
        _0x54dcb2 +
        ":" +
        _0x474b36
      );
    }
    function _0x205169(_0x560fd2) {
      const _0x2e0318 = a0_0x2779,
        _0x4b1fb5 = _0x5e7cf9(_0x560fd2?.[_0x2e0318(0x3b8)] || "");
      if (!_0x4b1fb5) return null;
      const _0x3b0e9f = new Date();
      return {
        durationRaw: _0x4b1fb5[_0x2e0318(0x427)],
        arriveAtText: _0xb05d7e(
          new Date(_0x3b0e9f[_0x2e0318(0x27e)]() + _0x4b1fb5[_0x2e0318(0x395)]),
          _0x3b0e9f,
        ),
        returnAtText: _0xb05d7e(
          new Date(
            _0x3b0e9f[_0x2e0318(0x27e)]() + _0x4b1fb5[_0x2e0318(0x395)] * 0x2,
          ),
          _0x3b0e9f,
        ),
      };
    }
    function _0x2e7de0(_0x252d7f) {
      const _0x247854 = a0_0x2779;
      if (!_0x252d7f) return "";
      return (
        _0x247854(0x237) +
        _0x32abaa(_0x1c7c17(_0x247854(0x3d3))) +
        _0x247854(0x38f) +
        _0x32abaa(_0x1c7c17(_0x247854(0x4f6))) +
        _0x247854(0x158) +
        _0x32abaa(_0x252d7f[_0x247854(0x391)]) +
        _0x247854(0x404) +
        _0x32abaa(_0x1c7c17(_0x247854(0x411))) +
        _0x247854(0x158) +
        _0x32abaa(_0x252d7f[_0x247854(0x45b)]) +
        _0x247854(0x404) +
        _0x32abaa(_0x1c7c17(_0x247854(0x1ed))) +
        _0x247854(0x158) +
        _0x32abaa(_0x252d7f[_0x247854(0x2d8)]) +
        _0x247854(0x41a)
      );
    }
    function _0x5d9744(_0x59717e, _0x8af73f) {
      const _0x56aa7e = a0_0x2779,
        _0xa6439d = _0x1d5e31(),
        _0x1d3343 = _0x4082e4(),
        _0xafac6f = Object[_0x56aa7e(0x4ac)](_0x1d3343[_0x59717e] || {})[
          _0x56aa7e(0x1c0)
        ](
          ([_0x4ebe40]) =>
            !_0x50bc96(_0x4ebe40) && _0x2e8d9a(_0x59717e, _0x4ebe40),
        ),
        _0x339647 = _0xa6439d[_0x56aa7e(0x2b4)] ? _0x2e7de0(_0x8af73f) : "";
      return (
        _0x56aa7e(0x320) +
        _0x339647 +
        _0x56aa7e(0x26d) +
        _0x4639be(!![]) +
        _0x56aa7e(0x2bc) +
        _0x32abaa(_0x1c7c17(_0x56aa7e(0x4c5))) +
        _0x56aa7e(0x48f) +
        _0x32abaa(
          _0x1c7c17(_0x56aa7e(0x4a9), { n: _0xafac6f[_0x56aa7e(0x40a)] }),
        ) +
        _0x56aa7e(0x323) +
        (_0xafac6f[_0x56aa7e(0x428)](([_0x5784bd, _0x2d82e3]) => {
          const _0x4f8426 = a0_0x2779,
            _0x4bd816 = Number(_0x2d82e3[_0x4f8426(0x479)] || 0x0),
            _0x2089f9 = Number(_0x2d82e3[_0x4f8426(0x238)] || 0x0),
            _0x3d32a5 =
              _0x2d82e3[_0x4f8426(0x31d)] && _0x2d82e3[_0x4f8426(0x31d)] !== "-"
                ? _0x4f356d(_0x2d82e3[_0x4f8426(0x31d)])
                : "-";
          return (
            _0x4f8426(0x225) +
            _0x32abaa(_0x2024de(_0x5784bd)) +
            _0x4f8426(0x453) +
            _0x91f5a1(_0x4bd816, _0x2089f9) +
            _0x4f8426(0x3a1) +
            _0x32abaa(_0x5dc50a(_0x2d82e3)) +
            _0x4f8426(0x385) +
            _0x32abaa(_0x3d32a5) +
            _0x4f8426(0x227) +
            _0x32abaa(_0x1c7c17(_0x4f8426(0x3e5))) +
            "：" +
            _0x32abaa(_0x2d82e3[_0x4f8426(0x45c)] || _0x4f8426(0x18a)) +
            "\u3000" +
            _0x32abaa(_0x1c7c17(_0x4f8426(0x26a))) +
            "：" +
            _0x32abaa(_0x2d82e3[_0x4f8426(0x26a)] || "-") +
            "\u3000" +
            _0x32abaa(_0x1c7c17(_0x4f8426(0x301))) +
            "：" +
            _0x32abaa(_0x1a805d(_0x2d82e3)) +
            _0x4f8426(0x295)
          );
        })[_0x56aa7e(0x4f0)]("") ||
          _0x56aa7e(0x263) +
            _0x32abaa(_0x1c7c17(_0x56aa7e(0x496))) +
            _0x56aa7e(0x51f)) +
        _0x56aa7e(0x37d)
      );
    }
    function _0x2c6773(_0x2d5509) {
      const _0x366b68 = a0_0x2779,
        _0x512671 = String(_0x2d5509 || ""),
        _0x7c9b7b = _0x512671[_0x366b68(0x42d)]("\x0a")
          [_0x366b68(0x428)]((_0x3b1685) => _0x3b1685[_0x366b68(0x3db)]())
          [_0x366b68(0x1c0)](Boolean);
      for (const _0x5e0776 of _0x7c9b7b) {
        const _0x13bd43 = _0x4714ed[_0x366b68(0x150)](
          (_0x22b873) => _0x22b873[_0x366b68(0x2f0)] === _0x72ad5e(_0x5e0776),
        );
        if (_0x13bd43) return _0x13bd43[_0x366b68(0x2f0)];
      }
      const _0x11fce1 = _0x4714ed[_0x366b68(0x1c0)](
        (_0xf9af7) =>
          _0x512671[_0x366b68(0x34d)](_0xf9af7[_0x366b68(0x2f0)]) ||
          _0xf9af7[_0x366b68(0x4e1)][_0x366b68(0x1cb)]((_0x1925c4) =>
            _0x512671[_0x366b68(0x34d)](_0x1925c4),
          ),
      );
      if (!_0x11fce1[_0x366b68(0x40a)] || _0x11fce1[_0x366b68(0x40a)] > 0x2)
        return null;
      return _0x11fce1[0x0][_0x366b68(0x2f0)];
    }
    function _0x4389d5(_0x18ca99) {
      const _0x1694ef = a0_0x2779;
      if (!_0x18ca99 || !_0x320977(_0x18ca99)) return ![];
      const _0x210c28 = String(
        _0x18ca99[_0x1694ef(0x3b8)] || _0x18ca99[_0x1694ef(0x44c)] || "",
      )[_0x1694ef(0x3db)]();
      if (!_0x210c28 || _0x210c28[_0x1694ef(0x40a)] > 0x14) return ![];
      return (
        _0x210c28 === "出發" ||
        _0x210c28 === "出发" ||
        /^(Depart|Set Sail|Sail|Go)$/i[_0x1694ef(0x190)](_0x210c28) ||
        _0x210c28[_0x1694ef(0x34d)]("出發") ||
        _0x210c28[_0x1694ef(0x34d)]("出发") ||
        /Depart|Set Sail/i[_0x1694ef(0x190)](_0x210c28)
      );
    }
    function _0x131611() {
      const _0x4983ce = a0_0x2779;
      return [...document[_0x4983ce(0x435)](_0x4983ce(0x36c))]
        [_0x4983ce(0x1c0)](_0x4389d5)
        [_0x4983ce(0x1c0)]((_0x1cfc16) => {
          const _0x26f90f = a0_0x2779,
            _0x289d65 = _0x1cfc16[_0x26f90f(0x507)]();
          return (
            _0x289d65[_0x26f90f(0x4d4)] >= 0x28 &&
            _0x289d65[_0x26f90f(0x2c5)] >= 0x14
          );
        });
    }
    function _0x4ee2f4(_0x2e0e18) {
      const _0x41e6a8 = a0_0x2779;
      return _0x4714ed[_0x41e6a8(0x1c0)]((_0xd2cc91) =>
        String(_0x2e0e18 || "")[_0x41e6a8(0x34d)](_0xd2cc91[_0x41e6a8(0x2f0)]),
      )[_0x41e6a8(0x40a)];
    }
    function _0x8d454c(_0x4d1a89) {
      const _0x5973b4 = a0_0x2779;
      let _0x29eba0 = _0x4d1a89;
      for (
        let _0x4b920c = 0x0;
        _0x4b920c < 0xa &&
        _0x29eba0 &&
        _0x29eba0 !== document[_0x5973b4(0x4b4)];
        _0x4b920c++
      ) {
        _0x29eba0 = _0x29eba0[_0x5973b4(0x13d)];
        if (!_0x29eba0 || !_0x320977(_0x29eba0)) continue;
        if (_0x29eba0[_0x5973b4(0x2fd)](_0x5973b4(0x3d2))) continue;
        if (_0x29eba0[_0x5973b4(0x2dd)](_0x5973b4(0x354))) continue;
        const _0x7b4f64 = String(_0x29eba0[_0x5973b4(0x3b8)] || "")[
          _0x5973b4(0x3db)
        ]();
        if (
          !_0x7b4f64 ||
          _0x7b4f64[_0x5973b4(0x40a)] < 0xc ||
          _0x7b4f64[_0x5973b4(0x40a)] > 0x640
        )
          continue;
        if (!/\b\d{1,3}:\d{2}(?::\d{2})?\b/[_0x5973b4(0x190)](_0x7b4f64))
          continue;
        const _0xd3189d = _0x2c6773(_0x7b4f64);
        if (!_0xd3189d) continue;
        if (_0x4ee2f4(_0x7b4f64) > 0x2) continue;
        if (
          _0x7b4f64[_0x5973b4(0x34d)]("首頁") ||
          _0x7b4f64[_0x5973b4(0x34d)]("倉庫") ||
          _0x7b4f64[_0x5973b4(0x34d)]("市場") ||
          _0x7b4f64[_0x5973b4(0x34d)](_0x5973b4(0x468)) ||
          _0x7b4f64[_0x5973b4(0x34d)]("職業") ||
          _0x7b4f64[_0x5973b4(0x34d)]("排行") ||
          _0x7b4f64[_0x5973b4(0x34d)](_0x5973b4(0x2d2)) ||
          _0x7b4f64[_0x5973b4(0x34d)](_0x5973b4(0x4b0)) ||
          _0x7b4f64[_0x5973b4(0x34d)](_0x5973b4(0x48a)) ||
          _0x7b4f64[_0x5973b4(0x34d)](_0x5973b4(0x3e2)) ||
          _0x7b4f64[_0x5973b4(0x34d)](_0x5973b4(0x346))
        )
          continue;
        const _0x255423 = _0x29eba0[_0x5973b4(0x507)]();
        if (
          _0x255423[_0x5973b4(0x4d4)] < 0x104 ||
          _0x255423[_0x5973b4(0x2c5)] < 0x6e
        )
          continue;
        if (
          _0x255423[_0x5973b4(0x4d4)] >
          Math[_0x5973b4(0x238)](0x460, window[_0x5973b4(0x285)] * 0.995)
        )
          continue;
        if (
          _0x255423[_0x5973b4(0x2c5)] >
          Math[_0x5973b4(0x238)](0x2bc, window[_0x5973b4(0x342)] * 0.92)
        )
          continue;
        return { context: _0x29eba0, portName: _0xd3189d };
      }
      return null;
    }
    function _0x41f4c9(_0x3a856f, _0x1399ab) {
      const _0x5d3829 = a0_0x2779;
      let _0x2d0492 = _0x3a856f;
      while (
        _0x2d0492 &&
        _0x2d0492[_0x5d3829(0x13d)] &&
        _0x2d0492[_0x5d3829(0x13d)] !== _0x1399ab
      )
        _0x2d0492 = _0x2d0492[_0x5d3829(0x13d)];
      return _0x2d0492 && _0x2d0492[_0x5d3829(0x13d)] === _0x1399ab
        ? _0x2d0492
        : null;
    }
    function _0x5ea8be(_0x339cad, _0x379ca5) {
      const _0x267bcd = a0_0x2779,
        _0x33bbbf = _0x41f4c9(_0x339cad, _0x379ca5);
      if (!_0x33bbbf) return _0x379ca5;
      const _0x36d97b = String(_0x33bbbf[_0x267bcd(0x3b8)] || "")[
        _0x267bcd(0x3db)
      ]();
      if (_0x2c6773(_0x36d97b)) return _0x33bbbf;
      return _0x379ca5;
    }
    function _0x4414cf() {
      const _0x406156 = a0_0x2779;
      (_0x4082e4(),
        document[_0x406156(0x435)](_0x406156(0x3d2))[_0x406156(0x2aa)](
          (_0x35fcf3) => _0x35fcf3[_0x406156(0x203)](),
        ));
      const _0x22c250 = _0x131611(),
        _0x2d8ef4 = new Set();
      for (const _0x48103a of _0x22c250) {
        const _0x2d66dc = _0x8d454c(_0x48103a);
        if (!_0x2d66dc) continue;
        const { context: _0x2d5e51, portName: _0xe16ccd } = _0x2d66dc;
        if (_0x2d8ef4[_0x406156(0x112)](_0x2d5e51)) continue;
        const _0x2c3ed6 = _0x5ea8be(_0x48103a, _0x2d5e51),
          _0x2592e3 = _0x205169(_0x2d5e51);
        (_0x2c3ed6[_0x406156(0x46b)](
          _0x406156(0x26f),
          _0x5d9744(_0xe16ccd, _0x2592e3),
        ),
          _0x2d8ef4[_0x406156(0x378)](_0x2d5e51));
        break;
      }
    }
    function _0xa9d376() {
      (clearTimeout(_0x46ed69), (_0x46ed69 = setTimeout(_0x4414cf, 0x78)));
    }
    function _0x3e0d85(_0x5623f4) {
      const _0x16524f = a0_0x2779,
        _0x52fcd4 = _0x5623f4[_0x16524f(0x443)][_0x16524f(0x2dd)](
          _0x16524f(0x372),
        );
      if (!_0x52fcd4) return;
      const _0x3c424f = _0x52fcd4[_0x16524f(0x19c)][_0x16524f(0x255)];
      if (_0x3c424f === _0x16524f(0x3bc)) {
        (_0x5623f4[_0x16524f(0x1d9)](),
          _0x5623f4[_0x16524f(0x43d)](),
          _0x4316ac());
        return;
      }
      if (_0x3c424f === _0x16524f(0x148)) {
        (_0x5623f4[_0x16524f(0x1d9)](),
          _0x5623f4[_0x16524f(0x43d)](),
          _0x44ee7a());
        return;
      }
      if (!_0x52fcd4[_0x16524f(0x2dd)](_0x16524f(0x354))) return;
      (_0x5623f4[_0x16524f(0x1d9)](), _0x5623f4[_0x16524f(0x43d)]());
      if (_0x3c424f === _0x16524f(0x351)) {
        _0x3499d0();
        return;
      }
      if (_0x3c424f === _0x16524f(0x451)) {
        const _0x32531c = _0x243cb9();
        ((_0x32531c[_0x16524f(0x3c2)] =
          _0x52fcd4[_0x16524f(0x19c)][_0x16524f(0x358)] || _0x16524f(0x10e)),
          _0x5c0dc8(_0x32531c),
          _0x4365c4());
        return;
      }
      if (_0x3c424f === _0x16524f(0x3f0)) {
        const _0x5467de = _0x243cb9();
        ((_0x5467de[_0x16524f(0x2a2)] = _0x72ad5e(
          _0x52fcd4[_0x16524f(0x19c)][_0x16524f(0x2f0)] ||
            _0x4714ed[0x0][_0x16524f(0x2f0)],
        )),
          (_0x5467de[_0x16524f(0x3c2)] = _0x16524f(0x1cc)),
          _0x5c0dc8(_0x5467de),
          _0x4365c4());
        return;
      }
      if (_0x3c424f === _0x16524f(0x438)) {
        _0x425e37();
        return;
      }
      if (_0x3c424f === _0x16524f(0x332)) {
        (_0x425e37(),
          _0x27b4b3(_0x1c7c17(_0x16524f(0x117)), _0x1c7c17(_0x16524f(0x2a4))));
        return;
      }
      if (_0x3c424f === _0x16524f(0x20b)) {
        const _0x3f4018 = _0x5dff65({ upload: !![], silent: ![] });
        if (!_0x3f4018)
          _0x27b4b3(_0x1c7c17(_0x16524f(0x26c)), _0x1c7c17(_0x16524f(0x1d5)));
        return;
      }
      if (_0x3c424f === _0x16524f(0x445)) {
        _0x16d92a({ silent: ![], force: !![], preferCloud: !![] });
        return;
      }
      if (_0x3c424f === _0x16524f(0x279)) {
        _0x3d9ee1();
        return;
      }
    }
    function _0xfa877b(_0x4eb29a) {
      const _0x5a0a6c = a0_0x2779,
        _0x518d57 = _0x4eb29a[_0x5a0a6c(0x443)];
      if (!_0x518d57 || !_0x518d57[_0x5a0a6c(0x3fb)](_0x5a0a6c(0x293))) return;
      if (!_0x518d57[_0x5a0a6c(0x2dd)](_0x5a0a6c(0x354))) return;
      const _0x585571 = _0x518d57[_0x5a0a6c(0x19c)][_0x5a0a6c(0x500)];
      if (_0x585571 === _0x5a0a6c(0x265)) {
        const _0x21ad5a = _0x243cb9();
        ((_0x21ad5a[_0x5a0a6c(0x265)] = _0x518d57[_0x5a0a6c(0x27a)]),
          _0x5c0dc8(_0x21ad5a),
          _0x4365c4());
        return;
      }
      const _0x48fa79 = _0x1d5e31();
      if (_0x518d57[_0x5a0a6c(0x3ef)] === _0x5a0a6c(0x17a))
        _0x48fa79[_0x585571] = _0x518d57[_0x5a0a6c(0x2e0)];
      else {
        if (_0x585571 === _0x5a0a6c(0x260))
          _0x48fa79[_0x585571] = Number(_0x518d57[_0x5a0a6c(0x27a)]);
        else _0x48fa79[_0x585571] = _0x518d57[_0x5a0a6c(0x27a)];
      }
      (_0x225fe6(_0x48fa79), _0x1d8198(), _0xa9d376(), _0x4365c4());
    }
    function _0x17a1dd(_0x4d82dc) {
      const _0x574c7d = a0_0x2779;
      if (!_0x4d82dc || !_0x4d82dc[_0x574c7d(0x2dd)]) return ![];
      const _0x1c0026 = _0x4d82dc[_0x574c7d(0x2dd)](_0x574c7d(0x4b9));
      if (!_0x1c0026 || _0x1c0026[_0x574c7d(0x2dd)](_0x574c7d(0x1fd)))
        return ![];
      const _0x2d2e01 = String(
        _0x1c0026[_0x574c7d(0x3b8)] || _0x1c0026[_0x574c7d(0x44c)] || "",
      )[_0x574c7d(0x3db)]();
      return (
        _0x2d2e01[_0x574c7d(0x34d)]("返航") ||
        _0x2d2e01[_0x574c7d(0x34d)]("返回") ||
        _0x2d2e01[_0x574c7d(0x34d)]("離港") ||
        _0x2d2e01[_0x574c7d(0x34d)]("离港") ||
        _0x2d2e01[_0x574c7d(0x34d)]("出發") ||
        _0x2d2e01[_0x574c7d(0x34d)]("出发") ||
        /Return|Back|Leave|Depart|Set Sail/i[_0x574c7d(0x190)](_0x2d2e01)
      );
    }
    function _0x17ec81(_0x362496) {
      const _0xc73c22 = a0_0x2779;
      if (_0x362496[_0xc73c22(0x443)][_0xc73c22(0x2dd)]?.(_0xc73c22(0x1fd)))
        return;
      const _0x22eb10 = Date[_0xc73c22(0x33f)]();
      if (_0x17a1dd(_0x362496[_0xc73c22(0x443)])) {
        if (_0x22eb10 - _0x4b1061 < _0x2b1065) return;
        ((_0x4b1061 = _0x22eb10),
          clearTimeout(_0x4062ba),
          _0x5dff65({ upload: !![], silent: !![] }),
          _0xa9d376());
        return;
      }
      (clearTimeout(_0x4062ba),
        (_0x4062ba = setTimeout(() => {
          const _0x438304 = a0_0x2779,
            _0x5c9a0d = _0x5dff65({ upload: !![], silent: !![] });
          if (_0x5c9a0d) _0x4b1061 = Date[_0x438304(0x33f)]();
          _0xa9d376();
        }, _0x2d03a1)));
    }
    function _0x221748() {
      const _0x11963d = a0_0x2779;
      if (_0x2b9898) return;
      ((_0x2b9898 = !![]),
        document[_0x11963d(0x3a8)](_0x11963d(0x4bd), _0x3e0d85, !![]),
        document[_0x11963d(0x3a8)](_0x11963d(0x4fd), _0xfa877b, !![]),
        document[_0x11963d(0x3a8)](_0x11963d(0x23d), _0x17ec81, !![]),
        document[_0x11963d(0x3a8)](_0x11963d(0x25c), _0x17ec81, !![]),
        document[_0x11963d(0x3a8)](_0x11963d(0x462), _0xa9d376, !![]),
        document[_0x11963d(0x3a8)](_0x11963d(0x310), _0xa9d376, !![]));
    }
    function _0x4d5251() {
      const _0x2f947f = a0_0x2779;
      if (_0x31b295 || !document[_0x2f947f(0x4b4)]) return;
      _0x31b295 = !![];
      const _0x31d113 = new MutationObserver(() => {
        (clearTimeout(_0x720681),
          (_0x720681 = setTimeout(() => {
            (_0x5dff65({ upload: ![], silent: !![] }),
              _0xa9d376(),
              _0x1d8198());
          }, 0x320)));
      });
      _0x31d113[_0x2f947f(0x1ec)](document[_0x2f947f(0x4b4)], {
        childList: !![],
        subtree: !![],
        characterData: !![],
      });
    }
    function _0x56279d() {
      const _0xa2ffd9 = a0_0x2779,
        _0x3bec4c = _0xa2ffd9(0x181);
      document[_0xa2ffd9(0x3a8)](_0x3bec4c, (_0x2c15e2) => {
        const _0x5182da = a0_0x2779;
        try {
          const _0x319bcc =
            typeof _0x2c15e2[_0x5182da(0x3ae)] === _0x5182da(0x392)
              ? JSON[_0x5182da(0x2c6)](_0x2c15e2[_0x5182da(0x3ae)])
              : _0x2c15e2[_0x5182da(0x3ae)];
          _0x12b5da(_0x319bcc);
        } catch (_0x512cfc) {
          console[_0x5182da(0x1fc)](_0x5182da(0x362), _0x512cfc);
        }
      });
      const _0x3358cc = () => {
        const _0x15a805 = a0_0x2779,
          _0x5bbee7 = document[_0x15a805(0x3b5)] || document[_0x15a805(0x3f7)];
        if (!_0x5bbee7) {
          setTimeout(_0x3358cc, 0x0);
          return;
        }
        const _0x236654 = document[_0x15a805(0x118)](_0x15a805(0x222));
        ((_0x236654[_0x15a805(0x44c)] =
          _0x15a805(0x179) + _0x3bec4c + _0x15a805(0x1b5)),
          _0x5bbee7[_0x15a805(0x1d6)](_0x236654),
          _0x236654[_0x15a805(0x203)]());
      };
      _0x3358cc();
    }
    function _0x15f27f() {
      const _0x151484 = a0_0x2779;
      _0x18ab7e = Date[_0x151484(0x33f)]();
      const _0x31614f = _0x5dff65({ upload: !![], silent: !![] });
      _0x31614f && console[_0x151484(0x516)](_0x151484(0x4f7));
    }
    function _0x46d7d4() {
      const _0x1c3c6f = a0_0x2779;
      if (document[_0x1c3c6f(0x22d)](_0x1c3c6f(0x334))) return;
      const _0x4de327 = document[_0x1c3c6f(0x118)](_0x1c3c6f(0x130));
      ((_0x4de327["id"] = _0x1c3c6f(0x334)),
        (_0x4de327[_0x1c3c6f(0x44c)] = _0x1c3c6f(0x187)),
        document[_0x1c3c6f(0x3f7)][_0x1c3c6f(0x1d6)](_0x4de327));
    }
    function _0x45cb80(_0x5ef7a4 = 0x0) {
      const _0x8e00ca = a0_0x2779;
      if (_0x4cf118) return;
      if (!document[_0x8e00ca(0x4b4)] || !document[_0x8e00ca(0x3f7)]) {
        if (_0x5ef7a4 < 0x28)
          setTimeout(() => _0x45cb80(_0x5ef7a4 + 0x1), 0xfa);
        else console[_0x8e00ca(0x1fc)](_0x8e00ca(0x1a9));
        return;
      }
      ((_0x4cf118 = !![]),
        _0x4082e4(),
        _0x3094d0(),
        _0x46d7d4(),
        _0x4d5251(),
        _0x221748(),
        _0x3cf230(),
        _0x4a5c48(),
        _0xa9d376(),
        _0x1d8198(),
        _0x5d148f(),
        setTimeout(() => {
          (_0x5dff65({ upload: ![], silent: !![] }),
            _0x16d92a({ silent: !![] }),
            _0xa9d376(),
            _0x1d8198(),
            _0x5d148f());
        }, 0x3e8),
        setInterval(() => {
          const _0x57f71a = a0_0x2779;
          (_0x3cf230(), _0x4a5c48());
          if (Date[_0x57f71a(0x33f)]() - _0x1136f5 >= _0x380313)
            _0x16d92a({ silent: !![] });
        }, _0x380313),
        (_0x18ab7e = Date[_0x8e00ca(0x33f)]()),
        (_0x17589e = setInterval(() => {
          _0x15f27f();
        }, _0x46a25e)));
    }
    (_0x56279d(),
      document[_0x1af0b3(0x16c)] === _0x1af0b3(0x45e)
        ? (document[_0x1af0b3(0x3a8)](_0x1af0b3(0x38e), () => _0x45cb80()),
          _0x45cb80())
        : _0x45cb80());
  })());
