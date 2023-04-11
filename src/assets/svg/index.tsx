import { Icon } from "@chakra-ui/react";
import { FC } from "react";

interface IColorIcon {
  color?: string
}

export const SearchIcon: FC<IColorIcon> = ({color}) => {
  return (
    <Icon color={color} width="20px" height="20px" viewBox="-2 -2 24 24">
      <path fill="currentColor" fillRule="evenodd" d="M4 9a5 5 0 1110 0A5 5 0 014 9zm5-7a7 7 0 104.2 12.6.999.999 0 00.093.107l3 3a1 1 0 001.414-1.414l-3-3a.999.999 0 00-.107-.093A7 7 0 009 2z"/>
    </Icon>
  );
};

export const CartIcon: FC<IColorIcon> = ({color}) => {
  return (
    <Icon color={color} width="32px" height="32px" viewBox="-3 -4 32 32">
      <svg>
        <path xmlns="http://www.w3.org/2000/svg" d="M10.62,14l-1,2H19a1,1,0,0,1,0,2H9.62a2,2,0,0,1-1.79-2.89L8.9,13,5.32,4H3A1,1,0,0,1,3,2H5.32A2,2,0,0,1,7.18,3.26L7.88,5H20.8l.09,0a1,1,0,0,1,.48.05,1,1,0,0,1,.56,1.3l-2.8,7a1,1,0,0,1-.93.63Zm-.12,5A1.5,1.5,0,1,0,12,20.5,1.5,1.5,0,0,0,10.5,19Zm6,0A1.5,1.5,0,1,0,18,20.5,1.5,1.5,0,0,0,16.5,19Z" fill="currentColor"/>
      </svg>
    </Icon>
  );
};

export const Facebook: FC = () => {
  return (
    <Icon width="32px" height="32px" viewBox="-5 0 20 20">
      <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="Dribbble-Light-Preview" transform="translate(-385.000000, -7399.000000)" fill="#428BCA">
          <g id="icons" transform="translate(56.000000, 160.000000)">
            <path d="M335.821282,7259 L335.821282,7250 L338.553693,7250 L339,7246 L335.821282,7246 L335.821282,7244.052 C335.821282,7243.022 335.847593,7242 337.286884,7242 L338.744689,7242 L338.744689,7239.14 C338.744689,7239.097 337.492497,7239 336.225687,7239 C333.580004,7239 331.923407,7240.657 331.923407,7243.7 L331.923407,7246 L329,7246 L329,7250 L331.923407,7250 L331.923407,7259 L335.821282,7259 Z" id="facebook-[#176]">
            </path>
          </g>
        </g>
      </g>
    </Icon>
  );
};

export const Instagram: FC = () => {
  return (
    <Icon width="32px" height="32px" viewBox="0 0 32 32" fill="none">
      <rect x="2" y="2" width="28" height="28" rx="6" fill="url(#paint0_radial_87_7153)"/>
      <rect x="2" y="2" width="28" height="28" rx="6" fill="url(#paint1_radial_87_7153)"/>
      <rect x="2" y="2" width="28" height="28" rx="6" fill="url(#paint2_radial_87_7153)"/>
      <path d="M23 10.5C23 11.3284 22.3284 12 21.5 12C20.6716 12 20 11.3284 20 10.5C20 9.67157 20.6716 9 21.5 9C22.3284 9 23 9.67157 23 10.5Z" fill="white"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M16 21C18.7614 21 21 18.7614 21 16C21 13.2386 18.7614 11 16 11C13.2386 11 11 13.2386 11 16C11 18.7614 13.2386 21 16 21ZM16 19C17.6569 19 19 17.6569 19 16C19 14.3431 17.6569 13 16 13C14.3431 13 13 14.3431 13 16C13 17.6569 14.3431 19 16 19Z" fill="white"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M6 15.6C6 12.2397 6 10.5595 6.65396 9.27606C7.2292 8.14708 8.14708 7.2292 9.27606 6.65396C10.5595 6 12.2397 6 15.6 6H16.4C19.7603 6 21.4405 6 22.7239 6.65396C23.8529 7.2292 24.7708 8.14708 25.346 9.27606C26 10.5595 26 12.2397 26 15.6V16.4C26 19.7603 26 21.4405 25.346 22.7239C24.7708 23.8529 23.8529 24.7708 22.7239 25.346C21.4405 26 19.7603 26 16.4 26H15.6C12.2397 26 10.5595 26 9.27606 25.346C8.14708 24.7708 7.2292 23.8529 6.65396 22.7239C6 21.4405 6 19.7603 6 16.4V15.6ZM15.6 8H16.4C18.1132 8 19.2777 8.00156 20.1779 8.0751C21.0548 8.14674 21.5032 8.27659 21.816 8.43597C22.5686 8.81947 23.1805 9.43139 23.564 10.184C23.7234 10.4968 23.8533 10.9452 23.9249 11.8221C23.9984 12.7223 24 13.8868 24 15.6V16.4C24 18.1132 23.9984 19.2777 23.9249 20.1779C23.8533 21.0548 23.7234 21.5032 23.564 21.816C23.1805 22.5686 22.5686 23.1805 21.816 23.564C21.5032 23.7234 21.0548 23.8533 20.1779 23.9249C19.2777 23.9984 18.1132 24 16.4 24H15.6C13.8868 24 12.7223 23.9984 11.8221 23.9249C10.9452 23.8533 10.4968 23.7234 10.184 23.564C9.43139 23.1805 8.81947 22.5686 8.43597 21.816C8.27659 21.5032 8.14674 21.0548 8.0751 20.1779C8.00156 19.2777 8 18.1132 8 16.4V15.6C8 13.8868 8.00156 12.7223 8.0751 11.8221C8.14674 10.9452 8.27659 10.4968 8.43597 10.184C8.81947 9.43139 9.43139 8.81947 10.184 8.43597C10.4968 8.27659 10.9452 8.14674 11.8221 8.0751C12.7223 8.00156 13.8868 8 15.6 8Z" fill="white"/>
      <defs>
        <radialGradient id="paint0_radial_87_7153" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(12 23) rotate(-55.3758) scale(25.5196)">
          <stop stopColor="#B13589"/>
          <stop offset="0.79309" stopColor="#C62F94"/>
          <stop offset="1" stopColor="#8A3AC8"/>
        </radialGradient>
        <radialGradient id="paint1_radial_87_7153" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(11 31) rotate(-65.1363) scale(22.5942)">
          <stop stopColor="#E0E8B7"/>
          <stop offset="0.444662" stopColor="#FB8A2E"/>
          <stop offset="0.71474" stopColor="#E2425C"/>
          <stop offset="1" stopColor="#E2425C" stopOpacity="0"/>
        </radialGradient>
        <radialGradient id="paint2_radial_87_7153" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(0.500002 3) rotate(-8.1301) scale(38.8909 8.31836)">
          <stop offset="0.156701" stopColor="#406ADC"/>
          <stop offset="0.467799" stopColor="#6A45BE"/>
          <stop offset="1" stopColor="#6A45BE" stopOpacity="0"/>
        </radialGradient>
      </defs>
    </Icon>
  );
};

export const YouTube: FC = () => {
  return (
    <Icon fill="red" width="32px" height="32px" viewBox="0 0 512 512">
      <path d="M34.354,0.5h45.959l29.604,91.096h2.863L141.013,0.5h46.353l-53.107,133.338v94.589H88.641V138.08
		L34.354,0.5z M192.193,98.657c0-13.374,5.495-24.003,16.493-31.938c10.984-7.934,25.749-11.901,44.3-11.901
		c16.893,0,30.728,4.192,41.506,12.55c10.805,8.358,16.193,19.112,16.193,32.287v89.2c0,14.771-5.301,26.373-15.868,34.782
		c-10.579,8.408-25.151,12.625-43.684,12.625c-17.859,0-32.143-4.342-42.866-13.024c-10.709-8.683-16.074-20.36-16.074-35.057
		V98.657z M234.205,191.424c0,4.766,1.44,8.409,4.354,11.029c2.907,2.595,7.055,3.867,12.451,3.867c5.532,0,9.93-1.297,13.18-3.942
		c3.256-2.669,4.891-6.313,4.891-10.954V97.359c0-3.768-1.672-6.812-4.99-9.132c-3.318-2.321-7.679-3.494-13.081-3.494
		c-4.972,0-9.027,1.173-12.133,3.494c-3.119,2.32-4.672,5.364-4.672,9.132V191.424z M459.992,57.588v172.711h-40.883v-19.063
		c-7.547,7.037-15.381,12.375-23.541,16.069c-8.146,3.643-16.068,5.489-23.729,5.489c-9.455,0-16.592-2.57-21.383-7.71
		c-4.791-5.141-7.186-12.85-7.186-23.13V57.588h40.895v132.39c0,4.117,0.861,7.061,2.57,8.907c1.723,1.822,4.492,2.745,8.322,2.745
		c3.018,0,6.824-1.223,11.4-3.643c4.604-2.42,8.82-5.514,12.65-9.282V57.588H459.992z M421.68,363.262
		c-2.008-2.221-5.203-3.368-9.594-3.368c-4.59,0-7.883,1.147-9.879,3.368c-1.996,2.245-2.994,5.963-2.994,11.153v10.754h25.473
		v-10.754C424.686,369.225,423.688,365.507,421.68,363.262z M300.855,444.228c2.195,0.898,4.516,1.322,6.961,1.322
		c3.543,0,6.113-0.849,7.785-2.595c1.67-1.722,2.494-4.591,2.494-8.533v-62.178c0-4.191-1.023-7.36-3.068-9.531
		c-2.059-2.171-5.064-3.244-8.957-3.244c-2.059,0-4.092,0.399-6.102,1.198c-2.008,0.823-3.991,2.096-5.95,3.792v75.402
		C296.364,441.907,298.646,443.354,300.855,444.228z M490.496,312.587c0-29.941-30.754-54.219-68.654-54.219
		c-54.068-1.822-109.396-2.62-165.842-2.521c-56.427-0.1-111.756,0.698-165.843,2.521c-37.881,0-68.633,24.277-68.633,54.219
		c-2.277,23.678-3.263,47.381-3.175,71.085c-0.087,23.703,0.898,47.406,3.175,71.11c0,29.916,30.752,54.192,68.633,54.192
		c54.087,1.797,109.416,2.596,165.843,2.521c56.446,0.075,111.774-0.724,165.842-2.521c37.9,0,68.654-24.276,68.654-54.192
		c2.27-23.704,3.254-47.407,3.154-71.11C493.75,359.968,492.766,336.265,490.496,312.587z M121.251,463.465v1.797H88.778v-1.797
		V321.644H55.182v-1.771v-22.605v-1.771h99.672v1.771v22.605v1.771h-33.603V463.465z M236.768,341.33v122.135v1.797h-28.831v-1.797
		v-11.901c-5.327,5.064-10.848,8.882-16.592,11.527c-5.757,2.619-11.334,3.942-16.748,3.942c-6.662,0-11.684-1.847-15.065-5.515
		c-3.387-3.692-5.078-9.231-5.078-16.617v-1.797V341.33v-1.772h28.844v1.772v93.216c0,2.92,0.599,5.065,1.802,6.363
		c1.217,1.322,3.175,1.971,5.876,1.971c2.127,0,4.803-0.873,8.047-2.595c3.231-1.747,6.2-3.967,8.914-6.662V341.33v-1.772h28.831
		V341.33z M347.775,370.847v66.943v1.797c0,8.808-2.258,15.544-6.773,20.235c-4.518,4.641-11.055,6.986-19.588,6.986
		c-5.639,0-10.652-0.898-15.07-2.695c-4.428-1.821-8.532-4.616-12.325-8.384v7.735v1.797h-29.105v-1.797V297.267v-1.771h29.105
		v1.771v52.297c3.893-3.793,8.009-6.662,12.376-8.608c4.379-1.971,8.809-2.969,13.273-2.969c9.107,0,16.094,2.645,20.896,7.935
		c4.803,5.289,7.211,12.999,7.211,23.13V370.847z M454.365,374.64v29.767v1.797h-55.152v21.581c0,6.513,0.947,11.029,2.844,13.549
		c1.908,2.521,5.152,3.793,9.742,3.793c4.779,0,8.135-1.073,10.043-3.219c1.896-2.121,2.844-6.837,2.844-14.123v-6.811v-1.796h29.68
		v1.796v7.51v1.796c0,12.7-3.605,22.257-10.84,28.694c-7.225,6.438-18.016,9.631-32.375,9.631c-12.912,0-23.066-3.418-30.49-10.229
		c-7.41-6.812-11.127-16.193-11.127-28.096v-1.796V374.64v-1.771c0-10.754,4.078-19.512,12.213-26.299
		c8.146-6.762,18.689-10.155,31.588-10.155c13.199,0,23.328,3.144,30.416,9.406c7.061,6.264,10.615,15.296,10.615,27.048V374.64z">
      </path>
    </Icon>
  );
};


export const ArrowUp: FC = () => {
  return (
    <Icon fill="white" width="32px" height="32px" viewBox="0 -4.5 20 20">
      <g id="Page-1" stroke="none" strokeWidth="1" fillRule="evenodd">
        <g id="Dribbble-Light-Preview" transform="translate(-260.000000, -6684.000000)" >
          <g id="icons" transform="translate(56.000000, 160.000000)">
            <path d="M223.707692,6534.63378 L223.707692,6534.63378 C224.097436,6534.22888 224.097436,6533.57338 223.707692,6533.16951 L215.444127,6524.60657 C214.66364,6523.79781 213.397472,6523.79781 212.616986,6524.60657 L204.29246,6533.23165 C203.906714,6533.6324 203.901717,6534.27962 204.282467,6534.68555 C204.671211,6535.10081 205.31179,6535.10495 205.70653,6534.69695 L213.323521,6526.80297 C213.714264,6526.39807 214.346848,6526.39807 214.737591,6526.80297 L222.294621,6534.63378 C222.684365,6535.03868 223.317949,6535.03868 223.707692,6534.63378" id="arrow_up-[#337]">

            </path>
          </g>
        </g>
      </g>
    </Icon>
  );
};