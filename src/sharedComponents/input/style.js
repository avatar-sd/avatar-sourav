import { OutlinedInput, Button } from "@mui/material";
import Styled from "styled-components";

export const StyledInput = Styled(OutlinedInput)`
    border-radius: 40px !important;
    border: 1px solid #292D30; 
    margin-bottom: 15px;
    &::before{
        border: 0px; 
        height: 62px;
        transition: border-color 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    }
    &:hover::before{
        border-bottom: 0px !important
    }
`;
export const StyledButton = Styled(Button)`
    border-radius: 40px !important;
    border: 1px solid white; 
    padding: 10px !important;
    background-color: ${(props) =>
      props.variant === "contained" ? "white !important" : "transparent"};
    border: 1px solid white !important;
    color:  ${(props) =>
      props.variant === "contained" ? "black !important" : "white"} !important;
    &:hover{
        backgroundColor: white;
    }
`;
