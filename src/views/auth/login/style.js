import Styled from "styled-components";
import { Typography } from "@mui/material";

export const StyledOr = Styled(Typography)`
    position: relative;
    width: 100%;
    text-align: center;
    color: gray;
    margin: 10px !important;
    &::before{
        content: '';
        height: 1px;
        background-image: linear-gradient(to left, gray 30% , transparent 70%);
        position: absolute;
        width: 43%;
        left: 0;
        top: Calc(50% - 0.5px);
    }
    &::after{
        content: '';
        height: 1px;
        background-image: linear-gradient(to right, gray 30% , transparent 70%);
        position: absolute;
        width: 43%;
        right: 0;
        top: Calc(50% - 0.5px);
    }
`;
