import { createIcon, defaultProps } from "@chakra-ui/react";
import React from "react";

const IconFlutter = createIcon({
  defaultProps,
  displayName: "IconFlutter",
  viewBox: "0 0 256 256",
  path: <FlutterSVG/>,
});

export default IconFlutter;



function FlutterSVG() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <g transform="matrix(.06162 0 0 .06162 -1.43 -1.275)">
    <defs>
      <path id="a" d="M959.4 500 679.8 779.7l279.6 279.7H639.9L360.2 779.7 639.9 500h319.5zM639.9 20.7 120.6 540l159.8 159.8 679-679.1H639.9z"/>
    </defs>
    <clipPath id="b">
      <use href="#a"/>
    </clipPath>
    <g clip-path="url(#b)">
      <path fill="#39cefd" d="M360.3 779.7 520 939.5 959.4 500H639.9z"/>
    </g>
    <defs>
      <path id="c" d="M959.4 500 679.8 779.7l279.6 279.7H639.9L360.2 779.7 639.9 500h319.5zM639.9 20.7 120.6 540l159.8 159.8 679-679.1H639.9z"/>
    </defs>
    <clipPath id="d">
      <use href="#c"/>
    </clipPath>
    <path fill="#39cefd" d="M639.9 20.7h319.5l-679 679.1L120.6 540z" clip-path="url(#d)"/>
    <defs>
      <path id="e" d="M959.4 500 679.8 779.7l279.6 279.7H639.9L360.2 779.7 639.9 500h319.5zM639.9 20.7 120.6 540l159.8 159.8 679-679.1H639.9z"/>
    </defs>
    <clipPath id="f">
      <use href="#e"/>
    </clipPath>
    <path fill="#03569b" d="m520 939.5 119.9 119.8h319.5L679.8 779.7z" clip-path="url(#f)"/>
    <defs>
      <path id="g" d="M959.4 500 679.8 779.7l279.6 279.7H639.9L360.2 779.7 639.9 500h319.5zM639.9 20.7 120.6 540l159.8 159.8 679-679.1H639.9z"/>
    </defs>
    <clipPath id="h">
      <use href="#g"/>
    </clipPath>
    <linearGradient id="i" x1="566.635" x2="685.65" y1="970.339" y2="851.324" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#1a237e" stop-opacity=".4"/>
      <stop offset="1" stop-color="#1a237e" stop-opacity="0"/>
    </linearGradient>
    <path fill="url(#i)" d="m757 857.4-77.2-77.7L520 939.5z" clip-path="url(#h)"/>
    <defs>
      <path id="j" d="M959.4 500 679.8 779.7l279.6 279.7H639.9L360.2 779.7 639.9 500h319.5zM639.9 20.7 120.6 540l159.8 159.8 679-679.1H639.9z"/>
    </defs>
    <clipPath id="k">
      <use href="#j"/>
    </clipPath>
    <g clip-path="url(#k)">
      <path fill="#16b9fd" d="M360.282 779.645 520.086 619.84 679.9 779.645 520.086 939.45z"/>
    </g>
    <radialGradient id="l" cx="7824.659" cy="-2855.979" r="5082.889" gradientTransform="matrix(.25 0 0 -.25 -1812 -622.5)" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#fff" stop-opacity=".1"/>
      <stop offset="1" stop-color="#fff" stop-opacity="0"/>
    </radialGradient>
    <path fill="url(#l)" d="M959.4 500 679.8 779.7l279.6 279.7H639.9L360.2 779.7 639.9 500h319.5zM639.9 20.7 120.6 540l159.8 159.8 679-679.1H639.9z"/>
  </g>
</svg>
  )
}
