import React from "react";
import { IconButton, Button, Flex, useColorMode } from "@chakra-ui/core";
import { GoMarkGithub } from "react-icons/go";
import { FaHeart } from "react-icons/fa";

const NavBar = () => {
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <Flex
            flexDirection="row"
            textAlign="right"
            position="absolute"
            top="0"
            right="0"
            zIndex="999"
            padding="6px"
        >
            <Button
                variantColor={colorMode === "light" ? "pink" : "teal"}
                leftIcon={colorMode === "light" ? "moon" : FaHeart}
                size="sm"
                marginLeft="auto"
                zIndex="999"
                onClick={toggleColorMode}
            >
                {colorMode === "light" ? "Dark" : "Pink"} Mode
      </Button>
            <IconButton
                variantColor="purple"
                icon={GoMarkGithub}
                size="sm"
                marginLeft="6px"
                zIndex="999"
                onClick={() =>
                    window.open("https://github.com/briannamcdonald/react-calculator")
                }
            ></IconButton>
        </Flex>
    );
};

export default NavBar;