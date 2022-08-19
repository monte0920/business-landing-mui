import React from "react";
import Button from "@mui/material/Button";
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';

export const HeaderButton = styled((props) => (
    <Button variant='inherit' {...props} />
))(({ theme }) => ({
    color: theme.colors.white,
    fontSize: theme.fontSize.lg,
    fontWeight: 400,
    '&:hover': {
        color: theme.colors.black,
        background: theme.colors.yellow
    }
}))

export const XButton = styled((props) => (
    <Button variant='inherit' {...props} />
))(({ theme }) => ({
    color: theme.colors.black,
    background: theme.colors.yellow,
    fontSize: theme.fontSize.lg,
    fontWeight: 500,
    height: 60,
    padding: '0px 40px',
    '&:hover': {
        background: theme.colors.yellow
    }
}))

export const XLButton = styled((props) => (
    <Button variant='inherit' {...props} />
))(({ theme }) => ({
    color: theme.colors.gray,
    background: theme.colors.yellow,
    fontSize: theme.fontSize.lg,
    fontWeight: 600,
    height: 80,
    paddingLeft: 80,
    paddingRight: 80,
    '&:hover': {
        background: theme.colors.yellow
    }
}))

export const MButton = styled((props) => (
    <Button variant='inherit' {...props} />
))(({ theme }) => ({
    color: theme.colors.white,
    background: theme.colors.blue,
    fontSize: theme.fontSize.sm,
    fontWeight: 500,
    height: 50,
    paddingLeft: 60,
    paddingRight: 60,
    '&:hover': {
        background: theme.colors.blue
    }
}))

export const SButton = styled((props) => (
    <Button variant='inherit' {...props} />
))(({ theme }) => ({
    color: theme.colors.white,
    background: theme.colors.blue,
    fontSize: theme.fontSize.sm,
    fontWeight: 500,
    height: 40,
    width: '80%',
    '&:hover': {
        background: theme.colors.blue
    }
}))

export const CIconButton = styled((props) => (
    <IconButton variant='inherit' {...props} />
))(({ theme }) => ({
    color: theme.colors.white,
    background: theme.colors.blue,
    '&:hover': {
        background: theme.colors.blue
    },
    '& svg': {
        width: 20,
        height: 20
    }
}))